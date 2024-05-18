const bag = JSON.parse(localStorage.getItem("bag")) || [];
let bagItems = document.querySelector(".bagItems");

const createClothItem = (item) => {
    const itemBox = document.createElement("div");
    itemBox.className = "itemBox";

    const imgBox = document.createElement("div");
    imgBox.className = "imgBox";

    const img = document.createElement("img");
    img.src = item.src;

    const itemName = document.createElement("p");
    itemName.className = "itemName";
    itemName.innerText = item.name;
    imgBox.append(img, itemName);

    const button = document.createElement("button");
    button.innerHTML = `1 <i class="material-icons">keyboard_arrow_down</i>`;

    itemBox.append(imgBox, button);

    return itemBox
}
const total1 = document.querySelector(".total1 span");
const total4 = document.querySelector(".total4 span");
let sum = 0;
bag.map((el) => {
    sum += + el.price;
    bagItems.append(createClothItem(el))
})
total1.innerText = total4.innerText = `$${sum % 1 === 0 ? sum + ".00" : sum.toFixed(2)}`;
let currentDate = new Date();

const regExps = {
    nameOwner: /^[A-Z]+[a-z]+\s[A-Z]+[a-z]+/, // (Joe Lucka ) true | joe Lucka false
    cardNumber: /([0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4})/, // (0123-4567-8910-1112) === true 
    date: new RegExp(/^(0[1-9]|1[0-2])\/\d{4}$/),//for date (01/2024) true | (1/2024)false  
    cvc: /^\d{3}$/, // for card cvc 123
}
const inputs = document.querySelector(".inputs")
const nameInput = document.querySelectorAll(".inputs input")[0];
const cardNumberInp = document.querySelectorAll(".inputs input")[1];

const dateInput = document.querySelector(".date");
const cvcInput = document.querySelector(".cvc");
dateInput.addEventListener("keypress", (e) => {
    if (e.target.value.length == 2) {
        e.target.value += "/";
    }
})
cardNumberInp.addEventListener("keypress", (e) => {
    if (e.target.value.replaceAll("-", "").length % 4 == 0 && e.target.value.length !== 19 && e.target.value.length > 0) {
        e.target.value += "-";
    }

})
const flexRow = inputs.querySelector(".flexRow");

const confirmBtn = document.querySelectorAll(".buttons button")[1];

confirmPayment = (e) => {
    document.querySelector(".errorName")?.remove();
    document.querySelector(".errorNums")?.remove();
    document.querySelector(".errorDateOrCvc")?.remove();
    const errorDateOrCvc = document.createElement("div");
    errorDateOrCvc.className = "errorDateOrCvc";
    let valideDate = true;
    if (!regExps.cardNumber.test(cardNumberInp.value) || !regExps.nameOwner.test(nameInput.value)) {
        inputs.style.height = "450px"; 
        valideDate = false;
    }
    if (!regExps.nameOwner.test(nameInput.value)) {
        const errorName = document.createElement("span");
        errorName.innerText = "wrong Name for example (Joe Lucka)";
        errorName.className = "errorName";
        inputs.insertBefore(errorName, cardNumberInp);
        valideDate = false;

    }
    if (!regExps.cardNumber.test(cardNumberInp.value)) {
        const errorNums = document.createElement("span");
        errorNums.innerText = "write the 16 digit code on the card";
        errorNums.className = "errorNums";
        inputs.insertBefore(errorNums, flexRow);
        valideDate = false;

    }
    if (!regExps.date.test(dateInput.value)) {
        const errorDate = document.createElement("div");
        errorDate.className = "errorDate";
        errorDate.innerText = "indicate the correct expiration date of the card";
        errorDateOrCvc.append(errorDate);
        inputs.appendChild(errorDateOrCvc);
        valideDate = false;

    }
    if (!regExps.cvc.test(cvcInput.value)) {

        if (regExps.date.test(dateInput.value)) {
            errorDateOrCvc.style.flexDirection = 'row-reverse';
        }
        const errorCvc = document.createElement("div");
        errorCvc.className = "errorCvc";
        errorCvc.innerText = "enter the three-digit number on the card";
        errorDateOrCvc.append(errorCvc);
        inputs.appendChild(errorDateOrCvc);
        valideDate = false;

    }
    if(valideDate)alert("Succes")
    


}

confirmBtn.addEventListener("click", (e) => confirmPayment(e))
console.log(confirmBtn);
back.addEventListener("click", () => {
    history.back()
})