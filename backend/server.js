// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// LISTEN
app.listen(PORT, () => {
  console.log(`The Beast you seek is here at ${PORT}!`);
});
