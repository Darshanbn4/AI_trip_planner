import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCard({trip}) {
  const [photoUrl,setPhotoUrl] = useState();

  useEffect(()=>{
    trip&&GetPlaceImg();
  },[trip])

  const GetPlaceImg=async()=>{
    const placesKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    if(!placesKey || placesKey === 'undefined'){
      console.error("❌ VITE_GOOGLE_PLACES_API_KEY is not set");
      return;
    }
    
    const data={
      textQuery:trip?.userSelection?.location
    }
    try {
      const result= await GetPlaceDetails(data).then(resp=>{
        if(resp?.data?.places?.[0]?.photos?.[3]?.name){
          const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
          setPhotoUrl(PhotoUrl);
          console.log("✅ Google Places API is working!");
        }
      })
    } catch (error) {
      console.error("❌ Google Places API Error:", error);
    }
  }
  return (
   <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all hover:shadow-sm'>
     <img src={photoUrl}  className='rounded-xl h-[200px] w-full object-cover'/>
      <div>
      <h2 className='font-medium text-lg'>{trip?.userSelection?.location}</h2>
      <h2 className="text-sm text-gray-600" >{trip?.userSelection?.totalDays} Days trip with {trip?.userSelection?.budget} </h2>
      </div>
    </div>
   </Link>
  )
}

export default UserTripCard
