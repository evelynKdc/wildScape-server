const express = require("express");
const cors = require("cors");
const { connexion } = require("../db/config");
const authRouter = require("../routes/auth");
const userRouter = require("../routes/user");
const categorieRouter = require("../routes/categorie");
const guiaRouter = require("../routes/guia");
const activitieRouter = require("../routes/activitie");
const orderRouter = require("../routes/order");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.path = {
      auth: "/api/auth",
      user: "/api/user",
      categorie: "/api/categorie",
      guia: "/api/guia",
      activitie: "/api/activitie",
      order: "/api/order",
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
    this.app.use(this.path.auth, authRouter);
    this.app.use(this.path.user, userRouter);
    this.app.use(this.path.categorie, categorieRouter);
    this.app.use(this.path.guia, guiaRouter);
    this.app.use(this.path.activitie, activitieRouter);
    this.app.use(this.path.order, orderRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Escuchando en el puerto ", this.port);
    });
  }
}

module.exports = Server;
