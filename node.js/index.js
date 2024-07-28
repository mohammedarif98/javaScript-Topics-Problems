
// const express = require('express');
// const app = express();
// const port = 3000;

// const midd = ((req,res,next)=>{
//     if(req.url==="/home"){
//         console.log("accessed");
//         next()
//     }else{
//         res.send("wrong page")
//     }
// })

// app.set("view engine","ejs");

// app.use(midd);

// const func = (req,res)=>{
//     res.send("mohammed arif")
// }

// app.get('/home',midd,func);

// app.listen(port,()=>{
//     console.log(`server run at port ${port}`);
// })


//* ------------------------------------------

// const express = require('express');
// const app = express()

// const middleware = ((req,res,next)=>{
//     console.log("middleware");
//     next()
// })

// // app.use(middleware);

// app.get('/',middleware,(req,res)=>{
//     res.send("welcome sever");
// })

// app.listen(2000,()=>{console.log("server running started");})

//! ------------------ url params-----------------


// const express = require('express');
// const app = express();
// const port = 5000;

// // url params
// app.get('/user/:userdata',(req,res)=>{
//     let userid = req.params.userdata;
//     res.send(`the userId is : ${userid}`) 
// })
// // query params
// app.get("/userdata",(req,res)=>{
//     let data = req.query.Udata;
//     res.send(` the data is : ${data}`)
// })

// app.listen(port,()=>{
//     console.log(`server runat port ${port}`);
// })

