import Sector from "../models/Sector.js";

const statusController = {
  post: async (req, res) => {
    const { nome,  bed } = req.body;

    try {
      //Aqui iria o bed_quantity, retirei para testar a lógica no front 
      const response = await Sector.create({ nome,  bed });
      res.status(201).json({ response, msg: "status salvo" });
    } catch (error) {
      console.log({ error, msg: "Status não registrado" });
      res.status(500).json({ error: "Erro ao registrar o status" });
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
