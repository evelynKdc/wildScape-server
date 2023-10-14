const express = require("express");
const cors = require("cors");
const { connexion } = require("../db/config");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.path = {
    };
    this.connectDb();
    this.middlewares();
    this.routes();
  }

  async connectDb() {
    await connexion();
  }

  middlewares() {
    /*::::::::Using cors::::::::*/
    this.app.use(cors());

    /*::::::::Reading and writing from body:::::::*/
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
   
  }
  routes() {
    //this.app.use(this.path.users, userRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Escuchando en el puerto ", this.port);
    });
  }
}

module.exports = Server;
