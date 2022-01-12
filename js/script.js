var ZonedDateTime = document.querySelector('.zoned')
var DateTimeFormatter = document.querySelector('.format')

var today = moment();



$("#currentDay").text(today.format("dddd, MMMM do"));

var tasks = {
    "16": [], "17": [], "18": [], "19": [], "20": [], "21": [], "22": [], "23": [], "24": [], "25": [] };


var list = JSON.parse(localStorage.getItem('todolist')) || [];

let ZonedDateTime = ZonedDateTime.now();
System.out.println("Current Date and Time: " + now);
let DateTimeFormatter = DateTimeFormatter.ofPattern("EEEE, MMMM dd, yyyy HH:mm:ss Z");
System.out.println("Current Formatted Date and Time: " + now.format(formatter));