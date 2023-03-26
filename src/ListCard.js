import React from 'react'
import Card from './Card'
const ListCard = ({NewList}) => {
    const listItems =
        NewList.map((item, index) => (
            <div key={index} >
               {item}
            </div>
        ))
    

        // data?data.map((item,i)=>{
        //     return(
        //         <li>{item.name}</li>
        //     )
        // }):"no data"
  return (
    <>
      {/* <Card  listItems={ listItems}/> */}
      <ul>
     
        </ul>
        
    </>
  )
}

export default ListCard