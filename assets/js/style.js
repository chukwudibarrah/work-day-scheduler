var currentDay = $("#currentDay");
var dayBlock = $("#dayBlock");

// set current day
currentDay = moment().format("dddd, MMMM Do");
// console.log(currentDay);
$("#currentDay").text(currentDay);

// get current hour
currentHour = moment().format('HH');
  console.log(currentHour);

var hoursArray = []; //array to store hours of day
var theHours = [];

function getHours () {
    new Array(24).fill().forEach((acc, index) => {
    //   hoursArray.push(moment( {hour: index} ).format('hA'));
      hoursArray.push(moment({ hour: index, minute: 30 }).format('hA'));
      theHours.push(moment({ hour: index, minute: 30 }).format('HH'));
    })
    return hoursArray;
    return theHours;
  }
  getHours();
//   console.log(getHours());

//   var timeBlocks = $('<li>');

var index;
var timeBlocks;

//   for (i = 0; i < hoursArray.length; i++) {
    $.each(hoursArray, function(index, value) {
    // timeBlocks.addClass('time-block', 'row', 'hour').text(hoursArray[i]);
    // console.log('hours array: ', hoursArray[i]);

    var timeBlocks = dayBlock.append('<li class="time-block row hour">' + value + '<button class="btn saveBtn"></button>' + '</li>');

    if (currentHour === index) {
        $('li').addClass('present');
      } else if (currentHour > index) {
        $('li').addClass('past');
      } else {
        $('li').addClass('future');
      }

  })

//   for (i = 0; i < theHours.length; i++ ) {
    if (currentHour == index-1) {
      timeBlocks.addClass('present');
    } else if (currentHour > index-1) {
      timeBlocks.addClass('past');
    } else {
      timeBlocks.addClass('future');
    }
//   }