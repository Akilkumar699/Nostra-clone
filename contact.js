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



