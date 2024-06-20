import { MachoGrandeSVG, MachoMaxiSVG, MachoMedioSVG, MachoOvinoCaprinoSVG, MachoPequenoSVG, MachoTipTagSVG } from '../svgs/MachosSVG.js';
import { FemEletHdxFdxSVG, FemGrandeSVG, FemMaxiSVG, FemMediaSVG, FemOvinoCaprinoSVG, FemPequenaSVG, FemSuinoOvinoSVG } from '../svgs/FemeasSVG.js';

/*INICIO FUNÇÕES PARA PREENCHER OS DROPDOWNS*/
// Variável global para armazenar o JSON
let identificadoresJsonData;

// Variáveis para campos dropdown
let machoSelecionado;
let femeaSelecionada;
let tipoDeGravacaoSelecionada;
let corSelecionada = "#EEEE22";
let nomeFazendaSelecionado;
let numeroInicialSelecionado;
let logoSelecionado;

window.onload = function () {
  PreencherEtapaCorreta(1);
  CarregarIdentificadoresJson();
  ValidarNotificacoes();
  AtualizarVisualizacao();
};

function CarregarIdentificadoresJson() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        identificadoresJsonData = JSON.parse(xhr.responseText);
        PreencherTodosOsDropDownsIndependentes();
        AdicionarEventosNosItensDosForms();
      } else {
        console.error('Erro ao carregar o JSON:', xhr.status);
      }
    }
  };
  xhr.open('GET', './json/identificadores.json', true);
  xhr.send();
}

function PreencherTodosOsDropDownsIndependentes() {
  PreencherTipoIdentificadorDropdown();
  PreencherOpcaoIdentificadorDropdown();
}

