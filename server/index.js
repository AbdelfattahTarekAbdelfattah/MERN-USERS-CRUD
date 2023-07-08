const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const User = require("./models/Users");
app.use(cors());
app.use(express.json());
const CONNECTION_URL =
  "mongodb+srv://elbaaginyabdelfattah:2481001A@cluster0.pv1wple.mongodb.net/?retryWrites=true&w=majority";
const PORT = 3001;
// db name social-app \\
mongoose
  .connect(CONNECTION_URL)
  .then((result) => console.log("|| Connection Done ||"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err));
});

app.get("/count", (req, res) => {
  User.countDocuments({})
    .then((count) => {
      res.json(count);
    })
    .catch((err) => console.log(err));
});
// part for update
app.get("/getUser/", (req, res) => {
  const id = req.params.id;
  User.findById({ _id: id })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err));
});
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, age: req.body.age, email: req.body.email }
  )
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete({ _id: id })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err));
});

app.post("/create", (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  });
  user.save().then(() => {
    res.json(user);
  });
});

app.listen(PORT, () => console.log(`app work at http://localhost:${PORT}`));
