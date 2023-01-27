const express = require('express');
const router = express.Router();

const tarefas_abertas = require("../controllers/tarefa_Controllers");

router.post("/create", tarefas_abertas.create);
router.delete("/del/:id", tarefas_abertas.del);

module.exports = router;