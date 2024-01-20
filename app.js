const express=require("express")
const app=express();
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
// app.get("/",function(req,res){
//     res.send("<h1>hello world</h1>")
// })

app.get("/",function(req,res){
    res.sendFile(__dirname+ "/index.html")
})

app.get("/bmical",function(req,res){
    res.sendFile(__dirname+"/bmicalculator.html")
})

app.post("/", function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("<h2>The result of the calculation is <h2>"+result);
});

app.post("/bmical",function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var result=height+weight;
    res.send("your BMI is "+result);
});


app.listen(3000,function(){
    console.log("Server is up running on port 3000")
});