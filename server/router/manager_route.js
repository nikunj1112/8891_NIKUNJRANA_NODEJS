import express from 'express';
import verifyToken from "../middlewares/auth_middleware.js";
import {
  createManager,
  getManagers,
  deleteManager,
  updateManager,
  searchManager,
  paginationManager,
  multiDelete
} from "../controllers/manager_controller.js";

const router = express.Router();

router.post("/", verifyToken, createManager);
router.get("/", verifyToken, getManagers);
router.delete("/:id", verifyToken, deleteManager);
router.put("/:id", verifyToken, updateManager);
router.get("/search", verifyToken, searchManager);
router.get("/pagination", verifyToken, paginationManager);
router.post("/multi-delete", verifyToken, multiDelete);

export default router;