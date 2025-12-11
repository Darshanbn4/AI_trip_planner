# 🔒 Security Setup - AI Trip Planner

## ⚠️ **SECURITY NOTICE**

This repository does NOT contain API keys or secrets for security reasons. You must set up your own API keys to run this project.

---

## 🔑 **Required API Keys**

### **1. Google Cloud Console**
Visit: https://console.cloud.google.com/

**Enable these APIs:**
- Google OAuth 2.0 (for user authentication)
- Google Places API (for location search)  
- Google Gemini AI API (for trip generation)

### **2. Firebase Project**
Visit: https://console.firebase.google.com/

**Setup:**
- Create Firebase project
- Enable Firestore Database
- Download service account credentials

### **3. Postman (Optional)**
Visit: https://app.postman.com/

**For API testing only**

---

## 📋 **Setup Instructions**

### **Step 1: Environment Variables**
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your actual API keys
nano .env
```

### **Step 2: Firebase Credentials**
1. Download service account JSON from Firebase Console
2. Save as `firebase-service-account.json` in project root
3. This file is automatically gitignored

### **Step 3: Install & Run**
```bash
npm install
npm run dev
```

---

## 🛡️ **Security Features**

- ✅ No secrets in repository
- ✅ All sensitive files gitignored
- ✅ Environment variable based configuration
- ✅ Secure token generation for testing

---

## 🧪 **Testing**

Once you have API keys set up:

```bash
# Generate Firebase token for testing
node generate-firebase-token.js

# Test Firebase access
node test-firebase-access.js
```

---

**Never commit API keys to Git!** 🔐