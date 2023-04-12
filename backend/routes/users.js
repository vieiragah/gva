import userRouter from '../controllers/userController.js'

import Router from 'express'
const router = Router()


router
    .route('/users')
    .post(userRouter.create)
    .get(userRouter.getAll)


router
    .route("users/:id")
    .get(userRouter.get)
    .delete(userRouter.delete)

    export default router