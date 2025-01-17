const express = require('express');
const cors=require('cors');
require('./db/config'); 
const User = require('./db/user');
const Product=require('./db/Product');
const app = express();

const Jwt=require('jsonwebtoken');
const jwtKey='spn e-comm';

app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    result=result.toObject();
    delete result.password;
    Jwt.sign({result},jwtKey,{expiresIn:"2h"},(err,token)=>{
      if(err){
        res.send({result:'Something went wrong , please try again after some time'})
      }
      res.send({result,auth:token});
    })
    
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.post('/login',async(req,res)=>{
  
  if(req.body.password && req.body.email)
    {
       let user=await User.findOne(req.body).select('-password');
           if(user)
         {
          Jwt.sign({user},jwtKey,{expiresIn:"2h"},(err,token)=>{
            if(err){
              res.send({result:'Something went wrong , please try again after some time'})
            }
            res.send({user,auth:token});
          })
        
          }else{
           res.send({result:'No User Found'})
          }
  }else{
  res.send({result:'No User Found'})
 }
})

app.post('/add-product',async(req,res)=>{
  let product=new Product(req.body);
  let result=await product.save();
  res.send(result);
})

app.get('/products',async(req,res)=>{
let products=await Product.find();
if(products.length>0){
  res.send(products)
}else{
  res.send({result:"no product found"});
}
})

app.delete('/products/:id',async(req,res)=>{
  const result=await Product.deleteOne({_id:req.params.id})
  res.send(result);
})

app.get('/product/:id',async(req,res)=>{
  const result=await Product.findOne({_id:req.params.id});
  if(result){
    res.send(result)
  }else{
    res.send({result:"No Reacord Found"})
  }
})

app.put('/product/:id',async(req,res)=>{
  let result=await Product.updateOne(
    {_id:req.params.id},
{
  $set:req.body
}
  );
  res.send(result);
})

app.get('/search/:key',async(req,res)=>{
  let result=await Product.find({
"$or":[
  {name:{$regex:req.params.key}}
]
  })
  res.send(result)
})
app.listen(5011, () => {
  console.log('Server is running on port 5011');
});
