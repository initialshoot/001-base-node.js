const fs = require('fs');
const { commandDir } = require('yargs');

let crearArchivo = (tipo, secuencia) => {

    return new Promise((resolve, reject) => {

        let tabla = '';
        var com = 2;
        var res;
        com = 3;
        var s = 1;
        var sec = secuencia;


        switch (tipo) {

            case 'numeros':
                var res = 0;
                var sec = secuencia;

                for (let i = 1; i <= secuencia; i++) {

                    s = s + 2

                    if (s >= 16) {

                        s = 1;

                    } else {
                        com = com + i - s;
                    }

                    res = sec - i + com;

                    if (res <= 0) {
                        res = (res * -1) + 1;

                    }

                    tabla += ` ${res}\n`
                    sec = res - com;

                }

                fs.writeFile(`tablas/tabla_de_${tipo}_con_${secuencia}_caracteres.txt`, tabla, (err) => {

                    if (err) {
                        reject(err)

                    } else {
                        resolve(`tabla_de_${tipo}_con_${secuencia}_caracteres.txt`);

                    }
                });

                break;

            case 'letras':
                const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

                for (let i = 1; i <= secuencia; i++) {
                    s = s + 2

                    if (s >= 10) {
                        s = 1;

                    } else {
                        com = i + s;

                    }

                    res = sec - s + i;

                    if (res <= 0) {
                        res = (res * -1) + 1;

                    }
                    if (res < 27) {
                        tabla += ` ${abc[res]}\n`

                    } else {

                        do {
                            res = res - s;

                        } while (res > 8);

                        tabla += ` ${abc[res]}\n`

                    }

                }

                fs.writeFile(`tablas/tabla_de_${tipo}_con_${secuencia}_caracteres.txt`, tabla, (err) => {

                    if (err) {
                        reject(err)

                    } else {
                        resolve(`tabla_de_${tipo}_con_${secuencia}_caracteres.txt`);

                    }
                });
                break;
        }

    });




};



function imprimirTabla(tipo, secuencia) {

    return new Promise((resolve, reject) => {

        var com = 2;

        if (!Number(secuencia)) {
            reject('inserte  un limite valido');
            return;

        }
        var res;
        com = 3;
        var s = 1;
        var sec = secuencia;

        if (tipo == 'numeros') {
            var res = 0;

            for (let i = 1; i <= secuencia; i++) {
                s = s + 2;

                if (s >= 16) {
                    s = 1;

                } else {
                    com = com + i - s;

                }
                res = sec - i + com;

                if (res <= 0) {
                    res = (res * -1) + 1;

                }
                console.log(`${res}`);
                sec = res - com;

            }
        } else {

            const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

            for (let i = 1; i <= secuencia; i++) {
                s = s + 2;

                if (s >= 10) {
                    s = 1;

                } else {
                    com = i + s;

                }
                res = sec - s + i;

                if (res <= 0) {
                    res = (res * -1) + 1;
                }

                if (res < 27) {
                    console.log(abc[res]);

                } else {
                    do {
                        res = res - s;
                    } while (res > 8);

                    console.log(abc[res]);

                }

            }
        }




    });
}


module.exports = {

    crearArchivo,
    imprimirTabla

};