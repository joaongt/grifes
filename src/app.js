const express = require('express');
const { obterEstoque } = require('./routes/routes.js'); // Importar o módulo

const app = express();
const port = 3000;

app.get('/estoque/:idProduto', async (req, res) => {
  const { idProduto } = req.params;

  try {
    const dadosEstoque = await obterEstoque(idProduto); // Chama a função do módulo
    res.json(dadosEstoque); // Retorna os dados no formato JSON
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter informações de estoque.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
