import React from 'react'
// this is a component function so we can pass in props and the props come from the parnt which is App.js 
function Header(props) {
  return (
    <header>
      {/* As it's react componet it should put them inside {} as expression  */}
        <h1>{props.title}</h1>
        {/* As the props hold all the data from the parent component that have been passed to the child component  */}
    </header>
  )
}
//Default props allows us to set values for the props expected in the component when it doesn't receive any data from  api or localStorage parent component or that we need to delete the code that send props ( <Header title="Mother Fucker" />) because this will override the defaultProps
Header.defaultProps = {
  title:"Deafault Title"
}
export default Header