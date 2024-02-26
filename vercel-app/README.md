# useful links:
https://masteringbackend.com/posts/how-to-deploy-your-node-js-backend-project-to-vercel-a-step-by-step-guide

# startup steps for vercel-app project

npm init -y

npm i express dotenv firebase

crteate ".env" file with
PORT=4000

# firebase / firestore stuff
npm install -g firebase-tools

## login on firebase
firebase login

## init proj (for firestore and hosting)
firebase init
- and select "firestore"

complete the installation guide.  
it will create: firestore.rules, firestore.indexes.json, firebase.json, .firebaserc

## add to .env file
fb_apiKey = <firebase apiKey>
fb_authDomain = <firebase authDomain>
fb_projectId = <firebase projectId>
fb_storageBucket = <firebase storageBucket>
fb_messagingSenderId = <firebase messagingSenderId>
fb_appId = <firebase appId>

get those info from firebase console


# build command
<not needed>

# install command
npm install

# run locally with
node index.js

# deploy
Vercel is quite a good solution. really similar to Render, but maybe it doesn't have the cold-startup period of 20 seconds after 15min of non-use

https://vercel.com/

1. create a vercel account and link this git repo. As the github repo include more projects, as "base dir" configure the sub dir (e.g. vercel-app).
1. copy .env variables on vercel's environment var console
1. leave build command/all other commands by default

# cold start & inactivity
After some inactivity (5-6 minutes?) the server goes in sleeping mode, but the cold start is really fast (1.5")

normally responses take about 300millis to be processed

Compared to Render, it's slower when hot, but much faster on cold start.
