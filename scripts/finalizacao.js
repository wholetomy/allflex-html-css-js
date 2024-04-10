window.onload = function () {
    PreencherEtapaCorreta(3);
    AdicionarTabelaAcessorios();
    AdicionarTabelaIdentificadores();
}

function AdicionarTabelaAcessorios() {
    var carrinhoAcessorios = JSON.parse(localStorage.getItem("carrinhoAcessorios")) || [];
    var acessoriosDiv = document.querySelector('.acessorios-div');

    // Limpar o conteúdo atual da div
    acessoriosDiv.innerHTML = "";

    // Verificar se o carrinho está vazio
    if (carrinhoAcessorios.length === 0) {
        // Se o carrinho estiver vazio, exibir a mensagem "Carrinho vazio"
        acessoriosDiv.innerHTML = "<h1>Acessórios</h1><p>Carrinho Vazio</p>";
    } else {
        // Criar a tabela de acessórios
        var tableHTML = `
            <h1>Acessórios</h1>
            <table class='acessorios-table'>
                <thead>
                    <tr>
                        <th>Nome do Acessório</th>
                        <th>Quantidade</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Adicionar cada item do carrinho como uma linha na tabela
        carrinhoAcessorios.forEach((item, index) => {
            tableHTML += `
                <tr>
                    <td>${item.acessorio}</td>
                    <td>
                        <button class='button-quantidade' onclick='handleRemoveUnit(${index})'>-</button>
                        ${item.quantidade}
                        <button class='button-quantidade' onclick='handleAddUnit(${index})'>+</button>
                    </td>
                    <td>
                        <img src='./images/acessorios/trash.svg' class='trash-icon' onclick='handleRemoveAcessorio(${index})' alt='trash' />
                    </td>
                </tr>
            `;
        });

        // Fechar a tabela de acessórios
        tableHTML += `
                </tbody>
            </table>
        `;

        // Adicionar a tabela à div acessorios-div
        acessoriosDiv.innerHTML = tableHTML;
    }
}

function handleRemoveUnit(index) {
    var carrinhoAcessorios = JSON.parse(localStorage.getItem("carrinhoAcessorios")) || [];
    carrinhoAcessorios[index].quantidade -= 1;

    // Se a quantidade se tornar 0 ou menos, remova o item do carrinho
    if (carrinhoAcessorios[index].quantidade <= 0) {
        carrinhoAcessorios.splice(index, 1);
    }

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem("carrinhoAcessorios", JSON.stringify(carrinhoAcessorios));

    // Atualizar a exibição do carrinho na tela
    AdicionarTabelaAcessorios();
}

function handleAddUnit(index) {
    var carrinhoAcessorios = JSON.parse(localStorage.getItem("carrinhoAcessorios")) || [];
    carrinhoAcessorios[index].quantidade += 1;

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem("carrinhoAcessorios", JSON.stringify(carrinhoAcessorios));

    // Atualizar a exibição do carrinho na tela
    AdicionarTabelaAcessorios();
}

function handleRemoveAcessorio(index) {
    var carrinhoAcessorios = JSON.parse(localStorage.getItem("carrinhoAcessorios")) || [];
    carrinhoAcessorios.splice(index, 1);

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem("carrinhoAcessorios", JSON.stringify(carrinhoAcessorios));

    // Atualizar a exibição do carrinho na tela
    AdicionarTabelaAcessorios();
}

function AdicionarTabelaIdentificadores() {
    var carrinhoIdentificadores = JSON.parse(localStorage.getItem("carrinhoIdentificadores")) || [];
    var identificadoresDiv = document.querySelector('.identificadores-div');

    // Limpar o conteúdo atual da div
    identificadoresDiv.innerHTML = "";

    // Adicionar o cabeçalho
    identificadoresDiv.innerHTML = "<h1>Identificadores</h1>";

    // Verificar se o carrinho está vazio
    if (carrinhoIdentificadores.length === 0) {
        // Se o carrinho estiver vazio, exibir a mensagem "Carrinho vazio"
        identificadoresDiv.innerHTML += "<p>Carrinho Vazio</p>";
    } else {
        // Para cada item do carrinho, criar um bloco carrinho-block
        carrinhoIdentificadores.forEach((item, index) => {
            // Criar o bloco carrinho-block para o item atual
            var carrinhoBlock = document.createElement("div");
            carrinhoBlock.classList.add("carrinho-block");

            // Adicionar o HTML do item do carrinho ao bloco do carrinho
            carrinhoBlock.innerHTML = `
              <div class="thrash-div">
                  <img src="images/identificadores/trash.svg" alt="thrash icon" onclick="handleRemoveIdentificador(${index})">
              </div>
              <div class="form-line">
                  <span>Tipo:</span>
                  <span>${item.tipo}</span>
              </div>
              <div class="form-line">
                  <span>Tipo de gravação:</span>
                  <span>${item.gravacao}</span>
              </div>
              <div class="form-line-logo-and-form">
                  <div class="logo-div">${item.logo ? `<img src="${item.logo}" alt="Logo" />` : 'Não'}</div>
                  <div class="forms-div">
                      <div class="form-line">
                          <span>Espécie:</span>
                          <span>${item.especie}</span>
                      </div>
                      <div class="form-line">
                          <span>Macho:</span>
                          <span>${item.macho}</span>
                      </div>
                      <div class="form-line">
                          <span>Fêmea:</span>
                          <span>${item.femea}</span>
                      </div>
                      <div class="form-line">
                          <span>Cor:</span>
                          <span>${item.cor}</span>
                      </div>
                      <div class="form-line">
                          <span>Opção:</span>
                          <span>${item.opcao}</span>
                      </div>
                      <div class="form-line">
                          <span>Nome da Fazenda:</span>
                          <span>${item.fazenda}</span>
                      </div>
                  </div>
              </div>
              <div class="form-line form-line-textarea">
                  <span>Observação</span>
                  <textarea disabled="true" rows="4">${item.observacao}</textarea>
              </div>
              <div class="form-line-same-line">
                  <div class="form-line">
                      <span>Quantidade:</span>
                      <span>${item.quantidade}</span>
                  </div>
                  <div class="form-line">
                      <span>Nº Inicial:</span>
                      <span>${item.numeroInicial}</span>
                  </div>
                  <div class="form-line">
                      <span>Nº Final:</span>
                      <span>${item.numeroFinal}</span>
                  </div>
              </div>
          `;

            // Adicionar o bloco carrinho-block à div identificadores-div
            identificadoresDiv.appendChild(carrinhoBlock);
        });
    }
}

function handleRemoveIdentificador(index) {
    var carrinhoIdentificadores = JSON.parse(localStorage.getItem("carrinhoIdentificadores")) || [];
    
    // Remover o item do carrinho
    carrinhoIdentificadores.splice(index, 1);

    // Atualizar o carrinho no localStorage
    localStorage.setItem("carrinhoIdentificadores", JSON.stringify(carrinhoIdentificadores));

    // Atualizar a tabela de identificadores na tela
    AdicionarTabelaIdentificadores();
}

/*INICIO FUNÇÕES DE MODAL*/
function ChamarModal(mensagem) {
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = mensagem;
  // Exibir o modal
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function FecharModal() {
  // Ocultar o modal
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}
/*FINAL FUNÇÕES DE MODAL*/

function ValidarCampos() {
    // Array para armazenar os campos obrigatórios que não foram preenchidos
    let camposFaltando = [];

    // Verificar se cada campo obrigatório está preenchido
    const camposObrigatorios = document.querySelectorAll('.required');
    camposObrigatorios.forEach(campo => {
        const input = campo.closest('.options-div').querySelector('input, select, textarea');
        if (input && !input.value.trim()) { // Verifica se o input existe antes de acessar a propriedade value
            const campoNome = campo.parentElement.textContent.trim(); // Obtém o texto do elemento pai do span.required
            camposFaltando.push(campoNome.replace('*', '')); // Adiciona o nome do campo ao array camposFaltando
        }
    });

    // Se houver campos obrigatórios não preenchidos, exibir mensagem e não redirecionar
    if (camposFaltando.length > 0) {
        const mensagem = `Por favor, preencha os campos obrigatórios: ${camposFaltando.join(', ')}.`;
        ChamarModal(mensagem);
    } else {
        LimparCampos();
        LimparLocalStorage();
        //EnviarEmail();
        Redirecionar('final.html');
    }
}

function LimparCampos() {
    const campos = document.querySelectorAll('input, textarea');
    campos.forEach(campo => {
        campo.value = ''; 
    });
}

function LimparLocalStorage() {
    localStorage.removeItem('carrinhoAcessorios');
    localStorage.removeItem('carrinhoIdentificadores');
}

