JSON: will allow you to quickly launch a development API that you work with as you build your frontend application 
At npm.js e can search for JSON.server then we call folder data then create a file named db.json then we write on terminal command to launch our json inside the brwoser then get link or source  
So JSON is to run a local rest API as a devolopment server so we can work with and use this reser API and as we develop front end .
Fetch API: First will take ride off the local storge from useState and useEffect and leave only [] as an initial value to start our app with for useState hook and  [] for useEffect as a depndency which means it will only occur at load time that's when load the data from the rest API  .
Use Async to keep database in sync with our state of the application .
Define async inside the useEffect 
Inside try : fetch will get a response to retun items inside db.json 
Then await the response to convert to json then we've had our ist items 
Then will setItems to get the information 
Call async function inside the of useEffect 
then need to add error handling (try/catch block) for robustness.
Then fetches items using the fetchItems function and waits for the operation to complete before continuing. It achieves asynchronous behavior with a cleaner syntax compared to traditional Promises.
Now we need fetch wn error with state and so define it useState with a null initail value then after we get a respons and before we set it to setItem and update the state will look for an error
then instede of err.stack we put message property 
then if we get a successful request after updating items 
then wil use it in jsx to indicte to the user there has been an error 
In content as t is the main element so we write the main
Then in the content component wil make a fragment in the main 
Then in App main will fetch the error and will put it inside curly braces to indicate it is an expression .
To style the paragraph we need to put it curly braces to indicate that is a css property 
And we need to sow the error message if the list is not empty so we put the fetch error infrot of the content so if only there is no fetch error state is false then it will display this content component 
Now will seTime out before call async function to fetch items from the API with a period
And show message that the data is loading when we're waiting for API to finish that initial call
Create a loading message using state will use it when fetching  the items end  or fetching an error then update state to be false.
Now in the jsx  use loading state show paragraph when state is true and show the content when the  fetching error not exist and isLoading is false  
