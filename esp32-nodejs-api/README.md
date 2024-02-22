# useful links

https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/


# startup steps

npm init

npm i express dotenv cors helmet

npm i -D @types/node @types/express @types/dotenv @types/cors @types/helmet

crteate ".env" file with
PORT=3000

# firebase / firestore stuff
npm install -g firebase-tools

## login on firebase
firebase login

## init proj (for firestore and hosting)
firebase init
- and select "firestore"

## add to .env file
fb_apiKey = <firebase apiKey>
fb_authDomain = <firebase authDomain>
fb_projectId = <firebase projectId>
fb_storageBucket = <firebase storageBucket>
fb_messagingSenderId = <firebase messagingSenderId>
fb_appId = <firebase appId>


NOTE: i don't remember if firebase init generates some firebase.config file or not.. anyway, move parameters to .env file and link them in the js app with "process.env.<variable_name>"


# build command
npm install

# run locally with
npm start

or

node server.js


# deploy
Render "For hobbyists, students, and indie hackers" has a free tier (with some limitation on bandwith and server's cpu etc). it doesn't ask for a credit card.

https://render.com/

1. create a render account, create a web-service (node), link this git repo. As the github repo include more projects, as "base dir" configure esp32-nodejs-api.
1. copy .env variables on render's environment var console
1. as build command: "npm install"
1. as run command: "node server.js"
