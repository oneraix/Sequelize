import express from "express"
import likeController from "../controllers/like.controller";


const likeRouter = express.Router();

likeRouter.post("/", likeController.likeRestaurant);
likeRouter.delete("/", likeController.unlikeRestaurant);
likeRouter.get("/by-user/:userId", likeController.getLikesByUser);
likeRouter.get("/by-restaurant/:resId", likeController.getLikesByRestaurant);


export default likeRouter;