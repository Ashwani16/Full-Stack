function validator(req,res,next){
    if(req.method==="PATCH" || req.method==="DELETE"){
        const query=req.query
        if(query.password==='7877'&& (query.role==='admin'|| query.role==='teacher' )){
            next()
        }else{
            res.send("You are not authorised to do this operation")
        }
    }else{
    next()
    }
    
    
}
module.exports=validator;