
//document.getElementById('btnSaludo')
//  .addEventListener('click', probarSaludo);

document.getElementById('saludo1')
  .addEventListener('click', function (e) {
    e.preventDefault();
    probarSaludo();
  });

function probarSaludo() {
  fetch('/api/saludo')
    .then(res => res.json())
    .then(data => {
      document.getElementById('contenido').innerText = data.mensaje;
    })
    .catch(err => {
      console.error(err);
    });
}