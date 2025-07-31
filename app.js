

function agregarAmigo (){
    //creamos una variable auxiliar para guardar el valor dentro del input
    //usaremos .value para obtener el valor ingresado
    let nuevoAmigoTexto = document.getElementById("amigo").value;

    //verificaremos que el campo no este vacio
    if (nuevoAmigoTexto === ""){
        alert("Por favor, ingrese un nombre");
        return;
    }
    
    // llamamos lista
    let lista = document.getElementById("listaAmigos");
    let ElementoAmigo = document.createElement("li");
    ElementoAmigo.textContent = nuevoAmigoTexto;
    lista.appendChild(ElementoAmigo);
    document.getElementById("amigo").value = "";

    console.log(ElementoAmigo.textContent);



}



