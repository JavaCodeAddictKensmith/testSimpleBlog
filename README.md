### HOW TO RUN THE PROJECT
- ✅ First run "npm install" and make sure your node version  is upto 18 as I am using react 18 version
- ✅ If you have not installed json-server on your system. Go to root of this project  your terminal on Visual studio code and type this command "sudo npm i json-server -g  " for mac or "sudo npm i json-server -g  " for window to install json-server. This project makes use of json local server that is used for the network call. The reason is no Rest API was used for this project.
- ✅ After that enter another command on your terminal "json-server --watch data/db.json --port 3500" as I used 3500 that servers as the local server port.

- ✅ Leave that terminal running open without closing it , then open a new a terminal and run "npm start".
- ✅ You can test the project on browser and read through the code and test its business use cases.




### USE CASES AND FEATURES COVERED IN THE PROJECT
 React  app that:
- ✅ List all artist in Chocolate city
- ✅ View the albums ( title) belonging to each artist
- ✅ Shows all tweets belonging to an artist.
- ✅ Allows the artist to tweet, update tweet, and delete tweet






### A Blog Project with full RTK Query Refactor


---

- ✅ Relies on RTK Query hooks with identifiable cache keys
- ✅ Removes all instances of the Redux useSelector in favor of RTK useQuery hooks
- ✅ Demonstrates how to use multiple queries, loading states, etc. inside of one component. 
- ✅ Demonstrates the use of selectFromResult in useQuery hooks with accompanying loading, success, and error states.