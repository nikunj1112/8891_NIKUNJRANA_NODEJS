

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminRoutes from "./router/admin_route.js";
import managerRoutes from "./router/manager_route.js";


dotenv.config();
connectDB();

const app = express();

app.use(express.json());   // 🔥 VERY IMPORTANT LINE

app.use("/api/admin", adminRoutes);
app.use("/api/manager", managerRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

