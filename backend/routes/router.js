import users from './users.js'
import { Router } from "express";
const router = Router()

router.use("/", users)

export default router