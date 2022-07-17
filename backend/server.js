const express = require('express');

const port = process.env.PORT || 5001;
const app = express();

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
