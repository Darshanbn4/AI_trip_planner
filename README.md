# AI Trip Planner App 🌍✈️🏔️

<div style="text-align: center;"> 
 
## :star: Building a Fullstack AI Trip Planner with React, Gemini AI, TailwindCSS & Firebase
 


  ### Features: 

- Environment,Vite set up
- Firebase, Database creation
- Google Authentication
- Generate Trip From Gemini AI
- React Routing
- Shadcn/ui
- React Google Autocomplete
- Display place photo using Google Photo API
- Full responsiveness on all pages
- Deploy App on Vercel


<br />


## About the Project  :star2:
![11](https://github.com/user-attachments/assets/81bdf33b-95b8-4ba0-b7f6-ab517ec54690)
![3](https://github.com/user-attachments/assets/3d648acd-0c95-4d80-a257-4f1395edade7)
![2](https://github.com/user-attachments/assets/35b35f6e-dbe2-4a3d-88a0-c14536688a4e)
![1](https://github.com/user-attachments/assets/48151eb5-770f-4d8b-8149-c28a12a6fa39) 

<br />

# You can check app this link :point_down:
https://full-stack-ai-trip-planner.vercel.app/


## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Google Cloud Console account for API keys

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-trip-planner.git
   cd ai-trip-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   - Copy `.env.example` to `.env`
   - Get your API keys from Google Cloud Console:
     - Google Places API Key
     - Google Gemini AI API Key  
     - Google OAuth Client ID
   - Fill in your API keys in the `.env` file

4. **Setup Firebase**
   - Create a Firebase project
   - Enable Firestore Database
   - Update `src/service/firebaseConfig.js` with your Firebase config

5. **Run the development server**
   ```bash
   npm run dev
   ```

### 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key
VITE_GOOGLE_GEMINI_AI_API_KEY=your_google_gemini_ai_api_key
VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
``` 

