

//listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        //get the data from the firestore
    db.collection('guides').onSnapshot((snapshot) => {
    setupGuides(snapshot.docs)
    setupUi(user)
},err => console.log(err))

    } else {
        setupGuides([])
        setupUi()
    }
})
//create new guide
const createForm = document.querySelector('#create-form')
createForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    db.collection('guides').add({
        title : createForm['title'].value,
        content : createForm['content'].value
    }).then(() => {
        // close the modal and reset form 
        console.log("dbchdhcdhchbhdbc")
        const modal = document.querySelector('#modal-create')
        M.Modal.getInstance(modal).close()
        createForm.reset()
        setupGuides()
    }).catch(err => console.log(err))
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
        console.log("in function")
        return db.collection('users').doc(cred.user.uid).set({
            bio : form['signup-bio'].value
        })
        
    }).then(() => {
        console.log("vchvhch")
        // const modal = document.querySelector('#modal-signup')
        // M.modal.getInstance(modal).close()
        form.reset()
    }).catch(err => console.log(err))

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
    
    const modal = document.querySelector('#modal-login')
    M.modal.getInstance(modal).close()
    form.reset()

    })
})