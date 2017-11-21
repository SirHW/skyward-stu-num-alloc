var date = new Date();
var year = date.getFullYear(); //What year is it currently?
var month = date.getMonth() + 1; //Find current month (adds 1 because JS ranges months 0-11)

//If it is after June, we have no need for the current year as a grad year
if (month < 6) {
	month = month -1;
	}

//Blank Array
var schoolYears=[]
i = 0

//Adds years to the array for 12-PreK
while (i < 15) {
	year = year + 1;
	schoolYears.push(year);
	i++;
	}
	
//Loops to insert buttons with each year	
function insertButtons() {
	console.log(schoolYears);
	var buttonDiv = document.getElementById('buttonArea'); //Locate area where buttons go
	for (var x = 0; x < schoolYears.length; x++) { //Loop through array
		var btnID = schoolYears[x]; //Give button the ID of the grad year
		var btn = document.createElement("BUTTON"); //Element will be a button
		var text = document.createTextNode(schoolYears[x]); //Add test to button to show the year
		btn.appendChild(text); //Add text to button
		btn.setAttribute("id", btnID); //Add ID to button
		btn.setAttribute("class", "gradYearButton"); //Add class to button
		//btn.setAttribute("onClick", "newNumber(this.id)"); //Add JS listener to button
		buttonDiv.appendChild(btn); //Add button to page
		}
	
}

//Function to find a new student ID number
function newNumber(clicked_id) {
	var resultDiv = document.getElementById('resultArea'); //Find location to output result; it would be cool to have this put it in a Skyward form eventually
	resultDiv.innerHTML = ""; //Resets resultArea div so that if you click multiple times, it will only show one number
	console.log(clicked_id);
	var result = clicked_id.slice(2,4); //Only show last 2 digits of the year
	console.log(result);
	var rand = Math.floor(Math.random() * 1001);		//Will need to remove random logic and connect to Skyward API to get numbers
	console.log(rand);
	result = 1 + result + rand; //Uses random string plus the grad year selected to make a number
	resultDiv.innerHTML = result; //Puts number on page
}

document.getElementById('body').onload = insertButtons(); //Load buttons on page load
document.getElementByClassName('gradYearButton').onclick = newNumber(this.id);
