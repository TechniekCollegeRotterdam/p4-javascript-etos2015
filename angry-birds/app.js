const birds = document.querySelector('.bird');
let count = 0;


birds.addEventListener("click", function(){
    count = count + 50;
    //aan de bird class word styling toegevoegd
    //de styling is left 50px
    birds.style.left = count + "px";
});


window.addEventListener("keydown", function(e){
    console.log(e);
    if(e.key == "ArrowRight"){    
        count += 50;
        birds.style.left = count + "px";
        birds.src= "img/b-right.svg";
    }


if(e.key == "ArrowLeft"){    
    count -= 50;
    birds.style.left = count + "px";
    birds.src = "img/b-left.svg";
}

if(e.key == "ArrowUp"){    
    count += 50;
    birds.style.bottom = count + "px"
    birds.src= "img/b-up.svg";
}

if(e.key == "ArrowDown"){    
    count -= 50;
    birds.style.bottom = count + "px";
    birds.src= "img/b-down.svg";
}
});