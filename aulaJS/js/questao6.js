function calcular(){
    let capInicial = parseFloat(document.querySelector("#capitalInicial").value);
    let tempo = parseFloat(document.querySelector("#tempo").value);
    let juros = parseFloat(document.querySelector("#juros").value);
    let jurosP = (parseInt(1)+juros)


    let M = capInicial * Math.pow(jurosP,tempo);
    alert ("O valor vai se de "+M.toFixed(2));
}