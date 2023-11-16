import React, { useState }  from 'react'
import ResultMiniView from './results_components/ResultMiniView'
import EditSearch from './results_components/EditSearch'
import './ResultsOfSearch.scss'
import MapContainer from './results_components/MapContainer'

const ResultsOfSearch = () => {

  const [editVisible, setEditVisible] = useState(false);
  
  const openEdit = () => {
    setEditVisible(!editVisible);
  }

  return (
    <>
        <div className='results-page'>
            {/* Not to be used as of now, kept for future development:
             <div className="search-bar">
                <ResultsSearchBar />
            </div> */}
            <div className='results-edit'>
                <EditSearch editVisible={editVisible} setEditVisible={setEditVisible}/>
            </div>
            
            <div className='over-view'>
                <div className="map" >
                    <MapContainer />
                </div>
                <div className='results-list'>
                    <div className='results-list_header'>
                        <h2>Rental Listings:</h2>
                        <button className='edit-button' onClick={openEdit}>
                            Edit the search
                        </button>
                        <div className='results-list_data-manipulation'>
                            <span>no. of results</span>
                            <div className='results-list_sorting'>sort function?</div>
                        </div>
                    </div>
                    <div className='results-list_listings'>
                        <ResultMiniView />
                        <ResultMiniView />
                        <ResultMiniView />
                        <ResultMiniView />
                        <ResultMiniView />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ResultsOfSearch