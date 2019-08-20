let express = require('express');

let app = express();

let db = [];

// let router = require('./router.js');

app.get ("/newItem/:name/:quant/:price", function(req,res){
    let name = req.params.name;
    let quant = parseInt(req.params.quant);
    let price = parseInt(req.params.price);
    newItem(name, quant, price);
    res.send(listAll());
});

app.get("/listAllItems",function(req,res){
    res.send(listAll());
});

app.get("/deleteItem/:toDel",function(req,res){
    let deleteID = parseInt(req.params.toDel);
    delItem(deleteID);
    res.send(listAll());
});

app.get("/totalValue",function(req,res){
    res.send("Total Value: $"+getTotalValue());
});

// app.use('/', router);

app.listen(8888);

function listAll() {
    let totalPrice = 0;
    let toOut = '<table style="width:100%"><tr><th>ID</th><th>Name</th><th>Quantity</th><th>Price</th><th>Total Price</th></tr>';
    for (let i = 0; i < db.length; i++) {
        totalPrice = db[i].quantity * db[i].price;
        toOut += '<tr><td>' + db[i].id + '</td><td>' + db[i].name + '</td><td>' + db[i].quantity + '</td><td>' + db[i].price + '</td><td>' + totalPrice + '</td></tr>';
        if (i == db.length - 1) {
            toOut += '</table>';
        };
    }
    return toOut;
};

function getTotalValue() {
    let val = 0;
    for (let i = 0; i < db.length; i++) {
        val += db[i].quantity * db[i].price;
    }
    return val;
};

function delItem(deleteID) {
    for (let i = 0; i < db.length; i++) {
        if (db[i].id == deleteID) {
            db.splice(i, 1);
        };
    };
};

function newItem(name, quant, price) {
    let id = Math.round(Math.random()*1000);
    let rec = {
        id: id,
        name: name,
        quantity: quant,
        price: price
    };
    db.push(rec);
};