var imgs =Array.from( document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");

var imgIndex = 0;

for(var i=0 ; i<imgs.length ; i++){
    imgs[i].addEventListener("click" , function(eventInfo){
        imgIndex = imgs.indexOf(eventInfo.target);
        console.log(imgIndex);
       var imgSrc =  eventInfo.target.getAttribute("src");
       lightBoxItem.style.backgroundImage =`url(${imgSrc})`;
        lightBoxContainer.style.display="flex";

    })
}

function nextSlide(){
    imgIndex ++;
       if(imgIndex == imgs.length){
             imgIndex =0;
       }
    imgSrc = imgs[imgIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage =`url(${imgSrc})`;
}

function prevSlide(){
    imgIndex --;
       if(imgIndex < 0){
             imgIndex = imgs.length -1;
       }
    imgSrc = imgs[imgIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage =`url(${imgSrc})`;
}

function closeSlide (){
    lightBoxContainer.style.display="none";
}

nextBtn.addEventListener("click" , nextSlide);
prevBtn.addEventListener("click" , prevSlide);
closeBtn.addEventListener("click" , closeSlide);

// document.body.addEventListener("click" , closeSlide)


document.addEventListener("keydown" , function(eventInfo){
    if(eventInfo.code == "ArrowRight"){
        nextSlide();
    }
    else if(eventInfo.code == "ArrowLeft"){
        prevSlide();
    }
    else if(eventInfo.code == "Escape"){
        closeSlide ()
    }
})

