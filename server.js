const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 2121;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "cliffordmapesa8@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/droffilc1/hng_backend_stage_0",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});