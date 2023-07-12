import express, { Express } from "express";
import userRoutes from "./userRoutes";

const app: Express = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
