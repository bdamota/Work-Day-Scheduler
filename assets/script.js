var time = moment();

// Function to set and enter text into the grid:
function setPlanner() {
    // Date function from moment.js:
    $("#currentDay").text(moment().format("dddd, MMMM Do"));


    // To retrieve the schedule-field text from localStorage:
    $(".form-group").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(schedule);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}
setPlanner();

// Saves to localStorage:
var saveBtn = $(".saveBtn");
    

saveBtn.on("click", function () {
    //var time = $(this).parent().attr("id");
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".description").val().trim()
    
    localStorage.setItem("time", JSON.stringify(time));
    localStorage.setItem("schedule", JSON.stringify(schedule));

    localStorage.getItem("time");
    localStorage.getItem("schedule");
});

// Function for changing from past to present to future on the grid:
function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("past");
            $(this).removeClass("future");
        }
    })
}

pastPresentFuture();

  