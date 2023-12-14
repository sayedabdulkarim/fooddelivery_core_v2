import express from "express";
const router = express.Router();

import { protectedAdminRoutesWithParser } from "../../middleware/authMiddleware.js";
import { getOrdersDetailsFromRestaurantId } from "../../controller/admin/adminOrderController.js";

router.get(
  "/ordersdetails/:restaurantId",
  protectedAdminRoutesWithParser,
  getOrdersDetailsFromRestaurantId
);

export default router;
