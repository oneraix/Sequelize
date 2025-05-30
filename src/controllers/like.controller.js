import likeService from "../services/like.service";


const likeController = {
   likeRestaurant: async (req, res) => {
      const result = await likeService.likeRestaurant(req);
      res.status(201).json({ message: "Liked successfully", data: result });
   },

   unlikeRestaurant: async (req, res) => {
      const result= await likeService.unlikeRestaurant(req);
      res.json({ message: "Unliked successfully", data: result });
   },

   getLikesByUser: async (req, res) => {
      const result = await likeService.getLikesByUser(req);
      res.json({ data: result });
   },

   getLikesByRestaurant: async (req, res) => {
      const result = await likeService.getLikesByRestaurant(req);
      res.json({ data: result });
   },
};

export default likeController;