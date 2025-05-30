import { DataTypes } from "sequelize";
import _food_types from "./food_types.js";
import _foods from "./foods.js";
import _like_res from "./like_res.js";
import _orders from "./orders.js";
import _rate_res from "./rate_res.js";
import _restaurants from "./restaurants.js";
import _sub_foods from "./sub_foods.js";
import _users from "./users.js";

export default function initModels(sequelize) {
  const food_types = _food_types(sequelize, DataTypes);
  const foods = _foods(sequelize, DataTypes);
  const like_res = _like_res(sequelize, DataTypes);
  const orders = _orders(sequelize, DataTypes);
  const rate_res = _rate_res(sequelize, DataTypes);
  const restaurants = _restaurants(sequelize, DataTypes);
  const sub_foods = _sub_foods(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  foods.belongsTo(food_types, { as: "type", foreignKey: "typeId" });
  food_types.hasMany(foods, { as: "foods", foreignKey: "typeId" });

  orders.belongsTo(foods, { as: "food", foreignKey: "foodId" });
  foods.hasMany(orders, { as: "orders", foreignKey: "foodId" });

  sub_foods.belongsTo(foods, { as: "food", foreignKey: "foodId" });
  foods.hasMany(sub_foods, { as: "sub_foods", foreignKey: "foodId" });

  like_res.belongsTo(restaurants, { as: "re", foreignKey: "resId" });
  restaurants.hasMany(like_res, { as: "like_res", foreignKey: "resId" });

  rate_res.belongsTo(restaurants, { as: "re", foreignKey: "resId" });
  restaurants.hasMany(rate_res, { as: "rate_res", foreignKey: "resId" });

  like_res.belongsTo(users, { as: "user", foreignKey: "userId" });
  users.hasMany(like_res, { as: "like_res", foreignKey: "userId" });

  orders.belongsTo(users, { as: "user", foreignKey: "userId" });
  users.hasMany(orders, { as: "orders", foreignKey: "userId" });

  rate_res.belongsTo(users, { as: "user", foreignKey: "userId" });
  users.hasMany(rate_res, { as: "rate_res", foreignKey: "userId" });

  return {
    food_types,
    foods,
    like_res,
    orders,
    rate_res,
    restaurants,
    sub_foods,
    users,
  };
}
