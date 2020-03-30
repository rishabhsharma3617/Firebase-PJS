const requestModal = document.querySelector('.new-request')
const requestLink = document.querySelector('.add-request')

//Open the request Modal
requestLink.addEventListener('click' , () => {
    requestModal.classList.add('open')
})

requestModal.addEventListener('click' , (e) => {
    if(e.target.classList.contains('new-request')){
        //this is condition is embeded as if the user clicks otside the modal which we have
        //deffined in the target then the modal should close
        requestModal.classList.remove('open')
    }
})