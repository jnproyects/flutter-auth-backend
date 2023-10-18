const { Router } = require('express');
const { googleAuthController } = require('../controllers/auth')

const router = Router();

router.post('/google', googleAuthController )



module.exports = router;