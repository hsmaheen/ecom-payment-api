const config = require('../config');
const Transaction = require('../models/transaction');
const moment = require('moment');



const checkPayment = (creditCard) => {
    const {
        nameOnCard,
        creditCardNumber,
        expiration,
        cvv
    } = creditCard;

    if ((nameOnCard === 'Maheen Heera Syed') &&
        (creditCardNumber === 4678123478945623) &&
        (expiration === 102018) &&
        (cvv === 295)) {
        return true;

    } else {
        return false;
    }

}

const createTxn = (userId, orderId, status) => {
    const txn = new Transaction({
        userId: userId,
        orderId: orderId,
        status: status,
        createdAt: moment().format()
    });

    return txn.save();
}


module.exports = {
    checkPayment,
    createTxn

}