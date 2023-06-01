import { Schema, model } from "mongoose";

const SectorSchema = new Schema(
  {
    //Nome do andar
    sector: {
      type: String,
      require: true
    },
    bed: {
      type: String,
      require: true
    },
    //Leito com status
    status:
      {
        type: String,
        enum: ["empty","good", "bad", "critical"]
      },
  },{ timestamps: true }
);
const Sector = model("Sector", SectorSchema);

export default Sector;

// 

  //   //Nome do andar
  //   name: {
  //     type: String,
  //     require: true
  //   },
  //   bed_name: {
  //     type: String,
  //     require: true
  //   },
  //   //Leito com status
  //   bed:
  //     {
  //       type: String,
  //       enum: ["empty","good", "bad", "critical"]
  //     },