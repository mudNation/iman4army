const info = [
    {"first": "info 1", "second": "info 2", "third": "info 3"},
    {"first": "info 4", "second": "info 5", "third": "info 6"},
    {"first": "info 7", "second": "info 8", "third": "info 9"},
]

var modal; 
var close; 
var modalText; 

function galleryStart(){
    modal = document.getElementById("myModal");
    close = document.getElementsByClassName("close")[0];
    modalText = document.getElementById("modalText"); 

    close.onclick = function(){
        modal.style.display = "none";
    }

    var sections = document.getElementsByTagName("section"); 

    for(var i = 0; i < sections.length; i++){
        clickEvent(sections[i], i)
    }
}

function clickEvent(section, index){
    section.addEventListener("click", function(event){
        let width = section.offsetWidth; 
        let x = event.clientX; 

        let third = width/3; 
        let sub = width-x; 

        if(sub < third){
            modalText.textContent = info[index]["third"]
        }else if(sub > third && sub < (width-third)){
            modalText.textContent = info[index]["second"]
        }else{
            modalText.textContent = info[index]["first"]
        }

        modal.style.display = "block";

    }, false);
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}