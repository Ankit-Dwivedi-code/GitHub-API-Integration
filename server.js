require("dotenv").config();
const express = require("express");
const githubRoutes = require("./routes/githubRoutes");

const app = express();
app.use(express.json());

app.use("/", githubRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
