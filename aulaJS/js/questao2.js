function calcular(){
    let base = document.querySelector("#base").value;
    parseFloat(base);
    let altura = document.querySelector("#altura").value;
    parseFloat(altura);
    let resultado = document.querySelector("#resultado");
    let area = base*(altura/2); 
    resultado.innerHTML = 'Resultado = '+area; 

}