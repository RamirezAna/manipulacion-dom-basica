 
const h1 = document.querySelector('h1');
const form= document.querySelector('#form');
const input1 =  document.querySelector('#calculo1');
const input2 =  document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//addEventListener : evento escucha;
//addEventListener('nombre del evento', funcion que querramos ejecutar (sin parentesis, solo va el nombre))
///form.addEventListener('submit',sumarInputValues);


//escuchar eventos 
//onchange: de un input
//onclick: de un boton

//function sumarInputValues(event){
    // event.preventDefault() =  para que no ejecute de lo que por defecto debio ejecutar el evento, (recargar la pagina)
  //  event.preventDefault();
   // const valora = input1.value * input2.value;
   // pResult.innerText = "Resultado: "+valora;    /
//}



//Otra forma de escuchar teniendo en encuenta propiedades en html
// poniendo en el button un tipo de: ejemplo: type="button"
btn.addEventListener('click',sumarInputValues);


//escuchar eventos 
//onchange: de un input
//onclick: de un boton

function sumarInputValues(){
    // event.preventDefault() =  para que no ejecute de lo que por defecto debio ejecutar el evento, (recargar la pagina)
   // event.preventDefault();
    const valora = input1.value * input2.value;
    pResult.innerText = "Resultado: "+valora;    
}







