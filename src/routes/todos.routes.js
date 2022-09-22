const { getTodos } = require("../controllers/todos.controller");

module.exports = (router) => {
    router.get("/todos",getTodos)
};
