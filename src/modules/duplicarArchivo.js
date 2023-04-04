import fs from 'fs'

export default function copiarArchivo(origen,destino){
    fs.copyFile(
    origen,
    destino,
    fs.constants.COPYFILE_FICLONE,
    (err) => {
      if (err) {
        // TODO: handle error
        console.log("error");
      }
      console.log("success");
    }
  );
}