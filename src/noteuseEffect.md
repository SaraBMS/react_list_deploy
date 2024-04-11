Now will import hook useEffect 
useEffect runs at every render and use anonymous function so at every time like for example we're typing a message in the componenet means on every render it runs like it type in the console log a specific message  
If we put an dependency like empty array it will stop running while render ot wil run only at page load time
it means if the dependency changes it will run this anonymous function again 
Here will add item to the array to run at load time and when adding or deleting any items 
SO it's only running this function when it its dependency changes
Now how we can apply to our application : 
This wil be an ideal way to load this data in especially if we were working with an API 
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []) we put this cicuit operator to avoid error that will happen if the shoppting list is null in another way shopping list doesn't exist the application will at least have an empty arrayto work with 
  Inside the useEffect since we can load the local storage n useState items and setItems we can save the local storage inside the useEffect so anytime items changes 
  then change setandsaveitems to setitems then delete setAndSaveItems 
  So insted of the reload every item we use Effect to onchange the state the reload page it will save the items in the localstorage 
  so if delete the shopping list and reload will get an empty array [] without an error and by using this useEffect instead of loading everything at the beginning 
  we're looking at the items changes then saving our localStorage to be pulled back into action  