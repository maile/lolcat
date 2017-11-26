script.js
var wakeupTime = 8;
var noon = 12;
var lunchTime = noon + 1;
var napTime = 14;
var evening = dinner - 1;
var dinner = 17;
var partyTime = 21;

var updateClock = function();
{ 
  var time = new Date().getHours();
  var lolcat = document.getElementById('lolcat');
  var message = document.getElementById('timeEvent');
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
  
if (time == wakeupTime) 
{
  messageText = "Wake up now!";
}
else if (time < noon)
{
  messageText = "Gud morn!";
} 
else if (time == lunchTime)
{
  messageText = "Time to eat.";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
}
else if (time == napTime)
{
  messageText = "Sleep na.";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
}
else if (time > evening)
{
  messageText = "Good evening!";
} 
else if (time = dinner)
{
  messageText = "Dinner's ready!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
}
else if (time > partyTime)
{
  messageText = "Let's party!"
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
}
else {
  messageText = "Good afternoon!";
}

message.innerText = messageText;
lolcat.src = image;
  
showCurrentTime();

};

var showCurrentTime = function() {
     // display the string on the webpage
     var clock = document.getElementById('clock');
     
     var currentTime = new Date();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     var meridian = "AM";

     // Set Hours
     if (hours >= noon){
          meridian = "PM";
     }

     if (hours > noon){
          hours = hours - 12;
     }

     // Set Minutes
     if (minutes < 10){
          minutes = "0" + minutes;
     }

     // Set Seconds
     if (seconds < 10){
          seconds = "0" + seconds;
     }

     // put together the string that displays the time
     var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

     clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);
 
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {
 
   if (isPartyTime == false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};

partyTimeButton.addEventListener('click', partyEvent);

console.log()
