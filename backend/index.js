import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const todoLists = [];

app.get("/todolist", (req, res) => {
  res.send({
    status: 200,
    data: todoLists,
  });
  console.log("hi get");
});
app.post("/todolist", (req, res) => {
  let { todoValue } = req.body;

  console.log(todoValue);

  todoLists.push(todoValue);
  console.log(todoLists);
  res.send(true);
});
app.listen(8080, () => {
  console.log("Server Started");
});
