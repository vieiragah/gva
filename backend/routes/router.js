import users from './users.js'
import status from './status.js'
import { Router } from "express";
const router = Router()

router.use("/", users)
router.use("/", status)


export default router