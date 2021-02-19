const argv = require('yargs')

.command('imprimir', 'Imprime la lista que desees de letras o numeros', {
    tipo: {
        alias: 't',
        demand: true
    },
    secuencia: {
        alias: 'l',
        demand: true

    },
    mayus: {
        alias: 'm',
        default: true
    }
})

.command('crear', 'Crea un archivo con la tabla ', {
        tipo: {
            alias: 't',
            demand: true
        },
        secuencia: {
            alias: 'l',
            demand: true
        },
        mayus: {
            alias: 'm',
            default: true
        }
    })
    .help()
    .argv;

const letras = require('./letras/letras');

let comando = argv._[0];

let tipo = argv.tipo;
let secuencia = argv.secuencia;

switch (comando) {
    case 'imprimir':

        letras.imprimirTabla(tipo, secuencia)
            .then()
            .catch(error => console.log(`\n Ocurrio un error ${error} \n`));
        break;

    case 'crear':

        letras.crearArchivo(tipo, secuencia)
            .then(archivo => console.log(`\n El archivo con nombre: ${archivo} ha sido generado con exito \n`))
            .catch(error => console.log(`\n Ocurrio un error ${error} \n`));
        break;

    default:

        console.log('Tarea Completada');
}