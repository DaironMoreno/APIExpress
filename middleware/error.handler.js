function logerror(err,req,res,netx){
    console.error("logerror");
    console.error(err);
    netx(err);
}
function errorhandler(err,req,res,netx){
    console.error("errorhandler");
    
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
    
}

function BoomErrorhandler(err,req,res,netx){
    if(err.isBoom){
        const {output} = err;
        res.status(output.statusCode).json(output.payload);
    }else{
        netx(err);
    }
   
    
}

module.exports = {logerror, errorhandler,BoomErrorhandler};