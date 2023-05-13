import userModel from "../models/User.js";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const userRouter = {
  create: async (req, res) => {
    const { name, email, password, adm, enf } = req.body;
    try {
      
      // Verifica se o e-mail já existe no banco de dados
      const existingEmail = await userModel.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ msg: "Este e-mail já está cadastrado." });
      }
      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "A senha deve contar no mínimo 6 caracteres." });
      }
      const response = await userModel.create({
        name,
        email,
        password: await bcrypt.hash(password, 12),
        adm,
        enf
      });

      res.status(201).json({response, msg: "Criado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ msg: "Insira a e-mail." });
    }
    if (!password) {
      return res.status(400).json({ msg: "Insira a senha." });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado." });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ msg: "Senha incorreta." });
    }

    try {
      const secret = process.env.SECRET;
      let token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );
      res.status(200).json({ user, token });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (_req, res) => {
    try {
      const users = await userModel.find();
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await userModel.findById(id, "-password");
      if (!user) {
        res.status(404).json({ msg: "Usuário não encontrado" });
        return;
      }
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await userModel.findById(id);
      if (!user) {
        res.status(404).json({ msg: "Usuário não encontrado" });
        return;
      }
      const deletedUser = await userModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ deletedUser, msg: "usuário deletado com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  editUser: async (req, res) => {
    try {
      const userInfo = {
        id: req.params.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };
      const response = await userModel.findByIdAndUpdate(
        userInfo.id,
        {
          email: userInfo?.email,
          name: userInfo?.name,
          password: await bcrypt.hash(userInfo?.password, 12),
        },
        { new: false }
      );

      res.json(response);
    } catch (error) {
      res.status(500).json({ msg: "Algo deu errado" });
    }
  },
  checkToken: (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split("")[1];
    if (!token) {
      return res.status(401).json({ msg: "Acesso negado" });
    }
    try {
      const secret = process.env.SECRET;
      jwt.verify(token, secret);
      next();
    } catch (error) {
      res.status(400).json({ msg: "Token inválido!" });
    }
  },
};

export default userRouter;
