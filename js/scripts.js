$(document).ready(function(){
  $("#blank form").submit(function(event){
    var nameInput = $("input#name").val();
    var transportInput = $("select#transport").val();
    var foodInput = $("input:radio[name=food]:checked").val();

    $(".name").text(nameInput);
    $(".transport").text(transportInput);
    $(".food").text(foodInput);


    event.preventDefault();
  });
});
