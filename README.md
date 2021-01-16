
### Configurando o Vuttr
# VUTTR (Very Useful Tools to Remember)

Aplicação desenvolvida em node.js, desafio back-end bossa box.

Todas as rotas do VUTTR são autenticadas com JWT, disponibilizado rotas para criação de usuários, atualização e criação da sessão no qual vai retornar o token para utilização.
Toda [documentação](http://165.227.70.236/) está contida no ambiente do produção.
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
## Variáveis de ambiente

O Vuttr disponibiliza algumas variáveis de ambiente para facilitar o desenvolvimento:

| Variável                   || Descrição                                                                                                                |
|----------------------------|:------------------------:|--------------------------------------------------------------------------------------------------------------------------|
| `NODE_ENV`        || Ambiente de desenvolvimento. |
| `SECRET` || Segredo para gerar o hash de senha.  |
| `EXPIRESIN`         || Tempo de expiração do segredo.                                                        |
| `DB_HOST`       || Host para conexão.                                     |
| `DB_PASSWORD`               || Senha do banco de dados.                                                 |
| `DB_USER`          || User do banco de dados.                                                          |
| `DB_DATABASE`             || Base do banco de dados, processo de build do docker já faz a criação da base `vuttr`.                                                                     |
||
### Utilização

Aṕos executar a configuração do projeto a documentação da API pode ser acessada pelo link http://localhost:8001/,
no qual pode ser executada todas as rotas que foram desenvolvidas para testar suas funcionalidades, ou testar de outra maneira acessando as rotas com a base URL http://localhost:3000/.

É possivél alterar a documentação do projeto através do arquivo [`api.yaml`](swagger/api.yaml), as modificações serão aplicadas após executar o build do projeto novamente.

### Testes

O Vuttr implementa os testes automatizados com a framework [Jest](https://jestjs.io/). Os testes estão implementados no diretório [`__tests__`](__tests__).

A estrutura está contida em:

- Integração (diretório [`integration`](__tests__/Integration))

Para executar todos os testes, utilize o comando:

```
# yarn test
```

O banco de dados para testes foi configurado com o sqlite3, obtendo informações do arquivo .env.test , no qual os testes rodam as migrations não interferindo na base configurada do postgres inicialmente.

Biblioteca oferece o coverage, qual demonstra toda a cobertura de testes que foram executados.

## Deploy

A API está disponível neste link (http://165.227.70.236/) servidor na digital ocean, no qual foi configurado o nginx para redirecionar para o swagger, contendo toda a documentação do projeto.

A utilização da API em produção ainda se remete a porta 3000 exemplo http://165.227.70.236:3000/tools


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