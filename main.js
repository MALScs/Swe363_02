const express = require("express");
const path = require("path");
const app = express();
const port = 2020;
const router = express.Router();
app.use(express.static(__dirname));

router.get("/", (req, res) => {
    console.log("user entered the main page")
    console.log("Requested URL:", req.url); // testng
    res.sendFile(path.join(__dirname, "SWE363work.html"));
});

router.get("/myTable", (req, res) => {
    console.log("user entered myTable page")
    res.sendFile(path.join(__dirname, "TablePage.html"));
});

router.get("/yourRoutine", (req, res) => {
    console.log("user entered yourRoutine page")
    res.sendFile(path.join(__dirname, "YourRoutine.html"));
});
router.get("/contact", (req, res) => {
    console.log("user entered contact page")
    res.sendFile(path.join(__dirname, "contact.html"));
});
app.use("/", router);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});