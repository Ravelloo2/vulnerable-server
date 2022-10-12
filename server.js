const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("This is yo mama");
});

app.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}`);
});
