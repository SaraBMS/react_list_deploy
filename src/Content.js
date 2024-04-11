import ItemList from './ItemList'
// Array [] has a three objects {} which they're items  , {} those curly braces also refers to expression
// Destructurng the three data inside the content({}) that we need to use it from app
const Content = ({ items, handleCheck, handleDelete }) => {
  //-----------------------------------------------------------
  // Here is the jsx
  return (
    // this is a fragment<>
    <>
      {/* Show the grocery item in jsx using unorder list  */}
      {/* note: the curly braces allow you to dynamically insert the value of an expression or variable into a string or element content */}
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        // one curly bracesit means an expression but two it means it a style
        <p style={{ marginTop: '2rem' }}> Your list is empty.</p>
      )}
    </>
  )
}

export default Content
