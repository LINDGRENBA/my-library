//BUSINESS LOGIC

//business logic to make a new library -> with the property books set to hold an array
function NewLibrary() {
//this.property = value
  this.books = [];
  this.currentId = 0;
}









//USER INTERFACE LOGIC

$(document).ready(function() {
  $("#add-book").submit(function(event) {
    event.preventDefault();

    let bookTitleInput = $("#book-title").val();

  });
});