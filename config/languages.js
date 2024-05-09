const fs = require("node:fs");

const languages = {
    "es": "tabla de multiplicar de",
    "cat": "taula de multiplicar del",
    "en": "table of multiplication of",
    "ge": "Tabelle der Multiplikation von",
    "jp": "乗算表"
}

const langJSON = JSON.stringify(languages);

//Forma asicrona
fs.writeFile("languages.json", langJSON, (err) => {
    if (err) {
        throw err
    }console.log("Se ha guardado el archivo con exito");
})