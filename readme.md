# Welcome to Airline - Booking Backend Application

# Project setup
 - clone project on your local
 - execute "npm install" on the same path as of your root directory of the downloaded project
 - Create ".env" file in the root directory and add the following environment variables
 - "PORT=3000"
 - Inside the "src/config" folder create a new file "config.json" and then add the following
 `````
  {
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_LOGIN_PASSWORD>",
    "database": "Flight_Search",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  }
 `````
- Once you have added your db config as listed above go to the source folder from your terminal and execute 
    " npx sequelize db:create "