function AdicionarEventosNosItensDosForms() {
  // Adicione o evento de mudança para o dropdown de tipo de identificador
  document.getElementById("tipoIdentificadorDropdown").addEventListener("change", function () {
    LimparEDesabilitarDropDownsPosteriores(this);
    PreencherEspecieDropdown(this.value); // Chame a função de preenchimento de espécies passando o valor selecionado do dropdown de tipo de identificador

    switch (this.value) {
      case '':
        LimparSVG();
        AtualizarVisualizacao();
        break;
      case '1': // Eletronico
        document.getElementById("especieDropDownDiv").style.display = "none";
        document.getElementById("opcaoIdentificadorDiv").style.display = "block";
        PreencherTipoMachoDropdown('3');
        EsconderOuAparecerNumeros("esconder");
        LimparSVG();
        break;
      case '2': // Visual/Manejo
        document.getElementById("opcaoIdentificadorDiv").style.display = "none";
        document.getElementById("especieDropDownDiv").style.display = "block";
        EsconderOuAparecerNumeros("aparecer");
        LimparSVG();
        break;
    }
  });

  // Adicione o evento de mudança para o dropdown de especie
  document.getElementById("especieDropdown").addEventListener("change", function () {
    LimparEDesabilitarDropDownsPosteriores(this);

    if (this.value === '4' || this.value === '5') { //4 = Bovino mais vendido para corte, 5 = Bovino mais vendido para leite
      PreencherTipoMachoDropdown(this.value);

      if (this.value === '4') {
        machoSelecionado = '14';
        PreencherSVGMacho(corSelecionada);
      } else if (this.value === '5') {
        machoSelecionado = '15';
        PreencherSVGMacho(corSelecionada);
      }

      PreencherTipoFemeaDropdown('14'); //Macho Grande
      //PreencherSVGFemea('4');
      femeaSelecionada = '4';
      PreencherSVGFemea();
      PreencherCoresDropdown('14'); //Macho Grande
      PreencherTipoGravacaoDropdown('4'); //Femea Grande
      CurvarTextoDeIdentificadoresEletronicos();

      const machoDropdown = document.getElementById("tipoMachoDropdown");
      const femeaDropdown = document.getElementById("tipoFemeaDropdown");
      const coresDropdown = document.getElementById("coresDropdown");
      const tipoGravacaoDropdown = document.getElementById("tipoGravacaoDropdown");
      const selecioneOptionMacho = machoDropdown.querySelector('option[value=""]');
      const selecioneOptionFemea = femeaDropdown.querySelector('option[value=""]');

      if (selecioneOptionMacho) {
        machoDropdown.disabled = false;
        coresDropdown.disabled = false;
        selecioneOptionMacho.remove();
      }

      if (selecioneOptionFemea) {
        femeaDropdown.disabled = false;
        tipoGravacaoDropdown.disabled = false;
        selecioneOptionFemea.remove();
      }
    } else {
      PreencherTipoMachoDropdown(this.value);
    }

    if (this.value === '') {
      LimparSVG();
      AtualizarVisualizacao();
    }

    AlterarCorDoSVG(corSelecionada);
    AtualizarVisualizacao();
  });

  // Adicione o evento de mudança para o dropdown de macho
  document.getElementById("tipoMachoDropdown").addEventListener("change", function () {
    machoSelecionado = this.value;
    LimparEDesabilitarDropDownsPosteriores(this);
    PreencherTipoFemeaDropdown(this.value); // Chame a função de preenchimento de femeas e cores passando o valor selecionado do dropdown de macho
    PreencherCoresDropdown(this.value);

    // Chame a função correspondente para preencher o SVG do macho
    PreencherSVGMacho(corSelecionada);
    AtualizarVisualizacao();
  });

  // Adicione o evento de mudança para o dropdown de femea
  document.getElementById("tipoFemeaDropdown").addEventListener("change", function () {
    femeaSelecionada = this.value;
    LimparEDesabilitarDropDownsPosteriores(this);
    PreencherTipoGravacaoDropdown(this.value); // Chame a função de preenchimento de tipo de gravação passando o valor selecionado do dropdown de fêmea

    // Verificar se o valor selecionado é 1 ou 2
    if (this.value === '1' || this.value === '2') {
      // Alterar o nome da opção correspondente no dropdown de tipo de gravação
      const tipoGravacaoDropdown = document.getElementById("tipoGravacaoDropdown");
      const opcaoFemeaNumerada2 = tipoGravacaoDropdown.querySelector('option[value="2"]');
      const opcaoFemeaNumerada3 = tipoGravacaoDropdown.querySelector('option[value="3"]');

      if (opcaoFemeaNumerada2) {
        opcaoFemeaNumerada2.textContent = "Fêmea sem logo (com numeração oficial)";
        opcaoFemeaNumerada3.textContent = "Fêmea com logo (logo e numeração oficial)";
      }

      if (opcaoFemeaNumerada3) {
        opcaoFemeaNumerada2.textContent = "Fêmea sem logo (com numeração oficial)";
        opcaoFemeaNumerada3.textContent = "Fêmea com logo (logo e numeração oficial)";
      }
    }
    // Chame a função correspondente para preencher o SVG da femea
    //PreencherSVGFemea(this.value);
    PreencherSVGFemea(corSelecionada);
    AtualizarVisualizacao();
    CurvarTextoDeIdentificadoresEletronicos();
  });

  // Adicione o evento de mudança para o dropdown de cores
  document.getElementById("coresDropdown").addEventListener("change", function () {
    corSelecionada = this.value;
    AlterarCorDoSVG(corSelecionada);
  });

  // Adicione o evento de mudança para o dropdown de tipo de gravação
  document.getElementById("tipoGravacaoDropdown").addEventListener("change", function () {
    tipoDeGravacaoSelecionada = this.value;

    // Verifica se a div macho-cor contém um SVG
    const machoSVGContainer = document.querySelector('.macho-cor');
    const svgExistsInMachoDiv = machoSVGContainer.querySelector('svg') != null;

    // Chama as funções apenas se houver um SVG dentro da div macho-cor
    if (svgExistsInMachoDiv) {
      PreencherSVGMacho(corSelecionada);
      PreencherSVGFemea(corSelecionada);
      CurvarTextoDeIdentificadoresEletronicos();
    }

    if (textoCurvado) {
      CurvarOuDescurvarTexto();
    }
  });

  // Adicione o evento de mudança para o input de nome da fazenda
  document.getElementById("nomeFazendaGravacao").addEventListener("input", function () {
    nomeFazendaSelecionado = this.value;

    // Verifica se a div macho-cor contém um SVG
    const machoSVGContainer = document.querySelector('.macho-cor');
    const svgExistsInMachoDiv = machoSVGContainer.querySelector('svg') != null;

    LimparLogo();

    // Chama as funções apenas se houver um SVG dentro da div macho-cor
    if (svgExistsInMachoDiv) {
      PreencherSVGMacho(corSelecionada);
      PreencherSVGFemea(corSelecionada);
      CurvarTextoDeIdentificadoresEletronicos();
    }

    if (textoCurvado) {
      CurvarOuDescurvarTexto();
    }
  });

  // Adicione o evento de mudança para o input de numero inicial
  document.getElementById("numeroInicial").addEventListener("input", function () {
    numeroInicialSelecionado = this.value;

    // Verifica se a div macho-cor contém um SVG
    const machoSVGContainer = document.querySelector('.macho-cor');
    const svgExistsInMachoDiv = machoSVGContainer.querySelector('svg') != null;

    // Chama as funções apenas se houver um SVG dentro da div macho-cor
    if (svgExistsInMachoDiv) {
      PreencherSVGMacho(corSelecionada);
      PreencherSVGFemea(corSelecionada);
    }

    if (textoCurvado) {
      CurvarOuDescurvarTexto();
    }
  });

  // Adiciona eventos de mudança aos campos de número inicial e final
  document.getElementById("numeroInicial").addEventListener("change", CalcularQuantidade);
  document.getElementById("numeroFinal").addEventListener("change", CalcularQuantidade);

  // Adicione o evento de mudança para o input de upload de arquivo
  document.getElementById("logoFileUpload").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      const fileSize = file.size;
      const maxSize = 5 * 1024 * 1024; // 5MB em bytes
      if (fileType === 'image/jpeg' || fileType === 'image/png') {
        if (fileSize > maxSize) {
          ChamarModal('O tamanho do arquivo excede 5MB. Por favor, selecione um arquivo menor.');
          return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          // Atualiza a variável com o URL do logo
          logoSelecionado = reader.result;

          // Verifica se a div macho-cor contém um SVG
          const machoSVGContainer = document.querySelector('.macho-cor');
          const svgExistsInMachoDiv = machoSVGContainer.querySelector('svg') != null;

          LimparNomeDaFazenda();
          // Chama as funções apenas se houver um SVG dentro da div macho-cor
          if (svgExistsInMachoDiv) {
            PreencherSVGMacho(corSelecionada);
            PreencherSVGFemea(corSelecionada);
            CurvarTextoDeIdentificadoresEletronicos();
          }

          if (textoCurvado) {
            CurvarOuDescurvarTexto();
          }
        };
      } else {
        chamarModal('Por favor, selecione um arquivo JPEG ou PNG.');
      }
    }
  });
}

function LimparNomeDaFazenda() {
  nomeFazendaSelecionado = '';
  document.getElementById("nomeFazendaGravacao").value = "";
}

function LimparLogo() {
  logoSelecionado = '';
  document.getElementById("logoFileUpload").value = "";
}

function LimparEDesabilitarDropDownsPosteriores(elementoSelecionado) {
  const dropdowns = [
    "opcaoIdentificadorDropdown",
    "especieDropdown",
    "tipoMachoDropdown",
    "coresDropdown",
    "tipoFemeaDropdown",
    "tipoGravacaoDropdown"
  ];

  // Encontrar o índice do dropdown selecionado
  const indiceSelecionado = dropdowns.indexOf(elementoSelecionado.id);

  // Limpar e desabilitar os dropdowns posteriores
  for (let i = indiceSelecionado + 1; i < dropdowns.length; i++) {
    const dropdown = document.getElementById(dropdowns[i]);
    dropdown.innerHTML = "<option value=''>Selecione...</option>";
    dropdown.disabled = true;
  }

  // Limpar as seleções dos dropdowns posteriores
  for (let i = indiceSelecionado + 1; i < dropdowns.length; i++) {
    const dropdown = document.getElementById(dropdowns[i]);
    if (dropdown.tagName === 'SELECT') { // Verifica se é um dropdown
      dropdown.selectedIndex = 0;
    }
  }

  // Habilitar os dropdowns necessários
  if (elementoSelecionado.id === 'tipoIdentificadorDropdown') {
    document.getElementById('opcaoIdentificadorDropdown').disabled = false;
    document.getElementById('especieDropdown').disabled = false;
    PreencherOpcaoIdentificadorDropdown();
  } else if (elementoSelecionado.id === 'especieDropdown') {
    document.getElementById('tipoMachoDropdown').disabled = false;
  } else if (elementoSelecionado.id === 'tipoMachoDropdown') {
    document.getElementById('tipoFemeaDropdown').disabled = false;
    document.getElementById('coresDropdown').disabled = false; // Habilitar o dropdown de cores
  } else if (elementoSelecionado.id === 'tipoFemeaDropdown') {
    document.getElementById('tipoGravacaoDropdown').disabled = false;

  }
}

