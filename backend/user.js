const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    level:{
        type:String,
        require:false
    }
});

userSchema.pre('save',function(next){
    if(this.isModified('password')){
        bcrypt.hash(this.password,10,(err,hashed)=>{
            if(err)return next(err);
            this.password = hashed;
            next();
        })
    }
})
userSchema.methods.comparePassword= async(password)=>{
    if(!password)return new Error('password is empty');
    try{
        const result =await bcrypt.compare(password , this.password);
        return result;
    }catch(e){
        console.log("errrroooorrr"+e);
    }
}

const User=mongoose.model('User',userSchema);
module.exports=User;