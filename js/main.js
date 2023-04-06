const burger = document.querySelector('.menu__icon') 
const menu = document.querySelector('.menu__list') 

burger.addEventListener('click',() => {
   burger.classList.toggle('active')
   menu.classList.toggle('active')

   menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click',()=>{
         burger.classList.remove('active')
         menu.classList.remove  ('active')
      })
   })
})

