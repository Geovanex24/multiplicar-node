const opts = {
    base:{
        demand: true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la lista de la tabla de multiplicar', opts)
    .command('crear', 'Crea y genera un archivo con la tabla de multiplicar deseada', opts)
    .help()
    .argv;

module.exports = {
    argv
}