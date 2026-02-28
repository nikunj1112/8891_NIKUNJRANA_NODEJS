import Admin from "../models/admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerAdmin = async (req, res) => {
  const { username, email, password, confirm_password } = req.body;

  if (password !== confirm_password)
    return res.status(400).json({ message: "Passwords do not match" });

  const existing = await Admin.findOne({ email });
  if (existing)
    return res.status(400).json({ message: "Email already registered" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = new Admin({
    username,
    email,
    password: hashedPassword,
    created_date: new Date().toISOString(),
    updated_date: new Date().toISOString()
  });

  await admin.save();

  res.status(201).json({ message: "Admin Registered" });
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(400).json({ message: "Invalid Email" });

  const match = await bcrypt.compare(password, admin.password);
  if (!match) return res.status(400).json({ message: "Invalid Password" });

  const token = jwt.sign(
    { id: admin._id },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  res.json({ token });
};