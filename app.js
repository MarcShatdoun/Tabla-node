// Modulos que vamos a utilizar 
const fs = require('node:fs');
const path = require('node:path');
const pc = require('picocolors');

// console.log(pc.bgBlue("Esto es un texto amarillo"));

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

console.log(tabla);

const rutaFichero = path.join("txt", lang, titleFixed)

fs.open(rutaFichero+".txt", "w", "utf-8", (err, fd) => {
    if(err) throw err;
    console.log("Se ha creado el fichero");
    
})

