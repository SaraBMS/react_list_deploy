    import React from 'react'
    // Fa => Fontawsome , Trash icon 
    import { FaTrashAlt} from 'react-icons/fa';

    function LineItem({item, handleCheck, handleDelete}) {
    return (
        <li className='item'>
        <input 
        type='checkbox'
        // it wont work if the function just call because it needed the id so to be able to pass in a parameter id need anonymous function to call handleCheck
        onChange={() => handleCheck(item.id)}
        checked = {item.checked}
        >
        </input>
        <label
        // function to handle checkbox with double click on lable 
        onDoubleClick={() => handleCheck(item.id)}
        // Ternary statemant if the item is checked styled a line through else null 
        style={(item.checked ) ? {textDecoration:'line-through' }: null}
        > {item.item} </label>
    <FaTrashAlt 
    onClick={() => handleDelete(item.id)}
    role='button'
        tabIndex='0'
        // Since it's a button and it's an image we need to add aria label , This for accessibility for our trash .
        aria-label={`Delete ${item.item}`}
        />
    </li>
    )
    }

    export default LineItem