const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User");

const app = express();

app.set("view engine",  "pug");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/express_pug_demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(  () => console.log("Connected to MongoDB"))
  .catch(err => console.error("Not Connected to MongoDB ", err));


app.get("/", async (req, res) => {
    const users = await User.find();
    res.render("index",{ users });
});

app.get("/add-user", async (req, res) => {
    res.render("add-user");
});

app.post("/add-user", async (req, res) => {
    const { name } = req.body;
    if (name) {
        await new User({ name }).save();
    }
    res.redirect("/");
});

//Edit user

app.get("/edit-user/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render("edit-user", { user });
});

app.post("/edit-user/:id", async (req, res) => {
    const { name } = req.body;
    if (name) {
        await User.findByIdAndUpdate(req.params.id, { name });
    }
    res.redirect("/");
});

app.get("/delete-user/:id", async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/");
});

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});