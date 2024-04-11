import React from 'react'
// Also define the value in the main function component
const Footer = ({length}) => {

  return (
    <footer>
      {/* Display how many items we have  */}
      {/* We write the value we recive which is {lenght} */}
       <p>{length} List { length === 1 ? 'item' : 'items'}</p> 
    </footer>
  )
}

export default Footer