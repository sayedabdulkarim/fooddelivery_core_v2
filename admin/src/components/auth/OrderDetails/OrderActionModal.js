import React, { useState, useEffect } from "react";
import { Modal, Radio, Select, Button, Form, Input } from "antd";

const { Option } = Select;

const OrderActionModal = ({
  selectedItem,
  isModalVisible,
  setIsModalVisible,
  handleOrderAction,
}) => {
  const [form] = Form.useForm();
  const [action, setAction] = useState("accept");
  const [reason, setReason] = useState("");

  useEffect(() => {
    // Reset form when the modal is closed or a new item is selected
    form.resetFields();
    setAction("accept");
    setReason("");
  }, [isModalVisible, selectedItem, form]);

  const onFormFinish = (values) => {
    handleOrderAction(values);
    setIsModalVisible(false);
  };

  const onReasonChange = (e) => {
    setReason(e.target.value);
  };

  return (
    <Modal
      title="Order Action"
      visible={isModalVisible}
      onCancel={() => setIsModalVisible(false)}
      footer={null}
      maskClosable={false}
    >
      <Form
        form={form}
        onFinish={onFormFinish}
        initialValues={{ action: "accept", reason: "", otherReason: "" }}
      >
        <Form.Item
          name="action"
          rules={[{ required: true, message: "Please select an action" }]}
        >
          <Select
            style={{ width: "100%" }}
            onChange={(value) => setAction(value)}
          >
            <Option value="accept">Accept</Option>
            <Option value="reject">Reject</Option>
          </Select>
        </Form.Item>

        {action === "reject" && (
          <>
            <Form.Item
              name="reason"
              rules={[{ required: true, message: "Please select a reason" }]}
            >
              <Radio.Group onChange={onReasonChange}>
                <Radio value="Restaurant Closed">Restaurant Closed</Radio>
                <Radio value="Out Of Stock">Out of Stock</Radio>
                <Radio value="other">Other</Radio>
              </Radio.Group>
            </Form.Item>

            {reason === "other" && (
              <Form.Item
                name="otherReason"
                rules={[
                  { required: true, message: "Please provide a reason" },
                  {
                    max: 30,
                    message: "Reason cannot be longer than 30 characters",
                  },
                ]}
              >
                <Input placeholder="Specify reason" />
              </Form.Item>
            )}
          </>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default OrderActionModal;
