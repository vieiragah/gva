import Router from 'express'
import statusController from '../controllers/statusController.js'


const router = Router()

router.route("/status")
    .post(statusController.post)
    .get(statusController.getAll)

router.route("/status/:id")
    .get(statusController.get)



// router.get('/tt', async(_request, response) => {
//     const leitos = await Bed.find().populate('patient')
//     response.json({leitos, total: leitos.length})
// })

export default router