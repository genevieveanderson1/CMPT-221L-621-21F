let express = require('express');
let app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let port = 3000

app.get("/", function(req, res){
    var names = ["A", "B", "C"]
    var number = getRandomInt(7);
    res.render("index", {name: names[number]})
});

app.get("/test", function(req, res){
    res.send("Test")
});

app.post("/firstName", function(req, res){
    console.log(req.body.firstName);
    res.redirect("/")
})

app.post("/email", function(req, res){
    console.log(req.body.email);
    res.redirect("/")
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.listen(port, function() {
    console.log("Server running on localhost:3000");
});