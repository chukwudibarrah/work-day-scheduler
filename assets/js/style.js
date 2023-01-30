jQuery(document).ready(function(){

var currentDay = $("#currentDay");
var dayBlock = $("#dayBlock");

// set current day
currentDay = moment().format("dddd, MMMM Do");
// console.log(currentDay);
$("#currentDay").text(currentDay);

// get past, present and future hours
currentHour = parseFloat(moment().format("HH"));

var hoursArray = []; //array to store hours of day
// var theHours = [];

function getHours() {
  new Array(24).fill().forEach((acc, index) => {
    //   hoursArray.push(moment( {hour: index} ).format('hA'));
    hoursArray.push(moment({ hour: index, minute: 30 }).format("hA"));
  });
  return hoursArray;
}
getHours();

$.each(hoursArray, function (index, value) {
  var timeRow = $("<li>");
  timeRow.addClass("time-block row hour");
  timeRow.attr("data-number", index);
  timeRow.text(value);
  dayBlock.append(timeRow);

  var eachHour = parseFloat(index);

  var saveBtn = $("<button>");
  $("button").addClass("saveBtn");
  timeRow.append(saveBtn);

  if (eachHour === currentHour) {
    timeRow.addClass("present");
  } else if (eachHour < currentHour) {
    timeRow.addClass("future");
  } else {
    timeRow.addClass("past");
  }

  var textArea = $('<textarea>');
  textArea.addClass("description");
  timeRow.append(textArea);
});




});