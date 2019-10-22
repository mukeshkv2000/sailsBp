$(document).ready(function() {
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
});
