var mq = window.matchMedia("(max-width: 800px)"); //cria um media query para telas de no máximo 800px (tablet)
var user = $("#user"); //document.querySelector("elemento");
var botaoEnvia = $("#botaoEnvia");
var alerta = $("#formAlert");
var tabPagina = $(".tabPag");
var pagina = $(".pagina");

$(botaoEnvia).click(mostraAlerta); //event listener de click que chama a função 'mostraAlerta'

$(tabPagina).click(function(e) { //uma outra maneira é criar com função anônima
  e.preventDefault();

  if ($(this).attr('id') === 'tab1') { //se clickar na primeira tab
    if (!$(pagina[0]).hasClass('mostraPagina')) { //se a primeira pagina estiver escondida
      $(pagina[0]).addClass('mostraPagina'); //mostra a primeira pagina
      $(pagina[0]).removeClass('escondePagina');

      //esconde as demais
      $(pagina[1]).addClass('escondePagina');
      $(pagina[1]).removeClass('mostraPagina');

      $(pagina[2]).addClass('escondePagina');
      $(pagina[2]).removeClass('mostraPagina');
    }

    //adiciona a classe active para esta tab
    $(this).addClass('active');

    //remove a classe active das demais
    $(tabPagina[1]).removeClass('active');
    $(tabPagina[2]).removeClass('active');
  } else if ($(this).attr('id') === 'tab2') {
    if (!$(pagina[1]).hasClass('mostraPagina')) { //se a segunda pagina estiver escondida
      $(pagina[1]).addClass('mostraPagina'); //mostra a segunda pagina
      $(pagina[1]).removeClass('escondePagina');

      //esconde as demais
      $(pagina[0]).addClass('escondePagina');
      $(pagina[0]).removeClass('mostraPagina');

      $(pagina[2]).addClass('escondePagina');
      $(pagina[2]).removeClass('mostraPagina');
    }

    //adiciona a classe active para esta tab
    $(this).addClass('active');

    //remove a classe active das demais
    $(tabPagina[0]).removeClass('active');
    $(tabPagina[2]).removeClass('active');
  } else if ($(this).attr('id') === 'tab3') {
    if (!$(pagina[2]).hasClass('mostraPagina')) { //se a terceira pagina estiver escondida
      $(pagina[2]).addClass('mostraPagina'); //mostra a terceira pagina
      $(pagina[2]).removeClass('escondePagina');

      //esconde as demais
      $(pagina[0]).addClass('escondePagina');
      $(pagina[0]).removeClass('mostraPagina');

      $(pagina[1]).addClass('escondePagina');
      $(pagina[1]).removeClass('mostraPagina');
    }

    //adiciona a classe active para esta tab
    $(this).addClass('active');

    //remove a classe active das demais
    $(tabPagina[0]).removeClass('active');
    $(tabPagina[1]).removeClass('active');
  }
});

if(mq.matches){ //confere se a tela tem o tamanho definido pela media query
  $(user).toggleClass("glyphicon glyphicon-user");
  $(user).text("Usuário"); //se a tela for, no máximo, de 800px, o ícone de usuário será substituído por texto
}

function mostraAlerta(e) { //função para o evento de clique
  e.preventDefault(); //recebe o evento original em questão e evita o comportamento padrão dele

  alerta.toggleClass('showAlert'); //mostra o alerta

  setTimeout(function(){ //cria um timer de 2 segundos para esconder o alerta novamente
    alerta.toggleClass('showAlert');
  }, 2000);
}
