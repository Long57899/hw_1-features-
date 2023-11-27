const click = document.getElementById('clicker__counter');
const img = document.getElementById("cookie");
let clicks = 0;

img.onclick = () =>{
    clicks ++;
    click.innerHTML = clicks

    if (click.innerHTML %2 ===1){
        img.width += 20;
        img.height += 20;
        
    } else {
        img.width -= 20;
        img.height -= 20;
        
    }
}

