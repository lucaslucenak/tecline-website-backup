const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("Rota principal")
})

app.listen(9000, function(err) {
    if(err) {
        console.error(err);
    }
    else {
        console.log("Rodando em http://localhost:9000")
    }
})