const lemonBottle = document.getElementById("lemonImg")
const chocbottle = document.getElementById("chocolateImg");
const homePageBack = document.getElementById("homePageBack")
const header = document.getElementById("header")
const body = document.getElementById("body")
const home = document.getElementById("home")
const about = document.getElementById("about")
const products = document.getElementById("products")
const contact = document.getElementById("contact")
const learnBtn = document.getElementById("LearnBtn")
const lemonBtn = document.getElementById("lemonBtn")
const buyBtn = document.getElementById("buyBtn")
function changeTheme() {
    chocbottle.style.zIndex = "100";
    lemonBottle.style.zIndex = "1"
    body.style.backgroundColor = "#33200d"
    homePageBack.style.backgroundColor = "#4a3623"
    header.style.backgroundColor = "#3f1f00"
    home.style.color = "#fff"
    about.style.color = "#fff"
    contact.style.color = "#fff"
    products.style.color = "#fff"
    learnBtn.style.backgroundColor = "#472b0e"
    learnBtn.style.color = "#ffffff"
    lemonBtn.style.zIndex = "200"
    buyBtn.style.color = "#5e4429"
    buyBtn.style.backgroundColor = "#fff"
}
function Lemon(){
    lemonBottle.style.zIndex = "100"
    chocbottle.style.zIndex = "1"
    location.reload()
}
