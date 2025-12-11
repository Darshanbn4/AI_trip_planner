// Secure Firebase Token Generator
// No hardcoded secrets - uses environment variables only

import { GoogleAuth } from 'google-auth-library';
import { readFileSync } from 'fs';
import dotenv from 'dotenv';

dotenv.config();

async function generateSecureFirebaseToken() {
  try {
    console.log('🔄 Generating Firebase access token securely...');
    
    let auth;
    
    // Try service account file first (local development)
    try {
      readFileSync('./firebase-service-account.json');
      auth = new GoogleAuth({
        keyFile: './firebase-service-account.json',
        scopes: [
          'https://www.googleapis.com/auth/cloud-platform',
          'https://www.googleapis.com/auth/datastore'
        ]
      });
      console.log('✅ Using local service account file');
    } catch (fileError) {
      // Fallback to environment variable (production)
      const serviceAccountBase64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
      if (serviceAccountBase64) {
        const serviceAccountJson = Buffer.from(serviceAccountBase64, 'base64').toString();
        const credentials = JSON.parse(serviceAccountJson);
        
        auth = new GoogleAuth({
          credentials,
          scopes: [
            'https://www.googleapis.com/auth/cloud-platform',
            'https://www.googleapis.com/auth/datastore'
          ]
        });
        console.log('✅ Using environment variable credentials');
      } else {
        throw new Error('No Firebase credentials found. Please set up service account.');
      }
    }

    const authClient = await auth.getClient();
    const accessToken = await authClient.getAccessToken();
    
    console.log('🔑 Firebase Access Token Generated!');
    console.log('📋 Copy this token to your Postman FIREBASE_TOKEN variable:');
    console.log(accessToken.token);
    console.log('\n⏰ Token expires in 1 hour');
    
    return accessToken.token;
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n💡 Setup required:');
    console.log('1. Download Firebase service account from console');
    console.log('2. Save as firebase-service-account.json');
    console.log('3. Or set FIREBASE_SERVICE_ACCOUNT_BASE64 env var');
  }
}

generateSecureFirebaseToken();