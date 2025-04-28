const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    const operacao = query.operacao;
    const num1 = parseFloat(query.num1);
    const num2 = parseFloat(query.num2);

    let resultado;

    if (operacao === 'somar') {
        resultado = num1 + num2;
    } else if (operacao === 'dividir') {
        if (num2 === 0) {
            resultado = 'Erro: divisão por zero';
        } else {
            resultado = num1 / num2;
        }
    } else {
        resultado = 'Operação inválida';
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Resultado</title>
        </head>
        <body>
            <h1>Resultado da operação:</h1>
            <p><strong>${resultado}</strong></p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
