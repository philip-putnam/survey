$(document).ready(function(){
  $("#blank form").submit(function(event){
    var nameInput = $("input#name").val();
    var transportInput = $("select#transport").val();
    var foodInput = $("input:radio[name=food]:checked").val();
    var bornInput = $("input#born").val();

    $(".name").text(nameInput);
    $(".transport").text(transportInput);
    $(".food").text(foodInput);
    $(".born").text(bornInput);


    event.preventDefault();
  });
});
