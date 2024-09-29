 # first-react-app
 My Portfolio

# Description
This is a personal portfolio website built using React, showcasing my skills and experience as an IT professional.

Getting Started
---------------
Prerequisites
Node.js 
npm 
React (version 18 or higher)

package.json
---------------
"dependencies":   
    "react"
    "react-dom"

  "devDependencies": 
    "parcel"
    "process"

------------- 
  "scripts": {
    "build": "parcel build index.html",
    "start": "parcel index.html"
  },

Exaplanation of above scripts block 
The above scripts block is used to define the build and start commands for the project. Here's a
breakdown of each command:

1) parcel build: This command tells Parcel to build  application in production mode.

2) index.html: This is the entry point of the application, which is the file that Parcel will use to build application.

"build": "parcel build index.html"
When run npm run build, Parcel will:

Take the index.html file as the entry point.
Bundle all the JavaScript and CSS files required by the application.
Minify and compress the code to reduce its size.

Output the built application in a new directory (usually dist or build)

"start": "parcel index.html"
This script is used to start the application in development mode. Here's what it does:

parcel: This command tells Parcel to start the development server.

index.html: This is the entry point of the application, which is the file that Parcel will use to serve the application.

When run npm start, Parcel will:

Take the index.html file as the entry point.

Start a development server that serves the application.
Watch for changes to your code and automatically reload the application when changes are detected.

How to use these scripts
To use these scripts, simply run the following commands in terminal:

npm run build: Builds application for production.
npm start: Starts application in development mode.

Installation
-----------------
Run npm install in the project root directory to install dependencies.

Running the Project
-------------------
Run npm start to start the development server.
Open a web browser and navigate to http://localhost:1234 to access the application.

Usage
-----
The application displays a portfolio website with the following sections:
Home: Introduction and background image
About: Brief bio and experience summary
Skills: List of technical skills
Contact: Contact information

Features
-----------------
Responsive design for desktop and mobile devices
Navigation menu with links to different sections
Image loading and styling using CSS

Technologies Used
-------------------
React (version 18)
JavaScript (ES6 syntax)
CSS (for styling)
JSX (for templating) javascript XML

More info
-------------
^ - caret - if in the future new version is released, ^ parcel will install automatically the minor versions like 2.12.1 to 2.12.5 ~ - tilde - it will also install the major updates 2.8, 3.0 is installed automatically - NOT RECOMMENDED -

To generate boilerplate code Emmet html:5 => tab Skeleton of html

JSX - React Elements - Javascript XML

React Components

Class based - Legacy - OOPS
Function based - js


Author
------------
Surjeet Kaur

Additional Resources
-------------------
React documentation: https://reactjs.org/docs/getting-started.html

Create React App documentation: https://create-react-app.dev/docs/getting-started/
