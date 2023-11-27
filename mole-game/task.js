let holes = document.getElementsByClassName("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");



for (let hole of holes) {
    hole.onclick = () => {
        if (hole.className.includes( 'hole_has-mole' )){
            +dead.innerHTML ++
            if (+dead.innerHTML === 10){
               alert("Победа!");
                dead.innerHTML = 0
               lost.innerHTML = 0
               
            }
        }else {
            +lost.innerHTML ++
            if (+lost.innerHTML === 5) {
                alert("Проигрыш!") 
                dead.innerHTML = 0
               lost.innerHTML = 0
            } 
        }
}}