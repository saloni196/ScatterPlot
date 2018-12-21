

var myreadcsv=function(fname){
	let csvToJson = require('convert-csv-to-json');
	let json = csvToJson.fieldDelimiter(',').getJsonFromCsv(fname);
	return json

};
exports.myreadcsv=myreadcsv;


var details=function(emp,dept,pos,dept_pos,dept_pos_sal,emp_dept_pos){


	var detail=[];

	for(var i=0; i<emp.length; i++)
	{

		var t_dept_pos_id=0;
		var t_dept_pos_id=0;
		var t_dept_name="";
		var t_sal=0;
		var flag=false;
		
		for(var j=0; j<emp_dept_pos.length; j++)
		{
			if(emp[i].emp_id==emp_dept_pos[j].emp_id)
			{
				t_dept_pos_id=emp_dept_pos[j].dept_pos_id;
				flag=true;
				break;
			}			
		}
	
		if(flag==true)
		{

			flag=false;
			for(var j=0; j<dept_pos.length; j++)
			{
				if(t_dept_pos_id==dept_pos[j].dept_pos_id)
				{
					flag=true;
					t_dept_id=dept_pos[j].dept_id;
					break;
				}
			}
		}
		if(flag==true)
		{
			flag=false;
			for(var j=0; j<dept.length; j++)
			{
				if(t_dept_id==dept[j].dept_id)
				{
					flag=true;
					t_dept_name=dept[j].dept_name;
					break;
				}
			}
		}
		
		if(flag==true)
		{
			flag=false;
			for(var j=0; j<dept_pos_sal.length; j++)
			{
				if(t_dept_pos_id==dept_pos_sal[j].dept_pos_id)
				{
					flag=true;
					t_sal=dept_pos_sal[j].salary;
					break;
				}
			}
		}
				
		var t_emp={};
		t_emp.emp_id=emp[i].emp_id;
		t_emp.emp_name=emp[i].emp_name;
		t_emp.emp_ht=emp[i].emp_height;
		t_emp.dept_id=t_dept_id;
		t_emp.dept_name=t_dept_name;
		t_emp.emp_sal=t_sal;
		
		detail.push(t_emp);
		
	}

	return detail

};
exports.details=details;





var mygetheight=function(app,fname){

	const csv=require('csvtojson');
	app.get('/', function(req,res)
	{

		var val=0;
		csv()
	
		.fromFile(fname)

		.then((jsonObj)=>{
			console.log(jsonObj);
		})
		
	});

};
exports.mygetheight=mygetheight;
