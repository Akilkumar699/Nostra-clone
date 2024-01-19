//Popup Section

var popup=document.getElementById("popup")
var popupsection=document.getElementById("popup-section")
popup.addEventListener('click',function(){
    popupsection.style.display="none"
})

//Hide navbar

var toggleicon=document.getElementById("toggle-icon")
var hidenav=document.getElementById("hide-nav")
var hideicon=document.getElementById("hide-icon")

toggleicon.addEventListener('click',function(){
    hideicon.style.left="0"
})

hidenav.addEventListener('click',function(){
    hideicon.style.left="-50%"
})
    

//slide bar

// 


var sliderleftactivate=document.getElementById("slider-left-activate")
var sliderrightactivate=document.getElementById("slider-right-activate")
var slideimage=document.getElementById("slide-container")

var slideincrement=0;
console.log(sliderleftactivate)
sliderrightactivate.addEventListener('click',function(){
    slideincrement=slideincrement+100;
    if(slideincrement>200){
        slideincrement=0
        slideimage.style.marginLeft=slideincrement
    }
    else{

        slideimage.style.marginLeft="-"+slideincrement+"vw"
        console.log(slideimage)
    }
})

sliderleftactivate.addEventListener('click',function(){
    if(slideincrement===0){
        slideincrement=200
        slideimage.style.marginLeft="-"+slideincrement+"vw"
    }
    else{
        slideincrement=slideincrement-100
        slideimage.style.marginLeft="-"+slideincrement+"vw"
    }
})



var likebutton=document.querySelectorAll(".like-buttons")

console.log(likebutton)

likebutton.forEach((btn)=>{
    btn.addEventListener('click',function(event){
        if(event.target.src.indexOf("blackheart")>0){
            event.target.src="img/icons/redheart.png"
        }
        else{
            event.target.src="img/icons/blackheart.png"
        }
    })
})



