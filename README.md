# Welcome to AIVO Streaming App Challenge! 😁

This is the BFF for the React App.

## Let's start with Auth0 configuration:

- Go to Applications > Applications and create a new one
- Use the `domain` and `client ID` given to complete these env variables
- Into your app settings, add:
  - this link http://localhost:3000/home for ***Allowed Callback URLs***
  - this link http://localhost:3000 for ***Allowed Logout URLs***
  - both links http://localhost:3000 and http://localhost:3000/home for ***Allowed Web Origins***
- Then, into your account settings > Tenant Settings > Advanced, add:
  - both links http://localhost:3000 and http://localhost:3000/home for ***Allowed Logout URLs***

**Note: For env variables, use the env.template file as a guide to complete the variables with your Auth0 information account**

Now, you are ready to run the commands written below! 🚀

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all dependencies and dew dependencies.

### `npm run dev`

Runs the backend API in the development mode with Nodemon, the response must be: Server on port 3001

### `npm run build`

Builds the app for production to the `build` folder.\
The app is ready to be deployed!

### `npm start`

Runs the app in the build folder, the response must be: Server on port 3001.

## Inside client folder, you can run:

### `cd client`

And then:

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
