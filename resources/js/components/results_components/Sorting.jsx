import React, {useState, useEffect} from 'react'
import './Sorting.scss'
import { getProperties } from "../../helpers";
import { buildUrl } from "../../helpers";
import Context from "../../Context";

const Sorting = ({setSort}) => {

    const selectSorting = (event) => {
        setSort(event.target.value)
    }



  // useEffect(() => {
  // }, [sort])
  

  return (
    <div className="sorting-container">
      <span className="sort-mini-title">Sort by: </span>
      <select className="sorting-select" name="sort" onChange={selectSorting}>
          <option value="&order=created_at&orderFlow=desc">Latest</option>
          <option value="&order=created_at&orderFlow=asc">Oldest</option>
          <option value="&order=price_rent&orderFlow=asc">Cheapest</option>
          <option value="&order=price_rent&orderFlow=desc">Most expensive</option>
          <option value="&order=square_meters&orderFlow=asc">Area smallest</option>
          <option value="&order=square_meters&orderFlow=desc">Area largest</option>
      </select>
    </div>
  )
}

export default Sorting