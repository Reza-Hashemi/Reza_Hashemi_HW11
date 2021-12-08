$(document).ready(function () {
  let user = {};
  $("#btn").click(function (e) {
    e.preventDefault();

    let username = $("#username-input").val();
    let password = $("#passowrd-input").val();
    user["username"] = username;
    user["password"] = password;
    $.post(
      "http://localhost:2021/user",
      user,
      function (data, textStatus, jqXHR) {
        $("#message").html(data);
      }
    );
  });
});
