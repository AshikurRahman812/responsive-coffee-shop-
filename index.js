let search = document.querySelector ('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    Navber.classList.remove('active');
}

let Navber = document.querySelector ('.Navbar');

document.querySelector('#menu-icon').onclick = () => {
    Navber.classList.toggle('active');
    search.classList.remove('active');
}


window.onscroll = () => {
    Navber.classList.remove('active');
    search.classList.remove('active');
}



let header = document.querySelector ('header');

window.addEventListener('scroll',  () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});