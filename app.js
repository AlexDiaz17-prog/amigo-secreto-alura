let amigos = [];
let numeroSorteo = 0;



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
    amigos.push(nuevoAmigoTexto);
    //limpiamos barra
    document.getElementById("amigo").value = "";

    //llamamos lista
    let lista = document.getElementById("listaAmigos");
    //limpiamos lista existente
    lista.innerHTML = "";

    //ciclo para mostrar los nombres del arreglo

    for (let i = 0; i < amigos.length; i++){
        let valorLista = document.createElement("li");//crea elemento de lista
        valorLista.textContent= amigos[i]; //agrega el nombre del amigo como texto
        lista.appendChild(valorLista);

    }


    

}



function sortearAmigo () {
    if (amigos.length == 0) {
        alert("No hay amigos por sortear");
        return;
    }else{
        //miltiplicamos por amigos.lenght para que nos de los valores desde "0", hasta el ultimo numero del areglo
     let numeroSorteo = Math.floor(Math.random () * amigos.length ); 
     console.log(amigos[numeroSorteo]);
     
   
    }

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    let lista2 = document.getElementById("resultado");
     lista.innerHTML = "";

     let valorListaResultado = document.createElement("li");
     valorListaResultado.textContent= (` Tu amigo secreto es :  ${amigos[numeroSorteo]}`);
     lista2.appendChild(valorListaResultado);







    











}



