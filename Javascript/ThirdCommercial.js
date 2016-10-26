const readline = require('readline');
const fs = require('fs');
var year = [];
var aggregated_value = [];
var jsonData = [];
var tempData = {};

for(let i = 0;i <= 21;i++){
   aggregated_value[i] = 0;
}


const rl = readline.createInterface({

   input: fs.createReadStream('Production-Department_of_Agriculture_and_Cooperation_1.csv')

});



rl.on('line',function(line){

   var lineRecords = line.trim().split(',');

   if(/Agricultural Production Commercial \D/.test(lineRecords[0])){

       var temp_year = 1993;

       for(var i = temp_year;i <= 2014;i++){

           if(!year[i - temp_year]){
               year[i - temp_year] = i;
           }

           if(lineRecords[i - temp_year +4] === "NA"){
               aggregated_value[i - temp_year] = aggregated_value[i - temp_year] + 0;
           }
           else{
               aggregated_value[i - temp_year] = aggregated_value[i - temp_year] + parseFloat(lineRecords[i - temp_year + 4]);
           }

       }

   }
   
});


rl.on('close',function()
{

   for (let n = 0; n < aggregated_value.length ; n++){

       tempData = {};
       tempData["Year"] = year[n];
       tempData["Aggregated value of all Commercial crops (Ton mn)"] = aggregated_value[n];
   
       jsonData.push(tempData);
   
   }
   
   fs.writeFileSync("../JSON/question_3.json",JSON.stringify(jsonData),encoding="utf8");

});