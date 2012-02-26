var current_date = new Date();

$(".datetime").AnyTime_picker({
  format: "%M %e at %l:%i %p",
  earliest: new Date(),
  latest: new Date(new Date().setMonth(current_date.getMonth()+1))
});

$("#phases").cycle({
  timeout: 0,
  next: ".btn-bgcheck"
});


$("#credit-score").keypress(function () {
  if ($("#credit-score").val().length > 0) {
    $("#schedule-interview").removeClass("disabled").addClass("btn-primary")
  }
});
