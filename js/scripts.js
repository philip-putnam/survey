$(document).ready(function(){
  $("#blank form").submit(function(event){
    var nameInput = $("input#name").val();
    var transportInput = $("select#transport").val();

    $(".name").text(nameInput);
    $(".transport").text(transportInput);


    event.preventDefault();
  });
});
