const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prix: { type: Number, required: true },
    categorie: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
