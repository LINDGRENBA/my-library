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
NewLibrary.prototype.addBookToLibrary = function(bookToAdd){
  this.books.push(bookToAdd);
}
//need to call above custom method on brittsLibrary and pass argument of the book title? or book object?


//USER INTERFACE LOGIC

$(document).ready(function() {
  let brittsLibrary = new NewLibrary(); // first instance of NewLibrary constructor
  $("#add-book").submit(function(event) {
    event.preventDefault();

    let bookTitleInput = $("#book-title").val();
    let bookAuthorInput = $("#book-author").val();
    let newBookObject = new NewBook(bookTitleInput, bookAuthorInput); //first instance of NewBook constructor
    brittsLibrary.addBookToLibrary(newBookObject); // target brittsLibrary, use addBookToLibrary function by calling it and passing the newBookObject to it
    //now brittsLibrary should hold each submission as an object within its books array

  });
});