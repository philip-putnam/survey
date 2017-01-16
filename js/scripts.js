$(document).ready(function(){
  $("#blank form").submit(function(event){
    var blanks = ["name", "transport", "food", "born", "color"];

    blanks.forEach(function(blank) {
      if (blank === "food") {
        var userInput = $("input:radio[name=" + blank + "]:checked").val();
      }
      else if (blank === "transport") {
        var userInput = $("select#" + blank).val();
      }
      else {
        var userInput = $("input#" + blank).val();
      }
      $("." + blank).text(userInput);
    });



    // var nameInput = $("input#name").val();
    // var transportInput = $("select#transport").val();
    // var foodInput = $("input:radio[name=food]:checked").val();
    // var bornInput = $("input#born").val();
    // var colorInput = $("input#color").val();
    //
    // $(".name").text(nameInput);
    // $(".transport").text(transportInput);
    // $(".food").text(foodInput);
    // $(".born").text(bornInput);
    // $(".color").text(colorInput);


    event.preventDefault();
  });
});
