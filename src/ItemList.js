    import React from 'react'
    import LineItem from './LineItem'

    const ItemList = ({items, handleCheck, handleDelete }) => {
    return (
        <ul>
          
        {/* In map the parameter item it means each item in the array to generate list */}
                {items.map((item) => (
                    // first create our lineitem in jsx and pass the props down to the lineitem 
               <LineItem
            //    warning: Each child in a list should have a unique "key" prop.so it must include the key
               key ={item.id}
               item={item}
               handleCheck={handleCheck}
               handleDelete={handleDelete}
               />
                ))}
                </ul>
   
           )
    }

    export default ItemList