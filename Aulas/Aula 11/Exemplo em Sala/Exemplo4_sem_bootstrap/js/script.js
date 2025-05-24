document.querySelector("#navbarHeader").style.display = "none"
document.querySelector("#icon_menu").addEventListener("click",function(){
    if (document.querySelector("#navbarHeader").style.display=="none"){
        document.querySelector("#navbarHeader").style.display = "flex"
    }else{
        document.querySelector("#navbarHeader").style.display = "none"
    }
})