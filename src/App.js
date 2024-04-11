import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import apiRequest from './apiRequest';

function App() {
  // API
  const API_URL = 'http://localhost:3500/items';

  // Objects have properties id , checked and item , that represent our Grocery item
  //  Pull the values out the local storage that we have saved by JSON.stringify(newItems)
  // Convert strings of shoppingLIst into a javascript object
  const [items, setItems] = useState([]);

  // Define a new state and leave it with an empty quote to start balnk
  const [newItem, setNewItem] = useState('');
  // Define addNwItem function the item prameter is when we're going to recieve this item
  // How to constructing this item first it has an id and check and th item it self

  // Set state to search items
  const [search, setSearch] = useState('');

  // Message while witaing for the API loading message
  const [isLoading, setIsLoading] = useState(true);
  // Fetch en error before getting a response and setting to setItem
  const [fetchError, setFetchError] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        //This line fetches data from the provided API_URL. The await keyword pauses the function's execution until the fetch operation completes, and the response object is stored in response.
        const response = await fetch(API_URL);
        //Look for an error
        if (!response.ok) throw Error('Did not received expected data');
        //This line parses the response from JSON format (assuming the API provides JSON data) and stores the parsed data as listItems.
        const listItems = await response.json();
        //setItems(listItems): This line likely updates the component's state using a function named setItems. It sets the state variable
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      ; (async () => await fetchItems())();
    }, 2000);
  }, []);

  const addItem = async item => {
    // Increment the id if it's not equal to zero increment it to one which would be the new value or keep it the item one 1
    // items.length this is a condition the length if it is true then excute id icrement if not return a value one
    const id = items.length
      ? Number(items[items.length - 1].id) + 1 // Access last item's ID and convert to number
      : 1;
    // const id = items.length ? items[items.lenght - 1].id + 1
    // Object for new item has id and checked which will be false at start and item that passed in
    const myNewItem = { id: String(id), checked: false, item }; // Convert id back to string

    // Array to update that list item
    const listItems = [...items, myNewItem];
    // Update the state
    setItems(listItems);

    // Api post method
    const postOption = {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    };
    const result = await apiRequest(API_URL, postOption);
    if (result) setFetchError(result);
  };
  // Handle the state of checkbox the id the key in list item so it accepted in (id) , Ps: map() used => there's list
  // If the item equal to id and then that is true return this new item and they're essentially the same item but we're flipping the checked status and if not we're just going to return the item that's already existing there :
  // {checked: true, id: 1, item: "On this is the result
  const handleCheck = async id => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // Update the state
    setItems(listItems);

    // Get the checked items
    const myItem = listItems.filter(item => item.id === id);
    // The method we use is patch as we updating only
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    };
    // Define the url for git and post as it is a patch method this will accessing a specific post as we're updating patch
    const reqUrl = `${API_URL}/${id}`;
    // Now define result using await
    const result = await apiRequest(reqUrl, updateOptions);
    // then the result if there's an error will set it to fetchItems
    if (result) setFetchError(result);
  };

  //Function to handle items delete
  const handleDelete = async id => {
    // Create a new array that filtered out the item id that is equal item id it means:
    // create array with ids that is not equal to the item id we pass in , this is just a condition to run the delete process
    const listItems = items.filter(item => item.id !== id);
    // Update the state
    setItems(listItems);

    // API delete item
    const deleteOption = {
      method: 'DELETE'
    };
    // Define the url for git and post as it is a DELETE method this will accessing a specific post as we're updating DELETE
    const reqUrl = `${API_URL}/${id}`;
    // Now define result using await
    const result = await apiRequest(reqUrl, deleteOption);
    // then the result if there's an error will set it to fetchItems
    if (result) setFetchError(result);
  };
  // Define a function handleSubmit this function is going to receive the event object
  // After define a new state and made a function need to pass them down as props to add item
  // Then we neet destructure these props as they come in the component
  const handleSubmit = e => {
    e.preventDefault();
    // Check if we do have a newItem it means if undefine or false => return : it means exit the function
    if (!newItem) return;
    // Add item function
    addItem(newItem);
    // To be able to add a new item use the function setNewItem to be empty again
    setNewItem('');
  };
  return (
    <div className='App'>
      {/* Add functional component  */}
      {/* the sibiling components it works one by one first Header then Content and Footer so if we need to use the items in the Footer can't just reach over to the content component and take the data so we need to take some data in the content component and moved up to the app component and drill it down to both Content and Footer   */}
      {/* Props which pass in this component essentially name attribute  */}
      <Header title='Grocery list' />
      {/* After moving the Data content to the app must add useState items and both functions as there is connection to items so pass them out to content */}

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && (
          <p style={{ color: 'red' }}>{`Error: ${fetchError}`} </p>
        )}
        {!fetchError && !isLoading && (
          <Content
            // Filter items wll essentially apply what we type into our search box and it will filter items
            // Passing in the item to filter and to be able to search for low letter we used lowercase then matches with item in lowercase
            items={items.filter(item =>
              item.item.toLowerCase().includes(search.toLocaleLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      {/* Now we can refer to the item that hold in state in the Footer componenet . */}
      <Footer length={items.length} />
    </div>
  );
}

export default App;
