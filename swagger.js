const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "1.0.0",
        title: "e-Commerce REST API",
        description: "Documentation for the omni-channel e-commerce REST API built by ladies.get"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        
        // Customers
        CreateCustomer: {
            firstName: "Luiza",
            lastName: "Trajano",
            email: "luiza@trajano.com",
            password: "asdf33lasdf32ZZ"
        },
        GetCustomer: {
            id: 1,
            firstName: "Luiza",
            lastName: "Trajano",
            email: "luiza@trajano.com",
            password: "asdf33lasdf32ZZ"
        },
        CustomerArray: [
            { $ref: '#/definitions/GetCustomer' }
        ],

        // Stores
        CreateStore: {
            name: "Magazine Luiza",
            phone: "+55 33 99956-2696",
            address: "Rua Raul Sores, numero 46, bairro Centro, Caratinga-MG"
        },
        GetStore: {
            id: 1,
            name: "Magazine Luiza",
            phone: "+55 33 99956-2696",
            address: "Rua Raul Sores, numero 46, bairro Centro, Caratinga-MG",
        },
        StoreArray: [
            { $ref: '#/definitions/GetStore' }
        ],

        // Products
        CreateProduct: {
            name: "Product A",
            imageUrl: "https://google.image.com",
            price: 12.40
        },
        GetProduct: {
            id: 1,
            name: "Product A",
            imageUrl: "https://google.image.com",
            price: "12.40",
        },
        ProductArray: [
            { $ref: '#/definitions/GetProduct' }
        ],

        // Shopping Cart
        GetCartItem: {
            id: 1,
            name: "Product A",
            imageUrl: "https://google.image.com",
            price: "12.40",
            amount: "1",
        },
        CartItemArray: [
            { $ref: '#/definitions/GetCartItem' }
        ],
        AddCartItem: {
            produtoId: 1,
            quantidade: 1
        },
        AddCartItemArray: {
           produtos: [{ $ref: '#/definitions/AddCartItem' }]
        },
        UpdateCart: {
            produtos: { $ref: '#/definitions/AddCartItemArray' }
        },
        Checkout: {
            storeId: 1
        },

        // Ordes
        isPickedUpStatus: {
            isPickedup: true
        },
        GetOrderItem: {
            productId: 1,
            productName: "Product A",
            price: 12.40,
            amount: 1,
            subTotal: 12.40
        },
        GetOrderItemArray: [
            { $ref: '#/definitions/GetOrderItem' }
        ],
        ReleaseOrder: {
            isPickedup: true
        },
        GetPlacedOrder: {
            id: 1,
            total: 100.12,
            isPickedup: 0,
            datePlaced: "13-09-2021",
            datePickedup: "",
            store: { $ref: '#/definitions/GetStore' },
            items: { $ref: '#/definitions/GetOrderItemArray' }
        },
        GetPickedupOrder: {
            id: 1,
            total: 100.12,
            isPickedup: 1,
            datePlaced: "13-09-2021",
            datePickedup: "14-09-2021",
            store: {$ref: '#/definitions/GetStore'},
            items: { $ref: '#/definitions/GetOrderItemArray' }
        },
        GetOrderArray: [
            { $ref: '#/definitions/GetPickedupOrder' }
        ]   
    
    }
    
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/server.ts']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./src/server')
})