
document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* =====================================
       COLEÇÃO COMPLETA
       116 OBRAS — 10 DIVISÕES
    ====================================== */

    const colecao = [

        {
            titulo: "Pais Apostólicos",
            obras: [
                "Didaquê — O Ensino dos Doze Apóstolos",
                "Primeira Epístola de Clemente",
                "Segunda Epístola de Clemente",
                "Carta de Inácio aos Efésios",
                "Carta de Inácio aos Magnésios",
                "Carta de Inácio aos Tralianos",
                "Carta de Inácio aos Romanos",
                "Carta de Inácio aos Filadélfios",
                "Carta de Inácio aos Esmirniotas",
                "Carta de Inácio a Policarpo",
                "Carta de Policarpo aos Filipenses",
                "Martírio de Policarpo",
                "Epístola de Barnabé",
                "O Pastor de Hermas",
                "Carta a Diogneto",
                "Fragmentos de Papias"
            ]
        },

        {
            titulo: "Apologistas Cristãos",
            obras: [
                "Apologia de Quadrato",
                "Apologia de Aristides",
                "Primeira Apologia — Justino Mártir",
                "Segunda Apologia — Justino Mártir",
                "Diálogo com Trifão — Justino Mártir",
                "Discurso aos Gregos — Taciano",
                "A Autólico — Teófilo de Antioquia",
                "Súplica pelos Cristãos — Atenágoras",
                "Sobre a Ressurreição dos Mortos — Atenágoras"
            ]
        },

        {
            titulo: "Teólogos dos séculos II e III",
            obras: [
                "Contra as Heresias — Irineu de Lião",
                "Demonstração da Pregação Apostólica — Irineu de Lião",
                "O Pedagogo — Clemente de Alexandria",
                "Stromata — Clemente de Alexandria",
                "Exortação aos Gregos — Clemente de Alexandria",
                "Apologia — Tertuliano",
                "Prescrição contra os Hereges — Tertuliano",
                "Sobre a Oração — Tertuliano",
                "Sobre o Batismo — Tertuliano",
                "Octávio — Minúcio Félix",
                "Fragmentos de Hegesipo",
                "Escritos de Melitão de Sardes",
                "Testemunhos sobre o montanismo",
                "Fragmentos de Bardesanes"
            ]
        },

        {
            titulo: "Escola de Alexandria",
            obras: [
                "Contra Celso — Orígenes",
                "Sobre os Princípios — Orígenes",
                "Tratado sobre a Oração — Orígenes",
                "Exortação ao Martírio — Orígenes",
                "Comentário sobre João — Orígenes",
                "Comentário sobre Mateus — Orígenes",
                "Homilias sobre Levítico — Orígenes",
                "Homilias sobre Gênesis — Orígenes"
            ]
        },

        {
            titulo: "Escritos de outros autores do século III",
            obras: [
                "Tradição Apostólica — Hipólito de Roma",
                "Refutação de Todas as Heresias — Hipólito",
                "Sobre a Unidade da Igreja — Cipriano de Cartago",
                "Sobre os Caídos — Cipriano de Cartago",
                "Sobre a Mortalidade — Cipriano de Cartago",
                "Sobre a Trindade — Novaciano",
                "Discursos e fragmentos de Gregório Taumaturgo",
                "Escritos de Dionísio de Alexandria",
                "Crônica — Júlio Africano",
                "Escritos de Metódio de Olimpo",
                "Contra os Gentios — Arnóbio",
                "Instituições Divinas — Lactâncio"
            ]
        },

        {
            titulo: "Historiadores da Igreja",
            obras: [
                "História Eclesiástica — Eusébio de Cesareia",
                "Vida de Constantino — Eusébio de Cesareia",
                "Sobre os Mártires da Palestina — Eusébio de Cesareia",
                "Crônica — Eusébio de Cesareia",
                "História Eclesiástica — Sócrates Escolástico",
                "História Eclesiástica — Sozomeno",
                "História Eclesiástica — Teodoreto de Ciro"
            ]
        },

        {
            titulo: "Pais da Igreja dos séculos IV e V",
            obras: [
                "Sobre a Encarnação do Verbo — Atanásio",
                "Vida de Antão — Atanásio",
                "Contra os Arianos — Atanásio",
                "Sobre o Espírito Santo — Basílio de Cesareia",
                "Regras Morais — Basílio de Cesareia",
                "Orações Teológicas — Gregório de Nazianzo",
                "A Vida de Moisés — Gregório de Nissa",
                "A Grande Catequese — Gregório de Nissa",
                "Catequeses — Cirilo de Jerusalém",
                "Sobre o Sacerdócio — João Crisóstomo",
                "Homilias sobre Mateus — João Crisóstomo",
                "Sobre os Deveres dos Ministros — Ambrósio",
                "Confissões — Agostinho de Hipona",
                "A Cidade de Deus — Agostinho de Hipona",
                "Sobre a Trindade — Agostinho de Hipona",
                "A Doutrina Cristã — Agostinho de Hipona",
                "Enchiridion — Agostinho de Hipona",
                "Comentário sobre Gálatas — Jerônimo",
                "Vulgata — Jerônimo",
                "Sobre os Homens Ilustres — Jerônimo",
                "Comentário sobre os Salmos — Hilário de Poitiers",
                "Comentários e hinos — Efrém da Síria",
                "Instituições Cenobíticas — João Cassiano",
                "Conferências — João Cassiano",
                "Vida de Martinho — Sulpício Severo",
                "Tratado sobre a Graça — Vicente de Lérins",
                "Sermões — Leão Magno",
                "Cartas — Isidoro de Pelúsio",
                "Escritos ascéticos — Evágrio Pôntico"
            ]
        },

        {
            titulo: "Evangelhos Apócrifos",
            obras: [
                "Evangelho de Tomé",
                "Evangelho de Pedro",
                "Evangelho de Maria",
                "Evangelho de Filipe",
                "Evangelho dos Hebreus",
                "Evangelho dos Egípcios",
                "Protoevangelho de Tiago"
            ]
        },

        {
            titulo: "Atos Apócrifos",
            obras: [
                "Atos de Pedro",
                "Atos de Paulo",
                "Atos de Paulo e Tecla",
                "Atos de João",
                "Atos de André",
                "Atos de Tomé",
                "Atos de Filipe"
            ]
        },

        {
            titulo: "Cartas e Apocalipses Apócrifos",
            obras: [
                "Correspondência entre Paulo e Sêneca",
                "Cartas Pseudoclementinas",
                "Apocalipse de Pedro",
                "Apocalipse de Paulo",
                "Apocalipse de Tomé",
                "Primeiro Apocalipse de Tiago",
                "Segundo Apocalipse de Tiago"
            ]
        }

    ];


    /* =====================================
       CAMINHOS DOS ARQUIVOS
    ====================================== */

    const pastaCapas = "images/capas/";
    const pastaFlipbooks = "flipbooks/";


    /* =====================================
       FUNÇÕES AUXILIARES
    ====================================== */

    function gerarCodigo(numero) {

        return "BCP-" + String(numero).padStart(3, "0");

    }

    function gerarSlug(texto) {

        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-zA-Z0-9]+/g, "_")
            .replace(/^_+|_+$/g, "");

    }

    function separarTitulo(texto) {

        if (texto.startsWith("Didaquê — ")) {

            return {
                titulo: "Didaquê",
                subtitulo: "O Ensino dos Doze Apóstolos"
            };

        }

        const partes = texto.split(" — ");

        if (partes.length > 1) {

            return {
                titulo: partes.slice(0, -1).join(" — "),
                subtitulo: partes[partes.length - 1]
            };

        }

        return {
            titulo: texto,
            subtitulo: ""
        };

    }


    /* =====================================
       GERAR AS PRATELEIRAS
    ====================================== */

    const container = document.getElementById(
        "prateleirasBiblioteca"
    );

    let numeroObra = 1;

    colecao.forEach((grupo, indice) => {

        const departamento = document.createElement("section");

        departamento.className = "departamento";

        departamento.id = "departamento-" +
            String(indice + 1).padStart(2, "0");


        /* TÍTULO DA SEÇÃO */

        const tituloSecao = document.createElement("h2");

        tituloSecao.textContent =
            (indice + 1) + ". " + grupo.titulo;

        departamento.appendChild(tituloSecao);


        /* PRATELEIRA */

        const prateleira = document.createElement("div");

        prateleira.className = "obras-grade";


        /* LIVROS */

        grupo.obras.forEach((nomeObra) => {

            const codigo = gerarCodigo(numeroObra);
            const slug = gerarSlug(nomeObra);
            const dados = separarTitulo(nomeObra);

            const caminhoCapa =
                pastaCapas + codigo + "_" + slug + ".png";

            const caminhoFlipbook =
                pastaFlipbooks + codigo + "_" + slug + ".html";

            const descricao =
                "Esta obra integra a coleção da Biblioteca Cristã Primitiva, " +
                "dedicada à preservação, ao estudo e à divulgação dos escritos " +
                "do cristianismo dos primeiros séculos. Consulte a edição digital " +
                "para conhecer o conteúdo desta publicação.";


            /* BOTÃO DO LIVRO */

            const livro = document.createElement("button");

            livro.type = "button";
            livro.className = "obra-card";

            livro.dataset.codigo = codigo;
            livro.dataset.titulo = dados.titulo;
            livro.dataset.subtitulo = dados.subtitulo;
            livro.dataset.departamento = String(indice + 1).padStart(2, "0");
            livro.dataset.descricao = descricao;
            livro.dataset.capa = caminhoCapa;
            livro.dataset.flipbook = caminhoFlipbook;


            /* NÚMERO */

            const numero = document.createElement("span");

            numero.className = "obra-numero";
            numero.textContent = String(numeroObra).padStart(2, "0");


            /* LOMBADA */

            const lombada = document.createElement("span");

            lombada.className = "obra-lombada";
            lombada.textContent = dados.titulo;


            livro.appendChild(numero);
            livro.appendChild(lombada);

            prateleira.appendChild(livro);

            numeroObra++;

        });

        departamento.appendChild(prateleira);
        container.appendChild(departamento);

    });


    /* =====================================
       ELEMENTOS DO POPUP
    ====================================== */

    const popup = document.getElementById("popupLivro");
    const fechar = document.getElementById("fecharPopup");

    const capa = document.getElementById("livroCapa");
    const titulo = document.getElementById("livroTitulo");
    const subtitulo = document.getElementById("livroSubtitulo");
    const descricao = document.getElementById("livroDescricao");
    const flipbook = document.getElementById("livroFlipbook");

    let elementoAnterior = null;


    /* =====================================
       ABRIR LIVRO
    ====================================== */

    function abrirLivro(livro) {

        elementoAnterior = document.activeElement;

        titulo.textContent = livro.dataset.titulo || "";
        subtitulo.textContent = livro.dataset.subtitulo || "";

        descricao.textContent =
            livro.dataset.descricao ||
            "Descrição ainda não cadastrada.";

        capa.src = livro.dataset.capa || "";
        capa.alt = "Capa de " + livro.dataset.titulo;

        const endereco = livro.dataset.flipbook || "";

        if (endereco) {

            flipbook.href = endereco;
            flipbook.style.display = "inline-flex";

        } else {

            flipbook.removeAttribute("href");
            flipbook.style.display = "none";

        }

        popup.classList.add("ativo");
        popup.setAttribute("aria-hidden", "false");

        document.body.classList.add("popup-aberto");

        fechar.focus();

    }


    /* =====================================
       FECHAR POPUP
    ====================================== */

    function fecharPopup() {

        popup.classList.remove("ativo");
        popup.setAttribute("aria-hidden", "true");

        document.body.classList.remove("popup-aberto");

        if (elementoAnterior) {
            elementoAnterior.focus();
        }

    }


    /* =====================================
       EVENTOS DOS LIVROS
    ====================================== */

    container.addEventListener("click", (evento) => {

        const livro = evento.target.closest(".obra-card");

        if (livro) {
            abrirLivro(livro);
        }

    });


    /* BOTÃO FECHAR */

    fechar.addEventListener("click", fecharPopup);


    /* FECHAR CLICANDO FORA */

    popup.addEventListener("click", (evento) => {

        if (evento.target === popup) {
            fecharPopup();
        }

    });


    /* FECHAR COM ESC */

    document.addEventListener("keydown", (evento) => {

        if (
            evento.key === "Escape" &&
            popup.classList.contains("ativo")
        ) {
            fecharPopup();
        }

    });


    /* =====================================
       ANO DO RODAPÉ
    ====================================== */

    document.getElementById("anoAtual").textContent =
        new Date().getFullYear();


    /* =====================================
       CONFERÊNCIA
    ====================================== */

    console.log(
        "Biblioteca Cristã Primitiva carregada:",
        numeroObra - 1,
        "obras em",
        colecao.length,
        "divisões."
    );

});
