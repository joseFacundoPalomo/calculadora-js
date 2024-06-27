function agregar(nro){
    let pantalla = document.getElementById('pantalla');
    
    pantalla.value += nro;   
    
}

function calcular(){
    let pantalla = document.getElementById('pantalla');
    let resultado = eval(pantalla.value);
    
    pantalla.value = resultado;   
    
}

function reset(){
    let pantalla = document.getElementById('pantalla');
    
    pantalla.value = "";   
    
}