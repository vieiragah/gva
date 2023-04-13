import userModel from "../models/User.js";

const userRouter = {
    create: async (req, res) => {
        const { name, email, password } =req.body
        try {
            const response = await userModel.create({
                name,
                email, 
                password
            })
            res.status(201).json({response, msg: "Criado com sucesso!"})
        } catch (error) {
            console.log(error);
        }
    },
    getAll : async (_req, res) => {
        try {
            const users = await userModel.find()
            res.json(users);
        } catch (error) {
            console.log(error);
        };
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await userModel.findById(id);
            if(!user){
                res.status(201).json({msg: "Usuário não encontrado"})
                return
            }
            res.json(user)
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await userModel.findById(id);
            if(!user) {
                res.status(201).json({msg: "Usuário não encontrado"})
                return;
            };
            const deletedUser = await userModel.findByIdAndDelete(id);
            res.status(200).json({deletedUser, msg: "usuário deletado com sucesso!"})
        } catch (error) {
            console.log(error);
        }
    },
}

export default userRouter