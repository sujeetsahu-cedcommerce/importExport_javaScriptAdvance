var emp= [];

 function empDetails(){
    let emp_ID = document.getElementById("empID").value;
    let emp_Name = document.getElementById("empName").value;
    let emp_Sal = document.getElementById("empSalary").value;
    if(emp_Sal<=0){
        debugfunction();
    }
    else{
    check(emp_ID,emp_Name,emp_Sal);
    }
}

function render()
{
    let text ="<table><tr><th>ID</th><th>Name</th><th>Total Salary</th><th>Action</th></tr>";
    for(var i=0;i<emp.length;i++)
    {
        text += "<tr id = '"+ i +"'>";
        for(let j=0;j<=2;j++){
            text +="<td>" + emp[i][j] + "</td>";
        }
        text +="<td><button id='Action' onclick=Delete_Emp(this)>Delete</button></td>";
        text +="</tr>";
    }
    text +="</table>";
    document.getElementById("display").innerHTML=text;
    return text;
}

function Delete_Emp(obj){
    var deltd =obj.closest('td');
    var deltd_par = deltd.parentElement;
    var index = deltd_par.id;
    console.log(index);
    emp.splice(index,1);
    console.log(emp);
    document.getElementById("display").innerHTML=render();
    // document.getElementById("display").innerHTML=renderEmpArrow;
}

function check(emp_ID,emp_Name,emp_Sal){
    try{
        if(emp_Sal <10000 || emp_Sal>40000) throw "salary must greater than 10000 and smaller than 40000";
        //emp_Sal=emp_Sal*1.10;
        const temp =[emp_ID,emp_Name,emp_Sal];
        len=emp.length;
        emp[len]=temp;
        render();
     }
     catch(error){
        console.warn(error);
        document.getElementById("displayErr").innerHtml=error;
     } 
}

function debugfunction(){
    alert("salary never be less than or equal to zero");
    console.warn("salary never be zero");
    debugger;
}

import {id,name,salary} from "./import_export.js";
        let text = id+" "+" "+name+" "+" "+salary;
        console.log(text);
        document.getElementById("displayImport").innerHTML=text; 
