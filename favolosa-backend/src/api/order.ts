import express from "express";
import { createOrder, getOrder,getOrdersByUser } from "./../application/order";
import isAuthenticated from "./middleware/authentication-middleware";

export const orderRouter = express.Router();

orderRouter.route("/").post(isAuthenticated,createOrder);
orderRouter.route("/:id").get(getOrder);
orderRouter.route("/").get(isAuthenticated, getOrdersByUser);
//getUserOrders

