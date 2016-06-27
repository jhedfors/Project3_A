var userSchema = mongoose.Schema({
  name:{type:String, required:true, minlength:2}
},{timestamps:true})
var user = mongoose.model('User', userSchema)

var pollSchema = mongoose.Schema({
  name: {type:String, minlength:2},
  question:{type:String, required:true, minlength:2},
  options:[
    {text:{type:String, required:true, minlength:1}, votes:Number}
  ]
},{timestamps:true})
var poll = mongoose.model('Poll', pollSchema)

// var product = mongoose.model('Product', productSchema)
