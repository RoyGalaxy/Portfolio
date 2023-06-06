const indicator = document.querySelector('.indicator');
const today = document.querySelector('.today');
const todayDateElm = document.querySelector('.today-date');
let boxElm;
let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];


function changeActiveTime(el){
    boxElm = document.querySelectorAll('.box')
    boxElm.forEach(elm => {
        if(!elm.className.includes("active"))return
        elm.classList.remove("active")
    });
    el.classList.add("active")
}

(function getDate(){
    let d = new Date();
    date = d.getDate();
    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    todayDateElm.innerHTML = `${day}, ${month} ${date}`;
})()



function indicate(object){
  let x = object.offsetLeft + (object.offsetWidth / 2) - (indicator.offsetWidth /2 );
   let y = object.offsetTop + object.offsetHeight + 10
   indicator.style.left = x+'px'
   indicator.style.top = y+'px'
}

indicate(today)