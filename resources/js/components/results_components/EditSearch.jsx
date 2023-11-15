import React, {useState} from 'react'
import SearchContainer from '../SearchContainer'
import './EditSearch.scss';

const EditSearch = () => {

  const [editVisible, setEditVisible] = useState(false);

  const openEdit = () => {
    setEditVisible(true);
  }

  const closeEdit = () => {
    setEditVisible(false);
  }

  return (
    <>
      <button className='edit-button' onClick={openEdit}>
          Edit the search
      </button>
      <div className={`dynamic-div${editVisible ? "_active" : ''}`}>
          <SearchContainer />
          <button className='closing-tab' onClick={closeEdit}>&#10005;</button>
      </div>
    </>
  )
}

export default EditSearch