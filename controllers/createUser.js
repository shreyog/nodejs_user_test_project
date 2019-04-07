var fs = require('fs');
module.exports = (req,res)=>{
    console.log("Its in the create user controller")
    // console.log(req.query.firstname)
    console.log(req.body.firstname)
    var obj=[];
    fs.exists('user.json', function(exists){
        if(exists){
            console.log("yes file exists");
            fs.readFile('user.json', function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
            obj = JSON.parse(data); 
            // for (i=0; i<5 ; i++){
            // obj.table.push({id: i, square:i*i});
            // }
            user={
                id:Math.random(),
                firstname:req.body.firstname,
                lastname:req.body.lastname
            }
            obj.push(user)
            var json = JSON.stringify(obj,null,2); 
            fs.writeFile('user.json', json,function(err,result){
                if(err){
                    console.log(err)
                }
            }); 
            }});
            //  res.render('index');
            // res.redirect('index.html');
        } else {
            console.log("file not exists")
            user={
                id:Math.random(),
                firstname:req.body.firstname,
                lastname:req.body.lastname
            }
            obj.push(user)
            var json = JSON.stringify(obj,null,2); 
            fs.writeFile('user.json', json,function(err,result){
                if(err){
                    console.log(err)
                }
            }); 
            // res.redirect('index.html');
            }
        });
    };