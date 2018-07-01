const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

let colors = require('colors');

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('============Por hacer=============');
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('===================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrrado = porHacer.borrar(argv.descripcion);
        console.log(borrrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}