function PreencherTipoIdentificadorDropdown() {
  const tipoIdentificadorDropdown = document.getElementById("tipoIdentificadorDropdown");
  const tipoIdentificadorData = identificadoresJsonData.data.tipo_identificador;
  PreencherDropdown(tipoIdentificadorDropdown, tipoIdentificadorData, "cod_tipo_identificador", "tipo_identificador");
}

function PreencherOpcaoIdentificadorDropdown() {
  const opcaoIdentificadorDropdown = document.getElementById("opcaoIdentificadorDropdown");
  const opcaoIdentificadorData = identificadoresJsonData.data.opcao_identificador;
  PreencherDropdown(opcaoIdentificadorDropdown, opcaoIdentificadorData, "cod_opcao_identificador", "opcao_identificador");
}

function PreencherEspecieDropdown(tipoIdentificadorSelecionado) {
  const especieDropdown = document.getElementById("especieDropdown");
  especieDropdown.innerHTML = ""; // Limpa o dropdown

  const especiesData = identificadoresJsonData.data.especie;

  // Filtrar as espécies com base no tipo de identificador selecionado
  const especiesFiltradas = especiesData.filter(function (especie) {
    return especie.cod_tipo_identificador == tipoIdentificadorSelecionado;
  });

  // Utilizar a função PreencherDropdown para preencher o dropdown de espécies
  PreencherDropdown(especieDropdown, especiesFiltradas, "cod_especie", "especie");

  // Remover a opção "Selecione..." se ela existir e se tipoIdentificadorSelecionado for igual a '1'
  if (tipoIdentificadorSelecionado === '1') {
    const selecioneOption = especieDropdown.querySelector('option[value=""]');
    if (selecioneOption) {
      selecioneOption.remove();
    }
  }
}

function PreencherTipoMachoDropdown(tipoEspecieSelecionado) {
  const tipoMachoDropdown = document.getElementById("tipoMachoDropdown");
  tipoMachoDropdown.disabled = false;
  tipoMachoDropdown.innerHTML = "<option value=''>Selecione...</option>";

  const machosData = identificadoresJsonData.data.macho;

  // Filtrar as espécies com base no tipo de identificador selecionado
  const machosFiltrados = machosData.filter(function (macho) {
    return macho.cod_especie == tipoEspecieSelecionado;
  });

  // Utilizar a função PreencherDropdown para preencher o dropdown de espécies
  PreencherDropdown(tipoMachoDropdown, machosFiltrados, "cod_macho", "macho");
}

function PreencherTipoFemeaDropdown(tipoMachoSelecionado) {
  const tipoFemeaDropdown = document.getElementById("tipoFemeaDropdown");
  tipoFemeaDropdown.innerHTML = "<option value=''>Selecione...</option>";

  const machosFemeasDePara = identificadoresJsonData.data.machos_femeas_depara;
  const femeasData = identificadoresJsonData.data.femea;

  // Filtrar as fêmeas correspondentes ao macho selecionado
  const femeasFiltradas = machosFemeasDePara.filter(function (dePara) {
    return dePara.cod_macho == tipoMachoSelecionado;
  }).map(function (dePara) {
    // Encontrar os detalhes da fêmea com base no código de fêmea no de_para
    return femeasData.find(function (femea) {
      return femea.cod_femea == dePara.cod_femea;
    });
  });

  // Utilizar a função PreencherDropdown para preencher o dropdown de fêmeas
  PreencherDropdown(tipoFemeaDropdown, femeasFiltradas, "cod_femea", "femea");
}

function PreencherTipoGravacaoDropdown(femeaSelecionada) {
  const tipoGravacaoDropdown = document.getElementById("tipoGravacaoDropdown");
  tipoGravacaoDropdown.innerHTML = "<option value=''>Selecione...</option>";

  const femeasTipoGravacoesDePara = identificadoresJsonData.data.femeas_tipo_gravacoes_depara;
  const tipoGravacaoData = identificadoresJsonData.data.tipo_gravacao;

  // Filtrar os códigos de tipo de gravação correspondentes à fêmea selecionada
  const codigosTipoGravacao = femeasTipoGravacoesDePara.filter(function (dePara) {
    return dePara.cod_femea == femeaSelecionada;
  }).map(function (dePara) {
    return dePara.cod_tipo_gravacao;
  });

  // Filtrar os detalhes dos tipos de gravação com base nos códigos filtrados
  const tipoGravacaoFiltrados = tipoGravacaoData.filter(function (tipoGravacao) {
    return codigosTipoGravacao.includes(tipoGravacao.cod_tipo_gravacao);
  });

  // Utilizar a função PreencherDropdown para preencher o dropdown de tipo de gravação
  PreencherDropdown(tipoGravacaoDropdown, tipoGravacaoFiltrados, "cod_tipo_gravacao", "tipo_gravacao");
}

function PreencherCoresDropdown(tipoMachoSelecionado) {
  const coresDropdown = document.getElementById("coresDropdown");
  coresDropdown.innerHTML = "";

  const coresMachosDePara = identificadoresJsonData.data.cores_machos_depara;
  const coresData = identificadoresJsonData.data.cores;

  // Filtrar os códigos de cor correspondentes ao macho selecionado
  const codigosCores = coresMachosDePara.filter(function (dePara) {
    return dePara.cod_macho == tipoMachoSelecionado;
  }).map(function (dePara) {
    return dePara.cod_cor;
  });

  // Filtrar os detalhes das cores com base nos códigos filtrados
  const coresFiltradas = coresData.filter(function (cor) {
    return codigosCores.includes(cor.cod_cores);
  });

  // Utilizar a função PreencherDropdown para preencher o dropdown de cores
  PreencherDropdown(coresDropdown, coresFiltradas, "hex", "cores");
}

