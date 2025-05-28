import express from "express"
import likeRouter from "./like.router"
import rateRouter from "./rate.router"


const rootRouter = express.Router()



rootRouter.use("/like", likeRouter)
rootRouter.use("/rate", rateRouter)

export default rootRouter