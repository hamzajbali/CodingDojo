let btn = document.querySelector('.nav-btn');

function change() {
    if(btn.innerText=="Login"){
        btn.innerText="Logout";
    } else {
        btn.innerText="Login";
    }
 
}
function hide(element) {
    element.remove();
}