# Backend

Our backend is rather tiny, it coworks with next.js which connects our rendering methods(client-side and server-side).

Elements that our Backend consists of:

**app.js** - our main server file, contains routing to every website on our domain(react things)

- **api** - our whole api is in the path /src/pages/api - here we can find all of our api endpoints. Description of every api endpoint:
  - **api/articles** - folder handling all of our articles, this endpoint returns no data
    - **api/articles/content** (GET, POST) - TO DO: PUT, DELETE
      - (GET) endpoint which returns whole content of every article
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
  - **/api/signIn** - (POST)
    - (POST) - endpoint for users to sign in
  - **/api/singUp** - (POST)
    - (POST) - sign up new user
  - **/api/user** - (GET, PUT)
    - (GET) - Endpoint returning data about current user
    - (PUT) - Endpoint for updating data about current user
