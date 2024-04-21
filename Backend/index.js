import express from "express"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

import cors from "cors"

const app = express()

//middleware
app.use(cors({
  // origin: ["https://kitabe.vercel.app"],
  // methods: ["POST", "GET"],
  // credentials: true
}));
app.use(express.json());



const PORT = 4001 || 4000;
const URI = "mongodb://localhost:27017/kitabe"

//Connect to mongoDB

try {
  mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log(error);
}

//defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})