

export default function ConcatenarStrings(string1, string2){

    return string1 + string2
}

export function InvertirString(string1, string2){
    let string = string1 + string2
    let nuevaCadena = "";
    for (let i = string.length - 1; i >= 0; i--) {
      nuevaCadena += string[i];
    }
    return nuevaCadena;
}