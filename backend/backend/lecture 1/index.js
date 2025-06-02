import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const app = express();

app.get("/hello", (req, res) => {
  res.send("hello");
});

// مش راضي يشتغل عندي ولا كود git غير hello
app.get("/raz", (req, res) => {
  res.send("razan is using this port");
});

app.get("/", (req, res) => {
  res.send("hello in node js project");
});

app.post("/addcomment", (req, res) => {
  res.send("post request on add comment");
});

app.put("/test", (req, res) => {
  res.send("hello world");
});

app.delete("/testingdelete", (req, res) => {
  res.send("visiting delete request");
});

 




app.get("/numbers", (req, res) => {
  let numbers = "";
  for (let i = 0; i <= 100; i++) {
    numbers += i + " - ";
  }
  //res.send(`the numbers are: ${numbers}`);

  //لو بدي اكتب كود html داخل الباك بكون عن طريق
  //res.send("<h1>hello world</h1>");

  // الطريقة الثانية بعدانشاء ملف مستقل طريقة ejs
  //res.send(__dirname + "/views/index.html");
  //res.sendFile(__dirname + "/views/index.html");
  res.render("index.ejs", {
    name : "razan",
  });
});

app.get("/findsummation/:number1/:number2", (req, res) => {
  const num1 = req.params.number1;
  const num2 = req.params.number2;

  const total = Number(num1) + Number(num2);
  res.send(`the total is ${total}`);
});

//app.use(express.json());
////app.get("/sayhi", (req, res) => {
//console.log(req.body)

//console.log(req.query);
//res.send(`hi ${req.query.name}`);
//});

// تجربة رقم 2

app.use(express.json());

app.get("/sayhey", (req, res) => {
  //console.log(req.body);

  //console.log(req.query);
  //res.send(`hey ${req.body.name}, age is ${req.query.age}`);

  //لارجاع البينات على شكل json

  res.json({
    name: req.body.name,
    age: req.query.age,
    language: "Arabic",
  });
});

app.listen(3000, () => {
  console.log("I am listening in port 3000");
});
