import axios from 'axios';
import React, { useEffect, useState } from 'react'

const NumberOfLikes = ({propertyId}) => {
   const [likes, setLikes] = useState('');

     const loadLikes = async () => {
      try{
        const response = await axios(`/api/property/${propertyId}/likes`);
        setLikes(response.data)
      }catch (error) {
            console.log(error)
        }
    }

  useEffect(() => {
        loadLikes()
    }, [])


    // console.log(likes.length);

  

  return (
    <>{likes.length}</>
  )
}

export default NumberOfLikes