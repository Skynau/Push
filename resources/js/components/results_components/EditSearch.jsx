import React, { useState } from "react";
import SearchContainer from "../SearchContainer";
import "./EditSearch.scss";
import PropertyDetail from "../property_detail_components/PropertyDetail";

const EditSearch = ({editVisible, setEditVisible}) => {
    

  const closeEdit = () => {
    setEditVisible(false);
  }

  return (
    <>
      <div className={`dynamic-div${editVisible ? "_active" : ''}`}>
          <div className='edit_container'>
            <div className='edit_search-container'><SearchContainer /></div>
            <button className='closing-tab' onClick={closeEdit}>&#10005;</button>
          </div>
      </div>
    </>
  )
}

export default EditSearch
