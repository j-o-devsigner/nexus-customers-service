const { Router } = require('express')
const Controller = require('./index')
const response = require('../../network/response')

const router = Router();

router.get('/', list);
router.get('/:id', findOne);
router.post('/create', create);
router.put('/:id', update);
router.delete('/:id', remove)

function list (req, res, next) {
    Controller.list()
    .then((list) => {
        response.success(req, res, list, 200);
    })
    .catch(next);
}

function findOne (req, res, next) {
    if(req.params.id) {
        Controller.findOne(req.params.id)
        .then((find) => {
            response.success(req, res, find, 200);
        })
        .catch(next);
    }
}

function create (req, res, next) {
    if(req.body) {
        Controller.create(req.body)
        .then((create) => {
            response.success(req, res, create, 200);
        })
        .catch(next);
    }
}

function update (req, res, next) {
    if(req.params.id && req.body ) {
        Controller.update(req.params.id, req.body)
        .then((update) => {
            response.success(req, res, update, 200);
        })
        .catch(next);
    }
}

function remove (req, res, next) {
    const { id } = req.params
    if(id) {
        Controller.remove(id)
        .then((remove) => {
            response.success(req, res, remove, 200);
        })
        .catch(next);
    }
}

module.exports = router;