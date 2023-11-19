import axios from 'axios';
import React, { useState } from 'react'

const DeleteListing = (listingId) => {
  const [ message, setMessage ] = useState(null)

  const handleSubmit = async (event) => {
    e.preventDefault();
    try {
      const response = await axios.post(`api/${listingId}/delete`);
      setMessage(response.data['message']);
    } catch (error) {
      console.log(error)
    }

  }


  return (<>
  { message 
    ?
    {message}
    :
    <form onSubmit={ handleSubmit }>
    <button type="submit">Yes, Delete</button>
    </form>
  }
    </>
  )
}

export default DeleteListing