let basket = JSON.parse(localStorage.getItem("bag"));
if (!basket) {
    localStorage.setItem("bag", JSON.stringify([]));
    basket = JSON.parse(localStorage.getItem("bag"));
}
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

const createClothBox = (el) => {
    let isBagged = basket.findIndex((item) => item.place == el.place);
    const clothBox = document.createElement("a");
    clothBox.href = "../product page/product.html";
    clothBox.addEventListener("click", (e) => {
        localStorage.setItem("currentProduct", JSON.stringify(el))
    })
    clothBox.style.color = "unset";
    clothBox.classList.add("item");
    const clothBoxSpan = document.createElement("span");
    const clothBoxImg = document.createElement("img");
    clothBoxImg.setAttribute("draggable", "false");
    const clothBoxName = document.createElement("h1");
    const ClothBoxPrice = document.createElement("p");
    const clothBoxButtonBox = document.createElement("div");
    const btn = document.createElement("button");
    btn.onclick = (e) => {
        e.preventDefault();
        addToCard(e, el, clothBox)
    };

    let svg = document.createElement("i");
    svg.setAttribute("class", `${el.liked === true ? "fa fa-heart" : "fa fa-heart-o"}`);
    svg.classList.add("svgDiv");
    svg.onclick = (e) => {
        toggleClick(e, el)
    };
    clothBox.id = el.id;
    clothBox.className = "carusell";
    clothBox.classList.add("item");
    clothBoxSpan.innerText = el.spanText;
    clothBoxImg.src = el.src;
    clothBoxImg.alt = "#";
    clothBoxName.innerText = el.name;
    ClothBoxPrice.innerText = "$" + el.price;

    if (isBagged === -1) {
        btn.innerText = "Add To Card";
    } else {
        btn.innerText = "Remove From Card";
    }

    clothBoxButtonBox.appendChild(btn);
    clothBox.append(svg, clothBoxSpan, clothBoxImg, clothBoxName, ClothBoxPrice, clothBoxButtonBox);
    return clothBox;
}
const toggleClick = (e, el) => {
    el.liked = !el.liked;
    e.preventDefault();
    e.stopPropagation();
    let getAttribute = e.target.getAttribute("class");
    if (el.liked) {
        e.target.className = getAttribute.replace("fa fa-heart-o", "fa fa-heart");
    } else {
        e.target.className = getAttribute.replace("fa fa-heart", "fa fa-heart-o");
    }
}
const addToCard = (e, el) => {
    e.stopPropagation();
    if (e.target.innerText === "Add To Card") {
        basket.push(el);
        e.target.innerText = el.btn = "Remove From Card";

    } else {
        basket.forEach((elem, index) => {
            if (elem.place === el.place) {
                basket.splice(index, 1)
            }
        });
        e.target.innerText = el.btn = "Add To Card";
    }
    localStorage.setItem("bag", JSON.stringify(basket));
}
const clothes = document.querySelector(".clothes");
clotsData.map((el, index) => {
    if (index < 8) {
        clothes.append(createClothBox(el));
    }
})



//new clothes box

const createNewClothBox = (el) => {
    const newClothBox = document.createElement("a");
    newClothBox.href = "../product page/product.html";
    newClothBox.style.color = "unset"
    newClothBox.className = "newCloth";
    newClothBox.classList.add("newCarusell");
    newClothBox.classList.add("item");


    const imgBox = document.createElement("div");
    imgBox.className = "imgDiv";
    const newClothBoxSpan = document.createElement("span");
    const newClothBoxImg = document.createElement("img");
    newClothBoxImg.setAttribute("draggable", "false");
    imgBox.append(newClothBoxSpan, newClothBoxImg);
    const newClothBoxName = document.createElement("h1");
    const newClothBoxParag = document.createElement("p");
    const newClothBoxButtonBox = document.createElement("div");
    newClothBoxButtonBox.className = "btnBlock";
    const btn = document.createElement("button");
    btn.onclick = (e) => {
        e.preventDefault();
        addToCard(e, el, newClothBox)
    };
    let svg = document.createElement("i");

    svg.id = "svg";
    svg.setAttribute("class", `${el.liked === true ? "fa fa-heart" : "fa fa-heart-o"}`);

    svg.classList.add("heartIcon");

    svg.onclick = (e) => {
        e.stopPropagation();
        toggleClick(e, el)
    };
    newClothBox.id = el.id ? el.id : "";
    newClothBoxSpan.innerText = el.spanText;
    newClothBoxImg.src = el.src;
    newClothBoxImg.alt = "#";
    newClothBoxName.innerText = el.name;
    newClothBoxParag.innerText = el.paragraphText;
    btn.innerText = "Add To Card";

    newClothBoxButtonBox.appendChild(btn);

    newClothBox.appendChild(svg);
    newClothBox.appendChild(imgBox);
    newClothBox.appendChild(newClothBoxName);
    newClothBox.appendChild(newClothBoxParag);
    newClothBox.appendChild(newClothBoxButtonBox);
    newClothBox.addEventListener("click", (e) => {
        localStorage.setItem("currentProduct", JSON.stringify(el))
    })

    return newClothBox;
}
const newClothes = document.querySelector(".newClothes");
clotsData.map((el, index) => {
    if (index > 7) {
        newClothes.append(createNewClothBox(el));
    }
})