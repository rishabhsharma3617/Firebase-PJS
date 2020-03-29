

//listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        //get the data from the firestore
    db.collection('guides').get().then((snapshot) => {
    setupGuides(snapshot.docs)
    setupUi(user)
})

    } else {
        setupGuides([])
        setupUi()
    }
})

//signup a new user
const form = document.querySelector('#signup-form')
form.addEventListener('submit' , (e) => {
    e.preventDefault()

    //get user info
    const email = form['signup-email'].value
    const password = form['signup-password'].value
    //signing up the user
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        console.log(cred)
        // const modal = document.getElementById('modal-signup')
        // modal.style.display = "none"
       //  M.modal.getInstance(modal).close()
        form.reset()
    }).catch((err) => console.log(err))

})

//logout the existing user
const logout = document.querySelector('#logout')
logout.addEventListener('click' , (e) => {
    e.preventDefault()
    auth.signOut().then(() => {
        console.log("user is sined out")
    })
})

//logging the user in 
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit' , (e) => {
    e.preventDefault()

    //get user info
    const email = loginForm['login-email'].value
    const password = loginForm['login-password'].value

    auth.signInWithEmailAndPassword(email,password).then(cred => {
    console.log(cred)

    })
})