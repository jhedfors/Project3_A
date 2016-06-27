var Poll = mongoose.model('Poll')
module.exports = (function(){
  return {
    index: function(request, response){
      Poll.find({}, function(err,results){
        response.json(results)
      })
    },
    show: function(request, response){
      Poll.findOne({_id:request.params.id}, function(err,results){
        console.log('show controller server');
        response.json(results)
      })
    },
    create: function(request, response){
      var poll = new Poll(request.body)
      console.log('server poll controller', poll);
      poll.save(function(err){
        if(err) response.json(err)
        else response.json({'status':true})
      })
    },
    vote: function(request,response){
      Poll.findOne({_id:request.params.poll_id}, function(err,result){
        // if(err) response.json(err)
        // else response.json({'status':true})
        for (var i = 0; i < result.options.length; i++) {
          if (result.options[i]._id == request.params.option_id) {
            option = result.options[i]
            votes = option.votes +=1
          }
        }
        result.save(function(err){
          if(err) response.json(err)
            else response.json(result)
        })

      })
    },
    destroy: function(request, response){
      Poll.remove({_id:request.params.id}, function(err,poll){
        if(err) request.json(err)
        else response.json({'status':true})
      })
    }
  }
})()
