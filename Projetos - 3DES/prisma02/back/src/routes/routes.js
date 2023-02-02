const express = require('express');

const router = express.Router();

const Produtos = require('../controller/produtos');
const Setor = require('../controller/setor');
const Vendedor = require('../controller/vendedor');

router.post('/produtos', Produtos.create);
router.get('/produtos', Produtos.read);

router.post('/setor', Setor.create);
router.get('/setor', Setor.read);

router.post('/vendedor', Vendedor.create);
router.get('/vendedor', Vendedor.read);

module.exports = router;