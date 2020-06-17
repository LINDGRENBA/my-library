//BUSINESS LOGIC

//business logic to make a new library -> with the property books set to hold an array
function NewLibrary() {
//this.property = value
  this.books = [];
  this.currentId = 0;
}

//business logic to make a new book -> 
function NewBook(title, author) {
  this.title = title;
  this.author = author;
}

//business logic to push each new book object created with NewBook constructor to books array in library









//USER INTERFACE LOGIC

$(document).ready(function() {
  let brittsLibrary = new NewLibrary();
  $("#add-book").submit(function(event) {
    event.preventDefault();

    let bookTitleInput = $("#book-title").val();
    let bookAuthorInput = $("#book-author").val();
    let newBookObject = new NewBook(bookTitleInput, bookAuthorInput);

  });
});