const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "1.0.0",
        title: "omnichannel luizacode",
        description: "Documentação dos endpoints referente ao projeto Omnichannel feito pelo grupo Ladies.get no programa Luizacode"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/server.ts']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./src/server')
})