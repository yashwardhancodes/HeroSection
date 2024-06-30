const express=require("express");
const app=express();
const path=require("path");
app.set("views",path.join(__dirname,"views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname,"public")));


const port=5000;

app.get("/",(req,res)=>{
    res.render("home");
})


app.listen(port,()=>{console.log("listening to the port")
});