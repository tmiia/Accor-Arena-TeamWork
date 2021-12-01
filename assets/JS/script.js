window.addEventListener("scroll", function(){
    let logo = document.querySelector("#logo");
        if(window.scrollY < 121){
            logo.className = "logo";
        }
        else{
            logo.className = "scrolled";
        }

})

let reservBtn = document.querySelector("#btn-reserver");
reservBtn.addEventListener("click", function(){
    console.log('open')
    let slide = document.querySelector("#slide");
    slide.classList.add("open-slide")
})

let closeReservBtn = document.querySelector("#btn-close-rsv");
closeReservBtn.addEventListener("click", function(){
    console.log('close')

    let slide = document.querySelector("#slide");
    slide.classList.remove("open-slide")
})

var firstCat = function(e){
    document.querySelectorAll(".tab-cats")[0].click()
}

window.addEventListener('load', firstCat)


function openTab(evt, tabActive) {
    var i, tabcontent, tabCates;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    tabCates = document.getElementsByClassName("tab-cats");
    for (i = 0; i < tabCates.length; i++) {
        tabCates[i].className = tabCates[i].className.replace(" active", " ");
    }
    
    document.getElementById(tabActive).style.display = "flex";
    evt.currentTarget.className += " active";
}