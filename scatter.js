

	
	// inclue 'http' module
	var http = require('http');
	
	//include 'json2csv' so that it converts json into csv with column titles and proper line endings
	var json2csv = require('json2csv').parse;

	//CORS-Cross Origin Resource Sharing
	//include 'cors' which provides a Connect/Express middleware
	var cors = require('cors');

	//express is a module that can be used to create more than one application
	var express = require('express');

	var app = express();
	
	// body parsing middleware
	const bodyParser = require("body-parser");
	
	var cors = require('cors');
	
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cors());
	

	var empcsv=require('./assEmp2.js');
	
	var dept=empcsv.myreadcsv('dept.csv');

	var pos=empcsv.myreadcsv('pos.csv');

	var emp=empcsv.myreadcsv('emp.csv');
	
	var dept_pos=empcsv.myreadcsv('dept_pos.csv');

	var emp_dept_pos=empcsv.myreadcsv('emp_dept_pos.csv');

	var dept_pos_sal=empcsv.myreadcsv('dept_pos_sal.csv');	
	
		
	var detail=[{
						
		}];
	
	detail[0].graph=empcsv.details(emp,dept,pos,dept_pos,dept_pos_sal,emp_dept_pos);

	detail[0].dept=dept;

	var myemp=require('./Employee.js');

	// Append new Employee Details to data.csv
	myemp.mypost(app);


	app.get('/', function(req,res)
	{
		let csvToJson = require('convert-csv-to-json');
		let json = csvToJson.fieldDelimiter(',').getJsonFromCsv('data.csv');
		
		detail[0].view=json;
		
    		res.send(JSON.stringify(detail));
	
		
		
	});


	var port = 5002;

	app.listen(port,  () => console.log('Server listening on port '+port));
