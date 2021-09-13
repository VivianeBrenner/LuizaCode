![ladies get](https://user-images.githubusercontent.com/88917989/133131928-5ed54925-487a-4230-b79f-e1c3222bbecd.gif)

# Luiza Code #3 Omni-channel Challenge


This is an example implementation of a REST API that serves as the base of building a fictional omni-channel approach ecommerce system.
<br><br>

#### **Getting Started**
<br>
In order to get a copy of this project up and running in your local machine you should make sure that you install npm or yarn and also mysql server. Configure the mysql server and create an empty database that we will use for this project (more on this below).  Once done with these please follow these steps:
<br><br>
1. Clone the project locally and install its dependencies

```sh
git clone https://github.com/daniele-frade/omnichannel-luizacode.git
cd omnichannel-luizacode
yarn install
```
<br>
2. Open the ormconfig.json file in the root folder and modify the database configuration (lines 5-7) with your local settings. See the example below:

```sh
"username": "mysql_username", 
"password": "mysql_password", 
"database": "mysql_db_name",
```
<br>
3. Seed the data and then power the server up

```sh
yarn seed:run 
yarn dev
```
<br>
4. Contratulations. At this point the project should be up and running on http://localhost:3000
<br><br>

#### **API Endpoints**
<br>
The following is a list of all supported endpoints and the HTTP methods allowed on each one. To find out more details on expected parameters, payloads, and respective responses, please run the project and visit http://localhost:3000/docs/ in your browser to see the full Swagger specs.
<br>

```

###################### Customer Endpoints ######################

GET      /clientes
POST     /clientes
GET ​     /clientes​/{clienteId}
PUT ​     /clientes​/{clienteId}
DELETE   ​/clientes​/{clienteId}


######################## Order Endpoints #######################

GET ​     /clientes​/{clienteId}​/pedidos
GET ​     /clientes​/{clienteId}​/pedidos​/{pedidoId}
PUT ​     /clientes​/{clienteId}​/pedidos​/{pedidoId}


####################### Product Endpoints ######################

GET ​     /produtos
POST     ​/produtos
GET ​     /produtos​/{produtoId}
PUT ​     /produtos​/{produtoId}
DELETE   ​/produtos​/{produtoId}

######################## Store Endpoints #######################

GET ​     /lojas
POST ​    /lojas
GET ​     /lojas​/{lojaId}
PUT ​     /lojas​/{lojaId}
DELETE   ​/lojas​/{lojaId}


################## Shopping Cart Endpoints #####################

GET      ​/clientes​/{clienteId}​/carrinho
PUT ​     /clientes​/{clienteId}​/carrinho
DELETE   ​/clientes​/{clienteId}​/carrinho
PUT ​     /clientes​/{clienteId}​/carrinho​/checkout

```
<br>

#### **Requirements/Restrictions**
<br>

Some of these were required by Luiza Code and some were implemented by our team based on our understanding of the project requirements.
<br>

* The business running this e-commerce does not deliver to customer houses. 
* Every order has to be picked up in one of the business's physical stores.
* A customer may buy only one item per product 
* Once placed, an order can not be modified or cancelled
* There is no stock/availability tracking for products
<br><br>

#### **Limitations/Future Improvements**
<br>

These are features and improvements that we would like to add to this project.
<br>

* User authentication
* Order update/cancellation/refund handling
* Inventory Management
* Delivery handling
<br><br>

#### **Tecnologies Used**
<br>

* [Node.js](https://nodejs.org)
* [Typescript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/pt-br/)
* [MySQL](https://www.mysql.com/)
* [TypeORM](https://typeorm.io/#/)
<br><br>

#### **Team Members 👩‍💻**
<br>

* [Ana Higo](https://www.linkedin.com/in/ana-higo)
* [Crislaine Silva](https://www.linkedin.com/in/crislainessilva)
* [Daniele Frade](https://www.linkedin.com/in/daniele-frade/)
* [Livia Alves ](https://www.linkedin.com/in/liviaalvesfernandes)
* [Vanessa Basílio](https://www.linkedin.com/in/vanessabasilio)
* [Viviane Brenner](https://www.linkedin.com/in/viviane-brenner)
<br><br>

ladies.get('/success') 🚀

