const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const mobileNavbar = document.getElementById("mNav");

const btns1 = document.getElementById("btns1");
const btns2 = document.getElementById("btns2");
const btns3 = document.getElementById("btns3");
const btns4 = document.getElementById("btns4");
const btns5 = document.getElementById("btns5");
const btns6 = document.getElementById("btns6");
const btns7 = document.getElementById("btns7");
const scrollBtn = document.getElementById("scrollToTopBtn")
let visible = false;

window.onscroll = () => {
    scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

scrollBtn.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
btns2.onclick = () => {
    if(visible){
        mobileNavbar.style.display = "none";
        visible = false
    }
}
btns3.onclick = () => {
    if(visible){
        mobileNavbar.style.display = "none";
        visible = false
    }
}
btns4.onclick = () => {
    if(visible){
        mobileNavbar.style.display = "none";
        visible = false
    }
}
btns5.onclick = () => {
    if(visible){
        mobileNavbar.style.display = "none";
        visible = false
    }
}
btns6.onclick = () => {
    if(visible){
        mobileNavbar.style.display = "none";
        visible = false
    }
}
btns7.onclick = () => {
    if(visible){
        mobileNavbar.style.display = "none";
        visible = false
    }
}
openNav.onclick = () => {
    if (!visible){
        mobileNavbar.style.display = "grid";
        mobileNavbar.classList.add("open-animation");
        visible = true;
    }
}
closeNav.onclick = () => {
    if(visible){
        mobileNavbar.style.display = "none";
        visible = false
    }
}