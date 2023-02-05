# Projeto Library Manager

> Status do projeto: Concluído :heavy_check_mark:

## Descrição do projeto

Nesse projeto foi desenvolvido uma API RESTful para gerenciamento de livros. Aqui podem ser feitas as seguintes operações:

- Adicionar um novo livro (nome, autor, editora, ano de publicação, número de páginas);
- Listar todos os livros;
- Buscar um livro pelo ID;
- Atualizar informações de um livro pelo ID;
- Deletar um livro pelo ID;


## Documentação

Foi realizada a documentação da API utilizando o [swagger](https://swagger.io/), a documentação pode ser acessada no [link]().


## Testes
Foram realizados testes de integração em todas as rotas da aplicação.

<summary><strong> Rodando os testes </strong></summary><br />

- Execute o comando:
 ```
 npm test
 ```

![cobertura_de_testes](testes.png)



## Tecnologias utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [Express](http://expressjs.com/)
- [Sequelize](https://sequelize.org/docs/v6/)
- [Joi](https://www.npmjs.com/package/joi)
- [MySQL 2](https://www.npmjs.com/package/mysql2)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Sinon](https://www.npmjs.com/package/sinon)
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express)
