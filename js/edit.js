function edit_row(no){
	document.getElementById("edit"+no).style.color="red";
	document.getElementById("save_button"+no).style.display="flex";
	document.getElementById("exit_button"+no).style.display="flex";

	var name=document.getElementById("name"+no);
	var lastname=document.getElementById("lastname"+no);
	var balance=document.getElementById("balance"+no);

	var name_data=name.innerHTML;
	var lastname_data=lastname.innerHTML;
	var balance_data=balance.innerHTML;

	name.innerHTML="<input type='text' style=' width:100%; height:100%' id='name_text"+no+"' value='"+name_data+"'>";
	lastname.innerHTML="<input type='text' style=' width:100%; height:100%' id='lastname_text"+no+"' value='"+lastname_data+"'>"
	balance.innerHTML="<input type='text' style=' width:100%; height:100%' id='balance_text"+no+"' value='"+balance_data+"'>"
	}
function save_row(no){
	var name_val=document.getElementById("name_text"+no).value;
	var lastname_val=document.getElementById("lastname_text"+no).value;
	var balance_val = document.getElementById("balance_text"+no).value;

	document.getElementById("name"+no).innerHTML=name_val;
	document.getElementById("lastname"+no).innerHTML=lastname_val;
	document.getElementById("balance"+no).innerHTML=balance_val;

	document.getElementById("edit"+no).style.color="block";
	document.getElementById("save_button"+no).style.display="none";
	document.getElementById("exit_button"+no).style.display="none";
}