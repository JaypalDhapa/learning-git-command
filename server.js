const express = require("express");
const app = express();

//middleware
app.use(express.json());


//routes handling
app.get("/setCookie",(req,res)=>{
    res.cookie("token","abc123",{
        httpOnly:true,
        secure:false,
        
    });
    res.send("cookie set");
});

app.listen(3000);