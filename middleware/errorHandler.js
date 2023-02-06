const errorHandler = (err,req,res)=>{
    res.send(err.message)
}
module.exports =errorHandler