function PreencherDropdown(dropdown, data, campoValor, campoTexto) {
  if (campoValor == 'hex') {
    dropdown.innerHTML = "";
  }
  else {
    dropdown.innerHTML = "<option value=''>Selecione...</option>";
  }
  data.forEach(function (item) {
    const option = document.createElement('option');
    option.value = item[campoValor];
    option.text = item[campoTexto];
    dropdown.appendChild(option);
  });
}
/*FINAL FUNÇÕES PARA PREENCHER OS DROPDOWNS*/

/*INICIO FUNÇÕES PARA CALCULAR A QUANTIDADE COM BASE NOS NUMEROS INICIAL E FINAL*/
function CalcularQuantidade() {
  const numeroInicial = parseInt(document.getElementById("numeroInicial").value);
  const numeroFinal = parseInt(document.getElementById("numeroFinal").value);

  // Verifica se ambos os campos foram preenchidos corretamente
  if (!isNaN(numeroInicial) && !isNaN(numeroFinal) && numeroFinal >= numeroInicial) {
    // Calcula a quantidade e preenche o campo de quantidade
    const quantidade = numeroFinal - numeroInicial + 1;
    document.getElementById("quantidade").value = quantidade;
  } else {
    // Se os campos não estiverem preenchidos corretamente, limpa o campo de quantidade
    document.getElementById("quantidade").value = "";
  }
}
/*FINAL FUNÇÕES PARA CALCULAR A QUANTIDADE COM BASE NOS NUMEROS INICIAL E FINAL*/

/*INICIO FUNÇÕES DE MODAL*/
window.ChamarModal = ChamarModal;
function ChamarModal(mensagem) {
  const modalMessage = document.getElementById("modalMessage");
  modalMessage.textContent = mensagem;
  // Exibir o modal
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
}

window.FecharModal = FecharModal;
function FecharModal() {
  // Ocultar o modal
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}
/*FINAL FUNÇÕES DE MODAL*/

/*INICIO FUNÇÃO DE ATUALIZAR CARRINHO*/
function VerificarECriarTabelaCarrinho() {
  const carrinhoIdentificadores = JSON.parse(localStorage.getItem("carrinhoIdentificadores"));

  // Verifica se a tabela já existe na carrinhoTableDiv
  const carrinhoTableDiv = document.getElementById("carrinhoTableDiv");
  const carrinhoVazioDiv = document.querySelector(".carrinho-vazio");

  if (carrinhoIdentificadores && carrinhoIdentificadores.length > 0) {
    // Remove a mensagem de carrinho vazio, caso exista
    if (carrinhoVazioDiv) {
      carrinhoTableDiv.removeChild(carrinhoVazioDiv);
    }

    // Limpa os blocos antigos
    carrinhoTableDiv.innerHTML = '';

    // Cria um bloco para cada item do carrinho
    carrinhoIdentificadores.forEach((item, index) => {
      const numeroItem = index + 1;

      const tipo = item[`tipo${numeroItem}`];
      const opcao = item[`opcao${numeroItem}`];
      const especie = item[`especie${numeroItem}`];
      const macho = item[`macho${numeroItem}`];
      const femea = item[`femea${numeroItem}`];
      const gravacao = item[`gravacao${numeroItem}`];
      const cor = item[`cor${numeroItem}`];
      const quantidade = item[`quantidade${numeroItem}`];
      const numeroInicial = item[`numeroInicial${numeroItem}`];
      const numeroFinal = item[`numeroFinal${numeroItem}`];
      const fazenda = item[`fazenda${numeroItem}`];
      const logo = item[`logo${numeroItem}`];
      const observacao = item[`observacao${numeroItem}`];

      const carrinhoBlock = document.createElement("div");
      carrinhoBlock.className = "carrinho-block";

      // Verifica se há um logo e define o conteúdo correspondente
      const logoContent = logo ? `<img src="${logo}" alt="Logo" />` : '<div>Sem logo</div>';

      // Estrutura interna do bloco
      carrinhoBlock.innerHTML = `
              <div class="thrash-div">
                  <img src="images/identificadores/trash.svg" alt="thrash icon" onclick="RemoveItemFromCart(${index})">
              </div>
              <div class="form-line">
                  <span>Tipo:</span>
                  <span>${tipo}</span>
              </div>
              <div class="form-line">
                  <span>Tipo de gravação:</span>
                  <span>${gravacao}</span>
              </div>
              <div class="form-line-logo-and-form">
                  <div class="logo-div">${logoContent}</div>
                  <div class="forms-div">
                      <div class="form-line">
                          <span>Espécie:</span>
                          <span>${especie}</span>
                      </div>
                      <div class="form-line">
                          <span>Macho:</span>
                          <span>${macho}</span>
                      </div>
                      <div class="form-line">
                          <span>Fêmea:</span>
                          <span>${femea}</span>
                      </div>
                      <div class="form-line">
                          <span>Cor:</span>
                          <span>${cor}</span>
                      </div>
                      <div class="form-line">
                          <span>Opção:</span>
                          <span>${opcao}</span>
                      </div>
                      <div class="form-line">
                          <span>Nome da Fazenda:</span>
                          <span>${fazenda}</span>
                      </div>
                  </div>
              </div>
              <div class="form-line form-line-textarea">
                  <span>Observação</span>
                  <textarea disabled="true" rows="4">${observacao}</textarea>
              </div>
              <div class="form-line-same-line">
                  <div class="form-line">
                      <span>Quantidade:</span>
                      <span>${quantidade}</span>
                  </div>
                  <div class="form-line">
                      <span>Nº Inicial:</span>
                      <span>${numeroInicial}</span>
                  </div>
                  <div class="form-line">
                      <span>Nº Final:</span>
                      <span>${numeroFinal}</span>
                  </div>
              </div>
          `;

      // Adiciona o bloco à div do carrinho
      carrinhoTableDiv.appendChild(carrinhoBlock);
    });
  } else {
    // Se o carrinho estiver vazio, exibe a mensagem correspondente
    carrinhoTableDiv.innerHTML = '<div class="carrinho-vazio"><p>O carrinho está vazio</p></div>';
  }
}

