
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

const matriz = [];

const MAX_ELEM = 2;

for (let i = 0; i <= MAX_ELEM; i++) {
    const fila = [];

    for (let x = 0; x <= MAX_ELEM; x++){
        fila.push(String(i) + String(x));

    }

    matriz.push(fila);
}



console.log(matriz);