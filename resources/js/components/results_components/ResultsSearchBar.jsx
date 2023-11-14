import React from 'react'
import TypeResults from './TypeResults'
import DispositionResults from './DIspositionResults'

const ResultsSearchBar = () => {

  const [type, setType] = useState([
    
  ]);
  const [disposition, setDisposition] = useState(false);
  const [priceFrom, setPriceFrom] = useState(false);
  const [priceTo, setPriceTo] = useState(false);
  const [location, setLocation] = useState(false);
  const [areaFrom, setAreaFrom] = useState(false);
  const [areaTo, setAreaTo] = useState(false);
  const [other, setOther] = useState(false);

  const displayType = () => {
    setType(true);
    setDisposition(false);
    setPriceFrom(false);
    setPriceTo(false);
    setLocation(false);
    setAreaFrom(false);
    setAreaTo(false);
    setOther(false);
  }

  const displayDisposition = () => {
    setType(false);
    setDisposition(true);
    setPriceFrom(false);
    setPriceTo(false);
    setLocation(false);
    setAreaFrom(false);
    setAreaTo(false);
    setOther(false);
  }

  const displayPriceFrom = () => {
    setType(false);
    setDisposition(true);
    setPriceFrom(false);
    setPriceTo(false);
    setLocation(false);
    setAreaFrom(false);
    setAreaTo(false);
    setOther(false);
  }

  const displayPriceTo = () => {
    setType(false);
    setDisposition(true);
    setPriceFrom(false);
    setPriceTo(false);
    setLocation(false);
    setAreaFrom(false);
    setAreaTo(false);
    setOther(false);
  }

  const displayLocation = () => {
    setType(false);
    setDisposition(true);
    setPriceFrom(false);
    setPriceTo(false);
    setLocation(false);
    setAreaFrom(false);
    setAreaTo(false);
    setOther(false);
  }

  const displayAreaFrom = () => {
    setType(false);
    setDisposition(true);
    setPriceFrom(false);
    setPriceTo(false);
    setLocation(false);
    setAreaFrom(false);
    setAreaTo(false);
    setOther(false);
  }

  const displayAreaTo = () => {
    setType(false);
    setDisposition(true);
    setPriceFrom(false);
    setPriceTo(false);
    setLocation(false);
    setAreaFrom(false);
    setAreaTo(false);
    setOther(false);
  }

  const displayOther = () => {
    setType(false);
    setDisposition(true);
    setPriceFrom(false);
    setPriceTo(false);
    setLocation(false);
    setAreaFrom(false);
    setAreaTo(false);
    setOther(false);
  }  
  

  
  return (
    <>
      <button onClick={displayType}>Type</button>
      <button onClick={displayDisposition}></button>
      <button onClick={displayPriceFrom}></button>
      <button onClick={displayPriceTo}></button>
      <button onClick={displayLocation}></button>
      <button onClick={displayAreaFrom}></button>
      <button onClick={displayAreaTo}></button>
      <button onClick={displayOther}></button>
      <form action="">
          <div className={`search-bar_type ${array.type ? " active" : ""}`}>
            <TypeResults />
          </div>
          <div className="search-bar_disposition">
            <DispositionResults />
          </div>
          <div className="search-bar_price-from">

          </div>
          <div className="search-bar_price-to">

          </div>
          <div className="search-bar_location">

          </div>
          <div className="search-bar_area-from">

          </div>
          <div className="search-bar_area-to">

          </div>
          <div className="search-bar_other-window">
              
          </div>
      </form>
    </>
  )
}

export default ResultsSearchBar