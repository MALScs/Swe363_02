const express = require("express");
const path = require("path");
const app = express();
const port = 3030;
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    console.log("user entered the main page")
    console.log("Requested URL:", req.url); // testng
    res.sendFile(path.join(__dirname, "SWE363work.html"));
});

app.get("/myTable", (req, res) => {
    console.log("user entered myTable page")
    res.sendFile(path.join(__dirname, "TablePage.html"));
});

app.get("/yourRoutine", (req, res) => {
    console.log("user entered yourRoutine page")
    res.sendFile(path.join(__dirname, "YourRoutine.html"));
});
app.get("/contact", (req, res) => {
    console.log("user entered contact page")
    res.sendFile(path.join(__dirname, "contact.html"));
});
app.use(
    express.urlencoded({
      extended: true,
    })
  );
  
  // POST endpoint at /submitOrder
  app.post("/confirmYourTable.html", (req, res) => {
    console.log("THE GET METHOD HAS WOPRLED") // TESTING
    res.sendFile(path.join(__dirname, "confirmYourTable.html"));
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});