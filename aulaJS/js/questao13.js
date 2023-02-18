function calcular(){
    let salario = parseFloat(document.querySelector("#salario").value);
    let prestacao = parseFloat(document.querySelector("#prestacao").value);

    if(prestacao>(salario*0.20)){
        document.querySelector("#resultado").innerHTML = "Não possivel realizar emprestimo pois prestação maior que 20%";
    }else{
        document.querySelector("#resultado").innerHTML = "Emprestimo possivel";        
    }

}