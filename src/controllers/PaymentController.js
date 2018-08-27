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

const createTxn = (req, res) => {
    const {
        userId,
        orderId,
        status
    } = req.body;

    PaymentSvc.createTxn(userId, orderId, status)
        .then((txn) => {
            if (txn) {
                return res.send({
                    transaction: txn
                });

            }
            return res.send(500);
        })
        .catch(err => handleError(err, res));
}

const handleError = (err, res) => {
    console.error(err);
    return res.send(500);
}



module.exports = {
    enableCors,
    makePayment,
    createTxn
}