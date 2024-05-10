// Modulos que vamos a utilizar 
const fs = require('node:fs');
const path = require('node:path');
const pc = require('picocolors');

// console.log(pc.bgBlue("Esto es un texto amarillo"));

//Verificamos si hay 2 argumentos en la linea de comandos de process

console.clear()
if (process.argv.length === 2){
    let menu = `
=========================
Este programa muestra la 
tabla de multiplicar
del número que elijas
=========================\n`
    menu += `Te lo mostrara con el idioma que escojas de los siguientes: \n` 
    menu += `esp - cat - en - ge - jp \n`
    menu += `Ademas lo grabará en un fichero \n`
    menu += `Ejemplo de uso : ${pc.bgGreen("node app.js [numero] [idioma]")}\n`
    console.log(menu);
    process.exit();
}
//FALTA: 
// Falta que esten los dos argumentos requeridos
// Verificar el orden de lo argumentos 
// verificar el numero sea mayor que cero
// Verificar que el idioma sea correcto y/o este en la lista
//   menu += `esp - cat - en - ge - jp \n` <---- no hardcodear idiomas

const operador = process.argv[2]
const lang = process.argv[3]

// Obtener el fichero de idiomas
const rutaJson = path.join('config', 'languages.json') // Unira el directorio config con el fichero languages.json independientemente del sistema operativo.  
const jsonLang = fs.readFileSync(rutaJson, "utf-8")
const langObj = JSON.parse(jsonLang)
// ALGO 
const title = langObj[lang] + operador;
const titleFixed = title.split(" ").join("_");


let header = pc.cyan("==============\n")
header += pc.red(langObj[lang] + ` ${operador}` + "\n")
header += pc.cyan("============== \n")

 console.log(header);
// Número Límite 
const numLimit = 10;
let tabla = ""

for (let i = 1; i <= numLimit; i++) {
    
    tabla += `${operador} x ${i} = ${operador * i}\n`;
}

process.stdout.write(tabla);
const rutaCarpeta = path.join("txt", lang)
const rutaFichero = path.join(rutaCarpeta, titleFixed,".txt")

//verificar si la ruta existe, si no la crea 

if(!fs.existsSync(rutaCarpeta)){
    console.log("La ruta no existe, se creará a continuación");
    fs.mkdirSync(rutaCarpeta, {recursive: true});
    
}



fs.writeFileSync(rutaFichero, header + tabla, "utf-8")

// fs.open(rutaCarpeta+".txt", "w", "utf-8", (err, data) => {
//     if(err) throw err;
//     console.log("Se ha creado el fichero");
    
// })



