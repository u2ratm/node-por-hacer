    const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'
    };
    const completado = {
        default: true,
        alias: 'c',
        desc: 'Marca como completado'
    };

    const borrar = {
        alias: 'x',
        desc: 'Borrando Tarea'
    }

    const argv = require('yargs')
        .command('crear', 'Genera un archivo', {
            descripcion
        })
        .command('actualizar', 'Actualiza la lista de una tarea', {
            descripcion,
            completado
        })
        .command('borrar', 'Borra la tarea', {
            descripcion
        })
        .help()
        .argv

    module.exports = {
        argv
    }