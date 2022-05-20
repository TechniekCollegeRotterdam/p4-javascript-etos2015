const birds = document.querySelector('.bird');
let count = 0;


birds.addEventListener("click", function(){
    count = count + 50;
    //aan de bird class word styling toegevoegd
    //de styling is left 50px
    birds.style.left = count + "px";
});

