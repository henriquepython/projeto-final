
#Tabela de conteúdo
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Database](#Database)
   * [Auth](#Auth)
   * [Tabela de Conteúdo](#Tabela-de-conteúdo)
   * [Tecnologias](#Tecnologias)
   * [Como usar](#Como-usar)
<!--te-->
#
# Sobre

## História fictícia

Um cliente solicitou o desenvolvimento de uma mini loja virtual para poder impulsionar suas vendas, tornando possivel vender online, assim conforme combinado foi desenvolvido a JHBC Store, ela é uma loja que vende três principais categorias de produtos que são, roupas, materiais de esporte e eletronicos, a mini loja onine possui area de usuario, area do administrador, paginas de produtos por categoria, carrinho, checkout e cadastro. Nela é possivel ao administrador criar, editar e remover produtos, alem de cancelar e finalizar pedidos. E ao usuário é permitido criar conta, buscar produtos tanto pela loja quanto pela barra de pesquisa pelo nome, visualizr detalhes dos produtos, adicionr e remover do carrinho, fechar pedidos, visualizar os pedidos e solicitar cancelamento de pedidos.

<img src="./assets/fluxo do site.png"/>

## Imagens

#
# Database

```
 O banco de dados foi feito com o Mongodb Atlas(cloud)
```
#
# Auth( login Admin)
email: joao@gmail.com
password: 123456



#
# Tecnologias


<p align="center">
  <a href="https://pt-br.reactjs.org/" target="blank"><img src="https://i2.wp.com/blog.hariken.co/wp-content/uploads/2019/03/react-logo.png?ssl=1" width="320"  alt="React Logo" /></a>
</p>

## Front end
- Typescript 
- Axios ^0.27.2
- React ^18.0.0
- React-multi-carousel ^2.8.0
- React-router-dom ^6.3.0
- Material UI


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Back end
- Typescript 
- NestJs
- Jwt
- Mongoose
- MongoDB Atlas(Cloud)


#
# Como usar

## 1 passo
### clonar repositório
```bash
git clone https://github.com/henriquepython/projeto-final.git
```
## 2 passo


### Back end

```bash
# entrar na pasta do projeto backend dentro da pasta projeto-final
cd backend-project

# instalar dependências
npm install

# executar o projeto
nest start

# Acesso a documentação
http://localhost:4200/docs
```

## 3 passo

### Front end

```bash
# entrar na pasta do projeto frontend dentro da pasta projeto-final
cd frontend-project

# instalar dependências npm
npm install

# instalar dependências yarn
yarn install

# executar o projeto
yarn start

# Acesso ao front end
http://localhost:3000/
```

#
# Autor

João Henrique Batista Cerqueira