// Please don't change the pre-written code
// Import the necessary modules here

import {
  createNewOrderRepo,
  getAllOrdersRepo,
  getMyOrdersRepo,
  getSingleOrderRepo,
  updateOrderDetailsRepo,
} from "../model/order.repository.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";

export const createNewOrder = async (req, res, next) => {
  // Write your code here for placing a new order
  try {
    const orderDetails = req.body;
    const id = req.user._id;
    const newOrder = await createNewOrderRepo(orderDetails, id);
    res.status(200).json({ success: true, newOrder });
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
};

export const getSingleOrder = async (req, res, next) => {
  // Write your code here for placing a new order
  try {
    const id = req.params.id;
    const order = await getSingleOrderRepo(id);
    if (!order) {
      res.status(400).json({ success: false, error: "order not found" });
    }
    res.status(200).json({ success: true, order });
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
};

export const getMyOrders = async (req, res, next) => {
  // Write your code here for placing a new order
  try {
    const id = req.user._id;
    const order = await getMyOrdersRepo(id);
    if (!order.length > 0) {
      res.status(400).json({ success: false, error: "No order found" });
    }
    res.status(200).json({ success: true, order });
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
};

export const getAllOrders = async (req, res, next) => {
  // Write your code here for placing a new order
  try {
    const order = await getAllOrdersRepo();
    if (!order.length > 0) {
      res.status(400).json({ success: false, error: "No order found" });
    }
    res.status(200).json({ success: true, order });
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
};

export const updateOrderDetails = async (req, res, next) => {
  // Write your code here for placing a new order
  try {
    const id = req.params.id;
    const updateData = req.body;

    const order = await updateOrderDetailsRepo(id, updateData);
    if (!order) {
      res.status(400).json({ success: false, error: "Order not found" });
    }
    res.status(200).json({ success: true, order });
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
};
