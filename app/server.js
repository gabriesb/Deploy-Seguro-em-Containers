const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Deploy Seguro em Containers com DevOps!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
