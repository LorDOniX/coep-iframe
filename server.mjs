import express from "express";
import path from "path";

const PORT = 8111;
const app = express();

function addWasmHeaders(res) {
	res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
	res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
}

function serverInit() {
	console.log(`Server http runs on port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
}

app.get("/", (req, res) => {
	addWasmHeaders(res);
	res.sendFile(path.resolve(`./src/index.html`));
});

// start
app.listen(PORT, () => {
	serverInit();
});
