function alternarSecao(idDesejado) {
  const todasAsSecoes = document.querySelectorAll('.sections');
  todasAsSecoes.forEach(secao => {
    secao.style.display = 'none';
  });
  const secaoParaMostrar = document.getElementById(idDesejado);
  if (secaoParaMostrar) {
    secaoParaMostrar.style.display = 'block';
  }
}