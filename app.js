let arrayAmigos = [];




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