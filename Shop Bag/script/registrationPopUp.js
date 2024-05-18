//registration popup
const goToRegister = document.querySelector(".go-to button");
const registrationPopUp = document.querySelector(".registrationPopUp");
const registrationFormBox = document.querySelector(".registrationFormBox")
const paddingRight = 34 + "px";
const cricle = document.querySelector(".cricle");
let unlock = false;
goToRegister.addEventListener("click", () => {
    const basketModule = JSON.parse(localStorage.getItem("bag"));
    if (!basketModule || basketModule.length < 1) return
    unlock = !unlock;
    if (unlock) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = paddingRight;
        registrationPopUp.style.visibility = "visible";
        registrationPopUp.style.opacity = "1";
        registrationFormBox.style.transform = " translate(0, 0%) perspective(600px) rotateX(0deg)";
    }
})

registrationPopUp.addEventListener("mousedown", () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    registrationPopUp.style.visibility = "";
    registrationPopUp.style.opacity = "";
    registrationFormBox.style.transform = "";

    setTimeout(() => {
        unlock = !unlock;
    }, 700)
})
registrationFormBox.addEventListener("mousedown",(e) => e.stopPropagation());

cricle.addEventListener("click", () => {
    document.body.style.paddingRight = "0";
    registrationPopUp.style.visibility = "";
    registrationPopUp.style.opacity = "";
    registrationFormBox.style.transform = "";
    document.body.style.overflow = "";
    setTimeout(() => {
        unlock = !unlock;

    }, 700)
})

const users = [{ mail: "gevorg.amiryan3@gmail.com", password: "Amiryan2024" }]

localStorage.setItem("users", JSON.stringify(users))
const email = registrationFormBox.querySelector(".emailBox input");
const password = registrationFormBox.querySelector(".passwordBox input");
const loginBtn = registrationFormBox.querySelector(".loginBtn");

loginBtn.addEventListener("click", () => {
    const localUsers = JSON.parse(localStorage.getItem("users"));
    return new Promise((res, err) => {
        localUsers.forEach(element => {
            if (element.mail === email.value && password.value === element.password) {
                res();
            } else {
                err("wrong email or password")
            }
        });
    }).then(() => {
        document.querySelector(".error")?.remove();
        payment.click()
    }).catch(() => {
        const loginBox = registrationFormBox.querySelector(".login");
        const errorMesagge = document.createElement("p");
        errorMesagge.className = "error";
        errorMesagge.innerText = "worng email or password";
        loginBox.querySelector(".error")?.remove();
        loginBox.append(errorMesagge);
    })
})