import userRoutes from "./userRoutes";
// import loginRoutes from "./loginRoutes";


/**
 * api/{path}
 */
const routeDefinitions = [
    { path: "/users", handler: userRoutes},
    // { path: "/login", handler: loginRoutes},
];

export default routeDefinitions;