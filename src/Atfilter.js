import React from 'react'

const Atfilter = ({handleSort}) => {
  return (
    <>
      <div>
        <button onClick={() => handleSort("asc")}>
          <span>&#x25B2; </span>
        </button>
        <button onClick={() => handleSort("desc")}>
          <span>&#x25BC;</span>
        </button>
      </div>
    </>
  )
}

export default Atfilter