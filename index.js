const express = require("express");
const app = express();

let port = 8080;

app.listen(port, ()=> {
    console.log(`app is listening ${port}`);
});

app.get("/", (req, res)=>{
   res.send("<h1>Random Joke Generator</h1>");
})

app.get("/randomapi", (req, res) => {
    res.send({
        type: "School Days Funny jokes",
        joke: "I'm reading a book on anti-gravity. It's impossible to put down!"
    })
})