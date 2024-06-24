import OrderModel from "./order.schema.js";

export const createNewOrderRepo = async (data, id) => {
  // Write your code here for placing a new order
  const newOrder = new OrderModel({ ...data, user: id, "paymentInfo.id": id });
  const savedOrder = await newOrder.save();
  return savedOrder;
};

export const getSingleOrderRepo = async (id) => {
  const orderFound = OrderModel.findById(id);
  return orderFound;
};

export const getMyOrdersRepo = async (id) => {
  const orderFound = OrderModel.find({ user: id });
  return orderFound;
};

export const getAllOrdersRepo = async () => {
  const orderFound = OrderModel.find();
  return orderFound;
};

export const updateOrderDetailsRepo = async (data, id) => {
  // Write your code here for placing a new order
  const updatedOrder = OrderModel.findByIdAndUpdate(id, { ...data });
  return updatedOrder;
};
