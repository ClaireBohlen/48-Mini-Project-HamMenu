const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.contaoner')

open.addEventListener('click', () => contaoner.classList.add ('show-nav'))

close.addEventListener('click', ()=> contaoner.classList.remove('show-nav'))