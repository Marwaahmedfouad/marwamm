let menu= document.querySelector('#barsbars');
let navbar= document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')

}