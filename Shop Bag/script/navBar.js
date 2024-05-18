// mobile navBar event animation

const navBar = document.getElementById("handleNavBar");
const navBarSpan = [...document.querySelectorAll(".navBarSpan")];
const nav = document.getElementById("nav")
let isRotate = false;
nav.onclick = (e) => e.stopPropagation()
navBar.addEventListener("click", function (e) {
    e.stopPropagation()
    isRotate = !isRotate;
    if (isRotate) {
        navBarSpan[2].style.transform = "rotateZ(-45deg) translate(-0px, -6px)";
        navBarSpan[1].style.display = "none";
        navBarSpan[0].style.transform = "rotateZ(45deg) translate(-6px, 0px)";
        nav.className = "InLeftHandMenu";
        setTimeout(() => {
            nav.style.left = "0"
        }, 0)
    } else {
        navBarSpan[0].style.transform = "";
        navBarSpan[1].style.display = "";
        navBarSpan[2].style.transform = "";
        nav.style.animationDirection = "alternate-reverse";
        nav.style.animationFillMode = "forwards";
        nav.style.left = "-200px";
    }
})


document.body.addEventListener("click", () => {
    if (isRotate) {
        isRotate = !isRotate
        navBarSpan[0].style.transform = "";
        navBarSpan[1].style.display = "";
        navBarSpan[2].style.transform = "";
        nav.style.animationDirection = "alternate-reverse";
        nav.style.animationFillMode = "forwards";
        nav.style.left = "-200px";
    }

})

// navBar animation for resize

window.addEventListener("resize", () => {
    if (window.innerWidth > 870) {
        nav.className = ""
        nav.style = "";
        navBarSpan[0].style.transform = "";
        navBarSpan[1].style.display = "";
        navBarSpan[2].style.transform = "";
        isRotate = false;


    }
})
