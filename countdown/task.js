function countdown(){
    let time = document.getElementById('timer').innerHTML;
    if (time == 0){
        clearTimeout(time);
        alert("Вы победили в конкурсе!");
    }else{
        time --;
        document.getElementById('timer').innerHTML = time;
        time = setTimeout(countdown, 1000);
    }
}
countdown();
