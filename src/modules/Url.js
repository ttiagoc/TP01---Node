import url from 'node:url';


console.log(ParsearUrl("https://www.google.com/search?q=marranas&&safe=active&ssui=on"))


export default function ParsearUrl(link){

var q = url.parse(link, true);


let link = {
    host:q.protocol,
    pathname:q.pathname,
    parametros: q.search.query
}

return link


}

