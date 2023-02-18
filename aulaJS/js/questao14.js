function calcular(){
    let salario = document.querySelector("#salario").value;
    let salarioDesconto = salario*0.11;
    if(salarioDesconto>334.04){
        document.querySelector("#resultado").innerHTML = "O desconto previdenciario vai ser de R$ 334.04";
    }else{
        document.querySelector("#resultado").innerHTML = "O desconto previdenciario vai ser de R$ "+salarioDesconto;        
    }
}