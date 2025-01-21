import { Router } from "express";
import routeDefinitions from "./routeDefinition";

const router = Router();

routeDefinitions.forEach((route) => {
    router.use(route.path, route.handler);
});

export default router;