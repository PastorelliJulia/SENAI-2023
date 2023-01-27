const tarefas = require('../models/tarefa');
const con = require('../DAO/tarefas_DAO');

const create = (req, res) => {
    con.query(tarefas.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const del = (req, res) => {
    con.query(tarefas.del(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}
const altStatus = (req, res) => {
     
}


module.exports = {
    create,
    del
}