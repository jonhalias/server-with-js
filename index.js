const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
    if(req.url == "/"){
        const texto = fs.readFileSync("./index.html", "utf-8");
        res.write(texto)
        //fs.writeFileSync("./texto.txt", "Hola mundo");
        //console.log(texto)
    }
    res.end()
})

app.listen(5000)
console.log("Server on http://localhost:5000");



