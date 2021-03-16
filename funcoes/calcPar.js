const calcPar = (numero) => {

    let contador = 0;

    for (var i = 0; i <= numero; i++) {

        if((i % 2) == 0){
            contador++;
        }
    }
    return contador;
}

export default calcPar