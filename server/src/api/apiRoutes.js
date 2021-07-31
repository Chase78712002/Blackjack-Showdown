const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {

    console.log('req.body in api route',req.body);
    res.send('api get request received!');
})

router.post('/hit', (req, res) => {
    console.log('hit post request', req.body)
    res.send('hit post request received!')
})

router.post('/stand', (req, res) => {
    console.log('stand post request', req.body)
    res.send('stand post request received!')
})

module.exports = router;