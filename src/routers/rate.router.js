import express from "express"
import likeRouter from "./like.router";
import rateController from "../controllers/rate.controller";

const rateRouter = express.Router();

rateRouter.post("/",rateController.rateRestaurant)
rateRouter.get("/by-user/:userId", rateController.getRatesByUser )
rateRouter.get("/by-res/:resId",rateController.getRatesByRestaurant)

export default rateRouter;