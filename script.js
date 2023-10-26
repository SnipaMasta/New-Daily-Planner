// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //gets the current date and time
  setInterval(function () {
    let date = dayjs();
    $('#date').text(date.format('MM/DD/YY'))
    let currentTime = dayjs();
    $('#time').text(currentTime.format('hh: mm: ss'))
  }, 1000);

});

//variable for the current hour, which is used to change the color of the blocks with appropriate if statements


// if (hourX < 9) {
//   $('#hour-9').addClass('neither')
// }
// if (hourX < 10) {
//   $('#hour-10').addClass('neither')
// }
// if (hourX < 11) {
//   $('#hour-11').addClass('neither')
// }
// if (hourX < 12) {
//   $('#hour-12').addClass('neither')
// }
// if (hourX < 13) {
//   $('#hour-13').addClass('neither')
// }
// if (hourX < 14) {
//   $('#hour-14').addClass('neither')
// }
// if (hourX < 15) {
//   $('#hour-15').addClass('neither')
// }
// if (hourX < 16) {
//   $('#hour-16').addClass('neither')
// }
// if (hourX < 17) {
//   $('#hour-17').addClass('neither')
// }

var hourX = dayjs().format('H');

if (hourX > 9) {
  $('#hour-9').addClass('past')
} else if (hourX == 9) {
  $('#hour-9').addClass('present')
} else {
  $('#hour-9').addClass('future')
}

if (hourX > 10) {
  $('#hour-10').addClass('past')
} else if (hourX == 10) {
  $('#hour-10').addClass('present')
} else {
  $('#hour-10').addClass('future')
}

if (hourX > 11) {
  $('#hour-11').addClass('past')
} else if (hourX == 11) {
  $('#hour-11').addClass('present')
} else {
  $('#hour-11').addClass('future')
  console.log("not 11 yet");
}

if (hourX > 12) {
  $('#hour-12').addClass('past')
} else if (hourX == 12) {
  $('#hour-12').addClass('present')
} else {
  $('#hour-12').addClass('future')
}

if (hourX > 13) {
  $('#hour-13').addClass('past')
  console.log("past 1");
} else if (hourX == 13) {
  $('#hour-13').addClass('present')
  console.log("its 1");
} else {
  $('#hour-13').addClass('future')
  console.log("not 1 yet");

}

if (hourX > 14) {
  $('#hour-14').addClass('past')
} else if (hourX == 14) {
  $('#hour-14').addClass('present')
} else {
  $('#hour-14').addClass('future')
}

if (hourX > 15) {
  $('#hour-15').addClass('past')
} else if (hourX == 15) {
  $('#hour-15').addClass('present')
} else {
  $('#hour-15').addClass('future')
}

if (hourX > 16) {
  $('#hour-16').addClass('past')
} else if (hourX == 16) {
  $('#hour-16').addClass('present')
  console.log("its 4");
} else {
  $('#hour-16').addClass('future')
}

if (hourX > 17) {
  $('#hour-17').addClass('past')
} else if (hourX == 17) {
  $('#hour-17').addClass('present')
} else {
  $('#hour-17').addClass('future')
}

//local storage stuff, 7 lines of code for each hour block
//hour 9
var hourNineEvents = document.getElementById('hourNineEvent');
document.getElementById('hourNineBtn').addEventListener('click', function () {
  window.localStorage.setItem('9', hourNineEvents.value)
});
var storedEvent = localStorage.getItem('9');
var eventInput = document.getElementById('hourNineEvent');
eventInput.value = storedEvent;
//hour 10
var hourTenEvents = document.getElementById('hourTenEvent');
document.getElementById('hourTenBtn').addEventListener('click', function () {
  window.localStorage.setItem('10', hourTenEvents.value)
});
var storedEvent = localStorage.getItem('10');
var eventInput = document.getElementById('hourTenEvent');
eventInput.value = storedEvent;
//hour 11
var hourElevenEvents = document.getElementById('hourElevenEvent');
document.getElementById('hourElevenBtn').addEventListener('click', function () {
  window.localStorage.setItem('11', hourElevenEvents.value)
});
var storedEvent = localStorage.getItem('11');
var eventInput = document.getElementById('hourElevenEvent');
eventInput.value = storedEvent;
//hour 12
var hourTwelveEvents = document.getElementById('hourTwelveEvent');
document.getElementById('hourTwelveBtn').addEventListener('click', function () {
  window.localStorage.setItem('12', hourTwelveEvents.value)
});
var storedEvent = localStorage.getItem('12');
var eventInput = document.getElementById('hourTwelveEvent');
eventInput.value = storedEvent;
//hour 13
var hourOneEvents = document.getElementById('hourOneEvent');
document.getElementById('hourOneBtn').addEventListener('click', function () {
  window.localStorage.setItem('13', hourOneEvents.value)
});
var storedEvent = localStorage.getItem('13');
var eventInput = document.getElementById('hourOneEvent');
eventInput.value = storedEvent;
//hour 14
var hourTwoEvents = document.getElementById('hourTwoEvent');
document.getElementById('hourTwoBtn').addEventListener('click', function () {
  window.localStorage.setItem('14', hourTwoEvents.value)
});
var storedEvent = localStorage.getItem('14');
var eventInput = document.getElementById('hourTwoEvent');
eventInput.value = storedEvent;
//hour 15
var hourThreeEvents = document.getElementById('hourThreeEvent');
document.getElementById('hourThreeBtn').addEventListener('click', function () {
  window.localStorage.setItem('15', hourThreeEvents.value)
});
var storedEvent = localStorage.getItem('15');
var eventInput = document.getElementById('hourThreeEvent');
eventInput.value = storedEvent;
//hour 16
var hourFourEvents = document.getElementById('hourFourEvent');
document.getElementById('hourFourBtn').addEventListener('click', function () {
  window.localStorage.setItem('16', hourFourEvents.value)
});
var storedEvent = localStorage.getItem('16');
var eventInput = document.getElementById('hourFourEvent');
eventInput.value = storedEvent;
//hour 17
var hourFiveEvents = document.getElementById('hourFiveEvent');
document.getElementById('hourFiveBtn').addEventListener('click', function () {
  window.localStorage.setItem('17', hourFiveEvents.value)
});
var storedEvent = localStorage.getItem('17');
var eventInput = document.getElementById('hourFiveEvent');
eventInput.value = storedEvent;

//clear btn
document.getElementById("clearBtn").addEventListener("click", clearPage)

function clearPage() {
  localStorage.clear();
  location.reload();
}

