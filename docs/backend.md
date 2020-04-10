# Backend

Our backend is rather tiny, it coworks with next.js which connects our rendering methods(client-side and server-side).

Elements that our Backend consists of:

## Modules

### **api_modules**

folder containing modules, used in api.

**List of modules:**

- #### **selectQuery.js**
  Module which exports Promise as export parent and escape function as exports children. It sends query to the db and returns result. If query succeed then it resolves with result. Otherwise it will reject with an error given by database. It uses Pool connection to make connection stable. But it uses more user connections than usual connection to db. Be aware of running out of connections.

  **To do: dynamic user changing, and change user depending on node env variable.**

  - ##### requires/exports:

    - **requires:**
      - mysql
    - **exports**
      - query function - async function returning Promise which returns result of given query on resolve or query error on reject

## Files

**app.js** - our main server file, contains routing to every website on our domain(react things)

- **api** - our whole api is in the path /src/pages/api - here we can find all of our api endpoints. Description of every api endpoint:
  - **api/articles** - folder handling all of our articles, this endpoint returns no data
    - **api/articles/[name]** (GET, POST) - TO DO: PUT, DELETE
      - (GET) endpoint which returns whole content of article of given name
      - (POST) On this endpoint you are able to add new article content
    - **api/articles/thumbnails** (GET)
      - (GET) endpoint which returns shortened content of every article
  - **api/measurements** - folder handling results of measurments from our every device, furthermore this endpoint **returns latest data from every device in db**
    - **[id]** (GET, POST)
      - (GET) dynamic endpoint returning measurments array of device of given(by endpoint) id
      - (POST) dynamic endpoint for adding new measurments for device of given(by endpoint) id
  - **api/api** - testing enviroment, nevermind _cringe xD_
  - **api/devices** (GET, POST) TO DO: PUT
    - (GET) endpoint returning array of devices and informations about'em
    - (POST) endpoint adding new device to db and initializing communication between server and new device
  - **api/location** - (GET) TO DO: PUT, (location of only one device?)
    - (GET) endpoint returning location of every device
  - **/api/sPignIn** - (POST)
    - (POST) - endpoint for users to sign in
  - **/api/singUp** - (POST)
    - (POST) - sign up new user
  - **/api/user** - (GET, PUT)
    - (GET) - Endpoint returning data about current user
    - (PUT) - Endpoint for updating data about current user
  - **/api/time** - (GET)
    - (GET) - Endpoint returning server time in json for dummies (Sorry Rafał)
