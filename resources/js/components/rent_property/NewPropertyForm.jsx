import React, { useState } from 'react';
import './NewPropertyForm.scss';

const NewPropertyForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    address: '',
    description: '',
    price: '',
    availableFrom: '',
    amenities: [],
    squareMeters: '',
    disposition: '',
    petsWelcome: '',
    type: '',
    condition: '',
    furnishing: '',
    heating: '',
    photoAttachment: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAmenitiesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({
      ...formData,
      amenities: [...formData.amenities, ...selectedOptions],
    });
    console.log(formData);
  };
  

  const handlePetsWelcomeChange = (e) => {
    setFormData({
      ...formData,
      petsWelcome: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to server
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className='form'>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <label><br/>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </label><br/>

        <label><br/>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </label><br/>

        <label><br/>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </label><br/>

        <label><br/>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </label><br/>

        <label><br/>
          Available From (Date):
          <input
            type="date"
            name="availableFrom"
            value={formData.availableFrom}
            onChange={handleInputChange}
            required
          />
        </label><br/>

        <label><br/>
          Amenities:
          <select
            multiple
            name="amenities"
            value={formData.amenities}
            onChange={handleAmenitiesChange}
          >
            <option value="balcony">Balcony/Terrace</option>
            <option value="basement">Basement</option>
            <option value="wheelchair">Wheelchair Access</option>
            <option value="parking">Parking</option>
            <option value="garden">Garden</option>
          </select>
        </label><br/>

        <label><br/>
        Apartment area: 
          <input
            type="text"
            name="squareMeters"
            value={formData.squareMeters}
            onChange={handleInputChange}
            required
          /> m²
        </label><br/>

        <label><br/>
          Disposition:
          <select
            name="disposition"
            value={formData.disposition}
            onChange={handleInputChange}
            required
          >
            <option value="1kk">1kk</option>
            <option value="1plus1">1+1</option>
            <option value="2kk">2kk</option>
            <option value="2plus1">2+1</option>
            <option value="3kk">3kk</option>
            <option value="3plus1">3+1</option>
            <option value="4kk">4kk</option>
            <option value="bigger">Bigger</option>
          </select>
        </label><br/>

        <label><br/>
          Pets Welcome:
          <select
            name="petsWelcome"
            value={formData.petsWelcome}
            onChange={handlePetsWelcomeChange}
            required
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label><br/>

        <label><br/>
          Type:
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          >
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
          </select>
        </label><br/>

        <label><br/>
          Condition:
          <select
            name="condition"
            value={formData.condition}
            onChange={handleInputChange}
            required
          >
            <option value="new">New</option>
            <option value="veryGood">Very Good</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
          </select>
        </label><br/>

        <label><br/>
          Furnishing:
          <select
            name="furnishing"
            value={formData.furnishing}
            onChange={handleInputChange}
            required
          >
            <option value="none">None</option>
            <option value="partly">Partly</option>
            <option value="fully">Fully</option>
          </select>
        </label><br/>

        <label><br/>
          Heating:
          <select
            name="heating"
            value={formData.heating}
            onChange={handleInputChange}
            required
          >
            <option value="gas">Gas</option>
            <option value="electrical">Electrical</option>
            <option value="central">Central</option>
          </select>
        </label><br/>

        <label><br/>
          Photo Attachment:
          <input
            type="file"
            name="photoAttachment"
            accept="image/*"
            onChange={handleInputChange}
            required
          />
        </label><br/>

        <button type="submit">Submit</button><br/>
      </form>
    </div>
  );
};

export default NewPropertyForm;