import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

async function main() {
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.s0z1zga.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log("conectado ao banco");
    } catch (error) {
        console.log(`Erro: ${error}` );
    }

}

export default main;