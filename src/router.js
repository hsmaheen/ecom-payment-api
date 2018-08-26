var express = require('express');
var expressHealthcheck = require('express-healthcheck');
var paymentController = require('./controllers/PaymentController');

/* Initialize router */
const router = express.Router();

/* Monitoring and Healthchecks */
router.use(paymentController.enableCors);
router.use('/up', expressHealthcheck());
router.post('/payment/make', paymentController.makePayment);


module.exports = router;