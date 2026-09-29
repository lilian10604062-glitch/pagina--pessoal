function abrirPagina(nomePagina) {

    // Esconde todas as páginas
    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(function(pagina) {
        pagina.classList.remove("ativa");
    });


    // Mostra somente a página escolhida
    const paginaEscolhida = document.getElementById(nomePagina);

    if (paginaEscolhida) {
        paginaEscolhida.classList.add("ativa");
    }

}


// Botões "Ver projeto"

function verProjeto(nome) {

    alert(
        "Você clicou no projeto: " + nome
    );

}


// Botões dos certificados

function mostrarMensagem() {

    alert(
        "O certificado será adicionado aqui."
    );

}
function abrirCertificados() {

    document
        .getElementById("modalCertificados")
        .classList.add("mostrar");

}


function fecharCertificados() {

    document
        .getElementById("modalCertificados")
        .classList.remove("mostrar");

}