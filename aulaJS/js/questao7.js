function verificar(){
    let numero = document.querySelector("#numero").value;
    parseInt(numero);
    if(numero%3==0){
        document.querySelector("#resultado").innerHTML = 'Numero é Divisivel por 3';
    }else{
        document.querySelector("#resultado").innerHTML = 'Numero não é divisivel por 3';       
    }

}