let cat1;
let cat2;
$.ajax({
    url:"https://opentdb.com/api_category.php",
   // dataType:"json",
    success:function(obj){
        const categories = obj;
        
        cat1=categories.trivia_categories[0];
        cat2=categories.trivia_categories[1];
        
        categories.trivia_categories.forEach((val)=>{
            console.log(val);
        })
        let table=document.createElement("table");
let td=document.createElement("td");
let td1=document.createElement("td");
td.innerHTML=cat1.name;
td1.innerHTML=cat2.name;
document.body.append(table);
table.appendChild(td);
table.appendChild(td1);
    }
    

      
    })