function AjustarNumerosNoCarrinho() {
  const carrinhoAtual = JSON.parse(localStorage.getItem("carrinhoIdentificadores"));

  if (carrinhoAtual && carrinhoAtual.length > 0) {
    const tiposExistentes = {};

    // Itera sobre os itens do carrinho para obter os tipos existentes
    carrinhoAtual.forEach(item => {
      for (const key in item) {
        if (key.startsWith('tipo')) {
          tiposExistentes[item[key]] = true;
        }
      }
    });

    const novoCarrinho = [];

    // Atribui números sequenciais aos tipos existentes e atualiza o carrinho
    let numero = 1;
    carrinhoAtual.forEach(item => {
      const novoItem = {};
      for (const key in item) {
        if (key.startsWith('tipo')) {
          const tipo = item[key];
          if (!(tipo in novoItem)) {
            novoItem[`tipo${numero}`] = tipo;
            numero++;
          }
        } else {
          novoItem[key] = item[key];
        }
      }
      novoCarrinho.push(novoItem);
    });

    // Atualiza o carrinho no localStorage
    localStorage.setItem("carrinhoIdentificadores", JSON.stringify(novoCarrinho));
  }
}

window.AbrirCarrinho = AbrirCarrinho;
function AbrirCarrinho() {
  // Oculta a div da página direita
  document.getElementById("paginaRightDiv").style.display = "none";
  // Exibe a div do carrinho
  document.getElementById("carrinhoDiv").style.display = "block";

  VerificarECriarTabelaCarrinho();
}

window.FecharCarrinho = FecharCarrinho;
function FecharCarrinho() {
  // Exibe a div da página direita
  document.getElementById("paginaRightDiv").style.display = "flex";
  // Oculta a div do carrinho
  document.getElementById("carrinhoDiv").style.display = "none";
}

window.RemoveItemFromCart = RemoveItemFromCart;
function RemoveItemFromCart(index) {
  // Obtenha os itens do carrinho do localStorage
  const carrinhoIdentificadores = JSON.parse(localStorage.getItem("carrinhoIdentificadores"));

  // Verifica se o carrinho existe e se o índice é válido
  if (carrinhoIdentificadores && index >= 0 && index < carrinhoIdentificadores.length) {
    // Remove o item do array de carrinhoIdentificadores
    carrinhoIdentificadores.splice(index, 1);

    // Atualiza os números dos identificadores no localStorage
    for (let i = index; i < carrinhoIdentificadores.length; i++) {
      const item = carrinhoIdentificadores[i];
      const newItem = {};
      for (const key in item) {
        if (key.includes('tipo')) {
          newItem[`tipo${i + 1}`] = item[key];
        } else if (key.includes('opcao')) {
          newItem[`opcao${i + 1}`] = item[key];
        } else if (key.includes('especie')) {
          newItem[`especie${i + 1}`] = item[key];
        } else if (key.includes('macho')) {
          newItem[`macho${i + 1}`] = item[key];
        } else if (key.includes('femea')) {
          newItem[`femea${i + 1}`] = item[key];
        } else if (key.includes('gravacao')) {
          newItem[`gravacao${i + 1}`] = item[key];
        } else if (key.includes('cor')) {
          newItem[`cor${i + 1}`] = item[key];
        } else if (key.includes('quantidade')) {
          newItem[`quantidade${i + 1}`] = item[key];
        } else if (key.includes('numeroInicial')) {
          newItem[`numeroInicial${i + 1}`] = item[key];
        } else if (key.includes('numeroFinal')) {
          newItem[`numeroFinal${i + 1}`] = item[key];
        } else if (key.includes('fazenda')) {
          newItem[`fazenda${i + 1}`] = item[key];
        } else if (key.includes('logo')) {
          newItem[`logo${i + 1}`] = item[key];
        } else if (key.includes('observacao')) {
          newItem[`observacao${i + 1}`] = item[key];
        }
      }
      carrinhoIdentificadores[i] = newItem;
    }

    // Atualize o localStorage com o novo array
    localStorage.setItem("carrinhoIdentificadores", JSON.stringify(carrinhoIdentificadores));

    // Atualize a exibição do carrinho
    AjustarNumerosNoCarrinho();
    VerificarECriarTabelaCarrinho(); // Chama a função para recriar a tabela de carrinho atualizada
    ValidarNotificacoes();
  }
}
/*FINAL FUNÇÃO DE ATUALIZAR CARRINHO*/

/*INICIO FUNÇÕES PARA PREENCHER OS SVGS*/
export function PreencherSVGMacho(cor) {
  // Obter a div onde você deseja adicionar o SVG
  const machoDiv = document.querySelector('.macho-cor');

  // Limpar a div antes de adicionar o novo SVG
  machoDiv.innerHTML = '';

  // Mapear os tipos de macho para as funções SVG correspondentes
  const machos = {
    '1': () => MachoPequenoSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '2': () => MachoMedioSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '3': () => MachoGrandeSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '4': () => MachoPequenoSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '5': () => MachoPequenoSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '6': () => MachoPequenoSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '7': () => MachoPequenoSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '8': () => MachoMedioSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '9': () => MachoGrandeSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '10': () => MachoMaxiSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '11': () => MachoPequenoSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '12': () => MachoOvinoCaprinoSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '13': () => MachoTipTagSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '14': () => MachoPequenoSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '15': () => MachoGrandeSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
  };

  // Verificar se o tipo selecionado existe no mapa
  if (machoSelecionado in machos) {
    // Chamar a função SVG correspondente ao tipo selecionado
    const svgElement = machos[machoSelecionado]();
    // Adicionar o SVG retornado ao DOM
    machoDiv.appendChild(svgElement);

    // Altear a cor do SVG
    AlterarCorDoSVG(cor);
  } else {
    //console.error('Tipo de macho não suportado:', machoSelecionado);
    LimparSVG();
  }
}

export function PreencherSVGFemea(cor) {

  let selectedFemeaType = femeaSelecionada;
  // Limpar a div onde o SVG será exibido
  const femeaDiv = document.querySelector('.femea-cor');
  femeaDiv.innerHTML = '';

  // Mapear os tipos de fêmea para as funções SVG correspondentes
  const femeas = {
    '1': () => FemEletHdxFdxSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '2': () => FemEletHdxFdxSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '3': () => FemPequenaSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '4': () => FemGrandeSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '5': () => FemMediaSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '6': () => FemMaxiSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '7': () => FemOvinoCaprinoSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
    '8': () => FemSuinoOvinoSVG(nomeFazendaSelecionado, logoSelecionado, numeroInicialSelecionado, tipoDeGravacaoSelecionada),
  };

  // Verificar se o tipo selecionado existe no mapa
  if (selectedFemeaType in femeas) {
    // Chamar a função SVG correspondente ao tipo selecionado
    const svgElement = femeas[selectedFemeaType]();
    // Adicionar o SVG retornado ao DOM
    femeaDiv.appendChild(svgElement);

    // Altear a cor do SVG
    AlterarCorDoSVG(cor);
  } else {
    //console.error('Tipo de fêmea não suportado:', selectedFemeaType);
    LimparSVGFemea();
  }
}

