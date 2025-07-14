function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById("clock").innerHTML=time;
    setTimeout(clock,1000)
}
clock();