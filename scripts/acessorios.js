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
    // Obtém o carrinho do localStorage ou inicializa um novo array se não existir
    var carrinhoAcessorios = JSON.parse(localStorage.getItem("carrinhoAcessorios")) || [];

    // Verifica se o item já está no carrinho
    var itemExistente = carrinhoAcessorios.find(item => item[`cod_acessorio${Object.keys(item)[0].match(/\d+/)[0]}`] === cod_acessorio);

    if (itemExistente) {
        // Se o item já existe, incrementa a quantidade em 1
        itemExistente[`quantidade${Object.keys(itemExistente)[0].match(/\d+/)[0]}`] += 1;
    } else {
        // Caso contrário, adiciona o novo item ao carrinho com quantidade 1
        var novoAcessorio = {
            [`cod_acessorio${carrinhoAcessorios.length + 1}`]: cod_acessorio,
            [`acessorio${carrinhoAcessorios.length + 1}`]: acessorio,
            [`descricao${carrinhoAcessorios.length + 1}`]: descricao,
            [`imagem${carrinhoAcessorios.length + 1}`]: imagem,
            [`quantidade${carrinhoAcessorios.length + 1}`]: 1
        };
        carrinhoAcessorios.push(novoAcessorio);
    }

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem("carrinhoAcessorios", JSON.stringify(carrinhoAcessorios));

    // Fecha o modal
    handleCloseModal();

    // Atualiza a exibição do carrinho na página
    atualizarCarrinho();
    AjustarNumerosNoCarrinho();
}

function AjustarNumerosNoCarrinho() {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinhoAcessorios"));

    if (carrinhoAtual && carrinhoAtual.length > 0) {
        const acessoriosExistentes = {};

        // Itera sobre os itens do carrinho para obter os códigos existentes
        carrinhoAtual.forEach(item => {
            for (const key in item) {
                if (key.startsWith('cod_acessorio')) {
                    acessoriosExistentes[item[key]] = true;
                }
            }
        });

        const novoCarrinho = [];
        let numero = 1;

        // Atribui números sequenciais aos códigos existentes e atualiza o carrinho
        carrinhoAtual.forEach(item => {
            const novoItem = {};
            for (const key in item) {
                if (key.startsWith('cod_acessorio')) {
                    const cod_acessorio = item[key];
                    if (!(cod_acessorio in novoItem)) {
                        novoItem[`cod_acessorio${numero}`] = cod_acessorio;
                        numero++;
                    }
                } else {
                    novoItem[key] = item[key];
                }
            }
            novoCarrinho.push(novoItem);
        });

        // Atualiza o carrinho no localStorage
        localStorage.setItem("carrinhoAcessorios", JSON.stringify(novoCarrinho));
    }
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
                        <img class='img' src="${item['imagem' + (index + 1)]}" alt="imagem-acessorio" />
                    </div>
                    <div class='right-item'>
                        <h3>${item['acessorio' + (index + 1)]}</h3>
                        <div class='buttons'>
                            <div onclick="handleQuantityChange(${index}, ${item['quantidade' + (index + 1)] - 1})">-</div>
                            <input type="text" value="${item['quantidade' + (index + 1)]}" readOnly />
                            <div onclick="handleQuantityChange(${index}, ${item['quantidade' + (index + 1)] + 1})">+</div>
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

        // Atualiza os números dos acessórios no localStorage
        for (let i = index; i < carrinhoAcessorios.length; i++) {
            const item = carrinhoAcessorios[i];
            const newItem = {};
            for (const key in item) {
                if (key.includes('cod_acessorio')) {
                    newItem[`cod_acessorio${i + 1}`] = item[key];
                } else if (key.includes('acessorio')) {
                    newItem[`acessorio${i + 1}`] = item[key];
                } else if (key.includes('descricao')) {
                    newItem[`descricao${i + 1}`] = item[key];
                } else if (key.includes('imagem')) {
                    newItem[`imagem${i + 1}`] = item[key];
                } else if (key.includes('quantidade')) {
                    newItem[`quantidade${i + 1}`] = item[key];
                }
            }
            carrinhoAcessorios[i] = newItem;
        }

    } else {
        // Caso contrário, atualize a quantidade do item
        var item = carrinhoAcessorios[index];
        var cod_acessorio = item[`cod_acessorio${index + 1}`];
        item[`quantidade${index + 1}`] = newQuantity;
    }

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem("carrinhoAcessorios", JSON.stringify(carrinhoAcessorios));

    // Atualiza a exibição do carrinho na página
    atualizarCarrinho();
    AjustarNumerosNoCarrinho();
}

function handleRemoveItem(index) {
    var carrinhoAcessorios = JSON.parse(localStorage.getItem("carrinhoAcessorios")) || [];

    // Remove o item do carrinho
    carrinhoAcessorios.splice(index, 1);

    // Atualiza os números dos acessórios no localStorage
    for (let i = index; i < carrinhoAcessorios.length; i++) {
        const item = carrinhoAcessorios[i];
        const newItem = {};
        for (const key in item) {
            if (key.includes('cod_acessorio')) {
                newItem[`cod_acessorio${i + 1}`] = item[key];
            } else if (key.includes('acessorio')) {
                newItem[`acessorio${i + 1}`] = item[key];
            } else if (key.includes('descricao')) {
                newItem[`descricao${i + 1}`] = item[key];
            } else if (key.includes('imagem')) {
                newItem[`imagem${i + 1}`] = item[key];
            } else if (key.includes('quantidade')) {
                newItem[`quantidade${i + 1}`] = item[key];
            }
        }
        carrinhoAcessorios[i] = newItem;
    }

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem("carrinhoAcessorios", JSON.stringify(carrinhoAcessorios));

    // Atualiza a exibição do carrinho na página
    atualizarCarrinho();
    AjustarNumerosNoCarrinho();
}

function RemoverAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c").replace(/Ç/g, "C");
}

function RedirecionarParaGravityForm() {
    // Recuperar os dados do localStorage
    var carrinhoIdentificadores = JSON.parse(localStorage.getItem('carrinhoIdentificadores')) || [];
    var carrinhoAcessorios = JSON.parse(localStorage.getItem('carrinhoAcessorios')) || [];

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
    var url = 'https://br.msd-animal-health.wpcust.com/finalize-seu-pedido/?' +
        identificadoresQueryString + '&' + acessoriosQueryString;

    // Limpar o localStorage
    localStorage.removeItem('carrinhoIdentificadores');
    localStorage.removeItem('carrinhoAcessorios');

    // Redirecionar para a URL
    window.location.href = url;
}


