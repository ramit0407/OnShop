import express from 'express'
const router = express.Router()

import {cartBase,cartInfo} from '../controllers/userController.js'

router.post('/', cartBase)
router.post('/info', cartInfo)

export default router