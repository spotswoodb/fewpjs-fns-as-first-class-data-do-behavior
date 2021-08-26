/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(timeStr){
  let nowTime = timeStr.split(':');
  let nowHour = parseInt(nowTime[0]);

  // what dont I understand about this^ nothing. Idk why I was trying to call a method on now Time.
  // I'm using that in the argument of parseInt
  if (nowHour < 12){
    return "Good Morning";
  }

  else if (nowHour > 17){
    return "Good Evening";
  }

  return "Good Afternoon";
}

function displayMessage(msg){
  document.getElementById('greeting').innerText = msg;
}


/* Write your implementation of displayMessage() */
