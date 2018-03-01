function validate(){
	var con = 0;
	var thanks=0;
	
	var f = document.getElementById("first").value;
	var l = document.getElementById("last").value;
	var e = document.getElementById("email").value;
	var c = document.getElementById("confirm").value;
	var email=0;
	if( f == ""){
		document.getElementById("fe").innerHTML = "PLEASE ENTER FIRST NAME.";
		con=1;
	}
	else {
		document.getElementById("fe").innerHTML = "";
	}
	if( l == ""){
		document.getElementById('le').innerHTML = "PLEASE ENTER LAST NAME.";
		con=1;
	}
	else {
		document.getElementById("le").innerHTML = "";
	}
	if( e == ""){
		document.getElementById('ee').innerHTML = "PLEASE ENTER EMAIL ADDRESS.";
		con=1;
	}
	else {
		document.getElementById("ee").innerHTML = "";
	}
	
	if( c == ""){
		document.getElementById('ce').innerHTML = "PLEASE CONFIRM EMAIL ADDRESS.";
		con=1;
	}
	else {
		document.getElementById("ce").innerHTML = "";
		email=1;
	}
	if ( e!=c && email==1){
		document.getElementById('nm').innerHTML = "YOUR EMAIL ADDRESSES DON'T MATCH.";
		con=1;
	}

	if(con==0){
	thanks=confirm("First Name : " +f+"\nLast Name : "+l+"\nEmail Address : "+e+"\n\nIs this all correct?");
	}
	
	if(thanks==true){
		window.location.href = "thanks.html";
	}
	
}//kick bricks