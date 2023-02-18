function calcular(){
    let salario = parseFloat(document.querySelector("#salario").value);

        if(salario<280){
            let salarioReaj = salario + (salario*0.20); 
            document.querySelector("#resultado").innerHTML='O salario antes do reajuste era de '+salario+' e depois do reajuste de 20% ficou '+salarioReaj;
        }else if((salario>=280) && (salario<700)){
            let salarioReaj = salario + (salario*0.15); 
            document.querySelector("#resultado").innerHTML='O salario antes do reajuste era de '+salario+' e depois do reajuste de 15% ficou '+salarioReaj;
        }else if((salario>=700) && (salario<1500)){
            let salarioReaj = salario + (salario*0.10); 
            document.querySelector("#resultado").innerHTML='O salario antes do reajuste era de '+salario+' e depois do reajuste de 10% ficou '+salarioReaj;
        }else if(salario>=1500){
            let salarioReaj = salario + (salario*0.05); 
            document.querySelector("#resultado").innerHTML='O salario antes do reajuste era de '+salario+' e depois do reajuste de 5% ficou '+salarioReaj;
        }
    
}