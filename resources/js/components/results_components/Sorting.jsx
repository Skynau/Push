import React, {useState, useEffect} from 'react'
import './Sorting.scss'
import { getProperties } from "../../helpers";
import { buildUrl } from "../../helpers";
import Context from "../../Context";

const Sorting = () => {

    const [sort, setSort] = useState('')

    const selectSorting = (event) => {
        setSort(event.target.value)
    }

  
  console.log(sort)

  useEffect(() => {
  }, [sort])
  

  return (
    
    <>
        <span className="sort-mini-title">Sort by: </span>
        <select className="sorting-select" name="sort" id="">
            <option onClick={selectSorting} value="latest">Latest</option>
            <option onClick={selectSorting} value="oldest">Oldest</option>
            <option onClick={selectSorting} value="cheapest">Cheapest</option>
            <option onClick={selectSorting} value="mostExpensive">Most expensive</option>
            <option onClick={selectSorting} value="smallest">Area smallest</option>
            <option onClick={selectSorting} value="largest">Area largest</option>
        </select>

    </>
  )
}

export default Sorting