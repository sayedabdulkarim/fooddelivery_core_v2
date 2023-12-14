import { apiSlice } from ".";

const USERS_URL = "api/admin";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrdersDetailsFromRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: `${USERS_URL}/ordersdetails/${restaurantId}`,
      }),
    }),
    updateOrderItemStatus: builder.mutation({
      query: (restaurantId, data) => ({
        url: `${USERS_URL}/updateOrderStatus/${restaurantId}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetOrdersDetailsFromRestaurantIdQuery,
  useUpdateOrderItemStatusMutation,
} = ordersApiSlice;
