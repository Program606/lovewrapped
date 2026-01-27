import express from "express";
import clientRouter from "./clients.js"; // or "./clients.js" if you kept JS + .d.ts

//express app
const app = express();

//middleware
//- any rq looks at body and attaches to rq object
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next();
});

app.use('/api', clientRouter);

app.listen(3001, () => console.log("API on http://localhost:3001"));
