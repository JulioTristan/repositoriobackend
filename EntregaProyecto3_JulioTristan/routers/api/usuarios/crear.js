import { Router } from "express";
import { usuariosDao } from "../../../daos/index.js";
import { carritosDao } from "../../../daos/index.js";
import validatorAdminMiddleware from "../../../middlewares/validator-admin.js";
import { encryptPassword } from "../../../utils.js";
import { base_host } from "../../../bin/www.js";
import logger from "../../../logs/logger.js";
import sendMail from "../../../mails.js";

const routercrearusuarios = Router();

routercrearusuarios.post("/", validatorAdminMiddleware, (req, res, next) => {
  try {
    usuariosDao.buscar(req.body.username).then((value) => {
      if (value.length > 0) {
        const data = { mensaje: "Username ya utilizado", base_url: base_host };
        logger.info(data);
        res.render("registroerror", data);
      } else {
        const newUser = {
          ...req.body,
          password: encryptPassword(req.body.password),
        };
        usuariosDao.guardar(newUser).then((usuario) => {
          let userid={userid:usuario._id.toString()};
          const data = {
            mensaje:
              "Actualizacion: Usuario ingresado con exito, puede iniciar sesion",
            base_url: base_host,
          };
          logger.info(data);
          sendMail(newUser);
          carritosDao.guardar(userid).then((value) => {
            res.render("login", data);
          });
        });
      }
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
});

export default routercrearusuarios;
