function sliderImg(e){
    document.querySelector("#celular").src = e
}

function trocarCor(corr){
    var circulo = document.querySelector("#circle");
    circulo.style.transition = "background-color 0.5s"; 
    
    circulo.style.backgroundColor = corr;
}