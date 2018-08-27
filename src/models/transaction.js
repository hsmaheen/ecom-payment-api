const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const TransactionModel = {
    txnId: {
        type: String,
        default: () => new ObjectId()
    },
    userId: String,
    status: String,
    orderId: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
};

const TransactionSchema = new Schema(TransactionModel);

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;