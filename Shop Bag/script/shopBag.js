

let basket2 = JSON.parse(localStorage.getItem("bag"));
if (!basket2) {
    localStorage.setItem("bag", JSON.stringify([]));
    basket2 = JSON.parse(localStorage.getItem("bag"));
}
basket2.map((el) => {
    shops.append(cardItem(el))

})
