const app = require("./app");
const config = require("./app/config");

// lắng nghe event kết nối
const PORT = config.app.port;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
