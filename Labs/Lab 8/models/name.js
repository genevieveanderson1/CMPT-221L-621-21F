const mongoose = require('mongoose');

const nameSchema = mongoose.Schema({
    firstName: String,
    lastName: String
})

module.exports = mongoose.model("Name", nameSchema);