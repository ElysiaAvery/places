//Backend
function Destination(first, last, city, state, park, time) {
  this.firstName = first;
  this.lastName = last;
  this.city = city;
  this.state = state;
  this.park = park;
  this.time = time;
}

Destination.prototype.previewPlace = function(){
  return this.city +", "+ this.state;
}

//Frontend
$(document).ready(function() {
  $("form#new-places").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedPark = $("input#new-park").val();
    var inputtedTime = $("input#new-time").val();

    var newDestination = new Destination(inputtedFirstName, inputtedLastName, inputtedCity, inputtedState, inputtedPark, inputtedTime);

    $("ul#destinations").append("<li><span class='destination'>"+ newDestination.previewPlace()+"</span></li>");

    $(".destination").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text(newDestination.park);
      $(".first-name").text(newDestination.firstName);
      $(".last-name").text(newDestination.lastName);
      $(".city").text(newDestination.city);
      $(".state").text(newDestination.state);
      $(".park").text(newDestination.park);
      $(".time").text(newDestination.time);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-park").val("");
    $("input#new-time").val("");
  });
});
