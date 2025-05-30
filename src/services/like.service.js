import { models } from "../common/sequelize/init.sequelize.js";

const likeService = {
   likeRestaurant: async (req) => {
      const { userId, resId } = req.body;
      return await models.like_res.create({ userId, resId });
   },

   unlikeRestaurant: async (req) => {

      const {userId, resId} = req.body; 
            console.log (req.body)
      return await models.like_res.destroy({
         where: { userId, resId },
      });
   },

getLikesByUser: async (req) => {
   const {userId} = req.params;
    return await models.like_res.findAll({
      where: { userId },
      include: [
        {
          model: models.restaurants,
          as: "re",
        },
      ],
    });
   },


   getLikesByRestaurant: async (req) => {
      const {resId} = req.params
      return await models.like_res.findAll({
         where: {resId},
         include: [
            {
               model: models.users,
               as: "user", 
               attributes: ["userId", "fullName"],
            },
         ],
      });
   },
};

export default likeService;
