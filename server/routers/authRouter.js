const express = require('express');
const router = express.Router();
const validateFrom = require('../controllers/validateForm');

router.post('/login', (req, res) => {
  validateFrom(req, res);
});

router.post('/signup', (req, res) => {
  validateFrom(req, res);
})

module.exports = router;
