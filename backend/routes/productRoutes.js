const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/produits
router.get('/', async (req, res) => {
    try {
        const produits = await Product.find();
        res.status(200).json(produits);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err });
    }
});

// GET /api/produits/:id
router.get('/:id', async (req, res) => {
    try {
        const produit = await Product.findById(req.params.id);
        if (!produit) return res.status(404).json({ message: 'Produit non trouvé' });
        res.status(200).json(produit);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err });
    }
});

// POST /api/produits
router.post('/', async (req, res) => {
    try {
        const produit = new Product(req.body);
        await produit.save();
        res.status(201).json(produit);
    } catch (err) {
        res.status(400).json({ message: 'Erreur de validation', error: err });
    }
});

// PUT /api/produits/:id
router.put('/:id', async (req, res) => {
    try {
        const produit = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!produit) return res.status(404).json({ message: 'Produit non trouvé' });
        res.status(200).json(produit);
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err });
    }
});

// DELETE /api/produits/:id
router.delete('/:id', async (req, res) => {
    try {
        const produit = await Product.findByIdAndDelete(req.params.id);
        if (!produit) return res.status(404).json({ message: 'Produit non trouvé' });
        res.status(200).json({ message: 'Produit supprimé' });
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err });
    }
});

module.exports = router;
