let mongoose = require('mongoose');

// Setup schema
let contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// Export Contact model
let Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;
