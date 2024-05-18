let clotsData = [
    {
        place: 1,
        spanText: "sale",
        src: "images/Rectangle 73.png",
        name: "One Piece",
        price: "18.00",
        liked: true,
        id: "cloth1",
        btn: 'Add To Card',
        about: "Baby Chunky Knit Button-Front Cardigan",
    },
    {
        place: 2,
        spanText: "sale",
        src: "images/Rectangle 74.png",
        name: "Baby Boys Sets",
        price: '13.00',
        liked: false,
        id: "cloth2",
        btn: 'Add To Card',
        about: "Baby 3-Piece Fleece Pullover Set",

    },
    {
        place: 3,
        spanText: "sale",
        src: "images/Ellipse 22.png",
        name: "Baby Boys Sets",
        price: '13.00',
        liked: false,
        id: "cloth3",
        btn: 'Add To Card',
        about: "Baby 3-Piece Fleece Pullover Set",

    },
    {
        place: 4,
        spanText: "sale",
        src: "images/Rectangle 76.png",
        name: "Baby Boys Sets",
        price: '13.00',
        button: "Add To Card",
        liked: false,
        id: "cloth4",
        btn: 'Add To Card',
        about: "Baby 4-Pack Long-Sleeve Bodysuits",

    },
    {
        place: 5,
        spanText: "sale",
        src: "images/Ellipse 17.png",
        name: "Jackets & Outerwear",
        price: '35.99',
        button: "Add To Card",
        liked: false,
        id: "cloth4",
        btn: 'Add To Card',
        about: "Baby 2-Piece Hooded Snowsuit",

    },
    {
        place: 6,
        spanText: "sale",
        src: "images/Rectangle 17.png",
        name: "Jackets & Outerwear",
        price: '13.00',
        button: "Add To Card",
        liked: false,
        id: "cloth4",
        btn: 'Add To Card',
        about: "Baby 3-Piece Reindeer Outfit Set",
    },
    {
        place: 7,
        spanText: "sale",
        src: "images/Rectangle 16 (1).png",
        name: "Baby Boys sets",
        price: '12.99',
        button: "Add To Card",
        liked: false,
        id: "cloth4",
        btn: 'Add To Card',
        about: "Baby 2-Piece Pullover & Jogger Set",

    },
    {
        place: 8,
        spanText: "sale",
        src: "images/Rectangle 16.png",
        name: "Baby Boys sets",
        price: '17.00',
        button: "Add To Card",
        liked: false,
        id: "cloth4",
        btn: 'Add To Card',
        about: "Baby 3-Piece Little Vest Set",

    },
    {
        place: 9,
        spanText: "new",
        src: "images/Rectangle 81.png",
        name: "Baby Boys Outerwear",
        price: '9.99',
        button: "Add To Card",
        liked: false,
        paragraphText: "Hooded patterned jacket",
        id: "newCloth1",
    },
    {
        place: 10,
        spanText: "new",
        src: "images/Rectangle 97.png",
        name: "Jackets & Outerwear",
        price: '15.20',
        button: "Add To Card",
        liked: false,
        paragraphText: "Baby Quarter Zip Fleece Pullover",
        id: "newCloth2",
    },
    {
        place: 11,
        spanText: "new",
        src: "images/Rectangle 84.png",
        name: "Sweaters & Hoodies",
        price: '19.99',
        button: "Add To Card",
        liked: false,
        paragraphText: "Baby Quarter Zip Fleece Pullover",
        id: "newCloth3",
    },
    {
        place: 12,
        spanText: "new",
        src: "images/Rectangle 99.png",
        name: "Baby Boys Outerwear",
        price: '22.99',
        button: "Add To Card",
        liked: false,
        paragraphText: "Baby Quarter Zip Fleece Pullover",
        id: "newCloth4",
    },

];

let locacion = +window.location.search.substring(1);

let productImg = document.querySelector(".imgDiv img");
productImg.src = "../Shop Bag/images/Rectangle 73.png" ;

// "product details " questions ... dropdown code

let dropValue = document.querySelector(".dropdownValue");

let svg = document.querySelector(".dropdownValue svg");

let ul = document.querySelector("#ul1");

let ul2 = document.querySelector("#ul2");

let p = document.querySelector(".section2 #p");


let istrue = true;


dropValue.onclick = () => {
    istrue = !istrue;
    if (istrue) {
        p.style.display = "block";
        ul.style.display = "block";
        ul2.style.display = "block";
        svg.style.transform = "rotateX(180deg)";
    } else {
        p.style.display = "none";
        ul.style.display = "none";
        ul2.style.display = "none";
        svg.style.transform = "rotateX(0deg)";
    }
}

// product colors change

const colors = [...document.querySelectorAll(".shopCard .colors span")]

const blue = colors[0];
const black = colors[1];
const brown = colors[2];

blue.addEventListener("click", (e) => {
    const colorName = document.getElementById("colorName");
    for (let i = 0; i < colors.length; i++) {
        colors[i].style.boxShadow = "unset"
    }
    e.target.style.boxShadow = `0 0 0 2px #fff, 0 0 0 4px #282A39`;
    colorName.innerText = "Colors: Blue"
})

black.addEventListener("click", (e) => {
    const colorName = document.getElementById("colorName");
    for (let i = 0; i < colors.length; i++) {
        colors[i].style.boxShadow = "unset"
    }
    e.target.style.boxShadow = `0 0 0 2px #fff, 0 0 0 4px #000000`;
    colorName.innerText = "Colors: Black"
})

brown.addEventListener("click", (e) => {
    const colorName = document.getElementById("colorName");
    for (let i = 0; i < colors.length; i++) {
        colors[i].style.boxShadow = "unset";
    }
    e.target.style.boxShadow = `0 0 0 2px #fff, 0 0 0 4px #A5683C`;
    colorName.innerText = "Colors: Brown";
})

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


// recomendet products event for bag <-- heart icons -->

const svgHearts = [...document.querySelectorAll(".heartSvg")];


svgHearts.map((el) => {
    let ishearted = false;
    el.addEventListener("click", (e) => {
        ishearted = !ishearted;
        if (ishearted) {
            el.innerHTML = el.innerHTML.replace(`stroke=""`, `stroke="red"`);
            el.style.fill = 'red';
            el.style.userSelect = "none";

        } else {
            el.innerHTML = el.innerHTML.replace(`stroke="red"`, `stroke=""`);
            el.style.fill = '';
        }
    })
})
