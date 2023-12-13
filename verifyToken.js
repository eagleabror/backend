const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const token=req.cookies.token
    console.log(token)
    jwt.verify(token,process.env.SECRET,async (err,data)=>{
        if(err){
            return res.status(403).json(token)
        }
        
        req.userId=data._id
       
        console.log("passed")
        
        next()
    })
}

module.exports=verifyToken