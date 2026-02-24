module.exports = function(req, res) {

  if (req.method === 'GET') {

    const respuesta = {
      mensaje: 'Hola Fernando',
      endpoint: '/api/saludo',
      ok: true
    };

    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8'
    });

    return res.end(JSON.stringify(respuesta));
  }

  res.writeHead(405, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Método no permitido' }));
};