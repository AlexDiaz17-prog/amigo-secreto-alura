let amigos = [];


function agregarAmigo (){
    //creamos una variable auxiliar para guardar el valor dentro del input
    //usaremos .value para obtener el valor ingresado
    let nuevoAmigoTexto = document.getElementById("amigo").value;

    //verificaremos que el campo no este vacio
    if (nuevoAmigoTexto === ""){
        alert("Por favor, ingrese un nombre");
        return;
    }
    //añadimos el valor al arreglo
    amigos.push(nuevoAmigoTexto + "   " + "🤟");
    //limpiamos barra
    document.getElementById("amigo").value = "";

    //llamamos lista
    let lista = document.getElementById("listaAmigos");
    //limpiamos lista existente
    lista.innerHTML = "";

    

    for (let i = 0; i < amigos.length; i++){
        let valorLista = document.createElement("li");//crea elemento de lista
        valorLista.textContent= amigos[i]; //agrega el nombre del amigo como texto
        lista.appendChild(valorLista);

    }

    


}
