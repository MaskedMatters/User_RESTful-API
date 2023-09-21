# User Restful API
This repo has code for a RESTful API server that has a JSON database and the ability to list users, add users, and delete users.

Specifically, it uses the Express.js framework library to handle server endpoints for the different uses of the API. It handles the GET requests (list requests), POST requests (add requests), and DELETE requests (self-explanatory.)

## GET REQUESTS (LIST USER/S)
At the start of the program, it takes in the JSON from the database "users.json". We can then print this right after the status is set using res.json(users). It's the same for listing a specific user except for dynamic URIs (Unified Resource **_Identifiers_**) and the process of finding the index.

## POST REQUESTS (ADD USER/S)
At the start of the program, it takes in the JSON from the database "users.json". We then have requests in the body of the POST request that include the email, username, and password.  We put that in a user object and push it in the users JSON. Finally, we can use FS (File System) to write to the "users.json" database and save it.

## DELETE REQUESTS (DELETES USER/S)
At the start of the program, it takes in the JSON from the database "users.json". It uses a dynamic URI to know the ID of the object we want to delete and then we find it in the users JSON. We then use the splice function to actually rid of it from the users JSON and then use FS to write the new JSON to the "users.json" database.
