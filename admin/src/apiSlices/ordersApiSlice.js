import { apiSlice } from ".";

const USERS_URL = "api/admin";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrdersDetailsFromRestaurantId: builder.query({
      query: (restaurantId) => ({
        url: `${USERS_URL}/ordersdetails/${restaurantId}`,
      }),
    }),
  }),
});

export const { useGetOrdersDetailsFromRestaurantIdQuery } = ordersApiSlice;
