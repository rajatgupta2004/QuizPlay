const mongoose=require('mongoose');
const mongoURL='mongodb+srv://user:user@cluster0.fjph5ie.mongodb.net/Quizplay';
mongoose.connect(mongoURL)
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to mongodb');
});
db.on('error',(err)=>{
    console.log('connection error');
});
db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});
module.exports=db;