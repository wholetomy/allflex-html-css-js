window.onload = function () {
    PreencherEtapaCorreta(2);

    // Obtendo a referência ao elemento onde os cards serão renderizados
    var acessoriosRight = document.getElementById("acessoriosRight");

    // Carregando o JSON de './json/acessorios.json'
    fetch('./json/acessorios.json')
        .then(response => response.json())
        .then(acessorios => {
            // Criando uma string de template para representar a estrutura HTML de cada card
            var cardTemplate = "";
            acessorios.forEach(function (acessorio) {
                cardTemplate += `
                    <div class="cards" key="${acessorio.cod_acessorio}">
                        <div class="cards-img-div" onclick="handleCardClick('${acessorio.cod_acessorio}', '${acessorio.acessorio}', '${acessorio.imagem}', '${acessorio.descricao}')">
                            <img class="" src="${acessorio.imagem}" alt="acessorio-imagem" />
                        </div>
                        <div class="text-and-button-div">
                            <h3>${acessorio.acessorio}</h3>
                            <button class="acessorio-button" onclick="handleCardClick('${acessorio.cod_acessorio}', '${acessorio.acessorio}', '${acessorio.imagem}', '${acessorio.descricao}')">Ver mais</button>
                        </div>
                    </div>
                `;
            });

            // Inserindo os cards renderizados dentro do elemento pai
            acessoriosRight.innerHTML = cardTemplate;

            // Atualizar a exibição do carrinho na página
            atualizarCarrinho();
        })
        .catch(error => console.error('Erro ao carregar os acessórios:', error));
};

function handleCardClick(cod_acessorio, acessorio, imagem, descricao) {
    // Selecionar o modal
    var modal = document.getElementById("modal");

    // HTML a ser inserido no modal
    var modalContent = `
        <img class='x-button' src='./images/acessorios/x-square.svg' onClick="handleCloseModal()" alt="x-button" />
        <div class='modal-content-div'>
            <div class='left'>
                <img class='img' src="${imagem}" alt="acessorio-imagem" />
            </div>
            <div class='right'>
                <h3>${acessorio}</h3>
                <p>${descricao}</p>
                <button onclick="adicionarItemAoCarrinho(${cod_acessorio}, '${acessorio}', '${imagem}', '${descricao}')">Adicionar ao Carrinho</button>
            </div>
        </div>
    `;

    // Inserir o conteúdo no modal
    modal.innerHTML = modalContent;

    // Adicionar a classe "active" ao modal
    modal.classList.add("active");
}

function handleCloseModal() {
    modal.classList.remove("active");
}

function adicionarItemAoCarrinho(cod_acessorio, acessorio, imagem, descricao) {
    // Adiciona o item ao carrinho
    var carrinhoAcessorios = JSON.parse(localStorage.getItem("carrinhoAcessorios")) || [];

    // Verifica se o item já está no carrinho
    var itemExistente = carrinhoAcessorios.find(item => item.cod_acessorio === cod_acessorio);
    if (itemExistente) {
        // Se o item já existe, aumenta a quantidade em 1
        itemExistente.quantidade += 1;
    } else {
        // Caso contrário, adiciona o novo item ao carrinho com quantidade 1
        var novoAcessorio = {
            cod_acessorio: cod_acessorio,
            acessorio: acessorio,
            descricao: descricao,
            imagem: imagem,
            quantidade: 1
        };
        carrinhoAcessorios.push(novoAcessorio);
    }

    // Salva o carrinho no localStorage
    localStorage.setItem("carrinhoAcessorios", JSON.stringify(carrinhoAcessorios));

    // Fecha o modal
    handleCloseModal();

    // Atualiza a exibição do carrinho na página
    atualizarCarrinho();
}

