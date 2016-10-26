const readline = require('readline');
const fs = require('fs');
var header =[];
var jsonData=[];
var tempData={};
var isHeader=true;
var flag=false;

const rl = readline.createInterface({
	input: fs.createReadStream('Production-Department_of_Agriculture_and_Cooperation_1.csv')
});


rl.on('line', function(line) {
	
	var lineRecords= line.split(',');
	var dataflag =false;
	for(var i=0;i<lineRecords.length;i++)
	{
		 if(isHeader)
	       { 
		header[i]=lineRecords[i].trim();
	
		
		
		 }
	else if((header[i]=="Particulars")|| (header[i]=="3-2013"))
	{
	


			if(lineRecords[0].includes("Oilseeds"))
			{
				if(i==0){
			tempData[header[i]]=lineRecords[i];
		}
		
			else{
			tempData[header[i]]=parseFloat(lineRecords[i+1].replace("NA",0));
			
		}		
		//console.log(tempData.length);
		
			//console.log(tempData[header[i]]);
				dataflag=true;
			}
		
		//tempData[header[i]]=tempData[header[i]].replace("!",",").replace(/["]/g,"");
		
		
			}         
	}
 

	if(dataflag)
	{
		jsonData.push(tempData);
	}
	isHeader=false;	

	fs.writeFileSync("../JSON/oilseedOne.json",JSON.stringify(jsonData),encoding="utf8");

	tempData={};
	
});