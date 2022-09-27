function calcular (){
    let criptos = $('#criptos').val();
    let valor1 = Number($('#valor1').val());
    let mensaje = '';
    let resultado = 0;

    switch (criptos){
        case 'bitcoin':
            resultado = valor1 / 388436;
            mensaje = 'Con la cantidad de '+valor1+ ' se pueden comprar '+resultado+ ' Bitcoin\n';
            break;
        case 'etherium':
            resultado = valor1 / 26931;
            mensaje = 'Con la cantidad de '+valor1+ ' se pueden comprar '+resultado+ ' Etherium';
            break;
        case 'dogecoin':
            resultado = valor1 / 1.25;
            mensaje = 'Con la cantidad de '+valor1+ ' se pueden comprar '+resultado+ ' Dogecoin';
            break;
        case 'xrp':
            resultado = valor1 / 10;
            mensaje = 'Con la cantidad de '+valor1+ ' se pueden comprar '+resultado+ ' XRP';
             break;
        default:
                alert('No existe esta opcion!!!');
            break;       

    }

    //alert(mensaje + resultado);
    swal(mensaje.toString(),'success')
}

$(document).ready(function(){
    $('#btnCalcular').click(function(){
        calcular();
    });
});