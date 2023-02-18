function verificarMes(){
    let mes = document.querySelector("#mes").value;

    switch (mes) {
        case '1':
            document.querySelector("#resultado").innerHTML= 'Janeiro';
            break;
        case '2':
            document.querySelector("#resultado").innerHTML= 'Fevereiro';
            break;

        case '3':
            document.querySelector("#resultado").innerHTML= 'Março';
            break;  
        case '4':
            document.querySelector("#resultado").innerHTML= 'Abril';
            break;
        case '5':
            document.querySelector("#resultado").innerHTML= 'Maio';
            break;
        case '6':
            document.querySelector("#resultado").innerHTML= 'Junho';
            break;
        case '7':
            document.querySelector("#resultado").innerHTML= 'Julho';
            break;
        case '8':
            document.querySelector("#resultado").innerHTML= 'Agosto';
            break;
        case '9':
            document.querySelector("#resultado").innerHTML= 'Setembro';
            break;
        case '10':
            document.querySelector("#resultado").innerHTML= 'Outubro';
            break;
        case '11':
            document.querySelector("#resultado").innerHTML= 'Novembro';
            break;
        case '12':
            document.querySelector("#resultado").innerHTML= 'Dezembro';
            break;

        default:
            document.querySelector("#resultado").innerHTML= 'Mes Invalido';
            break;
    }
}