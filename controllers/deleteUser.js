var fs = require('fs');
module.exports = (req,res)=>{
    console.log("Its in the update user controller")
    // console.log(req.query.firstname)
    // console.log(req.body.firstname)
    console.log(req.body.dropdownid)
    
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
            // user={
            //     id:Math.random(),
            //     firstname:req.body.firstname,
            //     lastname:req.body.lastname
            // }
            // obj.push(user)
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].id == req.body.dropdownid) {
                    obj.splice(i,1)
                  
                  break;
                }
              }
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
            // user={
            //     id:Math.random(),
            //     firstname:req.body.firstname,
            //     lastname:req.body.lastname
            // }
            // obj.push(user)
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].id == req.body.dropdownid) {
                    obj.splice(i,1)
                  
                  break;
                }
              }
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