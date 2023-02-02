const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let vendedor = await prisma.vendedor.create({
        data: req.body
    });

    res.status(200).json(vendedor).end();
}

const read = async (req, res) => {
    let produtos = await prisma.produtos.findMany();

    res.status(200).json(produtos).end();
}

module.exports = {
    create,
    read
}