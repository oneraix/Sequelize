import { models } from "../common/sequelize/init.sequelize.js";

const orderService = {
  placeOrder: async (req) => {
    const { userId, foodId, amount, code, arrSubId } = req.body;
    return await models.orders.create({
      userId,
      foodId,
      amount,
      code,
      arrSubId
    });
  },
};



export default orderService;