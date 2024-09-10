// this is our first express code of  our life
const express = require('express');
const app = express();
const profile = require('./profile');

app.use("/profile", profile);

const port = +process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`sever is runnint at ${port}`);
});
