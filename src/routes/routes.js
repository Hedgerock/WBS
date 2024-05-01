import { createBrowserRouter } from "react-router-dom";
import { initRoutes, routesData } from "./routesData";

export const router = createBrowserRouter([...initRoutes(routesData)])