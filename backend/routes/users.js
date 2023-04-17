import userRouter from '../controllers/userController.js'

import Router from 'express'
const router = Router()


router
    .route('/users')
    .post(userRouter.create)
    .get(userRouter.getAll)

router.route('/login').post(userRouter.login)


router
    .route("/users/:id")
    .get(userRouter.get)
    .delete(userRouter.delete)
    
    
router.route('/token/:id').get(userRouter.checkToken)
    


    export default router
        //token da ultima do dia
    //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2NiMzk5NmM4MjVmNjI3ZGRmZThiNyIsImlhdCI6MTY4MTY5OTc2Nn0.ikKREPF-2TcPfy8ijFVeGoKtP70dNFUVj81j_RTXsNE"