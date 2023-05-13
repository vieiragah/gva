import Leito from "../models/StatusPacient.js";

// 
const statusController = {
    save: async(req, res) => {
        const {leito1, leito2} = req.body
        try {
            const leitos = new Leito({leito1, leito2});
            await leitos.save()
            res.status(201).json({ msg: 'status salvo'})
        } catch (error) {
            console.log({error, msg: "Status não registrado"});
        }
    },
    get: async(_req, res) => {
        try {
            const leitos = await Leito.find();
            res.status(200).json(leitos)
        } catch (error) {
            console.log(error);
        }
    }
}
export default statusController