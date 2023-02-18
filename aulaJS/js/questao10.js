function calcular(){
    let dinheiro = parseFloat(document.querySelector("#dinheiro").value);
    let combustivel = dinheiro/5;
    let distancia = 20*combustivel;
    document.querySelector("#resultado").innerHTML = "Voce pode comprar "+combustivel+" litros de combustivel e ira percorrer uma distancia de "+distancia+" KM";
}