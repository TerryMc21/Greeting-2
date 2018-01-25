var today = new Date();
var hourNow = today.getDay();
var weekDay;

if (day == 3){
	weekDay = "Wednesday";
}

if (hourNow > 18){
	greeting = 'Good evening, its ' + weekDay;
} else if (hourNow >12) {
	greeting = 'Good afternoon Eamon Happy! ' + weekDay;
} else if (hourNow>0) {
	greeting = 'Good morning Eamon! Happy + weekDay ';
} else {
	greeting= 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');