# tech-blog

User Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
Acceptance Criteria
GIVEN a CMS-style blog site

WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
Mock-Up
The following animation demonstrates the application functionality:

Animation cycles through signing into the app, clicking on buttons, and updating blog posts.

Getting Started
Your application’s folder structure must follow the Model-View-Controller paradigm. You’ll need to use the express-handlebars Links to an external site.package to use Handlebars.js for your Views, use the MySQL2 Links to an external site.and Sequelize Links to an external site.packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

You’ll also need the dotenv package Links to an external site.to use environment variables, the bcrypt package Links to an external site.to hash passwords, and the express-session Links to an external site.and connect-session-sequelize Links to an external site.packages to add authentication.

NOTE
The express-session Links to an external site.package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.

Grading Requirements
NOTE
If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

A repository that has no code

A repository that includes a unique name but nothing else

A repository that includes only a README file but nothing else

A repository that only includes starter code

This Challenge is graded based on the following criteria:

Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

Application’s folder structure follows the Model-View-Controller paradigm.

Uses the express-handlebars Links to an external site.package to use Handlebars.js for your Views.

Application must be deployed to Heroku.





Yes, of course! Express Handlebars is a templating engine for Node.js and Express.js, it helps you to generate HTML from your data model in an efficient and clean way. Here's a step by step guide on how to use Express Handlebars:

    Install Express Handlebars: You can install Express Handlebars by running the following command in your terminal:

npm install express-handlebars

    Configure Express Handlebars: In your Express.js application, you need to require the express-handlebars package and set it as your view engine. You can configure it as below:

php

const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

// Set handlebars as view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

    Create Layout and Partials: In Express Handlebars, you can create layouts, which acts as a wrapper for your views, and partials, which are reusable components, to reduce duplication in your views. You can create layouts in the views/layouts directory, and partials in the views/partials directory.

    Render Views: To render views using Express Handlebars, you can use the res.render method, which takes in two arguments: the name of the view file and an object containing the data to be passed to the view. Here is an example:

javascript

app.get("/", (req, res) => {
  res.render("index", { title: "Express Handlebars Example" });
});

    Access Data in Views: In your views, you can access the data passed to it by using the Handlebars syntax. For example:

css

<h1>{{ title }}</h1>

That's it! You are now ready to use Express Handlebars in your Express.js applications.
billingwalters@gmail.com
can you explain mvc  with examples please?

MVC stands for Model-View-Controller, it is an architectural pattern used in software engineering for designing applications. It separates an application into three parts:

    Model: Represents the data layer, responsible for data retrieval and storage. It defines the structure of the data and the business logic for manipulating the data. Example: A database model representing a User entity with name, email, password, etc.

    View: Displays the data to the user and provides a way for the user to interact with the application. It is responsible for rendering the data from the model in a format that the user can understand. Example: A web page with a form for entering user details.

    Controller: Acts as a bridge between the Model and the View, it handles the user's input, retrieves the data from the model and updates the view accordingly. It processes the requests from the user, and acts as a coordinator between the model and the view. Example: A server-side code processing a form submit request, validating the user's input and updating the user's details in the database.

The main advantage of the MVC architecture is separation of concerns, as each component has its own specific responsibilities, making it easier to develop, test and maintain the application.

In summary, MVC allows for clean separation of data, presentation, and control in an application.