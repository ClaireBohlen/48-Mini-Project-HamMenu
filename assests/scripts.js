const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


//add event listener for open and change the class name to show nav

open.addEventListener('click', () => {
    container.classList.add('show-nav')
})

//add event listener for close and remove the class name of show nav

close.addEventListener('click', ()=>{
    container.classList.remove('show-nav')
})