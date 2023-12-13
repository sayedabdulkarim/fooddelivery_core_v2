import express from "express";
const router = express.Router();

import { protectedAdminRoutesWithParser } from "../../middleware/authMiddleware.js";
import {
  addCategoryToRestaurant,
  addItemToCategory,
  getRestaurantMenu,
} from "../../controller/admin/adminMenuController.js";

router.post(
  "/menucategory/:restaurantId",
  protectedAdminRoutesWithParser,
  addCategoryToRestaurant
);

router.post(
  "/additem/:restaurantId/:categoryId",
  protectedAdminRoutesWithParser,
  addItemToCategory
);

router.get(
  "/menu/:restaurantId",
  protectedAdminRoutesWithParser,
  getRestaurantMenu
);

export default router;
