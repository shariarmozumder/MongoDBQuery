$sum
db.docx.aggregate([{$group : {_id : "$operator", num_docx : {$sum : "$value"}}}])
$avg
db.docx.aggregate([{$group : {_id : "$operator", num_docx : {$avg : "$value"}}}]) 
$min / $max
db.docx.aggregate([{$group : {_id : "$operator", num_docx : {$min : "$value"}}}])
$push 
db.docx.aggregate([{$group : {_id : "$operator", classes : {$push: "$value"}}}])
$addToSet 
db.docx.aggregate([{$group : {_id : "$operator", classes : {$addToSet : "$value"}}}]) 
$first / $last 
db.docx.aggregate([{$group : {_id : "$operator", last_class : {$last : "$value"}}}])