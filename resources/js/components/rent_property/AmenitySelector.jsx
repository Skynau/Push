import React, { useState } from 'react';
import './AmenitySelector.scss';

const AmenitySelector = () => {
  const [formData, setFormData] = useState({
    amenities: [],
  });

  const amenities = [
    { id: 1, name: 'Balcony/Terrace' },
    { id: 3, name: 'Basement' },
    { id: 2, name: 'Wheelchair Access' },
    { id: 4, name: 'Parking' },
    { id: 5, name: 'Garden' },
  ];

//   const handleAmenitiesChange = (e) => {
//     const selectedOptions = Array.from(
//       e.target.selectedOptions,
//       (option) => option.value
//     );
//     setFormData({
//       ...formData,
//       amenities: selectedOptions,
//     });
//   };

  const handleCheckboxChange = (e) => {
    const amenityId = e.target.value;
    const isChecked = e.target.checked;

    setFormData((prevFormData) => {
      if (isChecked) {
        return {
          ...prevFormData,
          amenities: [...prevFormData.amenities, amenityId],
        };
      } else {
        return {
          ...prevFormData,
          amenities: prevFormData.amenities.filter((id) => id !== amenityId),
        };
      }
    });
  };

  return (
      <div>
        <label>Amenities:</label>
        <ul className='new-property-form'>
          {amenities.map((amenity) => (
            <li key={amenity.id}>
              <input
                type="checkbox"
                id={`amenity-${amenity.id}`}
                value={amenity.id}
                checked={formData.amenities.includes(String(amenity.id))}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={`amenity-${amenity.id}`}>{amenity.name}</label>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default AmenitySelector;