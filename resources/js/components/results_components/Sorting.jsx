import React, {useState} from 'react'
import './Sorting.scss'

const Sorting = () => {

    const [sort, setSort] = useState('')

    const selectSorting= (event) => {
    setSort(event.target.value)
  }

  return (
    <div className="sorting-container">
      <span className="sort-mini-title">Sort by: </span>
      <select className="sorting-select" name="sort" id="">
          <option onClick={selectSorting} value="latest">Latest</option>
          <option onClick={selectSorting} value="oldest">Oldest</option>
          <option onClick={selectSorting} value="cheapest">Cheapest</option>
          <option onClick={selectSorting} value="mostExpensive">Most expensive</option>
          <option onClick={selectSorting} value="smallest">Area smallest</option>
          <option onClick={selectSorting} value="largest">Area largest</option>
      </select>
    </div>
  )
}

export default Sorting