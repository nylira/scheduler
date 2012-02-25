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
