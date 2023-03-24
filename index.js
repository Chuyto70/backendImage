const express = require("express");
const router = require("./routes/routes");
const app = express();
const cors = require('cors')
const fileUpload = require("express-fileupload");
app.use(cors())
app.use(fileUpload());
app.use(router);

app.listen(8080, () => {
  console.log("Server on port 8080");
});
