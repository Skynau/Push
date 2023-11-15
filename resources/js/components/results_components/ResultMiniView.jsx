import React from 'react'
import './ResultMiniView.scss'

const ResultMiniView = () => {
  return (
    <div className="mini-view">
        <img className="mini-view_img" src="" alt="" />
        <div className='mini-view_details'>
            <h4>Price</h4>
            <p>disposition</p>
            <p>size</p>
            <p>location</p>
        </div>
    </div>
  )
}

export default ResultMiniView