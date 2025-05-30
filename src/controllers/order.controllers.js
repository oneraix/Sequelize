import orderService from "../services/order.service";

const orderController = {
  placeOrder: async (req, res) => {
    try {
      const result = await orderService.placeOrder(req);
      res.status(201).json({ message: "Order placed successfully", data: result });
    } catch (error) {
      res.status(500).json({ error: "Failed to place order" });
    }
  },
};

export default orderController;