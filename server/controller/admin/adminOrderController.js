import asyncHandler from "express-async-handler"; //
//modals
import CartModal from "../../modals/cartModal.js";

// @desc    Get restaurant orders by restaurant ID
// @route   GET /api/admin/ordersdetails/:restaurantId
// @access  Private
const getOrdersDetailsFromRestaurantId = asyncHandler(async (req, res) => {
  const { restaurantId } = req.params;

  // Find all restaurant order details with the given restaurantId
  const restaurantOrdersDetails = await CartModal.find({
    restaurantId,
  });

  if (restaurantOrdersDetails.length > 0) {
    // Return the orders to the admin
    res.json({
      message: "Orders retrieved successfully",
      orders: restaurantOrdersDetails, // Changed restaurantMenu to orders for clarity
    });
  } else {
    // If no orders are found for the restaurant, send a 404 response
    res.status(404).json({
      message: "Restaurant has no orders.",
    });
  }
});

export { getOrdersDetailsFromRestaurantId };
