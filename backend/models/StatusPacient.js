import { Schema, model } from "mongoose";

const leitoSchema = new Schema(
    {
        leito1: {
            type: String,
            enum: ['empty', 'green', 'yellow', 'red']
        },
        leito2: {
            type: String,
            enum: ['empty', 'green', 'yellow', 'red']
        }
    },
    { timestamps: true }
);

const Leito = model("Leito", leitoSchema);

export default Leito;
