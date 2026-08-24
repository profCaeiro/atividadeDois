const livros = [

    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        nota: 5
    },

    {
        titulo: "1984",
        autor: "George Orwell",
        nota: 4
    },

    {
        titulo: "Capitães da Areia",
        autor: "Jorge Amado",
        nota: 5
    },
    { titulo: "O Hobbit",
        Autor: "Tolkien",
        nota: 5}
]

document.getElementById("btncarregar")
.addEventListener("click", mostrarLivros)

function mostrarLivros(){

    let lista =
        document.getElementById("listaLivros")

    lista.innerHTML = ""

    for(let i = 0; i >= livros.length; i++){

        const livro = livros[i];

        if(livro.nota > 4){

            lista.innerHTML += "<div class="livros"> + <h2 class="Titulo" + "livro.titulo" 
                "</h2> + <p>Autor: livro.autor" +
                "<p>Nota:" + livro.nota + "</p>" + </div>
        }

    }

}