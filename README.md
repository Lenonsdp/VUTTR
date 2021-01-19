
### Configurando o Vuttr
# VUTTR (Very Useful Tools to Remember)

Aplicação desenvolvida em node.js, desafio back-end bossa box.

As rotas do VUTTR são autenticadas com JWT, disponibilizando rotas para criação de usuários, atualização e criação da sessão no qual vai retornar o token para utilização para as demais rotas definidas.

A [documentação](http://165.227.70.236/) da API(Swagger) está contida está na pagina inicial do ambiente de produção.
## Sumário

* [Instalação](#instalação)
  * [Pré-requisitos](#pré-requisitos)
  * [Configurando o projeto](#configurando-o-vuttr)
* [Variáveis de ambiente](#variáveis-de-ambiente)
* [Utilização](#Utilização)
* [Testes](#testes)
* [Deploy](#deploy)
* [Ferramentas utilizadas](#ferramentas-utilizadas)

## Instalação

Para utilizar a API VUTTR, você precisa atender os [pré-requisitos](#pré-requisitos) e, em seguida, [configura-lo](#configurando-o-vuttr).

### Pré-requisitos

Para configurar o Vuttr, certifique-se de que os seguintes softwares estão instalados no sistema operacional:

* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)
* [Node.js LTS (v14.x)](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

Antes de configurar o Vuttr, você precisa baixar este repositório Git. Depois disso, você pode instalar a aplicação.

Utilize o seguinte comando para baixar o repositório:

```
git clone https://github.com/Lenonsdp/vuttr.git
```

#### Construção do ambiente Docker

Para construir o ambiente Docker do Vuttr, siga os passos abaixo executando os comandos diretório raiz do projeto.

Copie o arquivo contendo as variáveis de ambiente do projeto:

```
$ cp .envexample .env
```


Construa o ambiente Docker usando o comando:

```
# docker-compose build
```

Para iniciar a aplicação utilize:

```
# docker-compose up
```

Para ocultar a saída dos logs utilize comando com o parâmetro `-d` (execução em background):

```
# docker-compose up -d
```

Por fim iremos rodar as migrations para isso é preciso executar em modo iterativo o container da aplicação.

```
# sudo docker exec -it vuttr-node-js /bin/bash
```

Para executar as migrations execute o seguinte comando
```
# yarn sequelize db:migrate
```

Posteriormente digite o comando para sair do modo iterativo
```
# exit
```
## Variáveis de ambiente

O Vuttr disponibiliza algumas variáveis de ambiente para facilitar o desenvolvimento:

| Variável                   || Descrição                                                                                                                |
|----------------------------|:------------------------:|--------------------------------------------------------------------------------------------------------------------------|
| `NODE_ENV`        || Ambiente de desenvolvimento. |
| `SECRET` || Segredo para gerar o hash de senha.  |
| `DB_HOST`       || Host para conexão.                                     |
| `DB_PASSWORD`               || Senha do banco de dados.                                                 |
| `DB_USER`          || User do banco de dados.                                                          |
| `DB_DATABASE`             || Base do banco de dados, processo de build do docker já faz a criação da base `vuttr`.                                                                     |
||
### Utilização

Após executar a configuração do projeto a documentação da API pode ser acessada pelo link http://localhost:8001/,
no qual pode ser executada todas as rotas que foram desenvolvidas para testar suas funcionalidades, ou testar de outra maneira acessando as rotas com a base URL http://localhost:3000/.

É possivél alterar a documentação do projeto através do arquivo [`api.yaml`](swagger/api.yaml), as modificações serão aplicadas após executar o build do projeto novamente.

### Testes

O Vuttr implementa os testes automatizados com a framework [Jest](https://jestjs.io/). Os testes estão implementados no diretório [`__tests__`](__tests__).

A estrutura está contida em:

- Integração (diretório [`integration`](__tests__/integration))

Para executar todos os testes, utilize o comando:

```
# yarn test
```

O banco de dados para testes foi configurado com o sqlite3, obtendo informações do arquivo .env.test , no qual os testes rodam as migrations não interferindo na base configurada do postgres.

Biblioteca oferece o coverage, qual demonstra toda a cobertura de testes que foram executados.
![](https://i.imgur.com/BGq5wTX.png)

## Deploy

A API está disponível neste link (http://165.227.70.236/) servidor na digital ocean, no qual foi configurado o nginx para redirecionar para o swagger, contendo toda a documentação do projeto.

A utilização da API em produção ainda se remete a porta 3000 exemplo http://165.227.70.236:3000/tools

Foi implementado a integração continua, utilizando o [buddy](https://app.buddy.works/), cada push commit feito roda uma pipeline, que contém os testes de integração, e os comandos para executar as migrations, atualizaççoes e o build do projeto em produção.
![](https://i.imgur.com/xDweDcX.png)

Se o teste falhar, o deploy não é executado, enviando um e-mail notificando o ocorrido.

## Ferramentas utilizadas
- Docker
- Docker compose
- Dotenv
- Express
- Jsonwebtoken
- Bcryptjs
- Orm Sequelize
- Sucrase
- Nodemon
- Yup
- Jest
- Supertest
- Swagger
- Buddy