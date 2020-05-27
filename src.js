let izquierdos = [];
izquierdos = [
    ['Productos de Consumo Personal.','Juguetes y sus accesorios.'],
    ['Productos de Consumo en el Hogar.','Ollas de Presión de uso doméstico que se importen o produzcan nacionalmente para su comercialización en Colombia.'],
    ['Vehiculo.','Uso de cascos protectores para el uso de motocicletas, cuatrimotos, motocarros, moto triciclos y similares.'],
    ['Industria.','Reglamento técnico de Iluminación y alumbrado público RETILAP.'],
    ['GNV y gas domiciliario.','Estaciones para el suministro de Gas Natural Comprimido para uso vehicular.']
];

respuestas = ['<div ondragstart="dragStart(event)" draggable="true" id="r1" class="cuadro">Juguetes y sus accesorios.</div>','<div ondragstart="dragStart(event)" draggable="true" id="r2" class="cuadro">Ollas de Presión de uso doméstico que se importen o produzcan nacionalmente para su comercialización en Colombia.</div>','<div ondragstart="dragStart(event)" draggable="true" id="r3" class="cuadro">Uso de cascos protectores para el uso de motocicletas, cuatrimotos, motocarros, moto triciclos y similares.</div>','<div ondragstart="dragStart(event)" draggable="true" id="r4" class="cuadro">Reglamento técnico de Iluminación y alumbrado público RETILAP.</div>','<div ondragstart="dragStart(event)" draggable="true" id="r5" class="cuadro">Estaciones para el suministro de Gas Natural Comprimido para uso vehicular.</div>']
shuffle(izquierdos)
shuffle(respuestas)

part_der = '<div id="derecha">'
part_izq = '<div id="izquierda">'
for(var i = 1;i<=5;i++){
    part_der += '<div id="d'+i+'" ondrop="drop(event)" ondragover="allowDrop(event)" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)" class="vacio"></div>'
    part_izq += '<div id="i'+i+'" class="cuadro">'+izquierdos[i-1][0]+'</div>'
}

container = document.getElementById("container")
container.innerHTML = part_izq+'</div>'
container.innerHTML += part_der+'<\div>'
document.getElementById("preg-esp").innerHTML += '<div id="cont_resp">'+respuestas.join('')+'</div>'

//prove the correctness
function probar_resp(){
    correct = 0
    for(var i =1;i<=izquierdos.length;i++){
        izq = document.getElementById('i'+i).innerHTML
        der = document.getElementById('d'+i).innerHTML
        if(izquierdos[i-1][1]==der){
            console.log(i)
            console.log("bien "+i)
            correct +=1
        }
    }
    console.log("corectas ",correct)
}
//change two divs of position
function change(source,target){
    src_class = source.className
    src_id = source.id
    src_cont = source.innerHTML

    source.setAttribute("class", target.className+" ");
    source.innerHTML = target.innerHTML
    source.setAttribute("ondrop", "drop(event)")
    source.setAttribute("ondragenter", "dragEnter(event)")
    source.setAttribute("ondragleave", "dragLeave(event)")
    source.setAttribute("ondragover", "allowDrop(event)")
    source.removeAttribute("draggable");
    source.removeAttribute("ondragstart");

    target.setAttribute("draggable", "true");
    target.setAttribute("ondragstart", "dragStart(event)");
    target.setAttribute("class", src_class);
    target.innerHTML = src_cont
    target.removeAttribute("ondrop");
    target.removeAttribute("ondragenter");
    target.removeAttribute("dragleave");
    target.removeAttribute("ondragover");
}

//shuffle an array
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//drag events
var source = new Object();
//strat draggable element
function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    source = event.target.id
    //console.log(source)
}

//dragged element enter to drag-box
function dragEnter(event) {
    //console.log("estoy en "+event.target.id)
    document.getElementById(event.target.id).style.border = "3px dotted red";
     
}

//draggable element leave a drag-box
function dragLeave(event) {
    //console.log("leave")
    document.getElementById(event.target.id).style.border = "";
}

//drag-element is inside a possible target
function allowDrop(event) {
    //console.log("lo puedo_dejar_aqui")
    event.preventDefault();
}

//drop action
function drop(event) {
    document.getElementById(event.target.id).style.border = "";
    target = document.getElementById(event.target.id)
    source = document.getElementById(source)

    if(target !== null && source !== null){
        change(source,target)
        probar_resp()
    }
    event.preventDefault();
}