const express = require('express')
const { getProgress, createProgress } = require('../controllers/progressController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.get('/', requireAuth, getProgress)
router.post('/', requireAuth, createProgress) // only if you allow clients or admin to add

module.exports = router
