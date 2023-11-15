import React from 'react'

const PriceFromResults = () => {
  return (
    <>
        <select>
            <option defaultChecked="FROM CZK">FROM CZK</option>
            <option value="10000">10.000.00</option>
            <option value="12000">12.000.00</option>
            <option value="15000">15.000.00</option>
            <option value="20000">20.000.00</option>
            <option value="25000">25.000.00</option>
            <option value="30000">30.000.00</option>
            <option value="35000">35.000.00</option>
        </select>
    </>
  )
}

export default PriceFromResults