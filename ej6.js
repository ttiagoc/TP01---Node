import url from 'node:url';

let UrlAParsear ="http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"

// if (UrlAParsear[0] != "h" || UrlAParsear[1] != "t" || UrlAParsear[2] != "t" || UrlAParsear[3] != "p") {
//     throw new ArgumentExeption("Debes ingresar una URL")
// }

console.log(ParsearUrl(UrlAParsear))




function ParsearUrl(link) {

    try {
       let probar = Boolean(new URL(link))
    } catch (error) {
        return console.log("URL INVALIDA")
    }

    try {
        var q = url.parse(link, true);
        let obj = {
            host: q.protocol + "//" + q.host,
            pathname: q.pathname,
            parametros: JSON.parse(JSON.stringify(q.query))
        }
        return obj

    } catch (error) {
        return console.log("ERROR")
    }




}
