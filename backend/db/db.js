import mongoose from "mongoose";

async function main() {

    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://gabriel:tjg9BDb6NdFAYBYY@cluster0.s0z1zga.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("conectado ao banco");
    } catch (error) {
        console.log(`Erro: ${error}` );
    }

}

export default main;