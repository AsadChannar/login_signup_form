const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/all', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("mongoodb is conected")
}).catch(()=>{
    console.log('mongoodb is not conected')
});

// Create a User model
const UserSchema = mongoose.Schema({
    
    email: {type: String,
        required:true
    },
    password: String,
  });
  const User = mongoose.model('Users', UserSchema);
  module.exports=User;