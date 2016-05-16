# helloSunshine is a weather search application.

### Technologies used:
Back-end is written in NodeJS, using EXPRESS framework to serve the content. Used token-based user authentication provided by 'jsonwebtoken'. Bcrypt was used for password encryption. [forecast.io](https://developer.forecast.io/) API was used to fetch the weather data. Additionally, used geolocation API to track user's current location.

Front-end is written in AngularJS. For token-based user authentication with AngularJS used [satellizer ](https://github.com/sahat/satellizer) module.



### Overview:
 Since the application is not complete, I haven't pushed to the master branch yet. The most current branch is 'restruct' branch.

 Currently user is able to successfully log in, to be authenticated with a token, land on the profile page where he/she can see the map with his/hers current location. Choose to see the current weather at location, as well as 3 day forecast.

 ### Unresolved issues:  
 * User is not able to search location and store his/hers searches to the database.
 * Weather forecast is displayed as plain text.
