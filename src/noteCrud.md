Cruad operation will be create for creating a list items and update for updating a list items and delete for deleting a list items.
Now add file and create a function to use all other operation so we'll use abstracting  
So this fuction will use foe create update and delete
Then will start with try block as we would with any request 
also will had a catch to catch err and finally wether we've had an error or not this eill execute after try and catch blocks  
Now inside try will define our generic request that will be a respons that we receive 
It had await to fetch url and optionObj th two parametr of our function apiRequest.
optionObj is really the option object which is what makes diffrence between this being a create update or delete request 
The Error message Please relod the app because in try block incase the response is not ok it might the database is sync with the server incase we changed the state 'deleting, updating or creating' so when we reload the app the error will go 
Then in catch block will define err message
Then in finally block this is where actually want to return the errMsg so no matter what happen this errMsg is null or wether has a value 
Now will define the optionObj which rpresent state update delete or create  .
Now in App.js will import the apiRequest then will put this function to work so the first place we use it is in  addItem to update by creating items .
Now will define method will be Post 
method: 'POST': This property sets the HTTP method to POST. This indicates that the request intends to create a new resource on the server.

headers: { 'Content-Type': 'application/json' }: This property defines the request headers. The headers object is another object literal with a single key-value pair:

'Content-Type': This header specifies the format of the data being sent in the request body. Here, it's set to 'application/json', indicating that the request body contains JSON-formatted data.
body: JSON.stringify(myNewItem): This property sets the request body. The body object is assigned the result of calling the JSON.stringify(myNewItem) function
await: This keyword is used because apiRequest is likely an asynchronous function, meaning it might take some time to complete (e.g., waiting for a network response from the server). The await keyword pauses the execution of the current code block until the promise returned by apiRequest resolves it means to send the request 
The result contains the url need to send to server without any change and there's postOption that means the updating state .
The apiRequest function return errMsg  which its value either it's null or not .
The condition result says if we have a result that means the message is not null then we need to setFetchError 
Now we handle the check  the update the state which is setItems(listItems)
So in handleCheck will define the item that's getting  updated .
Then will get the checked items will use listItems as these are in the update state 
On body will fet checked property to a specific item and as filter return array so whatever the checkd property will not changing the checked because it's already updated 
Now will update the handel delete items 




