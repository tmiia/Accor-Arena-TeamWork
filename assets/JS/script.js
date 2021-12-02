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

/* paralax */
let partSection = document.querySelector("#partenaire");
let midS = window.innerHeight /2;

let isVisible = function(element){   
    let inScreen = element.getBoundingClientRect();

    if(inScreen.top >= 0 &&
        inScreen.left >= 0 &&
        inScreen.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        inScreen.bottom <= (window.innerHeight || document.documentElement.clientHeight)){

        return true
    }
    else{
        return false
    }
}
let i =5;
let lastScrollTop = 0;
let paralax = function(){
    let line1 = document.querySelector("#line1");
    let line2 = document.querySelector("#line2");
    //let pos = partSection.getBoundingClientRect().top;

    if(isVisible(partSection)){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (scrollTop > lastScrollTop){
            line1.style.left = i+"px";
            line2.style.right = i+"px";

            i = i + 5;

        } else {
            line1.style.left = i+"px";
            line2.style.right = i+"px";

            i = i - 5;

        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
}

window.addEventListener("scroll", paralax)