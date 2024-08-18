import { Router } from "express";
import Home from "../controllers/controllers.js";


const route = Router()

route.get('/home',Home)
export default route;


