const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

//Http request 1  ---@ endpoint type of function
exports.randomNumber = functions.https.onRequest((req,res) => {
    const number = Math.round(Math.random() * 100)
    console.log(number)
    res.send(number.toString())
})

//http request 2 --@endpoint 
exports.toGithub = functions.https.onRequest((req,res) => {
    res.redirect('https://github.com/rishabhsharma3617')
})

//http Callable functions
exports.sayHello = functions.https.onCall((data,context) => {
    return `hello ${data.name}`
})