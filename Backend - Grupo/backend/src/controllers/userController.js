import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

//LOGIN USER
export const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  //if user exists
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        image: user.image,
        isAdmin: user.isAdmin,
      });
      return;
    }
  }
  res.status(401).send({ message: "Email o Contraseña Inválidos" });
};

//CREATE USER
export const postUser = async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    address: req.body.address,
    phone: req.body.phone,
    image:
      req.body.image ||
      "https://res.cloudinary.com/primalappsje/image/upload/v1671478343/primal/seller_tlpqnm.png", //for default image
  });
  const user = await newUser.save();
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    address: user.address,
    phone: user.phone,
    image: user.image,
    isAdmin: user.isAdmin,
  });
};

//GET
export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).res.send(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//GET BY ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).res.send(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//PUT
export const updateUser = async (req, res) => {
  const user = await User.findById(req.body._id);
  //if user exists
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.phone = req.body.phone || user.phone;
    user.image = req.body.image || user.image;
    if (req.body.password) {
      user.password = bcrypt.hashSync(req.body.password);
    }

    const updateUser = await user.save();
    res.send({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      address: updateUser.address,
      phone: updateUser.phone,
      image: updateUser.image,
      isAdmin: updateUser.isAdmin,
    });
  } else {
    res.status(401).send({ message: "Usuario no encontrado!" });
  }
};
