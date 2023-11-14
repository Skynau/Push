import React from 'react'
import ResultsSearchBar from './results_components/ResultsSearchBar'
import ResultMiniView from './results_components/ResultMiniView'

const ResultsOfSearch = () => {



  return (
    <>
        <div className='results-page'>
            <div className="search-bar">
                <ResultsSearchBar />
            </div>
            {/* <div>
                some results.map(result) of the results displaying just first photo, disposition + basic info that fits in
            </div> */}
            <div className='over-view'>
                <div className="map">

                </div>
                <div className='results-list'>
                    <div className='results-list_header'>
                        <h2>Rental Listings</h2>
                        <span>no. of results</span>
                        <div>sort function?</div>
                    </div>
                    <div className='results-list_listings'>
                        <ResultMiniView />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ResultsOfSearch