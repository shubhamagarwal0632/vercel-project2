import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
mongoose.connect('mongodb+srv://allinone1creater:yZcMFEN7xScca50R@webdevmastry.qdmg1eg.mongodb.net/').then(()=>{
    console.log('mongodb is connected done............')
})


const userschemas = mongoose.Schema({
    name:String,
    email:String,
    password:String   
})

const usermodel = mongoose.model('authnew', userschemas);
app.get('/',(req, res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login')
})
app.post('/register',async(req,res)=>{
    const {name,email,password} = req.body
    const registervalue  = await usermodel.create(name,email,password);

    res.redirect('/login')
})
app.listen(5000,()=>{
    console.log('server is running on port 5000')
})