import React from 'react'

const Person = ({name,age,address}) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <h3>Address : {address}</h3>
    </div>
  )
}

export default Person
