// import ParsearUrl from "./src/modules/Url.js"

// let link = ParsearUrl("https://www.google.com/search?q=marranas&&safe=active&ssui=on")
// import url from 'node:url';

// console.log("HOST: " + link.host); //returns 'localhost:8080'
// console.log("PATHNAME: " +  link.pathname); //returns '/index.php'


// console.log("PARAMETROS: " + aa.parametros); //returns '?type=page&action=update&id=5221' 


import url from 'node:url';


console.log(ParsearUrl("https://www.google.com/search?q=marranas&&safe=active&ssui=on"))


export default function ParsearUrl(link){

var q = url.parse(link, true);


let aaaa = {
    host:q.protocol + "//" + q.host,
    pathname:q.pathname,
    parametros: q.query
}

return aaaa


}
