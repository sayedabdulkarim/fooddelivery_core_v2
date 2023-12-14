import React from "react";
import { Skeleton } from "antd";

const Index = ({
  isLoadingetGetOrdersDetailsFromRestaurantId,
  getOrdersDetailsFromRestaurantId,
}) => {
  //   const { orders } = getOrdersDetailsFromRestaurantId;
  const { orders } = getOrdersDetailsFromRestaurantId || { orders: [] };

  return (
    <div>
      {isLoadingetGetOrdersDetailsFromRestaurantId ? (
        <Skeleton active paragraph={{ rows: 15 }} />
      ) : (
        <>
          {!orders?.length ? (
            <div
              className="empty_order_wrapper"
              onClick={() => console.log(orders)}
            >
              No Restaurant Orders found
            </div>
          ) : (
            <div className="order_listing_wrapper">
              <h2>Orders Listing</h2>
              <ul>
                {orders?.map((item) => {
                  const {
                    _id,
                    finalCost,
                    addressDetails,
                    createdAt,
                    items,
                    status,
                  } = item;
                  return (
                    <li key={_id} onClick={() => console.log(orders)}>
                      <div className="left_section">
                        {items?.map((item) => {
                          const {
                            count,
                            description,
                            imageId,
                            inStock,
                            name,
                            price,
                            _id,
                          } = item;
                          return (
                            <span key={_id} className="count">
                              <span className="name">{name}</span> x {count}
                            </span>
                          );
                        })}
                        <div className="address_det">
                          <h4 className="title">Address :</h4>

                          <div className="address_description">
                            <div className="landmark">{`${addressDetails?.doorNumber}, ${addressDetails?.landmark}`}</div>
                            <div className="address_txt">
                              {addressDetails?.address}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right_section">
                        <div>Status : {status}</div>
                        <button>Accept/ Reject</button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Index;
