const express = require("express");
const cors = require("cors");
const route = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(route);

// definicao de endereço e url
const hostname = "127.0.0.1";
const port = 4000;
app.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