function AlterarCorDoSVG(cor) {
  // Selecionar os elementos do SVG que deseja alterar
  const paths = document.querySelectorAll('.femea-cor path:not([fill="white"]):not([fill="0B0C0B"]):not([fill="#646464"])');
  const circles = document.querySelectorAll('.femea-cor circle:not([fill="#0B0C0B"]):not([fill="black"]):not([fill="white"])');
  const ellipses = document.querySelectorAll('.femea-cor ellipse:not([fill="#0B0C0B"])');
  const circlesMacho = document.querySelectorAll('.macho-cor circle:not([fill="url(#paint0_angular_2058_936)"]):not([fill="white"]):not([fill="url(#paint0_angular_2058_943)"]):not([fill="url(#paint0_angular_2058_937)"]):not([fill="url(#paint0_angular_2058_940)"]):not([fill="url(#paint0_angular_2058_946)"]');
  const pathsMacho = document.querySelectorAll('.macho-cor > svg > path');
  const rectMacho = document.querySelectorAll('.macho-cor > svg > rect');

  // Iterar sobre os elementos e definir a nova cor
  paths.forEach(path => {
    path.style.fill = cor;
  });

  circles.forEach(circle => {
    circle.style.fill = cor;
  });

  ellipses.forEach(ellipse => {
    ellipse.style.fill = cor;
  });

  pathsMacho.forEach(path => {
    path.style.fill = cor;
  });

  circlesMacho.forEach(circle => {
    circle.style.fill = cor;
  });

  rectMacho.forEach(rect => {
    rect.style.fill = cor;
  });
}

// Função para curvar ou descurvar o texto
let textoCurvado;
window.CurvarOuDescurvarTexto = CurvarOuDescurvarTexto;
function CurvarOuDescurvarTexto() {
  var $machoLabel = $('#textoCurvado');
  var $femeaLabel = $('#textoCurvadoFemea');

  var textoOriginalMacho = $machoLabel.data('text-original');
  var textoOriginalFemea = $femeaLabel.data('text-original');

  if ($machoLabel.data('arctext')) {
    // Se o texto do macho está curvado, descurva-o
    $machoLabel.arctext('destroy');
    $machoLabel.html(textoOriginalMacho).removeClass('curvado');
    textoCurvado = false;

  } else {
    // Se o texto do macho não está curvado, curva-o
    $machoLabel.data('text-original', $machoLabel.text());
    $machoLabel.arctext({ radius: 200 });
    $machoLabel.addClass('curvado');
    textoCurvado = true;
  }

  if ($femeaLabel.data('arctext')) {
    // Se o texto da fêmea está curvado, descurva-o
    $femeaLabel.arctext('destroy');
    $femeaLabel.html(textoOriginalFemea).removeClass('curvado');
    textoCurvado = false;

  } else {
    // Se o texto da fêmea não está curvado, curva-o
    $femeaLabel.data('text-original', $femeaLabel.text());
    $femeaLabel.arctext({ radius: 200 });
    $femeaLabel.addClass('curvado');
    textoCurvado = true;
  }
}

// Função para curvar texto de identificadores eletrônicos
function CurvarTextoDeIdentificadoresEletronicos() {
  var $identificadorEletronico = $('#textoCurvadoIdentificadorEletronico');
  $identificadorEletronico.arctext({ radius: 200, dir: -1 });
}
/*FINAL FUNÇÕES PARA PREENCHER OS SVGS*/

/*INICIO FUNÇÕES PARA VALIDAR CARRINHO*/
// Função para validar os campos antes de adicionar um novo item
window.ValidarCampos = ValidarCampos;

/* function ValidarCampos() {
  const camposInvalidos = ValidarCamposObrigatorios();

  if (camposInvalidos.length > 0) {
    const mensagem = `Por favor, preencha os campos obrigatórios: ${camposInvalidos.join(", ")}.`;
    ChamarModal(mensagem);
  } else {
    VerificarCarrinhoEAdicionar();
  }
} */

  function ValidarCampos() {
    const camposInvalidos = ValidarCamposObrigatorios();
    const logoFileUpload = document.getElementById('logoFileUpload');
    const observacao = document.getElementById('observacaoTextarea').value.trim();

    if (camposInvalidos.length > 0) {
        const mensagem = `Por favor, preencha os campos obrigatórios: ${camposInvalidos.join(", ")}.`;
        ChamarModal(mensagem);
    } else {
        if (logoFileUpload.files.length > 0) {
            if (observacao === "") {
                const mensagem = "Digite no campo de observação o nome da imagem anexada acima ou nome da fazenda para gravação";
                ChamarModal(mensagem);
            } else {
                VerificarCarrinhoEAdicionar();
            }
        } else {
            VerificarCarrinhoEAdicionar();
        }
    }
}

function VerificarCarrinhoEAdicionar() {
  const carrinho = JSON.parse(localStorage.getItem('carrinhoIdentificadores')) || [];

  if (carrinho.length >= 5) {
    const mensagem = 'O limite de itens para adicionar são 5 itens.';
    ChamarModal(mensagem);
  } else {
    AdicionarAoCarrinho();
  }
}

function AtualizarAsteriscosObrigatoriedade() {
  const tipoGravacaoDropdown = document.getElementById("tipoGravacaoDropdown");
  const tipoGravacaoValor = tipoGravacaoDropdown.value;
  const isTipoGravacao5 = tipoGravacaoValor === "5";

  const numeroInicialSpan = document.querySelector('#numeroInicialEFinalDiv .options-div-small:first-child span.required');
  const numeroFinalSpan = document.querySelector('#numeroInicialEFinalDiv .options-div-small:nth-child(2) span.required');
  const nomeFazendaSpan = document.querySelector('#nomeFazendaDiv span.required');

  if (isTipoGravacao5) {
    numeroInicialSpan.style.display = 'none';
    numeroFinalSpan.style.display = 'none';
    nomeFazendaSpan.style.display = 'none';
  } else {
    numeroInicialSpan.style.display = 'inline';
    numeroFinalSpan.style.display = 'inline';
    nomeFazendaSpan.style.display = 'inline';
  }
}

