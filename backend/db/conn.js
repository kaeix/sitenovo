const mongoose = require("mongoose")

async function main(){

    try {

        mongoose.set("strictQuery", true)

        await mongoose.connect(
            "mongodb+srv://rodrigo:vzNDNP0yugLmclW1@cluster0.djdpeyl.mongodb.net/?retryWrites=true&w=majority"
            )

        console.log("conectado ao banco de dados")
    } catch (error) {
        console.log(`ERRO: ${error}`)
    }

}

module.exports = main