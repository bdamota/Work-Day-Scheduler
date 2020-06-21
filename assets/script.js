var time = moment();

// Function to set and enter text into the grid:
function setPlanner() {
    // Date function from moment.js:
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


    // To retrieve the schedule-field text from localStorage:
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}
setPlanner();



  