import app from "./app";

app.listen(3000, () => console.log("Servidor iniciado em localhost:3000"))

app.get("/", (req, res) => res.send("Hello world!"))