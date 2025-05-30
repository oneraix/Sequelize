import rateService from "../services/rate.service";


const rateController = {
   rateRestaurant: async (req, res) => {
      const result = await rateService.rateRestaurant(req);
      res.status(201).json({ message: "Rated successfully", data: result });
   },

  getRatesByUser: async (req, res) => {
      const result = await rateService.getRatesByUser(req);
      res.json({ data: result });

  },

  getRatesByRestaurant: async (req, res) => {
      const result = await rateService.getRatesByRestaurant(req);
      res.json({ data: result });
  },
};

export default rateController;