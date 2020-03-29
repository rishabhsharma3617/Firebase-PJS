const guideList = document.querySelector('.guides')
const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

//setup ui
const setupUi = (user) => {
    if(user)
    {
        loggedInLinks.forEach(item => item.style.display = 'block')
        loggedOutLinks.forEach(item => item.style.display = 'none')
    } else {
        loggedInLinks.forEach(item => item.style.display = 'none')
        loggedOutLinks.forEach(item => item.style.display = 'block')
    }
}


//setup guides
const setupGuides = (data) => {
    if(data.length)
    {
        console.log(data.length)
        let html = ''
        data.forEach(doc => {
            const guide = doc.data()
            const li = `<li>
            <div class="collapsible-header grey lighten-4">${guide.title}</div>
            <div class="collapsible-body white">${guide.content}</div>
            </li>`
            html += li
        });
        guideList.innerHTML = html
    }
   else
   {
    guideList.innerHTML = '<h5>Login to view th Web series descriptions</h5>'
   }
   
}


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });