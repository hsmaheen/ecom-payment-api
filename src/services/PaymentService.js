const config = require('../config');


const checkPayment = (creditCard) => {
    const {
        nameOnCard,
        creditCardNumber,
        expiration,
        cvv
    } = creditCard;

    if ((nameOnCard === 'Maheen Heera Syed') &&
        (creditCardNumber === 12345) &&
        (expiration === 102018) &&
        (cvv === 295)) {
        return true;

    } else {
        return false;
    }

}


module.exports = {
    checkPayment

}