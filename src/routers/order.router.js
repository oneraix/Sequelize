import express from "express";
import orderController from "../controllers/order.controllers";

const orderRoute = express.Router();

orderRoute.post("/order",orderController.placeOrder )

export default orderRoute;