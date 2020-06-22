// Set data attributes to each hour input element so that the function below can assign a color to each row based on the current hour
$("#hour-9").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#hour-10").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
$("#hour-11").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
$("#hour-12").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
$("#hour-13").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#hour-14").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#hour-15").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#hour-16").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#hour-17").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

var time = moment();

// Function to set and enter text into the grid:
function setPlanner() {
    // Date function from moment.js:
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // To retrieve the schedule-field text from localStorage:
        $(".time-block").each(function () {
            var id = $(this).attr("id");
            var schedule = JSON.parse(localStorage.getItem("schedule"));
    
            if (schedule !== null) {
                $(this).children(".description").val(schedule);
            }
            else {
                schedule = {};
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
        var thisHour = parseInt($(this).attr("data-time"));

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

