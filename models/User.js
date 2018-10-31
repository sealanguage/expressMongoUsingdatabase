const mongoose = require('mongoose');   
const Schema = mongoose.Schema;   // brings in shcema class

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,    //  default value is false but set it to true
        unique: true,
    },
    // age: {
    //     type: Number
    // },
    password: {
        type:String,
        required: true,
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

// const StockSchema = new Schema ({
//     name: {
//         type: Date,
//         required: true
//     },
//     date: {
//         type: number,
//         required: true,
//         default: Date.now
//     },
//     high: {
//         type: number,
//         required: true
//     },
//     low: {
//         type: number,
//         required: true
//     },
//     average: {
//         type: number,
//         required: true
//     },
//     volume: {
//         type: number,
//         required: true
//     },
//     volume: {
//         type: number,
//         required: true
//     },
//     marketHigh: {
//         type: number,
//         required: true
//     },
//     marketLow: {
//         type: number,
//         required: true
//     },
//     marketAverage: {
//         type: number,
//         requried: true
//     },
//     marketNumberOfTrades: {
//         type:number,
//         required: true
//     },
//     open: {
//         type: number,
//         requried: true
//     },
//     close: {
//         type: number,
//         required: true
//     },
//     marketOpen: {
//         type: number,
//         required: true
//     },
//     marketClose: {
//         type: number,
//         required: true
//     },
//     changeOverTime: {
//         type: number,
//         required: true
//     },
//     "marketChangeOverTime": {
//         type: number,
//         required: true
//     }

// })
module.exports = User = mongoose.model("users", UserSchema);
