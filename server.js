import express from "express";
import cors from "cors";
import rootRouter from "./src/routers/root.router";

var app = express();

app.use(express.json());

app.use(cors({
   origin: ["https://google.com", "http://localhost:3000"]
}))

// gắn rootRouter vào app
// app: http://localhost:3069
app.use(rootRouter);

app.listen(3069, () => {
   console.log(`Server running on port http://localhost:3069`);
});