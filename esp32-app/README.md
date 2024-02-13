# esp32-app
angular app created to communicate with esp32

# connected with firebase!

## start project
npm start

## to install firebase stuff
npm install firebase

npm install -g firebase-tools

# deploy firebase hosting
## login
firebase login

## init proj (for firestore and hosting)
firebase init

## DB firestore
create a cloud firestore DB project. create a collection "morse" and add something inside.

on "rule" change "allow read, write: if false;" to "allow read, write: if true;"
(this is ok for development only)

# release on Firebase Hosting
npm run build

firebase deploy --only hosting:esp32-olly
