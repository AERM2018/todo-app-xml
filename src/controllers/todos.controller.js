const db = require("../db/models");
const xml = require('xml');
module.exports = {
  getTodos: async (req, res) => {
    const todos = await db['Todo'].findAll()
    let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
    xml += "<todos>"
    if(todos.length > 0 ){
      todos.forEach((todo) => {
        xml += `<todo id="${todo.id}">
          <title>${todo.title}</title>  
          <description>${todo.description}</description>  
        </todo>`;
      });
    }
    xml += "</todos>"
    res.header("Content-Type", "text/xml");
    res.status(200).send(xml);
  },
};
