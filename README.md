
# Curso de REST API com NodeJS para Tutorial no Github

### Lista de Pacotes Instalados no SO

Pacotes|Versão|Descrição
---|---|---
git|v2.26.0|
node|v12.16.1 (LTS)|
npm|v6.13.4|
yarn|v1.22.4|
MySQL|| Acesso a banco de dados MySQL Via container Docker.


> Efetuar instalação de todos os  pacotes no SO.

### Lista de Pacotes Utilizados no Projeto

Pacotes|Dependência|Descrição
---|---|---
express||Framework web para tratar requisições 'http' em aplicações 'node'.
nodemon|Dev|Reinicia automaticamente o servidor do 'node' toda vez que tem alteração em um arquivo '.js'.
morgan||Framework de log para requisições `http`. É um **Callback** que monitora todas as requisições da aplicação.
body-parser||

#### CORS (Cross-Origin Resource Sharing) 'Compartilhamento de Recursos de Origem Cruzada'
É um acordo sobre como trocar recursos entre **browser** e **servidor** quando o browser tenta acessar a um domínio diferente daquele em que está a navegar, atraves de restrições configuraveis para requisições 'http'.
![CORS error](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS/Errors)


### Lista de Comandos Utilizados no Projeto

Comando|Descrição
---|---
yarn init|Inicia um projeto **nodeJS** criando um arquivo de configuração chamado `package.json`.
yarn add `pacote`|Instala um determinado `pacote` na dependência do projeto.
yarn add `pacote -D`|Instala um determinado 'pacote' na dependência (**_Desenvolvimento_**) do projeto.
yarn remove `pacote`|Remove o pacote da dependência do projeto.
node server.js|Inicializa o servidor do **nodeJS**. Para para-lo digitar `Ctrl + C`.
yarn start|Executa um script chamado `start` criado no arquivo `package.json` para ser inicializado.

