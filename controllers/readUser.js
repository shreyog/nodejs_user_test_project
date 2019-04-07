
var userData = require('../user.json')
module.exports = (req,res)=>{
    
    res.json(userData).end();

    };