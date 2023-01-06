import Order from "../models/orderModel.js";
// PULL IN THE ORDER MODEL i dev

//Post Order
export const postOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      sellerId: req.body.sellerId,
      itemsPrice: req.body.itemsPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
    });
    const order = await newOrder.save();
    res.status(201).send({ message: "Nueva orden creada", order });
  } catch (error) {
    res.status(500).send({ message: "Error al crear orden" });
  }
};

//Get my orders
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ sellerId: req.params.id });
    res.send(orders);
  } catch (error) {
    res.status(404).send({ message: "No existen ordenes" });
  }
};

//Get order
export const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.find(id);
    res.send(order);
  } catch (error) {
    res.status(404).send({ message: "Orden no encontrada" });
  }
};

//Get orders by id
export const getOrders = async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await Order.findById(id);
    res.send(orders);
  } catch (error) {
    res.status(404).send({ message: "Orden no encontrada" });
  }
};
