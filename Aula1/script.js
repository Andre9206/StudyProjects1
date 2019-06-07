  function carregar() {
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  //var hora = 22                                 //PARA FORÇAR A HORA AO REALIZAR TESTES.
  msg.innerHTML = `Agora são: ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // BOM DIA
    document.body.style.background = '#ffcc92'
    img.src = 'fotomanha.png';
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE
    document.body.style.background = '#8d3615'
    img.src = 'fototarde.png';
  } else {
    // BOA NOITE
    document.body.style.background = '#245b74'
    img.src = 'fotonoite.png';
  }
}

