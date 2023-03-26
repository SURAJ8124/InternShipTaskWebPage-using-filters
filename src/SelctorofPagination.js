import React from 'react'
import './App.css';
const SelctorofPagination = ({onChange}) => {
  return (
    <>
    <select onChange={onChange} className='selctor'>
        <option value={10}>10per page</option>
    <option value= {25}>25 per page</option>
    <option value={50}>50 per page</option>
    <option value={100}>100 per page</option>
    
  </select>
  </>
  )
}

export default SelctorofPagination