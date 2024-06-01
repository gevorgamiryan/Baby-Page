const currentProduct = document.querySelector('.imgDiv img')
const clothData = JSON.parse(localStorage.getItem("currentProduct"))
const clothName = document.querySelectorAll(".shopCard span");
currentProduct.src = clothData.src
clothName[1].innerText = clothData.name;
clothName[4].innerText = "$" + clothData.price;

clothName.style.width = "100%";