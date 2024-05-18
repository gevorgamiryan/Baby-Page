const shops = document.querySelector(".shops");
let childrenItems = [...shops.children];


let cardItem = (elem) => {
  const arrowBottom = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
<path d="M1.03283 1.19408L4.59938 5.81706" stroke="#2E2A2A" stroke-width="2" stroke-linecap="round"></path>
<path d="M8.21134 1.15722L4.59405 5.84597" stroke="#2E2A2A" stroke-width="2" stroke-linecap="round"></path></svg>`

  const itemContainer = document.createElement("div");
  itemContainer.className = "line2";
  itemContainer.id = elem.id;
  const imgBox = document.createElement("div");
  imgBox.className = "imgdiv";

  const itemImg = document.createElement("img");
  itemImg.src = elem.src;

  const itemAbout = document.createElement("div");
  itemAbout.className = "items1";

  const about = document.createElement("span");
  about.innerText = elem.name;

  const aboutName = document.createElement("span");
  aboutName.innerText = elem.about;

  const aboutLink = document.createElement("span");
  aboutLink.innerText = "Veiw More Detials";

  const sizesAndCuantity = document.createElement("div");
  sizesAndCuantity.className = "sizes-quantity-order-items";

  const size = document.createElement("button");
  size.className = "btn1";
  size.innerHTML = `3-6 Mthns ${arrowBottom}`;

  const quantity = document.createElement("button");
  quantity.className = "btn2";
  quantity.innerHTML = `1 ${arrowBottom}`;

  const orderValue = document.createElement("div");
  orderValue.className = "order-value";

  const price = document.createElement("span");
  price.innerText = "$" + elem.price;

  const remove = document.createElement("a");
  remove.innerText = "Remove item";
  remove.onclick = () => removeToCard(itemContainer, elem, true)
  const save = document.createElement("a");
  save.innerText = "Save For Latter";

  itemContainer.append(imgBox, sizesAndCuantity);
  imgBox.append(itemImg, itemAbout);
  itemAbout.append(about, elem.about?aboutName:"", aboutLink);
  sizesAndCuantity.append(size, quantity, orderValue);
  orderValue.append(price, remove, save);

  return itemContainer;
}
const goToShop = document.querySelector(".head h2")
goToShop.addEventListener("click",()=> {
  a1.click()
})
const subTotal = document.querySelector(".subTotal");
const orderTotal = document.querySelector(".orderTotal");
const afterTotal = document.querySelector(".after");
let basket = JSON.parse(localStorage.getItem("bag"));
let sum = 0;
if (!basket) {
  localStorage.setItem("bag", JSON.stringify([]));
  basket = JSON.parse(localStorage.getItem("bag"));
} else {
  basket.forEach((el) => {
    sum += +el.price;
  })
  subTotal.innerText = `$${sum % 1 === 0 ? sum + ".00" : sum.toFixed(2)}`;
  orderTotal.innerText = `$${sum % 1 === 0 ? sum + ".00" : sum.toFixed(2)}`;
  afterTotal.innerText = `Your bag contains ${basket.length} items and comes to a total of $${sum % 1 === 0 ? sum + ".00" : sum.toFixed(2)}`
}


const emptyCard = document.createElement("div");
emptyCard.className = "emptyDiv";
emptyCard.innerText = "card is empty";
if (basket.length < 1) {
  shops.appendChild(emptyCard);
}

const removeItem = (data) => {
  childrenItems = [...shops.children];
  if (basket.length < 1) {
    shops.appendChild(emptyCard);
  }
  childrenItems.map((elem) => {

    if (elem.innerHTML.includes(`src="${data.src}"`)) {
      shops.removeChild(elem);
    }
  })

}


const createClothBox = (el) => {
  let isBagged = basket.findIndex((item) => item.place == el.place);
  const clothBox = document.createElement("div");
  const clothBoxSpan = document.createElement("span");
  const clothBoxImg = document.createElement("img");
  clothBoxImg.setAttribute("draggable", "false");
  const clothBoxName = document.createElement("h1");
  const ClothBoxPrice = document.createElement("p");
  const clothBoxButtonBox = document.createElement("div");
  const btn = document.createElement("button");
  btn.onclick = (e) => addToCard(e, el, clothBox);
  let svg = document.createElement("i");
  svg.setAttribute("class", `${el.liked === true ? "fa fa-heart" : "fa fa-heart-o"}`);
  svg.classList.add("svgDiv");
  svg.onclick = (e) => toggleClick(e, el);
  clothBox.id = el.id;
  clothBox.className = "carusell";
  clothBox.classList.add("carusells");
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
  clothBox.appendChild(svg);
  clothBox.appendChild(clothBoxSpan);
  clothBox.appendChild(clothBoxImg);
  clothBox.appendChild(clothBoxName);
  clothBox.appendChild(ClothBoxPrice);
  clothBox.appendChild(clothBoxButtonBox);
  return clothBox;

}



const toggleClick = (e, el) => {
  el.liked = !el.liked;
  let getAttribute = e.target.getAttribute("class");
  if (el.liked) {
    e.target.className = getAttribute.replace("fa fa-heart-o", "fa fa-heart")
  } else {
    e.target.className = getAttribute.replace("fa fa-heart", "fa fa-heart-o")
  }
}


const addToCard = (e, el) => {
  childrenItems = [...shops.children];

  if (e.target.innerText == "Add To Card") {
    if (basket.length + 1 === 1) {
      emptyCard.remove();
    }
    basket.push(el);
    sum += +el.price;
    subTotal.innerText = `$${sum % 1 === 0 ? sum + ".00" : sum.toFixed(2)}`;
    orderTotal.innerText = `$${sum % 1 === 0 ? sum + ".00" : sum.toFixed(2)}`;
    afterTotal.innerText = `Your bag contains ${basket.length} items and comes to a total of ${46.98}`
    e.target.innerText = "Remove From Card";
    localStorage.setItem("bag", JSON.stringify(basket));
    shops.append(cardItem(el));


  } else {
    sum -= +el.price;
    subTotal.innerText = `$${sum % 1 === 0 ? sum + ".00" : sum.toFixed(2)}`;
    orderTotal.innerText = `$${sum % 1 === 0 ? sum + ".00" : sum.toFixed(2)}`;
    afterTotal.innerText = `Your bag contains ${basket.length} items and comes to a total of ${46.98}`
    basket.forEach((elem, index) => {
      if (elem.place === el.place) {
        basket.splice(index, 1)
      }
    });
    removeItem(el);

    localStorage.setItem("bag", JSON.stringify(basket));
    e.target.innerText = "Add To Card";
  }
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
    id: "cloth5",
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
    id: "cloth6",
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
    id: "cloth7",
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
    id: "cloth8",
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
  {
    place: 13,
    spanText: "new",
    src: "images/elip1.png",
    name: "Baby 2-Piece Pullover & Jogger Set",
    price: '22.99',
    button: "Add To Card",
    liked: false,
    paragraphText: "Baby Quarter Zip Fleece Pullover",
    id: "newCloth4",
  },
  {
    place: 14,
    spanText: "new",
    src: "images/elip2.png",
    name: "Baby 2-Piece Reindeer Outfit Set",
    price: '22.99',
    button: "Add To Card",
    liked: false,
    paragraphText: "Baby Quarter Zip Fleece Pullover",
    id: "newCloth4",
  },
  {
    place: 15,
    spanText: "new",
    src: "images/elip3.png",
    name: "Baby Chunky Knit Button-Front Cardigan",
    price: '22.99',
    button: "Add To Card",
    liked: false,
    paragraphText: "Baby Quarter Zip Fleece Pullover",
    id: "newCloth4",
  },

]
const clothes = document.querySelector(".clothes");
clotsData.map((el, index) => {
  if (index < 8) {
    clothes.append(createClothBox(el));
  }
})

let removeToCard = (e, el, isTrue) => {
  basket.forEach((elem, index) => {
    if (elem.place === el.place) {
      basket.splice(index, 1)
    }
  });

  sum -= +el.price;
  shops.removeChild(e);
  subTotal.innerText = `$${sum % 1 === 0 ? sum + ".00" : sum.toFixed(2)}`;
  orderTotal.innerText = `$${sum % 1 === 0 ? sum + ".00" : sum.toFixed(2)}`;
  afterTotal.innerText = `Your bag contains ${basket.length} items and comes to a total of ${46.98}`
  localStorage.setItem("bag", JSON.stringify(basket));
  if (isTrue) {
    [...document.querySelectorAll(".carusells")].map((elem) => {
      if (elem.id == e.id) {
        elem.querySelector("button").innerText = "Add To Card";

      }
    })
  }
  if (basket.length === 0) {
    shops.appendChild(emptyCard);
  }

}

let arrows = document.querySelectorAll(".wrapper span");
let isDrag = false, startX, startScrollLeft;
const firstClothWidt = clothes.querySelector(".carusell").offsetWidth;


let dragStart = (e) => {
  isDrag = true;
  clothes.classList.add("draging");
  startX = e.pageX;
  startScrollLeft = clothes.scrollLeft;
}

const draging = (e) => {
  if (!isDrag) return;
  clothes.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDrag = false;
  clothes.classList.remove("draging");
}


clothes.addEventListener("mousedown", dragStart);
clothes.addEventListener("mousemove", draging);
document.addEventListener("mouseup", dragStop);

arrows.forEach((el) => {
  el.onclick = () => {
    clothes.scrollLeft += el.id == "arrowLeft" ? -firstClothWidt : firstClothWidt;
  }
})


// new clothes carusell
const createNewClothBox = (el) => {
  const newClothBox = document.createElement("div");
  newClothBox.className = "newCloth";
  newClothBox.classList.add("newCarusell");
  newClothBox.classList.add("carusells");

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
  btn.onclick = (e) => addToCard(e, el, newClothBox);
  let svg = document.createElement("i");
  svg.id = "svg";
  svg.setAttribute("class", `${el.liked === true ? "fa fa-heart" : "fa fa-heart-o"}`);

  svg.classList.add("heartIcon");

  svg.onclick = (e) => toggleClick(e, el);
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
  return newClothBox;
}
const newClothes = document.querySelector(".newClothes");
clotsData.map((el, index) => {
  if (index > 7) {
    newClothes.append(createNewClothBox(el));
  }
})




let newArrows = document.querySelectorAll(".wrapper2 span");
let newIsDrag = false, newStartX, newStartScrollLeft;
const newFirstClothWidt = newClothes.querySelector(".newCarusell").offsetWidth;

let newDragStart = (e) => {
  newIsDrag = true;
  newClothes.classList.add("draging");
  newStartX = e.pageX;
  newStartScrollLeft = newClothes.scrollLeft;
}

const newDraging = (e) => {
  if (!newIsDrag) return;
  newClothes.scrollLeft = newStartScrollLeft - (e.pageX - newStartX);
}

const newDragStop = () => {
  newIsDrag = false;
  newClothes.classList.remove("draging");
}



newClothes.addEventListener("mousedown", newDragStart);
newClothes.addEventListener("mousemove", newDraging);
document.body.addEventListener("mouseup", newDragStop);

newArrows.forEach((el) => {
  el.onclick = () => {
    newClothes.scrollLeft += el.id == "arrowLeft2" ? -newFirstClothWidt : newFirstClothWidt;
  }
})


