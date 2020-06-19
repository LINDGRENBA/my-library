//BUSINESS LOGIC

//business logic to make a new library -> with the property books set to hold an array
function NewLibrary() {
//this.property = value
  this.books = [];
  this.currentCallNumber = 0;
}

//business logic to make a new book -> 
function NewBook(title, author) {
  this.title = title;
  this.author = author;
}

//business logic to push each new book object created with NewBook constructor to books array in library
NewLibrary.prototype.addBookToLibrary = function(bookToAdd){ //myBook gets passed from user interface to bookToAdd when this method is invoked
  bookToAdd.callNumber = this.assignCallNumber();
  //bookToAdd will get a new property put in it, the value will be number that's tossed out when we invoke the assignCallNumber method
  this.books.push(bookToAdd);
}
//need to call above custom method on brittsLibrary and pass argument of the book title? or book object?

//assign a unique call number to any new library being created
//call numbers are like addresses for books to help you locate them
NewLibrary.prototype.assignCallNumber = function() {
  this.currentCallNumber += 1; //every time we call assignCallNumber() we will +1 the CallNumber and then it tosses it back out into the void, to be caught where it is called, in the place where addBookToLibrary() is invoked
  return this.currentCallNumber;
}


//business logic to find call number
NewLibrary.prototype.findMatchingCallNumber = function(callNum) {
    for(let index = 0; index < this.books.length; index++) {
      if (this.books[index]) {
      if(this.books[index].callNumber == callNum) {
        return this.books[index].title;
      }
    }
  };
  return false;
}


//USER INTERFACE LOGIC
$(document).ready(function() {
  let brittsLibrary = new NewLibrary(); // first instance of NewLibrary constructor XXXXX
  $("#add-book").submit(function(event) {
    event.preventDefault();

    let bookTitleInput = $("#book-title").val();
    let bookAuthorInput = $("#book-author").val();
    let myBook = new NewBook(bookTitleInput, bookAuthorInput); //first instance of NewBook constructor
    brittsLibrary.addBookToLibrary(myBook); // target brittsLibrary, use addBookToLibrary function by calling it and passing the newBookObject to it
    $("#confirm-title").text(bookTitleInput);
    $("#confirm-message").show();
    console.log(brittsLibrary.books);
  });

  $("#search-for-call").submit(function(event) {
    event.preventDefault();

    let userNumber = $("#call-number").val();
    let matchingBook = brittsLibrary.findMatchingCallNumber(userNumber);
    // $("#search-result-here").text(matchingBook);
  })
});

//brittsLibrary only exists within the .ready, so outside is not seeing it
//need to pass brittsLibrary to the outside somehow??? why?