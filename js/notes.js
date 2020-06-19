  /*

  STEPS

  1. Create a constructor function as template for database, it will declare a variable and set the variables value to an empty array -> EXAMPLE: function NewLibrary(){this.books = []};
  in the future, objects will be pushed into this array

  2. Create constructor function as template for objects that will be gathered in that database
  -> EXAMPLE: function NewBook(title, author) {this.title=title, this.author=author};

  3. Create first instance of NewLibrary within .ready function, but before .submit function

  4. Create first instance of NewBook within .submit function. Every time new-book form is submitted, it will create a new instance of NewBook / aka a new NewBook object.

  5. In the business logic, create a custom method that will act on any NewLibrary object. This custom method will push the NewBook objects to the array in the library. Then call it from the user interface logic
    a) create the custom method -> EXAMPLE: NewLibrary.prototype.addBookToLibrary(bookToAdd){this.books.push(bookToAdd)};
    b) in the user interface .submit, use the custom method on your library -> EXAMPLE: brittsLibrary.addBookToLibrary(newBookObject) - this passes a new object to be pushed each time the form is submitted
  
  6. In the business logic, create a custom method that will act on any NewLibrary object. This custom method will take in the AddressBook objects currentCallNumber property's value (which is initially set to 0). It will increase the currentCallNumber value by 1. Then it will throw it back to wherever it is called. (In this code we call it every time we call our addBookToLibrary method so that the value is
    1.) returned inside that method and simultaneously 
    2.) assigned as a value to a _new_ _property_ that we place on the bookToAdd that's passing around/carrying our book object)
    a) create the custom method -> EXAMPLE: NewLibrary.prototype.assignCallNumber(){tthis.currentCallNumber += 1;  return this.currentCallNumber;};
    b) every time you pass a new book object to be pushed to books[], call on this method and catch the number it returns -> NewLibrary.prototype.addBookToLibrary = function(bookToAdd)
    bookToAdd.callNumber = this.assignCallNumber();   this.books.push(bookToAdd);
    }

  7. search for call number

  8. delete a book

  9. insert a book title into a display to show the user the whole library

  10. display the info for a book when it's clicked 
  



  */