MERN Google Books Search
==============================================
This is a full-stack MERN application I built for my coding bootcamp, which allows users to search for book titles and retrieve information about them by utilizing the Google Books API. It relies on a MongoDB database for data persistence, Express for routing from my server, React for serving up and manipulating front-end content, and Node as its runtime environment. Users can navigate between the search page, where they can search for and examine different books, and the saved page, where they can see any books they've chosen to add to their collection. They also have the option of deleting a book from their saved collection after they've added it.  

![Demo Gif]( "Demo gif")

## 🔑 How to Use the App:

On the search page, simply enter in a title (or partial title) of any book you'd like to search for, and the app will retrieve 15 titles from the Google books API and display them on the page after formatting the response object and mapping it to a card component.  

Each book displayed on the page has a "save book" button that you can press to save that particular book to your "saved" collection. You can click the saved navigation tab at any time to be routed to the saved books page, where you can view any of the books you've saved to your collection.

Enjoy!

## 📁 Deployment Instructions

Deployed version of the app can be found [here](https://stormy-badlands-29590.herokuapp.com/). To run this app on your machine, follow these instructions. 

1. Clone this repository down to your machine.
   
2. You will need to have [Node.js](https://nodejs.org/en/) installed as well as [MongoDB](https://www.mongodb.com/) in order to continue.
   
3. Enter `mongod` in your command line to start your database listening for requests. 
   
4. Enter `npm install` in your command line after navigating into the root directory, which will install the dependencies listed in the package.json.
   
5. Enter `npm start`, which will start the app on http://localhost:3000. For more options on running the app on your own machine or setting up builds for deployment, check out the Create-React-App docs linked below.
   
6. Navigate to http://localhost:3000 in your browser, or ctrl-click the link that will be logged to your console. Enjoy!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🔧 Technologies Used  

+ **HTML5** and **CSS3** for page content and styling.

+ [Bootstrap](https://getbootstrap.com/) as a CSS framework for styles and components.
  
+ [React.js](https://reactjs.org/) as the main UI library for serving up and manipulating front-end content.
  
+ [MongoDB](https://www.mongodb.com/) as the database.

+ [Javascript](https://www.javascript.com/) for the app's logic.
  
+ [Node.js](https://nodejs.org/en/) for the app's runtime environment.
  
+ [Express.js](https://expressjs.com/) for routing.

+ **NPM** for installation of the packages required by the app, listed as dependencies in the package.json.
  + [axios](https://www.npmjs.com/package/axios) as a promise based HTTP client.
  + [mongoose](https://www.npmjs.com/package/mongoose) for querying the mongo database. 
  + [express](https://www.npmjs.com/package/express) as a routing framework.
  + [react-router-dom](https://www.npmjs.com/package/react-router-dom) as a React routing library for navigating between pages.


## Acknowledgements

<div>Icons made by <a href="https://www.flaticon.com/authors/popcorns-arts" title="Icon Pond">Icon Pond</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

Background pattern is from Subtle Patterns


## 🌌 Author 

Thor Nolan—https://github.com/ThorNolan