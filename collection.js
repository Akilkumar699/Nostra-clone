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

// //Search

// var Search=document.getElementById("search")
// var container=document.getElementById("container")
// var list=document.querySelectorAll(".list")
// console.log(list)

// Search.addEventListener("keyup",function(){
//     validate=this.target.value.toUpperCase();
//     for(i=0;i<list.length;i++){
//         if(list[i].textContent.toUpperCase().indexOf(validate)<0){
//             list[i].style.display="none"
//         }
//         else{
//             list[i].style.display="block"
//         }
//     }
// })