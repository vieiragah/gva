import Sector from "../models/Sector.js";

const statusController = {
  post: async (req, res) => {
    const { documents } = req.body;
    try {
      //Aqui iria o bed_quantity, retirei para testar a lógica no front
      const response = await Sector.insertMany(documents);
      res.status(201).json({ response, msg: "status salvo" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao registrar o status" });
    }
  },
  getAll: async (_req, res) => {
    try {
      const status = await Sector.find();
      res.json(status);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    const { id } = req.params;

    try {
      const response = await Sector.findById(id);
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: "Status não encontrado" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erro ao buscar o status" });
    }
  },
};

export default statusController;
