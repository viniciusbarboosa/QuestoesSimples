function calcular() {
    let celsius = document.querySelector("#celsius").value;
    parseFloat(celsius);
    let F = ((9/5)*celsius)+32;
    document.querySelector("#resultado").innerHTML='O valor em Fahrenheit é '+F;
}