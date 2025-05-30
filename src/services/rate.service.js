import express from "express";
import { models } from "../common/sequelize/init.sequelize";
import { where } from "sequelize";

const rootRouter = express.Router();

const rateService = {
    rateRestaurant: async(req)=>{
        const{userId, resId, amount} = req.body;
        return await models.rate_res.create({userId, resId, amount})
    },

  getRatesByUser: async (req) => {
    const { userId } = req.params;
    return await models.rate_res.findAll({
      where: { userId },
      include: [
        {
          model: models.restaurants,
          as: "re", 
          attributes: { exclude: ["createdAt", "updatedAt"] }
        }
      ],
    });
  },

  getRatesByRestaurant: async (req) => {
    const { resId } = req.params;
    return await models.rate_res.findAll({
      where: { resId },
      include: [
        {
          model: models.users,
          as: "user",
          attributes: { exclude: ["password", "createdAt", "updatedAt"] }
        }
      ],
    });
  }

}

export default rateService