const express = require("express");
const hbs = require("hbs");
const path = require("path");
const bodyParser = require("body-parser");
const port = 2000 || process.env.PORT;
const app = express();


const public_path = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
app.use(express.static(public_path));

const templatePartials = path.join(__dirname,"../templates/partials"); 
hbs.registerPartials(templatePartials);
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.set("view engine", "hbs");

app.set("views", templatePath);


app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});