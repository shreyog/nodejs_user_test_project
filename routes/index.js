const CONTROLLERS = require('../controllers/index')

module.exports= (app)=>{
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the API!',
      }));
      app.get('/v1/read',(req,res)=>{
          
          CONTROLLERS.readUser(req,res)
      })
      app.post('/v1/create',(req,res)=>{
          
        CONTROLLERS.createUser(req,res)
        res.redirect('/');
        // res.render('/');
    })
    app.post('/v1/update',(req,res)=>{
          
        CONTROLLERS.updateUser(req,res)
        res.redirect('/');
        // res.render('\display');
    })
    app.post('/v1/delete',(req,res)=>{
          
        CONTROLLERS.deleteUser(req,res)
        res.redirect('/');
        // res.render('\display');
    })
};