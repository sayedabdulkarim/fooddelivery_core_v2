import React, { useState } from "react";
import { Modal, Radio, Select } from "antd";

const { Option } = Select;

const OrderActionModal = ({
  selectedItem,
  isModalVisible,
  setIsModalVisible,
  handleOrderAction,
}) => {
  const [action, setAction] = useState("accept");
  const [declineReason, setDeclineReason] = useState("");

  const handleOk = () => {
    handleOrderAction({ action, declineReason });
    // setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleActionChange = (value) => {
    setAction(value);
    if (value === "accept") {
      setDeclineReason(""); // Reset decline reason if action is accept
    }
  };

  const handleReasonChange = (e) => {
    setDeclineReason(e.target.value);
  };

  return (
    <Modal
      title="Order Action"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable={false}
    >
      <Select
        defaultValue="accept"
        style={{ width: "100%" }}
        onChange={handleActionChange}
      >
        <Option value="accept">Accept</Option>
        <Option value="reject">Reject</Option>
      </Select>

      {action === "reject" && (
        <Radio.Group onChange={handleReasonChange} value={declineReason}>
          <Radio value="restaurantClosed">Restaurant Closed</Radio>
          <Radio value="outOfStock">Out of Stock</Radio>
          <Radio value="other">Other</Radio>
        </Radio.Group>
      )}
    </Modal>
  );
};

export default OrderActionModal;
