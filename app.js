// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
alert("Para iniciar el juego, escribe los nombres de cada uno de tus amigos y añádelos con el botón Añadir. Al tener la lista con los nombres de tu interés presiona Sortear amigo.");
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo"); //Esta línea accede al elemento input
    let nombreAmigo = inputAmigo.value; //Esta línea accede al contenido del input

    if (!nombreAmigo) {
        alert("¡Por favor, ingresa un nombre!");
        return;
    }
    amigos.push(nombreAmigo);
    inputAmigo.value = ""; //Limpia el input ya que se ha agregado el nombre al array. Importante diferenciar acceder al "elemento input" y acceder al "contenido del elemento input" 
    inputAmigo.focus(); //Esta instrucción mantiene el cursor en el input para poder seguir ingresando nombres
    mostrarAmigos();
}
    
function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("¡No hay amigos para sortear!");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}