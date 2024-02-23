# useful links:
https://masteringbackend.com/posts/how-to-deploy-your-node-js-backend-project-to-vercel-a-step-by-step-guide

# startup steps for vercel-app project

npm init -y

npm i express dotenv firebase-tools

crteate ".env" file with
PORT=4000

# firebase / firestore stuff
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

# run locally with
node index.js
