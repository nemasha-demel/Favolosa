import { NextFunction, Request, Response } from "express";
import Address from "../infrastructure/db/entities/Address";
import Order from "../infrastructure/db/entities/Order";
import NotFoundError from "../domain/errors/not-found-error";
import UnauthorizedError from "../domain/errors/unauthorized-error";
import { getAuth } from "@clerk/express";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const { userId } = getAuth(req);

    const address = await Address.create(data.shippingAddress);
    const order = await Order.create({
      addressId: address._id,
      items: data.orderItems,
      userId: userId,
    });

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      throw new UnauthorizedError("User not authenticated");
    }

    const orderId = req.params.id;

    const order = await Order.findById(orderId).populate("addressId").populate("items.productId");
    if (!order) {
      throw new NotFoundError("Order not found");
    }

    if (order.userId !== userId) {
      throw new UnauthorizedError("Unauthorized");
    }

    res.status(200).json({
      id: order._id,
      items: order.items,
      address: order.addressId,
      orderStatus: order.orderStatus,
      paymentMethod: order.paymentMethod,
      paymentStatus: order.paymentStatus,
      totalAmount: (order as any).totalAmount,
    });
  } catch (error) {
    next(error);
  }
};

const getOrdersByUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      throw new UnauthorizedError("User not authenticated");
    }

    const orders = await Order.find({ userId })
      .populate("addressId")
      .populate("items.productId");

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export { createOrder, getOrder, getOrdersByUser };

