function verificar(){
    let numero = document.querySelector("#numero").value;
    parseInt(numero);
    if(numero%2==0){
        document.querySelector("#resultado").innerHTML = 'Numero é Par';
    }else{
        document.querySelector("#resultado").innerHTML = 'Numero é Impar';       
    }

}