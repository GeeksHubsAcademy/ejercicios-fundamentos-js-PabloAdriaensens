// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

var i = 0;

while (i <= 100) {
    i = i + 1;

    const multiploTres = i % 3 === 0;
    const multiploCinco = i % 5 === 0;

    if(multiploTres || multiploCinco) {
        if(multiploTres && multiploCinco) {
            console.log("GEEKSHUBS");
        }else {
            console.log(multiploTres ? "GEEKS" : "HUBS");
        }
    }else {
        console.log(i);
    }
}