// Chame essa função sempre que o dropdown for alterado
document.getElementById("tipoGravacaoDropdown").addEventListener("change", AtualizarAsteriscosObrigatoriedade);

/* function ValidarCamposObrigatorios() {
  const camposObrigatorios = document.querySelectorAll('.required');
  let camposInvalidos = [];

  const tipoGravacaoDropdown = document.getElementById("tipoGravacaoDropdown");
  const tipoGravacaoValor = tipoGravacaoDropdown.value;
  const isTipoGravacao5 = tipoGravacaoValor === "5";

  camposObrigatorios.forEach(campo => {
    const span = campo.parentElement;
    const optionsDiv = span.parentElement.parentElement;
    const input = span.nextElementSibling;

    if (isTipoGravacao5 && (input.id === 'numeroInicial' || input.id === 'numeroFinal' || input.id === 'nomeFazendaGravacao')) {
      // Se tipoGravacaoDropdown.value for igual a 5, ignore esses campos
      return;
    }

    if (window.getComputedStyle(optionsDiv).display !== 'none') {
      if (input.tagName === 'INPUT') {
        if (!input.value.trim()) {
          camposInvalidos.push(span.textContent.replace('*', ''));
        }
      } else if (input.tagName === 'SELECT') {
        if (!input.value.trim() || input.value === '') {
          camposInvalidos.push(span.textContent.replace('*', ''));
        }
      }
    }
  });

  const nomeFazendaGravacaoInput = document.getElementById("nomeFazendaGravacao");

  // Verifica se o dropdown tem um valor diferente de "2" e se o campo de nome da fazenda está vazio, exceto quando tipoGravacaoDropdown.value for igual a 5
  if (!isTipoGravacao5 && tipoGravacaoDropdown.value !== "2" && !nomeFazendaGravacaoInput.value.trim() && machoSelecionado !== '13') {
    camposInvalidos.push("Nome da Fazenda para gravação");
  }

  return camposInvalidos;
} */

function ValidarCamposObrigatorios() {
  const camposObrigatorios = document.querySelectorAll('.required');
  let camposInvalidos = [];

  const tipoGravacaoDropdown = document.getElementById("tipoGravacaoDropdown");
  const tipoGravacaoValor = tipoGravacaoDropdown.value;
  const isTipoGravacao5 = tipoGravacaoValor === "5";
  const istipoGravacao3 = tipoGravacaoValor === "3";

  const nomeFazendaGravacaoInput = document.getElementById("nomeFazendaGravacao");
  const logoFileUpload = document.getElementById("logoFileUpload");

  const valoresNaoPermitidos = ["2", "5", "6"]; // Adicione os valores aqui conforme necessário

  camposObrigatorios.forEach(campo => {
    const span = campo.parentElement;
    const optionsDiv = span.parentElement.parentElement;
    const input = span.nextElementSibling;

    if (isTipoGravacao5 && (input.id === 'numeroInicial' || input.id === 'numeroFinal' || input.id === 'nomeFazendaGravacao')) {
      // Se tipoGravacaoDropdown.value for igual a 5, ignore esses campos
      return;
    }

    if (istipoGravacao3 && (input.id === 'numeroInicial' || input.id === 'numeroFinal')) {
      return;
    }

    if (window.getComputedStyle(optionsDiv).display !== 'none') {
      if (input.tagName === 'INPUT') {
        if (!input.value.trim()) {
          camposInvalidos.push(span.textContent.replace('*', ''));
        }
      } else if (input.tagName === 'SELECT') {
        if (!input.value.trim() || input.value === '') {
          camposInvalidos.push(span.textContent.replace('*', ''));
        }
      }
    }
  });

  // Verifica se há um arquivo no logoFileUpload
  const temArquivoNoLogoUpload = logoFileUpload.files && logoFileUpload.files.length > 0;

  // Verifica se o dropdown tem um valor diferente dos valores não permitidos e se o campo de nome da fazenda está vazio
  if (!isTipoGravacao5 &&
    !nomeFazendaGravacaoInput.value.trim() &&
    !valoresNaoPermitidos.includes(tipoGravacaoDropdown.value) &&
    machoSelecionado !== '13' &&
    !temArquivoNoLogoUpload) {
    camposInvalidos.push("Nome da Fazenda para gravação");
  }

  return camposInvalidos;
}

// Atualize os asteriscos na inicialização
AtualizarAsteriscosObrigatoriedade();

// Função para adicionar os itens ao carrinho
function AdicionarAoCarrinho() {
  const tipoIdentificador = document.getElementById("tipoIdentificadorDropdown").selectedOptions[0].textContent || '';
  const opcaoIdentificador = document.getElementById("opcaoIdentificadorDropdown").selectedOptions[0].textContent || '';
  const especie = document.getElementById("especieDropdown").selectedOptions[0].textContent || '';
  const macho = document.getElementById("tipoMachoDropdown").selectedOptions[0].textContent || '';
  const femeaDropdown = document.getElementById("tipoFemeaDropdown");
  const femea = femeaDropdown.selectedOptions[0] ? femeaDropdown.selectedOptions[0].textContent : '';
  const gravacao = document.getElementById("tipoGravacaoDropdown").selectedOptions[0].textContent || '';
  const cor = document.getElementById("coresDropdown").selectedOptions[0].textContent || '';
  const quantidade = document.getElementById("quantidade").value || '';
  const numeroInicial = numeroInicialSelecionado || '';
  const numeroFinal = document.getElementById("numeroFinal").value || '';
  const fazenda = nomeFazendaSelecionado || '';
  const logo = logoSelecionado || '';
  const observacao = document.querySelector("textarea").value || '';

  // Verificando se o carrinho já existe no localStorage
  const carrinhoExistente = JSON.parse(localStorage.getItem("carrinhoIdentificadores")) || [];
  // Obtendo o número do próximo item
  const numeroItem = carrinhoExistente.length + 1;

  // Criando o item do carrinho com sufixo numérico nas chaves
  const itemCarrinho = {
    [`tipo${numeroItem}`]: tipoIdentificador,
    [`opcao${numeroItem}`]: opcaoIdentificador !== 'Selecione...' ? opcaoIdentificador : '',
    [`especie${numeroItem}`]: especie,
    [`macho${numeroItem}`]: macho,
    [`femea${numeroItem}`]: femea,
    [`gravacao${numeroItem}`]: gravacao,
    [`cor${numeroItem}`]: cor,
    [`quantidade${numeroItem}`]: quantidade,
    [`numeroInicial${numeroItem}`]: numeroInicial,
    [`numeroFinal${numeroItem}`]: numeroFinal,
    [`fazenda${numeroItem}`]: fazenda,
    [`logo${numeroItem}`]: logo,
    [`observacao${numeroItem}`]: observacao
  };

  // Adicionando o novo item ao carrinho
  carrinhoExistente.push(itemCarrinho);
  // Atualizando o localStorage com o novo carrinho
  localStorage.setItem("carrinhoIdentificadores", JSON.stringify(carrinhoExistente));

  VerificarECriarTabelaCarrinho();
  ValidarNotificacoes();
  LimparTodosOsCampos();
  AjustarNumerosNoCarrinho();
}

// Função para validar as notificações e atualizar o contador
function ValidarNotificacoes() {
  const carrinhoIdentificadores = JSON.parse(localStorage.getItem("carrinhoIdentificadores")) || [];
  const quantidadeItens = carrinhoIdentificadores.length;

  const notificationSpan = document.querySelector(".button-with-notification .notification");
  if (notificationSpan) {
    if (quantidadeItens > 0) {
      notificationSpan.textContent = quantidadeItens;
      notificationSpan.classList.add("active");
    } else {
      notificationSpan.textContent = "";
      notificationSpan.classList.remove("active");
    }
  }
}
/*FINAL FUNÇÕES PARA VALIDAR CARRINHO*/

function AtualizarVisualizacao() {
  const machoCor = document.querySelector('.macho-cor');
  const femeaCor = document.querySelector('.femea-cor');
  const machoDiv = document.querySelector('.macho-div');
  const femeaDiv = document.querySelector('.femea-div');
  const imagemGado = document.querySelector('.imagem-gado');
  const mensagemRodape = document.querySelector('#mensagemRodape');

  if (!machoCor.innerHTML.trim() && !femeaCor.innerHTML.trim()) {
    // Se tanto macho-cor quanto femea-cor estiverem vazios, mostrar imagem-gado e esconder macho-div e femea-div
    imagemGado.style.display = 'block';
    machoDiv.style.display = 'none';
    femeaDiv.style.display = 'none';
    mensagemRodape.style.display = 'none';
  } else {
    // Se macho-cor ou femea-cor tiverem algo, mostrar macho-div e femea-div e esconder imagem-gado
    imagemGado.style.display = 'none';
    machoDiv.style.display = 'flex';
    femeaDiv.style.display = 'flex';
    mensagemRodape.style.display = 'block';
  }
}

function LimparSVG() {
  LimparSVGMacho();
  LimparSVGFemea();
}

function LimparSVGMacho() {
  machoSelecionado = '';
  const machoCor = document.querySelector('.macho-cor');
  machoCor.innerHTML = '';
}

function LimparSVGFemea() {
  femeaSelecionada = '';
  const femeaCor = document.querySelector('.femea-cor');
  femeaCor.innerHTML = '';
}

function LimparTodosOsCampos() {
  // Definir variáveis para os elementos do formulário
  const tipoIdentificadorDropdown = document.getElementById("tipoIdentificadorDropdown");
  const opcaoIdentificadorDropdown = document.getElementById("opcaoIdentificadorDropdown");
  const especieDropdown = document.getElementById("especieDropdown");
  const tipoMachoDropdown = document.getElementById("tipoMachoDropdown");
  const tipoFemeaDropdown = document.getElementById("tipoFemeaDropdown");
  const tipoGravacaoDropdown = document.getElementById("tipoGravacaoDropdown");
  const coresDropdown = document.getElementById("coresDropdown");
  const quantidadeInput = document.getElementById("quantidade");
  const numeroInicialInput = document.getElementById("numeroInicial");
  const numeroFinalInput = document.getElementById("numeroFinal");
  const nomeFazendaGravacaoInput = document.getElementById("nomeFazendaGravacao");
  const logoFileUploadInput = document.getElementById("logoFileUpload");
  const observacaoTextarea = document.querySelector("textarea");

  // Limpar os valores dos campos do formulário
  tipoIdentificadorDropdown.value = '';
  opcaoIdentificadorDropdown.value = '';
  especieDropdown.value = '';
  tipoMachoDropdown.value = '';
  tipoFemeaDropdown.value = '';
  tipoGravacaoDropdown.value = '';
  coresDropdown.value = '';
  quantidadeInput.value = '';
  numeroInicialInput.value = '';
  numeroFinalInput.value = '';
  nomeFazendaGravacaoInput.value = '';
  logoFileUploadInput.value = '';
  observacaoTextarea.value = '';

  // Desabilitar os campos
  opcaoIdentificadorDropdown.disabled = true;
  especieDropdown.disabled = true;
  tipoMachoDropdown.disabled = true;
  tipoFemeaDropdown.disabled = true;
  tipoGravacaoDropdown.disabled = true;
  coresDropdown.disabled = true;

  machoSelecionado = '';
  femeaSelecionada = '';
  tipoDeGravacaoSelecionada = '';
  corSelecionada = "#EEEE22";
  nomeFazendaSelecionado = '';
  numeroInicialSelecionado = '';
  logoSelecionado = '';


  // Limpar SVG e atualizar visualização
  LimparSVG();
  AtualizarVisualizacao();
}

function EsconderOuAparecerNumeros(opcao) {
  let numeroInicialEFinalDiv = document.getElementById("numeroInicialEFinalDiv");
  let numeroInicial = document.getElementById("numeroInicial");
  let numeroFinal = document.getElementById("numeroFinal");

  switch (opcao) {
    case 'esconder':
      numeroFinal.value = '';
      numeroInicial.value = '';
      numeroInicialSelecionado = '';
      numeroInicialEFinalDiv.style.display = 'none';
      break;
    case 'aparecer':
      numeroInicialEFinalDiv.style.display = 'flex';
      break;
  }
}