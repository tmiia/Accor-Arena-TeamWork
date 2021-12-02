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