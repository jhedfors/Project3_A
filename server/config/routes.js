var user = require('../controllers/users.js')
var poll = require('../controllers/polls.js')
// var product = require('../controllers/products.js')

module.exports = function(){
  app.get('/users',user.index)
  app.post('/user', function(req, res){
    console.log('ROUTEs', req);
    user.create(req,res)
  })
  app.get('/poll/:id',poll.show)
  app.get('/polls',poll.index)
  app.post('/poll',poll.create)
  app.post('/vote/:poll_id/:option_id',poll.vote)
  app.delete('/poll/:id',poll.destroy)
}
