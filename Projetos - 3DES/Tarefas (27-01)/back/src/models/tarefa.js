const create = (model) => {
    return `INSERT INTO tarefa VALUES(${model.id},'${model.descricao}', '${model.data_inicio}', '${model.data_fim}')`;
}

const del = (model) => {
    return `DELETE FROM tarefa WHERE id = ${model.id}`;
}

const altStatus = (model) => {
    return `SELECT * FROM tarefa WHERE status_tarefa LIKE '%${model.status_tarefa}%'`;
}

module.exports = {
    create,
    del,
    altStatus
}