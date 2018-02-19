
module.exports = function (app) {
    var itemRoute = '/api/items'
    var items = [{
        name:"Cat Food"
    },{
        name:"Waffles"
    },{
        name:"Syrup",
        purchased: true
    },{
        name:"Cereal"
    }];

    app.route(itemRoute)
    .get(function(req,res){
        res.send(items);
    })
    .post(function(req,res){
        var item = req.body;
        items.push(item);
    });
}


