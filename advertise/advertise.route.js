import { Router } from "express";
import * as advertiseController from './advertise.controller.js'
import validateToken from './advertise.middleware.js'


const router = Router()
// router.get('/', advertiseController.getAll);

router.get('/', validateToken, advertiseController.getAll);


export default router
