$and: Logical AND Opeartor
$or: Logical OR Operator

//and
db.product.find({$and:[{price:{$eu:"120"}},{special_price:{$eq:"NA"}}]},{price:1,brand:1,_id:0})
//or
db.product.find({$or:[{price:{$eu:"120"}},{special_price:{$eq:"NA"}}]},{price:1,brand:1,_id:0})

