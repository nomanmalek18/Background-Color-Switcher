function changeBG(color){
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text");
    if(color == "#000000"){
        for (const elm of txt) {
            elm.style.color = "white";
        }
    }else{
        for (const elm of txt) {
            elm.style.color = "#000000";
        }
    }
}