const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }, 
    product: {
        type: String,
        required: [true, 'Please select a product'],
        enum: ['Iphone', 'Macbook Pro', 'Ipad', 'Ipad']
    },
    description: {
        type: String,
        required: [true, 'Please enter the description of the issue']
    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'open', 'closed'],
        default: 'new'
    }
},
{
    timestamps: true
})


module.exports = mongoose.model('Ticket', ticketSchema)