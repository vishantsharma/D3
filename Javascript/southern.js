const readline = require('readline');
const fs = require('fs');
var header =[];
var jsonData=[];
var tempData={};
var isHeader=true;


const rl = readline.createInterface({
	input: fs.createReadStream('Production-Department_of_Agriculture_and_Cooperation_1.csv')
});


rl.on('line', function(line) {
	//console.log(lineRecords.length);
	var lineRecords= line.split(',');
	var dataflag =false;
	for(var i=0;i<lineRecords.length;i++)
	{
		if(isHeader)
		{ 
			header[i]=lineRecords[i].trim();
		
		
		
	}
	else if((header[i]=="Particulars")|| (/3-/i.test(header[i])))
	{



		if(lineRecords[0].includes("Rice Yield Karnataka") || lineRecords[0].includes("Rice Yield Andhra Pradesh") || lineRecords[0].includes("Rice Yield Kerala") || lineRecords[0].includes("Rice Yield Tamil Nadu") )
		{
			if(i==0){
				tempData[header[i]]=lineRecords[i];
			// console.log(tempData);
		}
		// var sum=0;
		for(i=3;i<25;i++)
		{

			tempData[header[i]]=parseFloat(lineRecords[i+1].replace("NA",0));
			// sum += parseFloat(lineRecords[i]);
			// console.log(sum);

			

		}	
		
		// tempData["year"]=sum;
			// console.log(tempData);	
			

			//console.log(tempData[header[i]]);
			dataflag=true;
		}
		
		
		
		
	}         
}



if(dataflag)
{
	jsonData.push(tempData);
}
isHeader=false;	

fs.writeFileSync("../JSON/southernFourth.json",JSON.stringify(jsonData),encoding="utf8");

tempData={};

});