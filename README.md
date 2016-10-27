# D3
D3 graphs using JavaScript!!!

----> Plotting graphs using D3 and JavaScript.
----> Graphs plotted on data from Production Department Of Agriculture and Cooperation with a raw .CSV file.
----> Part 1: Data Munging
The goal of this part is to transform the the data from the raw csv file to a json file with a schema suitable to plot in phase 2.
Steps:
Download the csv version of the data which can be found at https://data.gov.in/catalog/agriculture-production-stock-yield
Write a nodejs program that converts the csv file to json input file for d3.js

Part 2: Plottng
Writing a D3.js web page, which …
loads json produced in Part 1
Plotting  the graph for:-
1. For the year 2013, plotting the all oilseed crop type vs .production, in descending order.
2. For the year 2013, plotting the all the Foodgrains type vs. production, in descending order.
3. Aggregate all commercial crops and plotting the aggregated value vs. year. Note: assume a value of 0 for “NA”.
4. Plotting a stacked chart of rice production in the 4 southern states. Note. In this time period the data is for undivided Andhra Pradesh.
