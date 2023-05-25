import { Schema, model } from "mongoose";

const SectorSchema = new Schema(
  {
    //Nome do andar
    nome: {
      type: String,
      require: true
    },
    //Quantidade de pacientes neste andar
    // bed_quantity: {
    //   type: Number,
    //   maxLength: 100,
    // },
    //Leito com status
    bed: [
      {
        type: String,
        enum: ["good", "bad", "critical"]
      },
    ],
  },
  { timestamps: true }
);
const Sector = model("Sector", SectorSchema);

export default Sector;
