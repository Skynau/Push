import axios from 'axios';
import React, { useState } from 'react'

const DeleteListing = ({listingId, loadData }) => {
  const [ message, setMessage ] = useState(null)


  // console.log(listingId)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`api/property/${listingId}/delete`);
      setMessage(response.data['message']);
      loadData()
    } catch (error) {
      console.log(error)
    }

  }


  return (<>
  { message 
    ??
    <form onSubmit={ handleSubmit }>
    <button type="submit">Yes, Delete</button>
    </form>
  }
    </>
  )
}

export default DeleteListing