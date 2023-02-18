function calcular(){
    let minutos = parseInt(document.querySelector("#minutos").value);
    let hora = minutos/60;
    let dias = hora/24;
    document.querySelector("#resultado").innerHTML = "A quantidade de minutos é "+minutos+" a quantidade em horas é "+hora+" e a quantidade em dias é "+dias.toFixed(3);

}