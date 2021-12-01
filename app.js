const express = require("express");
const app = express();
const port= process.env.PORT || 3000;
const path = require("path");
app.use(express.static("public"));

app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.listen(port, ()=>{
    console.log(`listening to port at ${port}`);
});
/*app.post("/",function(req,res){
  const cname=req.body.cname;
  const scode=req.body.scode;
  const ccode=req.body.ccode;
  const url="https://api.openweathermap.org/data/2.5/weather?q="+cname+","+scode+","+ccode+"&appid=5d0d9b4988db271e63045ee6c48097cf";

  https.get(url,function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
      const weatherData=JSON.parse(data)
      const icon=weatherData.weather[0].icon;
      const imgu= "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      const temp=weatherData.main.temp;
      const desc=weatherData.weather[0].description;
      res.write(weatherData);
      res.write("<h1>today's temp is "+temp+" </h1>");
      res.write("<h1>and there is "+desc+"</h1>");
      res.write("<img src=" + imgu +">");
      res.send()
    })
  })
});*/
// key
//5d0d9b4988db271e63045ee6c48097cf
// jshint esversion:6
