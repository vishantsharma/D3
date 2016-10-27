const readline = require('readline');
const fs = require('fs');
var header =[];
var jsonData=[];
var tempData={};
var isHeader=true;

 /*Reading the .CSV file line by line */
const rl = readline.createInterface({
	input: fs.createReadStream('./CSV/Production-Department_of_Agriculture_and_Cooperation_1.csv')
});

 /*Callback Function for fetching the data*/
rl.on('line', function(line) {
	
	var lineRecords= line.split(',');
	var dataflag =false;
	/*Getting all the headers from the .CSV file*/
	for(var i=0;i<lineRecords.length;i++)
	{
		if(isHeader)
		{ 
			header[i]=lineRecords[i].trim();
		}
		/*Getting data for required fields*/
		else if((header[i]=="Particulars")|| (header[i]=="3-2013"))
		{
			if(lineRecords[0].includes("Foodgrains"))
			{
				if(i==0)
				{
					tempData[header[i]]=lineRecords[i];
				}

				/*Getting data for the year 2013*/
					else
					{
						tempData[header[i]]=parseFloat(lineRecords[i+1].replace("NA",0));}		
						dataflag=true;
					}		
			}         
		}
			/*Pushing the data and creating the JSON file*/
  		if(dataflag)
			{
				jsonData.push(tempData);
			}
			isHeader=false;
			fs.writeFileSync("../JSON/foodgrainsSecond.json",JSON.stringify(jsonData),encoding="utf8");
			tempData={};
});