let menu = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menu.onclick= ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();
        document.querySelector('input[type="text"]').focus();
    }
});

