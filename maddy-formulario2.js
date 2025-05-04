<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Pedido de Cookies</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      max-width: 600px;
    }
    label {
      font-weight: bold;
    }
    input, textarea, select {
      width: 100%;
      margin-bottom: 15px;
      padding: 8px;
    }
    button {
      padding: 10px 20px;
      background-color: #6c4c3d;
      color: white;
      border: none;
      cursor: pointer;
    }
    .resultado {
      margin-top: 20px;
      padding: 10px;
      background-color: #f3f3f3;
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <h2>Formulário de Pedido de Cookies</h2>
  <form id="formPedido">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" required>

    <label for="telefone">Telefone:</label>
    <input type="tel" id="telefone" required>

    <label>Sabor(es):</label>
    <label><input type="checkbox" name="sabor" value="Chocolate"> Chocolate</label><br>
    <label><input type="checkbox" name="sabor" value="Baunilha"> Baunilha</label><br>
    <label><input type="checkbox" name="sabor" value="Amendoim"> Amendoim</label><br>

    <label for="quantidade">Quantidade:</label>
    <input type="number" id="quantidade" min="1" required>

    <label for="endereco">Endereço de Entrega:</label>
    <textarea id="endereco" rows="3" required></textarea>

    <label for="pagamento">Forma de Pagamento:</label>
    <select id="pagamento" required>
      <option value="Pix">Pix</option>
      <option value="Cartão">Cartão</option>
      <option value="Dinheiro">Dinheiro</option>
    </select>

    <button type="submit">Enviar Pedido</button>
  </form>

  <div class="resultado" id="resultado"></div>

  <script>
    document.getElementById('formPedido').addEventListener('submit', function(e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const telefone = document.getElementById('telefone').value;
      const sabores = Array.from(document.querySelectorAll('input[name="sabor"]:checked')).map(el => el.value);
      const quantidade = document.getElementById('quantidade').value;
      const endereco = document.getElementById('endereco').value;
      const pagamento = document.getElementById('pagamento').value;

      const resultado = `
        <h3>Pedido Recebido!</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Sabores:</strong> ${sabores.join(', ') || 'Nenhum selecionado'}</p>
        <p><strong>Quantidade:</strong> ${quantidade}</p>
        <p><strong>Endereço:</strong> ${endereco}</p>
        <p><strong>Pagamento:</strong> ${pagamento}</p>
      `;

      document.getElementById('resultado').innerHTML = resultado;
      document.getElementById('formPedido').reset();
    });
  </script>
</body>
</html>