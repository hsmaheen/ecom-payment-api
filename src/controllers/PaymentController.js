const PaymentSvc = require('../services/PaymentService');

//Cors Config
const enableCors = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
}

//Payment Check
const makePayment = (req, res) => {
    const CrediteCard = {
        nameOnCard,
        creditCardNumber,
        expiration,
        cvv
    } = req.body;

    const isPaymentValid = PaymentSvc.checkPayment(CrediteCard);
    res.send({
        isPaymentValid: isPaymentValid


    });
}


module.exports = {
    enableCors,
    makePayment
}