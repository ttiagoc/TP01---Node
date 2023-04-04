import copiarArchivo from "./src/modules/duplicarArchivo.js/"


let origen = "hola.txt"
//el destino no puede tener un nombre ya existente
let destino = "chauss.txt"


copiarArchivo(origen,destino)