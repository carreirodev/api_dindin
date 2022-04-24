const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// definicao de endereço e url
const hostname = "localhost";
const port = 4000;
app.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
