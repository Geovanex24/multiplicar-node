const argv = require('./config/yargs').argv;
const colors = require('colors');
//Destructuración
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(e => console.log(e));
        console.log('Crear');
        break;
    default:
        console.log('comando no reconocido');
}
// const fs = require('express');
// const fs = require('./path');

// let base= '5';



// let data= '';

// for(let i=1; i<10; i++){
//     data+= `${base} * ${i} = ${base*i}\n`;
// }

// // const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//   if (err) throw err;
//   console.log(`¡El archivo tabla-${base}.txt ha sido creado!`);
// });

// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];//1 porque nos interesa el segundo parametro 
// console.log(base);
//El SPLIT es usado para separar elementos convirtiendo de string a un arreglo
//PARAMETRO es un string por que lo que usando split lo convertimos en un arreglo

// console.log('limite', argv.limite);

