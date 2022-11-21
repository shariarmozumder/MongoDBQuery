//This is IN
db.Products.find({price:{$in:["100","200","3000"]}},{price:1})
//This is Not In
db.Products.find({price:{$nin:["100","200","3000"]}},{price:1})
