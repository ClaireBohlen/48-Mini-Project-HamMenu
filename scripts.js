const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// Adding event listeners on the nav to remove and add classes

open.addEventListener('click', () => container.classList.add ('show-nav'))

//When the open class is clicked on we are going to add a class to the container 

close.addEventListener('click', ()=> container.classList.remove('show-nav'))

//When the close class is clicked on we are going to add a class to the container 