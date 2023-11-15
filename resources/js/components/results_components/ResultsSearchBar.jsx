import {React, useState } from 'react'
import TypeResults from './TypeResults'
import DispositionResults from './DIspositionResults'
import PriceFromResults from './PriceFromResults';
import PriceToResults from './PriceToResults';
import LocationResults from './LocationResults';
import AreaFromResults from './AreaFromResults';
import AreaToResults from './AreaToResults';


const ResultsSearchBar = () => {

  const [type, setType] = useState(false);
  const [disposition, setDisposition] = useState(false);
  const [location, setLocation] = useState(false);
  const [other, setOther] = useState(false);

  const displayType = () => {
    setType(true);
    setDisposition(false);
    setLocation(false);
    setOther(false);
  }

  const displayDisposition = () => {
    setType(false);
    setDisposition(true);
    setLocation(false);
    setOther(false);
  }

  const displayLocation = () => {
    setType(false);
    setDisposition(false);
    setLocation(true);
    setOther(false);
  }

  const displayOther = () => {
    setType(false);
    setDisposition(false);
    setLocation(false);
    setOther(true);
  }  
  

  
  return (
    <>
      <form action="">
          <button type='button' onClick={displayType}>Type</button>
          <div className={`search-bar_type ${type ? " active" : ""}`}>
            <TypeResults />
          </div>
          <button type='button' onClick={displayDisposition}>Disposition</button>
          <div className="search-bar_disposition">
            <DispositionResults />
          </div>
          <div className="search-bar_price-from">
            <PriceFromResults />
          </div>
          <div className="search-bar_price-to">
            <PriceToResults />
          </div>
          <button type='button' onClick={displayLocation}>Location</button>
          <div className="search-bar_location">
            <LocationResults />
          </div>
          <div className="search-bar_area-from">
            <AreaFromResults />
          </div>
          <div className="search-bar_area-to">
            <AreaToResults />
          </div>
          <button type='button' onClick={displayOther}>Other</button>
          <div className="search-bar_other-window">
            
          </div>
      </form>
    </>
  )
}

export default ResultsSearchBar