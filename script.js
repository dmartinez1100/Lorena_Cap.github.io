preguntas = 0
respuestas = []
preguntas = ['']

//pr = JSON.parse('{"texto":"" ,"enunciado": true,"preguntas": {"a": "asdad","b":"wfwqfq","c":"fsafa","d":"safawsg"},"respuesta": "nu","imagen":true}')
pr2 = ['{"texto":"" ,"enunciado": "","respuestas": {"a": "","b":"","c":"","d":""},"resp_c": "","imagen":".gif"}',
'{"texto":"" ,"enunciado": "","respuestas": {"a": "","b":"","c":"","d":""},"resp_c": "","imagen":".gif"}'

]

console.log(pr2[1])
elemento = document.getElementById("1")

//JSON.stringify(a)==JSON.stringify(b)

//elemento.onclick = () => {console.log(elemento.value)}
console.log(elemento)

function resp(){
    var inputs = []
    for(var i=1;i<=preguntas;i++){
        elemento = document.querySelector('input[name="'+i+'"]:checked')
        if (elemento == null){
            console.log("no respondio")}
        else{
            elemento = elemento.value
        inputs.push(elemento)}
    }
    if(JSON.stringify(respuestas)==JSON.stringify(inputs)){
        console.log("Correcto")
    }
    else console.log("falso")
}

function new_qest(texto,enunciado,a,b,c,d,respuesta,imagen){
    container = document.getElementById('cuerpo')
    num = preguntas+1;
    if(imagen ===""){
        clase_i = "respuestas_s";
    }
    else{
        clase_i = "respuestas_c";
        imagen = "assets/img/"+imagen
    }
    console.log(clase_i)
    code1 = '<div class="pregunta">'+'<div class="texto">'+texto+'</div>'+'<div '+'class = "enunciado"'+' >'+num+'. '+enunciado+'</div><div class="'+clase_i+'">'+'<div class="respuestas"><div class="respuesta">'+'<input '+' id=a'+num+''+' type="radio" name="'+num+'" value="a"><label class="respuesta_txt"'+'width="100%"'+'for="a'+num+'">'+a+'</label>'+'</div>'+'<br>'+'<div class="respuesta">'+'<input '+' id=b'+num+''+' type="radio" name="'+num+'" value="b"><label class="respuesta_txt" for="b'+num+'">'+b+'</label>'+'</div>'+'<br>'+'<div class="respuesta">'+'<input '+' id=c'+num+''+' type="radio"name="'+num+'" value="c"><label class="respuesta_txt" for="c'+num+'">'+c+'</label>'+'</div>'+'<br>'+'<div class="respuesta">'+'<input '+' id=d'+num+''+' type="radio" name="'+num+'" value="d"><label class="respuesta_txt"for="d'+num+'">'+d+'</label>'+'</div></div>'+'<div class="imagen"><img src="'+imagen+'"alt=""></div></div></div>';
    container.innerHTML += code1;
    //container.innerHTML += code2;
    preguntas += 1
    respuestas.push(respuesta)
}

//'+'<div class='texto'>texto</div>'+'

//'+'width="100%"'+'

