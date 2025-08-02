let arrayAmigos = [];
let repetidos = [];


//definimos funcion 
function agregarAmigo(){
    let amigoTexto = document.getElementById("amigo").value; //obtenemos valor
       console.log(amigoTexto);
     //agregamos condicion de espacios en blanco
    if (amigoTexto === ""){
        alert("ingresa un nombre");
        return;
    } if(arrayAmigos.includes(amigoTexto)){
    alert("Ese nombre ya esta en la lista")

    document.getElementById("amigo").value= "";
    return;
  }

  arrayAmigos.push(amigoTexto);//introduciomos valor al arreglo
     console.log(arrayAmigos);

   document.getElementById("amigo").value = "";//borramos el texto obtenido
  /* vamos a agregar el valor a la lista para que se muestre en pantalla
  para ello :
  llamalos la lista
  borramos su contenido 
  hacemos un arreglo for para ir mostrando los valores del arreglo*/

  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 

  for (let i = 0; i < arrayAmigos.length; i++ ){
    let valorListaNombres = document.createElement("li");
    valorListaNombres.textContent = arrayAmigos[i];
    lista.appendChild(valorListaNombres);

    console.log(arrayAmigos[i]);

  }

}

function sortearAmigo(){

  let numeroAmigoSecreto;

   if( arrayAmigos.length === 0){
    alert("No hay amigos por sortear")
    
    return;
  }

    if (repetidos.length === arrayAmigos.length) {
    alert("Todos los amigos ya fueron sorteados");
    return;
  }

  // Repetir hasta encontrar un índice que no esté en 'repetidos'
  do {
    numeroAmigoSecreto = Math.floor(Math.random() * arrayAmigos.length);
  } while (repetidos.includes(numeroAmigoSecreto));

  // Agregamos el índice como ya sorteado
  repetidos.push(numeroAmigoSecreto);
  
  //introducimos valor a la lista
  let lista2 = document.getElementById("resultado");
  lista2.innerHTML = "";

  let resultadoAmigoSecreto = document.createElement("li");
  resultadoAmigoSecreto.textContent = (`Tu amigo secreto sorteado es : ${arrayAmigos[numeroAmigoSecreto]}`);
  lista2.appendChild(resultadoAmigoSecreto);

}

function reiniciarSorteo(){
arrayAmigos = [];
repetidos = [];
console.log(arrayAmigos);
document.getElementById("resultado").innerHTML = "";
document.getElementById("listaAmigos").innerHTML = "";

}