const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
};

const completado = {
    default: true,
    alias: 'd',
    desc: 'Marca como completado la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por haccer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Remueve una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}