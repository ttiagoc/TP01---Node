// import ParsearUrl from "./src/modules/Url.js"

// let link = ParsearUrl("https://www.google.com/search?q=marranas&&safe=active&ssui=on")
// import url from 'node:url';

// console.log("HOST: " + link.host); //returns 'localhost:8080'
// console.log("PATHNAME: " +  link.pathname); //returns '/index.php'


// console.log("PARAMETROS: " + aa.parametros); //returns '?type=page&action=update&id=5221' 

import url from 'node:url';

console.log(ParsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"))


function ParsearUrl(link) {

   
        var q = url.parse(link,true);

    
        let obj = {
            host: q.protocol + "//" + q.host,
            pathname: q.pathname,
            parametros: JSON.parse(JSON.stringify(q.query))
        }
    
        return obj
        
  


}
