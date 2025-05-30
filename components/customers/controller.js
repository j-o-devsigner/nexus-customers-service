
const TABLE = 'customers';

module.exports = function(injectedDB) {

    let database = injectedDB;

    const list = () => {
        return database.list(TABLE);
    };

    const findOne = (id) => {
        if(id) {
            return database.findOne(TABLE, id, "id");
        }
    }

    const create = (data) => {
        if(data) {
            return database.create(TABLE, data);
        }
    }

    const update = (id, data) => {
        if(id && data) {
            const key = "id";
            return database.update(TABLE, id, data, key);
        }
    }

    const remove = (id) => {
        const key = "id";
        return database.remove(TABLE, id, key)
    }

    return {
        list,
        findOne,
        create,
        update,
        remove,
    }
}
