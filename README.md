# Frontend App
Simple frontend application with hot reloading, SpareBank1 Frontend Framework (FFE), Webpack, ReactJS, ExpressJS and Hot Module Replacement (HMR).

This application is with hot-reloading, which means the app will refresh whenever you save (ctrl + s).

## Structure

The file structure of the application is as follows:

### Top-level directory layout
    .
    ├── fonts
    ├── public
    |   ├── bundle.js
    |   ├── index.html
    |   └── sb1-logo.svg
    ├── src
    |   ├── backend
    |   |   └── server.js
    |   └── frontend
    |   |   ├── components
    |   |   |   └── header
    |   |   |       ├── Header.js
    |   |   |       └── Menu.js
    |   |   ├── styles
    |   |   |   ├── components
    |   |   |   └── header.less
    |   |   |   └── styles.less
    |   |   └── root.js
    |   └── main.js
    |   
    ├── package.json                     
    ├── README.md            
    └── webpack.config.js

## Prerequisites
Prior to running this application you need to install:
 * Node.js

## Running the application
To start the application we need to run the following commands
 * ```npm install```
 * ```npm start```

Now the server is running on default port 8080. Open a browser and navigate to http://localhost:8080

## Developing frontend code
Any changes to the code will be automatically reloaded by the browser. However, the code can be manually built using:
 * ```npm run build```
