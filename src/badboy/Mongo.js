var Mongoclient=require('mangodb').Mongoclient;
var url="mongodb://localhost:3000/ananddb";

Mongoclient.connect(url,function(err,db)
{
     if (err) throw err
     console.log("data created");
     db.close();
}); 