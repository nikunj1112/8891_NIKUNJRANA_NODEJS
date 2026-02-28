import express from "express";
import verifyToken from "../middlewares/auth_middleware.js";

import {
  createManager,
  getAllManagers,
  deleteManager,
  updateManager,
  searchManagers,
  getManagersWithPagination,
  deleteMultipleManagers
} from "../controllers/manager_controller.js";

const router = express.Router();


router.post("/", verifyToken, createManager);

router.get("/", verifyToken, getAllManagers);
router.get("/search", verifyToken, searchManagers);
router.get("/pagination", verifyToken, getManagersWithPagination);

router.put("/:id", verifyToken, updateManager);

router.delete("/:id", verifyToken, deleteManager);

router.post("/multi-delete", verifyToken, deleteMultipleManagers);


export default router;
