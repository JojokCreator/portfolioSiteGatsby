---
title: Bootcamper Social
stack: ReactJS, Express, PostgreSQL, CSS
slug: Bootcamper Social
thumb: ../images/thumbs/bootcampersocial.jpg
featuredImg: ../images/featured/bootcampersocial.jpg
github: "https://github.com/JojokCreator/w9_frontend-project"
live_version: "https://github.com/JojokCreator/w9_frontend-project"
---

This is the result of our Mid-way project for School of Code, we were presented with the task of creating an app that would help boot campers through this experience. After some discussion, we decided to create an App centred around meeting other boot campers outside of Bootcamp Hours. We used Agile methods working in a team of 4 to plan, produce and test the project in 5 days.
<br></br>
## Features
<li>RESTful API with Node.js, Express, and Postgres.</li>
<li>CRUD Routes for Users & Events</li>
<li>React.JS front end with full JWT login from scratch</li>
<li>Filters and search to filter the events </li>

The authentication is provided using JSON Web Tokens the expiry times for the tokens can be changed in the utils/jwt.helpers.js file. When logged in the user receives a short-lived access token that is exchanged with a refresh token automatically that keeps the user logged in. The access token is decryptable to allow access to the users' email and user_id.