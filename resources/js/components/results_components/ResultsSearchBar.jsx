import React from 'react'
import TypeResults from './TypeResults'
import DispositionResults from './DIspositionResults'

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
      <button onClick={displayType}>Type</button>
      <button onClick={displayDisposition}></button>
      <button onClick={displayLocation}></button>
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