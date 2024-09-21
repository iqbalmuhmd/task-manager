const express = require('express');
const router = express.Router();

router.get('/api/auth/register', function(req, res){
   res.send('GET route on things.');
});
