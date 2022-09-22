const express = require('express');
const cors = require('cors');
const {readdirSync} = require('fs');
const db = require('../db/models');
const path = require('path');
const {Router} = express
const ExpressServer = class ExpressApp {
  constructor() {
    this.PORT = process.env.API_PORT;
    this.PGSQLClient = db;
    this.app = express();
    this.setUpMiddlewares();
    this.connectDB()
    this.startListening();
  }

  setUpRoutes() {
    const router = Router();
    this.app.use('/api', router);
    Promise.all(
      readdirSync(`${__dirname}/../routes`).map(file => {
        if (!file.includes('.test.')) {
          (require(`../routes/${file}`))(router);
        }
      }),
    );
  }

  connectDB() {
    this.PGSQLClient.sequelize
      .authenticate()
      .then(() => {
        console.log('DB Online');
      })
      .catch((error) => console.log(error));
  }

  setUpMiddlewares() {
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: '*',
        methods: 'GET, POST, PUT, PATCH, DELETE',
      }),
    );
    this.app.use("/", express.static(path.join(process.cwd(),'src','public',)))
  }
  // loadDataSources(){

  // }
  startListening() {
    this.connectDB();
    this.setUpRoutes();
    this.http = this.app.listen(this.PORT, () => {
      console.log(`API is listening on port ${this.PORT}`);
    });
  }
};

module.exports = {
    ExpressServer    
};
