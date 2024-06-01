

let basket2 = JSON.parse(localStorage.getItem("bag"));

if (!basket2) {
    localStorage.setItem("bag", JSON.stringify([]));
    basket2 = JSON.parse(localStorage.getItem("bag"));
}
basket2 = basket2.filter((el,ind,arr)=> {
    return arr.findIndex((elem) => el.price === elem.price ) === ind
}) 
basket2.map((el) => {
    shops.append(cardItem(el))

})
