import { Router } from "express";
import { carritosDao } from "../../../daos/index.js";
import { productosDao,usuariosDao } from "../../../daos/index.js";
import logger from "../../../logs/logger.js";
import { base_host } from "../../../bin/www.js";
import CarritosDaoArchivo from "../../../daos/carritos/CarritosDaoArchivo.js";


const routeractualizarcarrito = Router();

routeractualizarcarrito.post("/:id/update", (req, res, next) => {
  try {
    let data = JSON.parse(req.body.array);
    let productos = data.map(async (object) => {
      let producto = await productosDao.listar(object.id);
      producto[0].cantidad = object.cantidad;
      producto[0].subtotal = producto[0].cantidad*producto[0].precio;
      return producto[0];
    });
    Promise.all(productos).then((listaProductos) => {
      console.log('esta es la data', listaProductos);
      carritosDao.listar(req.params.id).then((carrito) => {
        let listaCarrito = carrito[0].productos
        console.log(listaCarrito)
        let listaNueva = [];
        for (let producto of listaProductos) {
          for (let productoNuevo of listaCarrito){
            if (producto._id.toString() === productoNuevo._id.toString()){
              productoNuevo.cantidad = productoNuevo.cantidad+producto.cantidad
            }
          }
        }
      })
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
});

export default routeractualizarcarrito;
