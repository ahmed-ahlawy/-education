let body = document.body;
let profile = document.querySelector('.header .flex .profile')
 document.querySelector("#user-btn").onclick = () => {
  profile.classList.toggle('active')
  searchForm.classList.remove('active')
 }

let searchForm = document.querySelector('.header .flex .search-form')
 document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle('active')
  profile.classList.remove('active')
 }

 // side bar section 
let sideBar = document.querySelector('.side-bar')
 document.querySelector("#menu-btn").onclick = () => {
  sideBar.classList.toggle('active')
  body.classList.toggle('active')
 }
 // close side bar
 document.querySelector(".side-bar .close-side-bar").onclick = () => {
  sideBar.classList.remove('active')
  body.classList.remove('active')
 }

 window.onscroll = () => {
  profile.classList.remove('active')
  searchForm.classList.remove('active')

  if(window.innerWidth < 1200) {
   sideBar.classList.remove('active')
   body.classList.remove('active')
  }
 }

 // toggle dark mode 
 let toggleBtn = document.querySelector('#toggle-btn')
 let darkMode = localStorage.getItem('dark-mode')

 let enableDarkMode = () => {
  toggleBtn.classList.replace('fa-sun', 'fa-moon')
  body.classList.add('dark')
  localStorage.setItem('dark-mode', 'enabled')
 } 

 let disableDarkMode = () => {
  toggleBtn.classList.replace('fa-moon', 'fa-sun')
  body.classList.remove('dark')
  localStorage.setItem('dark-mode', 'disabled')
 } 

 if (darkMode === 'enabled') {
  enableDarkMode();
 }


 toggleBtn.onclick = (e) => {
  e.preventDefault()
  let darkMode = localStorage.getItem('dark-mode')
  
  if(darkMode === 'disabled') {
   enableDarkMode()
  } else {
   disableDarkMode()
  }

 }

