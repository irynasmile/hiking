console.log('hello world')
const nawbtn = document.querySelector('.mobile-nav__btn')
const mobileNav = document.querySelector('.mobile-nav')
const body = document.body

nawbtn.addEventListener('click', () => {
  mobileNav.classList.toggle('mobile-nav__active')
  nawbtn.classList.toggle('mobile-nav__span-close')
  body.classList.toggle('no-scroll')

  console.log(mobileNav, ':mobiileNav', nawbtn, 'nawbtn')
})
