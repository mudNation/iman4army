function start(){
    const menu = document.getElementsByClassName("menu")[0]; 
    const mobNav = document.getElementsByClassName("mobNav")[0];
    menu.onclick = function(){
        // alert(mobNav.style.display)
        if(mobNav.style.display !== "flex"){
            mobNav.style.display = "flex";
        }else{
            mobNav.style.display = "none";
        }
    }

    const close = document.getElementsByClassName("close")[0]; 
    close.onclick = function(){
        document.getElementsByClassName("cart")[0].style.display = "none";
        document.getElementsByClassName("cartIconHolder")[0].style.display = "flex"; 
    }

    const holder = document.getElementsByClassName("cartCHolder")[0]; 
    holder.onclick = function(){
        document.getElementsByClassName("cartIconHolder")[0].style.display = "none"; 
        document.getElementsByClassName("cart")[0].style.display = "flex"; 
    }
}

