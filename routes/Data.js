import express from "express";
import DataController from "../Controller/Data";

const user_router = express.Router();

const data_controller = new DataController();

user_router.get("/all", data_controller.FindAll);

user_router.post("/add", data_controller.AddUser);

user_router.post("/find", data_controller.FindUser);

user_router.get("/pdf", data_controller.pdf);

export default user_router;
