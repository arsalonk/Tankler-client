# Tankler(https://www.tankler.us/) - Front-end 
 An app to help people manage and care for their saltwater fish tanks. The app allows users to create a tank by entering their tank dimensions and populate with with livestock from the database. It also allows users to create recurring tasks which are displayed on the home page when due and create and update tank parameters, making keeping track of the tanks health a lot easier.

![screenshot 23](https://user-images.githubusercontent.com/36980730/41165480-c928b39a-6b0b-11e8-88a1-c3a59f5b117d.png)
## Login page 
Users can log into their accounts once registered, clicking the How I Work button also displays a modal giving a brief overview of the app.

![screenshot 31](https://user-images.githubusercontent.com/36980730/41176686-5b227128-6b2f-11e8-8c7e-18238f038c76.png)
## Modal 
 Gives brief overview of app and tells users to go to info tab once logged in for more information

![screenshot 22](https://user-images.githubusercontent.com/36980730/41165074-af6f6ee0-6b0a-11e8-9f0d-660fe3e5c651.png)
## Registration page 
 Allows users to sign up for the app

![screenshot 24](https://user-images.githubusercontent.com/36980730/41165590-0a2a1884-6b0c-11e8-8780-89056b34a46c.png)
## Home page 
 Tasks that need to be done on that day are displayed here.

![screenshot 25](https://user-images.githubusercontent.com/36980730/41165717-56cd043a-6b0c-11e8-9238-a68d1dc9491f.png)
## Tank page 
 tank dimensions and livestock thats been added to the tank from the database are displayed here. Also allows you to update tank dimensions and remove livestock from tank.

![screenshot 30](https://user-images.githubusercontent.com/36980730/41166627-bede690e-6b0e-11e8-9210-5128affcc823.png)
## Tasks page 
 Users can create tasks specifying the task name and how often they'd like the task to recur.

![screenshot 27](https://user-images.githubusercontent.com/36980730/41166315-ea2d3d20-6b0d-11e8-9f75-b9f1f1f50053.png)
## Parameters page 
 Allows user to create and update parameters displaying the readings and the date of last update.

![screenshot 28](https://user-images.githubusercontent.com/36980730/41166416-324fd04a-6b0e-11e8-8807-851be70005e6.png)
## Database page 
 Populated with common saltwater aquarium fish, invertebrates, and corals, this page allows users to search through the database and add specimen to their tanks.

![screenshot 29](https://user-images.githubusercontent.com/36980730/41166420-342450da-6b0e-11e8-8a53-ef35617bc920.png)
## Info page 
 The modal on the login page directs users here for a more in-depth guide on what the app is and how to use it.

## Tech-stack
- react / react-redux / react-dom
- redux / redux form / redux thunk
- node
- express
- mongo/mongoose
- jwt-decode
- moment

Actions, components, and reducers have all been separated into their own folders inside the src folder. The actions folder contains files named after the components with the actions for the component they've been named after. The reducers folder contains reducers for all the actions all connected by combineReducers inside the index.js file.

The main component for this app is the App.js file which renders the landing page, the dashboard, and the registration page. The dashboard then renders each of the components listed above. Except for the home and info components each of these components are placed inside their own folders with nested folders containing the components they are meant to render.
