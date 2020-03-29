const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addAdminRole = functions.https.onCall((data , context) => {
    //get user and add the custom claim (admin)
    //we are sending the email from the fe as data
    //the below statement returs a promise
    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid , {
            admin : true
        })
    }).then(() => {
        return { 
            message : `Success! ${data.email} has been made an adminr`
        }
    }).catch(err => { return err})
})
