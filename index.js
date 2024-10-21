const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
    if(req.url == "/"){
        const texto = fs.readFileSync("./index.html", "utf-8");
        res.write(texto);
    }
    if(req.url == "/about"){
        const texto = fs.readFileSync("./about.html", "utf-8");
        res.write(texto);
    }
    res.end()
})

app.listen(5000)
console.log("Server on http://localhost:5000");