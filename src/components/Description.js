import React from 'react'

function Description({titile, date ,exp}) {
  return(
    <div className = 'description-date'>
      <h2>{titile}</h2>
      <h2>{date}</h2>
      <p>{exp}></p>
    </div>
  )
}
export default Description;