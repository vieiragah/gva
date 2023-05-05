import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import bcrypt from 'bcrypt'
import userModel from "../models/User.js";
dotenv.config();

(async () => {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s0z1zga.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("conectado ao banco");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }

  let data = [];
  for (let i = 0; i < 50; i++) {
    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: await bcrypt.hash(faker.internet.password(), 12),
      adm: faker.datatype.boolean(),
    };
    data.push(user);
  }

  try {
    const save = await userModel.create(data);
    console.log(`Faker criado com sucesso, ${save.name}`);
  } catch (error) {
    console.log(error)
  }
  finally {
    mongoose.disconnect()
  }
})();
