let express = require('express');
let router = express.Router();

router.get ("/newItem/:name/:quant/:price", function(req,res){
    let name = req.params.name;
    let quant = parseInt(req.params.quant);
    let price = parseInt(req.params.price);
    newItem(name, quant, price);
    res.send(listAll());
});

router.get("/listAllItems",function(req,res){
    res.send(listAll());
});

router.get("/deleteItem/:toDel",function(req,res){
    let deleteID = parseInt(req.params.toDel);
    delItem(deleteID);
    res.send(listAll());
});

router.get("/totalValue",function(req,res){
    res.send("Total Value: $"+getTotalValue());
});

module.exports = router;