const navBar = document.getElementById("navBar")
function showNav(){
    navBar.style.right = "0px"
}
function hideNav(){
    // navBar.style.right = "calc(-1 * clamp(300px,50vw,500px))"
    navBar.style.right = "-70vw"
}
function scrollSlider(elm,i){
    const indicators = document.querySelectorAll(`.${elm.classList[1]}`)

    const el = elm.parentNode.nextElementSibling
    el.scroll({
        top:100,
        left:(i-1) * innerWidth,
        behavior: "smooth"
    })
}
function draftHireMessage(){
    const textarea = document.querySelector(".contact-textarea")
    const emailInput = document.querySelector(".contact-email")

    textarea.value = "Hey Abhijeet, we have a project for you. will share our vision to you via email so reply fast"
}
function handleSliderScroll(elm){
    let indicators = elm.previousElementSibling.children;
    let scrollDistance = elm.scrollLeft;
    
    const i = parseInt((scrollDistance + (32 * (1 + parseInt(scrollDistance / innerWidth)))) / innerWidth)


    if(!indicators[i].className.includes("active")){
        for(let j = 0; j < indicators.length; j++){
            if(i === j){
                indicators[i].classList.add("active")
                continue
            }
            else if(indicators[j].className.includes("active")){
                indicators[j].classList.remove("active")
            }
        }
    }
}

function animateProgress(){
    const progressElms = document.querySelectorAll(".progress")
    const elmOffset = window.pageYOffset + progressElms[0].getBoundingClientRect().top

    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    
    let distance = elmOffset - scrollTop - window.innerHeight
    if(distance > 0) return
    for (let i = 0; i < progressElms.length; i++) {
        const element = progressElms[i];
        element.style.width = "calc((100% - 2rem) * var(--percent))"
    }
    window.removeEventListener("scroll",animateProgress)
    
}

window.addEventListener("scroll",animateProgress)

// Register service worker
// if("serviceWorker" in navigator){
//     navigator.serviceWorker.register("/sworker.js")
//       .then(() => {
//         console.log("Service Worker Registered")
//       })
//       .catch(err => {
//         console.log("error registering service worker", err)
//       })
// }