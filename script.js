const lemonBottle = document.getElementById("lemonImg")
const chocbottle = document.getElementById("chocolateImg");
const homePageBack = document.getElementById("homePageBack")
const header = document.getElementById("header")
const body = document.getElementById("body")
const home = document.getElementById("home")
const about = document.getElementById("about")
const products = document.getElementById("products")
const contact = document.getElementById("contact")
function changeTheme() {
    chocbottle.style.zIndex = "100";
    lemonBottle.style.zIndex = "1"
    body.style.backgroundColor = "#33200d"
    homePageBack.style.backgroundColor = "#4a3623"
    header.style.backgroundColor = "#3f1f00"
    home.style.color = "white"
    about.style.color = "white"
    contact.style.color = "white"
    products.style.color = "white"
    

}
function Lemon(){
    
    lemonBottle.style.zIndex = "100"
    chocbottle.style.zIndex = "1"
    location.reload()
}
