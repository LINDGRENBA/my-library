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

//business logic to delete book using call number
//this works the same as findMatchingCallNumber
NewLibrary.prototype.deleteBook = function(callNum) {
  for(let index = 0; index < this.books.length; index++) {
    if (this.books[index]) {
      if (this.books[index].callNumber == callNum) {
        delete this.books[index];
        return true;
      }
    }
  };
  return false;
}


//USER INTERFACE LOGIC

//this function will take in brittsLibrary and for each book it will print a <li>book title</li> inside of ul#my-books
function displayLibrary(booksToDisplay) { //booksToDisplay is catching brittsLibrary and passing it into this function (anywhere you see books to display in this code block, it's referencing brittsLibrary which is being passed here from where we called it in the #add-book.submit function)
  let bookList = $("ul#my-books"); //we're saying, here's our div for our list of books....
  let toDisplayBookInfo = ""; //declare a variable to insert, but start it as empty....
  booksToDisplay.books.forEach(function(book) { //for each book in brittsLibrary.... do the next thing, which is....
    toDisplayBookInfo += "<li class=" + book.callNumber + ">" + book.title + "</li>"; //update the value of toDisplayBookInfo with a <li> containing the book's title.
    //IMPORTANT: we add a class with the value of the book's call number, so that later, when we click on that book title, we can use the class (which will be the same as the book's call number) to access the specific book by its call number and display all of its info to the user.
  });
  bookList.html(toDisplayBookInfo);
};


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
    // $("#my-books").append("<li>" + bookTitleInput + "</li>");
    displayLibrary(brittsLibrary);
  });

  $("#search-for-call").submit(function(event) {
    event.preventDefault();

    let userNumber = $("#call-number").val();
    let matchingBook = brittsLibrary.findMatchingCallNumber(userNumber);
    $("#search-result-here").text(matchingBook);


    $("#delete-book").click(function() {
      let reallyDelete = confirm("Do you really want to delete this book?");
      if(reallyDelete) {
        brittsLibrary.deleteBook(userNumber);
      }
    });
  });
});
