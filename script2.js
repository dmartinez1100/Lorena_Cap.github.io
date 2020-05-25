var queryString = new Array();

var params = window.location.search.split('?')[1].split('&');
for (var i = 0; i < params.length; i++) {
    var key = params[i].split('=')[0];
    var value = decodeURIComponent(params[i].split('=')[1]);
    queryString[key] = value;
}

if(queryString["nombre"] != null){
    nombre2 = queryString["nombre"]
}
else
    nombre2 = ""

document.getElementById("nombre").innerHTML += nombre2
function pg_prin(){
    var URL = 'index.html?nombre='+encodeURIComponent(nombre2);
    window.location.href = URL;
}