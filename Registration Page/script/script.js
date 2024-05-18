const registrationInputs = [...document.querySelectorAll(".registrationInputArea")]
const languageSelect = document.querySelector(".flagLi");
const languages = [...document.querySelectorAll(".li")];

const welcomeText = document.querySelector(".welcomeText span");
const gmail = document.querySelector(".gmail span");
const or = document.querySelector(".or span");
const showPassword = document.querySelector("label span");
const register = document.querySelector(".register");
const login = document.querySelector(".login span");
const loginRef = document.querySelector(".login a");
const registerBtn = document.querySelector(".mdl-button")
const showPasswordChekBox = document.getElementById("remember");
let currentLanguage = languages[2];
const loginBtn = document.querySelector(".loginBtn");


const errorName = document.createElement("span");
errorName.className = "errorName";
const errorEmail = document.createElement("span");
errorEmail.className = "errorEmail";
const errorPassword = document.createElement("span");
errorPassword.className = "errorPassword";
let loginOrRegister = false;
const wrongData = document.createElement("span");
wrongData.className = "wrongData";
wrongData.innerText = "Incorrect email or password";


showPasswordChekBox.addEventListener("change", () => {
    registrationInputs[2].type = registrationInputs[2].type === "text" ? "password" : "text";
})


const languageChange = function (el) {
    const languageData = {
        am: {
            welcome: "Բարի գալուստ",
            google: "Շարունակել Google-ի հետ",
            password: "ցույց տալ գաղտնաբառը",
            loginAsk: loginOrRegister ? "առայժմ չունեք հաշիվ?" : "ունեք հաշիվ?",
            login: loginOrRegister ? "գրանցել" : "Մուտք գործեք",
            register: "գրանցել",
            or: "կամ",
            errorName: "Սխալ անուն, օրինակ (Արմեն Պարսիյան)",
            errorEmail: "սխալ էլփոստ",
            errorPassword: "Գաղտնաբառը պետք է պարունակի առնվազն 6 տառ կամ թվեր",
            register: loginOrRegister ? "մուտք գործել" : "գրանցվել",
            wrongData: "Սխալ էլփոստ կամ գաղտնաբառ"
        },
        ru: {
            welcome: "добро пожаловать",
            google: "Продолжить с Google",
            password: "Показать пароль",
            loginAsk: loginOrRegister ? "еще нет учетной записи?" : "У вас уже есть аккаунт?",
            login: loginOrRegister ? "регистр" : "Войти",
            or: "или",
            errorName: "Неправильное имя, например (Армен Парсиян)",
            errorEmail: "Неправильный адрес электронной почты",
            errorPassword: "Пароль должен содержать не менее 6 букв или цифр",
            register: loginOrRegister ? "Войти" : "регистр",
            wrongData: "Неверный адрес электронной почты или пароль"

        },
        en: {
            welcome: "Welcome",
            google: "Continue with Google",
            password: "Show Password",
            loginAsk: loginOrRegister ? "Don't have an account yet?" : "Already have an account?",
            login: loginOrRegister ? "register" : "Log in",
            register: loginOrRegister ? "Sign in" : "register",
            or: "or",
            errorName: "Wrong name, for example (Armen Parsiyan)",
            errorEmail: "Wrong email address",
            errorPassword: "The password must contain at least 6 letters or digits",
            wrongData: "Incorrect email or password"
        }
    }
    const lang = el.textContent.toLowerCase()
    languageSelect.innerHTML = el.innerHTML;
    welcomeText.textContent = languageData[lang].welcome;
    gmail.textContent = languageData[lang].google;
    or.textContent = languageData[lang].or;
    showPassword.textContent = languageData[lang].password;
    register.textContent = languageData[lang].register;
    login.textContent = languageData[lang].loginAsk;
    loginRef.textContent = languageData[lang].login;
    errorPassword.textContent = languageData[lang].errorPassword;
    errorName.textContent = languageData[lang].errorName;
    errorEmail.textContent = languageData[lang].errorEmail;
    wrongData.textContent = languageData[lang].wrongData;

}

languages.map((el) => el.addEventListener("click", () => {
    currentLanguage = el;
    languageChange(currentLanguage);
})
)

const nameRegExp = /^[A-Z]+[a-z]+\s[A-Z]+[a-z]+/;
const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegExp = /[A-Z|a-z|0-9]{6,}/
registerBtn.addEventListener("click", (e) => {
    let trueValidation = true;

    document.querySelector(".errorName")?.remove();
    document.querySelector(".errorEmail")?.remove();
    document.querySelector(".errorPassword")?.remove();

    const form = document.querySelector(".form")
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (!loginOrRegister) {
        e.preventDefault();
        if (!nameRegExp.test(registrationInputs[0].value)) {

            trueValidation = false;
            errorName.textContent = "Wrong name, for example (Armen Parsiyan)";
            form.insertBefore(errorName, registrationInputs[1]);
        }
        if (!emailRegExp.test(registrationInputs[1].value)) {
            trueValidation = false;
            errorEmail.textContent = "Wrong email address";
            form.insertBefore(errorEmail, registrationInputs[2])
        }
        if (!passwordRegExp.test(registrationInputs[2].value)) {
            trueValidation = false;
            errorPassword.textContent = "The password must contain at least 6 letters or digits";
            form.append(errorPassword)
        }
        if (trueValidation) {
            users.push({ mail: registrationInputs[1].value, password: registrationInputs[2].value });
            localStorage.setItem("users", JSON.stringify(users))
            registrationInputs[0].value = "";
            registrationInputs[1].value = "";
            registrationInputs[2].value = "";
        }
    } else {
        e.preventDefault();
        const invalideUser = users.find((el) => el.password === registrationInputs[2].value && el.mail === registrationInputs[1].value) || false;
        if (!invalideUser) {
            form.append(wrongData)
        }
    }
    languageChange(currentLanguage);

})


loginBtn.addEventListener("click", () => {
    loginOrRegister = !loginOrRegister
    languageChange(currentLanguage);
    registrationInputs.map((el) => el.value = "")
    if (loginOrRegister) {
        registrationInputs[0].style.display = "none";
        document.querySelector(".errorName")?.remove();
        document.querySelector(".errorEmail")?.remove();
        document.querySelector(".errorPassword")?.remove();
        
        
    } else {
        registrationInputs[0].style.display = "";
        document.querySelector(".wrongData")?.remove();
    }
})