var queryString = new Array();

if (queryString.length == 0) {
    if (window.location.search.split('?').length > 1) {
        var params = window.location.search.split('?')[1].split('&');
        for (var i = 0; i < params.length; i++) {
            var key = params[i].split('=')[0];
            var value = decodeURIComponent(params[i].split('=')[1]);
            queryString[key] = value;
        }
    }
}

if(queryString["nombre"] != null){
    nombre2 = queryString["nombre"]
}
else
    nombre2 = ""

if(queryString["preg_mal"] != null){
    preg = queryString["preg_mal"]
    document.getElementById('reng_1').innerHTML += '<p class="texto" >Has tenido '+preg+' errores</p>'
}

url = window.location.href
if(url.includes("mal.html")){
    document.getElementById('reng_1').innerHTML += '<p class="texto">Intentalo de Nuevo:</p>'
}
else{
    async function prueba(){
    doc = document.getElementById("cont")
    doc.style.display = "none";
    await sleep(2000)
    document.body.style.background = "none"
    doc.style.display = "grid";
    }
    prueba()
}
document.getElementById("nombre").innerHTML += nombre2

function pg_prin(){
    var URL = 'index.html?nombre='+encodeURIComponent(nombre2);
    window.location.href = URL;
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}