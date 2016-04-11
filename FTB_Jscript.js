function f_home(){
   
	document.getElementById("contact_us_ID").style.display="none";
	document.getElementById("restaurants_ID").style.display="none";
	document.getElementById("shopping_ID").style.display="none";
	document.getElementById("bars_ID").style.display="none";
	document.getElementById("home_ID").style.display="block";
	document.getElementById("eventsDiv").style.display="block";
	
    document.getElementById("events_ID").style.display="none";
	
}


function f_bars(){
	document.getElementById("contact_us_ID").style.display="none";
	document.getElementById("restaurants_ID").style.display="none";
	document.getElementById("shopping_ID").style.display="none";
	document.getElementById("bars_ID").style.display="block";
	document.getElementById("home_ID").style.display="none";
	document.getElementById("events_ID").style.display="none";
}

function f_shopping(){
	document.getElementById("contact_us_ID").style.display="none";
	document.getElementById("restaurants_ID").style.display="none";
	document.getElementById("shopping_ID").style.display="block";
	document.getElementById("bars_ID").style.display="none";
	document.getElementById("home_ID").style.display="none";
    document.getElementById("events_ID").style.display="none";
}

function f_restaurants(){
	document.getElementById("contact_us_ID").style.display="none";
	document.getElementById("restaurants_ID").style.display="block";
	document.getElementById("shopping_ID").style.display="none";
	document.getElementById("bars_ID").style.display="none";
	document.getElementById("home_ID").style.display="none";
	document.getElementById("events_ID").style.display="none";
}

function f_contact_us(){
	document.getElementById("contact_us_ID").style.display="block";
	document.getElementById("restaurants_ID").style.display="none";
	document.getElementById("shopping_ID").style.display="none";
	document.getElementById("bars_ID").style.display="none";
	document.getElementById("home_ID").style.display="none";	
	document.getElementById("events_ID").style.display="none";
}

function eventsClick(){
	document.getElementById("events").onclick = function () {
         document.getElementById("events_ID").style.display="block";
		 document.getElementById("contact_us_ID").style.display="none";
	document.getElementById("restaurants_ID").style.display="none";
	document.getElementById("shopping_ID").style.display="none";
	document.getElementById("bars_ID").style.display="none";
	document.getElementById("home_ID").style.display="none";	
	document.getElementById("eventsDiv").style.display="none";	
	
	
    };
}