import axios from "axios"

const BASE_URL ='https://places.googleapis.com/v1/places:searchText'

const config={
    headers:{
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
        'X-Goog-FieldMask': [
            'places.photos',
            'places.displayName',
            'places.id'
        ]
    }
}

export const GetPlaceDetails=(data)=>{
    if(!placesApiKey || placesApiKey === 'undefined'){
        console.error("❌ Google Places API key is missing!");
        return Promise.reject(new Error("API key is missing"));
    }
    return axios.post(BASE_URL,data,config).catch(error => {
        console.error("❌ Google Places API Error:", error);
        if(error.response?.status === 403){
            console.error("API key is invalid or API is not enabled");
        }
        throw error;
    });
}

export const PHOTO_REF_URL = `https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=${placesApiKey}`;