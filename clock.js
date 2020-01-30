var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://source.unsplash.com/user/brookecagle/1600x900";

  var timeEventJS = document.getElementById('timeEvent');
  var IssaImageJS = document.getElementById('IssaImage');
  
  if (time == partytime)
  {
    image = "https://source.unsplash.com/user/dinoreichmuth/1600x900";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://source.unsplash.com/user/jonathanroger/1600x900";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://source.unsplash.com/user/impatrickt/1600x900";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://source.unsplash.com/user/nasa/1600x900";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://source.unsplash.com/user/stairhopper/1600x900";
    messageText = "good morning";
  }
  else if (time >= evening)
  {
    image = "https://source.unsplash.com/user/nathananderson/1600x900";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://source.unsplash.com/user/anniespratt/1600x900";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  IssaImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 

