import Router from 'express'
import statusController from '../controllers/statusController.js'

const router = Router()

router.route("/status")
    .post(statusController.save)
    .get(statusController.get)


export default router