preguntas = 0
respuestas = []

elemento = document.getElementById("1")

//JSON.stringify(a)==JSON.stringify(b)

//elemento.onclick = () => {console.log(elemento.value)}
console.log(elemento)

function resp(){
    var inputs = []
    for(var i=1;i<=preguntas;i++){
        elemento = document.querySelector('input[name="'+i+'"]:checked').value;
        console.log(elemento)
        inputs.push(elemento)
    }
    if(JSON.stringify(respuestas)==JSON.stringify(inputs)){
        console.log("Correcto")
    }
    else console.log("falso")
}

function new_qest(text,a,b,c,d,respuesta){
    container = document.getElementById('cuerpo')
    num = preguntas+1;
    code = '<div class="pregunta"><div>'+num+'. '+text+'</div><div>'+'<div class="respuesta">'+'<input '+' id=a'+num+''+' type="radio" name="'+num+'" value="a"><label for="a'+num+'">'+a+'</label>'+'</div>'+'<br>'+'<div class="respuesta">'+'<input '+' id=b'+num+''+' type="radio" name="'+num+'" value="b"><label for="b'+num+'">'+b+'</label>'+'</div>'+'<br>'+'<div class="respuesta">'+'<input '+' id=c'+num+''+' type="radio"name="'+num+'" value="c"><label for="c'+num+'">'+c+'</label>'+'</div>'+'<br>'+'<div class="respuesta">'+'<input '+' id=d'+num+''+' type="radio" name="'+num+'" value="d"><label for="d'+num+'">'+d+'</label>'+'</div>'+'</div></div>';
    container.innerHTML += code;
    preguntas += 1
    respuestas.push(respuesta)
}