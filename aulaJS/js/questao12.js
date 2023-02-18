function calcular() {
    let valorR = parseFloat(document.querySelector("#valorR").value);
    let gorjeta = valorR * 0.10;
    document.querySelector("#resultado").innerHTML = "O valor da gorjeta fica de R$"+gorjeta+" e o valor total vai ficar de "+(valorR+gorjeta);
}