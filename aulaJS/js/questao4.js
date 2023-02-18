function verificar(){
    let maior=0;

    let n1 = parseInt(document.querySelector("#numero1").value);
    let n2 = parseInt(document.querySelector("#numero2").value);
    let n3 = parseInt(document.querySelector("#numero3").value);        

    if(n1>=maior){
        maior=n1
    }

    if(n2>=maior){
        maior=n2
    }

    if(n3>=maior){
        maior=n3
    }
    
    document.querySelector("#resultado").innerHTML='O maior numero é '+maior;

    n1=0;
    n2=0;
    n3=0;
    maior=0;
    
}