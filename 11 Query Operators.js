$eq: Equal To Operator
$lt: Less Than Operator
$lte: Less Than or Equal To Operator
$gt: Greater Than Operator
$gte: Greater Than or Equal To Operator
$ne: Not Equal To Operator
$in: In Operator
$nin: Not In Operator

code:
db.Products.find({price:{$eq:"1000"}})  
db.Products.find({price:{$lt:"1000"}})  
db.Products.find({price:{$lte:"1000"}})  
db.Products.find({price:{$gt:"1000"}})  
db.Products.find({price:{$gte:"1000"}})  
db.Products.find({price:{$ne:"1000"}}) 
