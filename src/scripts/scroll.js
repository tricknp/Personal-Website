//todas as paginas ocupam toda a tela.
var pages = [].slice.call(document.querySelectorAll('.page'), 0);
var checkCurrentPage = function () {
  // obtendo posição das paginas.
  var tops = pages.map(function (page) {
    var position = page.getBoundingClientRect();
    return position.top;
  });

  var indexUnique = tops.indexOf(0);
  if (indexUnique != -1) {
    // unica pagina sendo exibida;
    console.log([pages[indexUnique]]);
    return;
  } else {
    // obtendo as paginas que começam acima da posição atual.
    var prevs = tops.filter(function (top) {
      return top < 0;
    });

    var prev = pages[prevs.length - 1];
    var next = pages[prevs.length];
    console.log([prev, next]);
  }
}

window.addEventListener("scroll", checkCurrentPage);
window.addEventListener("resize", checkCurrentPage);

