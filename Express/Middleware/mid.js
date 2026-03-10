const mid = (req,res,next)=>{
    let method = req.method;
    let url = req.url;
    let time = new Date().getDate();


    console.log(`Method:\t${method} \nURL:\t${url} \nTime:\t${time}\n\n\n`)
    
    next();
}


module.exports = mid;