function atualizarCarrinho() {
    var carrinhoAcessorios = JSON.parse(localStorage.getItem("carrinhoAcessorios")) || [];
    var acessoriosDiv = document.getElementById("acessoriosDiv");

    // Limpar o conteúdo atual do carrinho
    acessoriosDiv.innerHTML = "";

    // Se o carrinho estiver vazio, exibir mensagem
    if (carrinhoAcessorios.length === 0) {
        acessoriosDiv.innerHTML = "<div class='carrinho-vazio-div'>Carrinho vazio</div>";
    } else {
        // Criar a estrutura HTML para cada item no carrinho
        carrinhoAcessorios.forEach(function (item, index) {
            var itemHTML = `
                <div class="item-carrinho">
                    <div class='left-item'>
                        <img class='img' src="${item.imagem}" alt="imagem-acessorio" />
                    </div>
                    <div class='right-item'>
                        <h3>${item.acessorio}</h3>
                        <div class='buttons'>
                            <div onclick="handleQuantityChange(${index}, ${item.quantidade - 1})">-</div>
                            <input type="text" value="${item.quantidade}" readOnly />
                            <div onclick="handleQuantityChange(${index}, ${item.quantidade + 1})">+</div>
                        </div>
                    </div>
                    <div class='trash-div'>
                        <img src="./images/acessorios/trash.svg" alt='Trash' onclick="handleRemoveItem(${index})" />
                    </div>
                </div>
            `;
            acessoriosDiv.innerHTML += itemHTML;
        });
    }
}

function handleQuantityChange(index, newQuantity) {
    var carrinhoAcessorios = JSON.parse(localStorage.getItem("carrinhoAcessorios")) || [];
    if (newQuantity <= 0) {
        // Se a nova quantidade for zero ou negativa, remova o item do carrinho
        carrinhoAcessorios.splice(index, 1);
    } else {
        // Caso contrário, atualize a quantidade do item
        carrinhoAcessorios[index].quantidade = newQuantity;
    }

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem("carrinhoAcessorios", JSON.stringify(carrinhoAcessorios));

    // Atualiza a exibição do carrinho na página
    atualizarCarrinho();
}

function handleRemoveItem(index) {
    var carrinhoAcessorios = JSON.parse(localStorage.getItem("carrinhoAcessorios")) || [];
    // Remove o item do carrinho
    carrinhoAcessorios.splice(index, 1);

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem("carrinhoAcessorios", JSON.stringify(carrinhoAcessorios));

    // Atualiza a exibição do carrinho na página
    atualizarCarrinho();
}

function RemoverAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c").replace(/Ç/g, "C");
}

function RedirecionarParaGravityForm() {
    // Recuperar os dados do localStorage
    var carrinhoIdentificadores = JSON.parse(localStorage.getItem('carrinhoIdentificadores'));
    var carrinhoAcessorios = JSON.parse(localStorage.getItem('carrinhoAcessorios'));

    // Construir a query string para os dados do carrinho de identificadores
    var identificadoresQueryString = carrinhoIdentificadores.map(function (identificador) {
        return Object.keys(identificador)
            .filter(function (key) { return key !== 'logo' && key !== 'imagem'; })
            .map(function (key) {
                var valor = RemoverAcentos(identificador[key].toString());
                return encodeURIComponent(key) + '=' + encodeURIComponent(valor);
            })
            .join('&');
    }).join('&');

    // Construir a query string para os dados do carrinho de acessórios
    var acessoriosQueryString = carrinhoAcessorios.map(function (acessorio) {
        return Object.keys(acessorio)
            .filter(function (key) { return key !== 'logo' && key !== 'imagem'; })
            .map(function (key) {
                var valor = RemoverAcentos(acessorio[key].toString());
                return encodeURIComponent(key) + '=' + encodeURIComponent(valor);
            })
            .join('&');
    }).join('&');

    // Construir a URL com as query strings
    var url = 'https://br.msd-animal-health.wpcust.com/?page_id=2509&' +
        identificadoresQueryString + '&' + acessoriosQueryString;

    // Limpar o localStorage
    localStorage.removeItem('carrinhoIdentificadores');
    localStorage.removeItem('carrinhoAcessorios');

    // Redirecionar para a URL
    window.location.href = url;
}

