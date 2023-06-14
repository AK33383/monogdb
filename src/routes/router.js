const express = require('express')
const router = express.Router()

const { goalPage,userPage,homePage,getuserdetail} = require('../controller/controles')

router.get('/',homePage)
router.post('/usersdetails',userPage)
router.post('/goalsdetails',goalPage)
router.get('/getuserdetails',getuserdetail)

module.exports = router