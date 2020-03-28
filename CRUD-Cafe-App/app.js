const cafeList = document.getElementById('cafe-list')
const addCafe = document.getElementById('add-cafe-form')


//create a new cafe and render the output to the DOM
function renderCafe(doc){
   let li = document.createElement('li')
   let name = document.createElement('span')
   let city = document.createElement('span')
   let cross = document.createElement('div')

   li.setAttribute('data-id',doc.id)
   name.textContent = doc.data().name
   city.textContent = doc.data().city
   cross.textContent = 'x'

   li.appendChild(name)
   li.appendChild(city)
   li.appendChild(cross)

   cafeList.appendChild(li)
   //deleting data
   cross.addEventListener('click' , (e) => {
       e.stopPropagation()
       let id = e.target.parentElement.getAttribute('data-id')
        console.log(id)
        db.collection('cafes').doc(id).delete()

   })

}

//Getting data
// db.collection('cafes').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc)
//     });
// })

//Saving Data
addCafe.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(addCafe.name.value)
    db.collection('cafes').add({
        name : addCafe.name.value,
        city : addCafe.city.value
    })
})

//real-time lesitener
db.collection('cafes').orderBy('city').onSnapshot(snapshot => {
    let changes = snapshot.docChanges()
    changes.forEach(change => {
        if(change.type == 'added')
        {
            renderCafe(change.doc)
        }
        else if(change.type == 'removed')
        {
            console.log("removed called")
            let li = cafeList.querySelector('[data-id='+ change.doc.id + ']')
            cafeList.removeChild(li)
        }
    });
})