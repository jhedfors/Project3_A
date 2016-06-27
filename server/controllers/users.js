var User = mongoose.model('User')
module.exports = (function(){
  return {
    index: function(request, response){
      User.find({}, function(err,results){
        response.json(results)
      })
    },
    create: function(request, response){
      console.log('server user create', request);
      var user = new User(request.body)
      user.save(function(err){
        if(err) response.json(err)
        else response.json({'status':true})
      })
    },
  }
})()
