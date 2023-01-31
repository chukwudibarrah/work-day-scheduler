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
  $("button").addClass("saveBtn submit");
  timeRow.append(saveBtn);

  buttonIcon = ('<i class="fa-solid fa-floppy-disk fa-lg"></i>')
  saveBtn.append(buttonIcon);

  if (eachHour === currentHour) {
    timeRow.addClass("present");
  } else if (eachHour < currentHour) {
    timeRow.addClass("past");
  } else {
    timeRow.addClass("future");
  }

  var textArea = $('<textarea>');
  textArea.addClass("description");
  timeRow.append(textArea);
});


// $('saveBtn').on('click', function() {
//   saveSettings();
// loadSettings();
// });

// function loadSettings() {
//   $('textarea').val()(localStorage.textarea);
// }

// function saveSettings() {
  


//   localStorage.textarea = $('input[name="textarea"]').val();
// }



// function handleEntrySubmit() {
//   var userEntry = $('input[name="textarea"]').val();
//   if (!userEntry) {
//     alert("You cannot save a blank entry");
//   } else {
//     alert("Success", "Your entry was saved.");
//     return;
//   }
// }
// dayBlock.on('submit', handleEntrySubmit);


renderLastRegistered();

function renderLastRegistered() {
  var userEntry = localStorage.getItem("userEntry");

  if (!userEntry) {
    return;
  }

  textArea.text = userEntry;
}

$('saveBtn').on("click", function(event) {
  event.preventDefault();

  var userEntry = localStorage.theEntry;

  var theText = $('input[name="textarea"]').val();

  if (userEntry === "") {
    displayMessage("error", "Entry cannot be blank");
  } else {
    alert("Success", "Saved successfully");

    localStorage.setItem("userEntry", theText);
    renderLastRegistered();
  }
});


});