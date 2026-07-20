# Visualizador de Perfil GitHub

Este projeto é uma aplicação web simples em JavaScript que permite buscar um usuário do GitHub e visualizar informações do perfil, como avatar, bio, seguidores e repositórios públicos.

## O que a aplicação faz

- Busca um usuário pelo nome no GitHub;
- Exibe dados básicos do perfil;
- Mostra quantos seguidores e quantos usuários segue;
- Lista os repositórios mais recentes do usuário com informações como:
  - estrelas;
  - forks;
  - watchers;
  - linguagem principal.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript moderno (ES Modules)
- API REST do GitHub

## Estrutura do projeto

- index.html: estrutura principal da página
- js/api.js: funções para consumir a API do GitHub
- js/ui.js: rendering dos dados na interface
- js/index.js: lógica de busca e interação com a página
- src/css/: arquivos de estilo da aplicação

## Como executar localmente

1. Clone este repositório;
2. Abra a pasta em um editor de código;
3. Inicie um servidor local, por exemplo com a extensão Live Server no VS Code;
4. Acesse a página no navegador.

> Como o projeto é estático, também é possível abrir o arquivo index.html diretamente no navegador, embora o uso de um servidor local seja recomendado.

## Endpoints usados da API do GitHub

- Perfil do usuário: GET /users/:username
- Repositórios do usuário: GET /users/:username/repos?per_page=10&sort=created

## Observações

- A API do GitHub pode limitar o número de requisições sem autenticação.
- Em caso de usuário inexistente ou erro na requisição, a interface exibe uma mensagem de alerta.
