$(document).ready(function() {
  // switching save to file off on
  $(".switchdb").click(function() {
    console.log("Ajax fired");
    $.ajax({
      type: "POST",
      url: "http://localhost:1337/user/switchDb",
      success: function(data) {
        $(".text").text("done");
      },
      dataType: "jsonp"
    });
  });
  // switching save to file off on
  $(".switchFile").click(function() {
    console.log("Ajax fired");
    $.ajax({
      type: "GET",
      url: "http://localhost:1337/user/switchFile",
      success: function(data) {
        $(".text").text("done");
      },
      dataType: "jsonp"
    });
  });
  // pagination
  $(document).ready(function() {
    $("#myTable").DataTable({
      order: [[2, "desc"]]
    });
  });
});
