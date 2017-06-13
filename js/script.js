function Contact(first, last) {
  this.first = first;
  this.last = last;
}
Contact.prototype.fullname=function(){
  return this.first+ " " + this.last;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputedfirstname = $("#new-first-name").val();
    var inputedsecondname = $("#new-last-name").val();
    var newcontact = new Contact(inputedfirstname,inputedsecondname);

    $("ul#contacts").append("<li><span class='contact'>" + newcontact.fullname() + "</span></li>");


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newcontact.first);
      $(".first-name").text(newcontact.first);
      $(".last-name").text(newcontact.last);




    });

  });






});
