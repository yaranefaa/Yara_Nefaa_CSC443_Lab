let express= require('express');
let app= express();
let bodyParser = require('body-parser');
let fs= require("fs");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "content-type");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     
        extended: true
      })); 

app.use(express.static('public'));

app.post("/",function(req,res){
    let name= req.body.name;
    let desc= req.body.description;
    let url= req.body.url;
    let gender=req.body.gender;
    let birthday=req.body.birthday;
    let color=req.body.color;
    let flag=false;
    fs.readFile("./public/data.txt","utf-8",function(err,data){
        let lines= data.split(" ");
        console.log("reading file...");
        console.log("all data "+data);
        
        lines.forEach((val)=>{
            
            console.log("data "+val);
            console.log("name "+name)
            if(val==name)
            {
                flag=true;
                console.log("already added.")
                res.end(`Already added :${name}`);
                return;
            }
        })
    
        
        if(flag==false){
            let htmlString=`<html><body><h1>${name}</h1><p>${desc}</p><img src="${url}"><p>${gender}</p><p>${birthday}</p><p>${color}</p></body></html>`;
            fs.writeFile(`./public/${name}.html`,htmlString,function(){});
        
            fs.appendFile(`./public/data.txt`,`${name} `,function(){});
            res.end(htmlString);   
        }
        
    
      
})

      
})

/*app.get("/",function(req,res){
    let owner= req.query.owner;
    let htmlString="<html><body><table>";
    
    fs.readFile("./public/data.txt","utf-8",function(err,data){
        let lines= data.split("\n");
        lines.pop();
        
        lines.forEach((val)=>{
            
            let lineSplit= val.split(", ");
            if(lineSplit[2].includes(owner))
            {
                htmlString+=`<tr><td>${lineSplit[0]}</td><td>${lineSplit[1]}</td></tr>`;
            }
        })
        htmlString+="</table></body></html>";
        fs.writeFile(`./public/${owner}.html`,htmlString,function(){});
        res.write(htmlString);
        res.end();
    })
    
      
})

app.get("/getcars",function(req,res){
    
    fs.readFile("./public/data.txt","utf-8",function(err,data){
        let lines= data.split("\n");
        lines.pop();
        let retArray=[];
        lines.forEach((val)=>{
            
            let lineSplit= val.split(", ");
            retArray.push({model:lineSplit[0],
                            plateNb:lineSplit[1],
                            owner:lineSplit[2]});
        })
        
        res.write(JSON.stringify(retArray));
        res.end();
    })
    
      
})

*/
let server = app.listen(8081, function () {
    let host = server.address().address
    let port = server.address().port
    console.log(host + ": "+port);
 })

 