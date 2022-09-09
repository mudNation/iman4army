var index = 0; 
const secs = 800; 
function indexStart(){
    let images = document.getElementsByClassName("img"); 
    images[0].style.display = "block"

    setTimeout(timeout, secs);
}

function timeout(){
    // alert("time out"); 
    let images = document.getElementsByClassName("img"); 
    images[index].style.display = "none"; 

    index = index + 1 === images.length ? 0 : index+1; 
    
    images[index].style.display = "block"; 

    setTimeout(timeout, secs);
}