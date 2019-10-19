$(document).ready(function() {
  $(".switchdb").click(function() {
    console.log("Ajax fired");
    $.ajax({
      type: "POST",
      url: "http://localhost:3211/user/switchDb",
      success: function(data) {
        $(".text").text("done");
      },
      dataType: "jsonp"
    });
  });
});
