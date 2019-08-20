let express = require('express');

let app = express();

let db = [];

app.get("/week4",function(req,res){
    res.send("Week 4");
});

app.get("/add/:number",function(req,res){
    db.push(parseInt(req.params.number));
    res.send("Sent: "+req.params.number);
});

app.get("/getTotal",function(req,res){
    let val = 0;
    for (let i = 0; i < db.length; i++) {
        console.log(val);
        val += db[i];
    }
    res.send("number:",val);
});

app.get("/delete/:number",function(req,res){
    let toDel = parseInt(req.params.number);
    for (let i = 0; i < db.length; i++) {
        if (db[i] == toDel) {
            db.splice(i, 1);
        };
    };

    let index = numArray.indexOf(req.params.number);
});

app.listen(8888);