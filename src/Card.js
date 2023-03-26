import React from 'react'

const Card = ({list}) => {

  return (
   <>
   <div className='stylee'>
   <table >
   <thead>
    <tr>
    <td>{list.at}</td>
    <td>{list.author}</td>
    <td>{list.like}</td>
    <td>{list.reply}</td>
    <td>{list.text}</td>
  </tr>
  </thead>  
  </table>
  </div>
  
  </>
  )
}

export default Card