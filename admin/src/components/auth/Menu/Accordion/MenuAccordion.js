import React from "react";
import { Collapse, Card, Row, Col } from "antd";

const { Panel } = Collapse;

const MenuAccordion = ({ menuData }) => {
  const getImageUrl = (imageId) => {
    return imageId.startsWith("data:image")
      ? imageId
      : `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`;
  };

  return (
    <Collapse accordion>
      {menuData.map((category) => (
        <Panel
          header={`${category.categoryName} (${category.items.length})`}
          key={category._id}
        >
          {category.items.map((item) => (
            <Card
              key={item._id}
              hoverable
              style={{ width: "100%", marginBottom: 16 }}
            >
              <Row align="middle" gutter={16}>
                <Col xs={24} sm={24} md={8} lg={6} xl={6}>
                  <img
                    alt={item.name}
                    src={getImageUrl(item.imageId)}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col xs={24} sm={24} md={16} lg={18} xl={18}>
                  <Card.Meta title={item.name} description={item.description} />
                  {/* Add more item details like price, offers, etc. here */}
                  <p>Price: {item.price}</p>
                  {/* You can add an "Add" button or more information here */}
                </Col>
              </Row>
            </Card>
          ))}
        </Panel>
      ))}
    </Collapse>
  );
};

export default MenuAccordion;
