function Contact(first, last) {
  this.first = first;
  this.last = last;
  this.addresses = [];
}
function Address(street, city, county) {
  this.street = street;
  this.city = city;
  this.county = county;
}
/*var jane = new Contact("jane", "njeri");*/
Contact.prototype.fullname = function() {
  return this.first + " " + this.last;
}
/*$(".new-address").each(function() {
  var inputtedStreet = $(this).find("input.new-street").val();
  var inputtedCity = $(this).find("input.new-city").val();
  var inputtedCounty = $(this).find("input.new-county").val();
  var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
  Contact.address.push(Address);
});*/

$(document).ready(function() {
  /*add function to the button to add input filelds*/
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
      '<div class="form-group">' +
      '<label for="new-street">Street</label>' +
      '<input type="text" class="form-control new-street">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="new-city">City</label>' +
      '<input type="text" class="form-control new-city">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="new-county">County</label>' +
      '<input type="text" class="form-control new-county">' +
      '</div>' +
      '</div>');
  });
  /*event listener below for the whole form*/
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputedfirstname = $("#new-first-name").val();
    var inputedsecondname = $("#new-last-name").val();
    /*instance of contact object*/
    var newContact = new Contact(inputedfirstname, inputedsecondname);
    $("ul#contacts").append("<li><button class='contact'>" + newContact.fullname() + "</button></li>");
    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedCounty = $(this).find("input.new-county").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty)
      newContact.addresses.push(newAddress);
    });
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("button.contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullname());
      $(".first-name").text(newContact.first);
      $(".last-name").text(newContact.last);
      $("ul#addresses").text("");
     newContact.addresses.forEach(function(address) {
  $("ul#addresses").append("<li>" + address.street + ", " + address.city + "," + address.county + "</li>");
});
$("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-county").val("");
    });
  });






});
