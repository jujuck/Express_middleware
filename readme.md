## A node express project to implement your first middlewar
git clone and npm install your project.
The workshop is decline step by step. If you're lost, you will find the solution of each separate step on the history of the correction branch

## Presentation
At this step, we have a single route that retrieve a random user and send its firstname lastname and id. The goal is, from this information, to post (/one/:id) with the correct gender (male, female, polygender, agender, non-binary) in the body (with the other information firstname, lastname). If it's match, then you will get all the information on this user.

## Step by step
- 1/ Create a post route ('/one/:id') and send all the information of the user
- 2/ Before sending the response, add a check if the body contains a key gender. If yes, return the full information, else return a 404 with a message, should contains a gender
- 3/ Now check if the gender is correct, if true, send the information, if not, add a return with incorrect gender, try again. Don't forget to standardize the user input with an uppercase.
- 4/ Your code is growing with cascading conditions...So bad!!! In that case, we should use a middlware to clean it. Take the first gender condition in the body and isolate it in a middleware function
    - a/ reminder, a middleware function take three params (req, res, next)
    - b/ check if the body contain a gender key, if true call the next() function, otherwise, just send the response with res
    - c/ insert your middleware before your callback function in your route
- 5/ Now, restucture your code, placing the middleware function in a specific file, in a middleware folder and just require it correctly
