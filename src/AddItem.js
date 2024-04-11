import { useRef } from 'react' // Import hook to remove focus when on submitted
import { FaPlus } from 'react-icons/fa'

// Define a function handleSubmit this function is going to receive the event object
// After define a new state and made a function need to pass them down as props to add item
// Then we neet destructure these props as they come in the component
// Now we make the control component with a Value attribute and set the new state which is newItem then to be able to change we use onChange
// and pass in the event object then call setNewItem()
// Then we write onsubmit to call the function rather than reload the page this is for form and for app.js we write e.preventDefault()

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'> Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button
        type='submit'
        aria-label='Add Item'
        // Setting the focus back to the add item input after we click the button
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem
