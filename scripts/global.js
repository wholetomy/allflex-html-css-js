//INICIO FUNÇÃO PARA PREENCHER AS ETAPAS
function PreencherEtapaCorreta(etapa) {
    var circulos = document.querySelectorAll('.circulo-etapa');

    for (var i = 0; i < circulos.length; i++) {
        if (i < etapa) {
            circulos[i].classList.add('active');
        } else {
            circulos[i].classList.remove('active');
        }
    }
}
//FINAL FUNÇÃO PARA PREENCHER AS ETAPAS

//INICIO FUNÇÃO PARA REDIRECIONAR ENTRE TELAS
function Redirecionar(pagina) {
    window.location.replace(pagina);
}
//FINAL FUNÇÃO PARA REDIRECIONAR ENTRE TELAS