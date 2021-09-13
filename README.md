![ladies get](https://user-images.githubusercontent.com/88917989/133121242-25fa6cdd-a46d-48fb-8cf8-adc7c1726fef.gif)

# 💻 ladies.get

> Projeto desenvolvido durante o programa de aceleração **Luiza Code #3 Node.js** em parceria com a Gama Academy. 
> Apresentado para banca final entre 13 e 14 de Setembro de 2021.


*Serviço HTTP resolvendo a funcionalidade de Omni Channel.* 

<details>
  <summary>Requisitos</summary>
  <ul>
    <li>Listar produtos</li>
    <li>Listar lojas físicas</li>
    <li>Cadastrar cliente</li>
    <li>Adicionar um produto na lista de compra da cliente</li>
    <li>Remover um produto da lista de compra da cliente</li>
    <li>Finalizar compra</li>
    <li>Consultar todas as compras realizadas da cliente</li>
  </ul>
</details>

<details>
  <summary>Regras</summary>
    <ul>
    <li>O cliente só pode comprar um produto de cada tipo.</li>
    <li>Após realizar a compra o status dessa compra é 'Realizada'</li>
    <li>E após a retirada do produto na loja física passa a ser 'Retirado'</li>
    </ul>
</details>

## Construído com: 
* [Node.js `v14.17.5`](https://nodejs.org)
* [Typescript `v4.4.2`](https://www.typescriptlang.org/)
* [Express `v4.17.1`](https://expressjs.com/pt-br/)
* [MySQL `v14.14`](https://www.mysql.com/)
* [TypeORM `v0.2.37`](https://typeorm.io/#/)

## Instalação
Clone o projeto e acesse a pasta:

```sh
git clone https://github.com/daniele-frade/omnichannel-luizacode.git
cd omnichannel-luizacode
```

Para iniciá-lo, siga os passos abaixo:

```sh
# Instala as dependências do projeto
yarn
```
No seu cliente SQL, crie um banco de dados chamado *omni_channel*.
Após criação do banco de dados, caso tenha colocado senha, verifique a inclusão no arquivo `ormconfig.json`, junto com o username.

```sh
# Recebe importações das tabelas já existentes
yarn seed:run

# Inicia o projeto
yarn dev
```
O projeto estará disponível no http://localhost:3000. 

```sh
Postman/Insomnia
```

## 📌 Endpoints

[ endpoints do swagger aqui ]



## 👩‍💻 Participantes

* [Ana Higo](https://www.linkedin.com/in/ana-higo)
* [Crislaine Silva](https://www.linkedin.com/in/crislainessilva)
* [Daniele Frade](https://www.linkedin.com/in/daniele-frade/)
* [Livia Alves ](https://www.linkedin.com/in/liviaalvesfernandes)
* [Vanessa Basílio](https://www.linkedin.com/in/vanessabasilio)
* [Viviane Brenner](https://www.linkedin.com/in/viviane-brenner)


>ladies.get('/success') 🚀
