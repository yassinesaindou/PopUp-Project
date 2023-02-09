const btn = document.querySelector('.button');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close');
btn.addEventListener('click', function(){
    popup.classList.add('popup__show');
})
closeBtn.addEventListener('click', function(){
    popup.classList.remove('popup__show');
})

