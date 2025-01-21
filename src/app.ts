import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";

const app: Application = express();

app.use(cors());

/** 只允許特定來源 */
// app.use(cors({
//     origin: "https://example.com",
//     methods: ["GET", "POST"]
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

export default app;