  /*

  STEPS

  1. Create a constructor function as template for database, it will declare a variable and set the variables value to an empty array -> EXAMPLE: function NewLibrary(){this.books = []};
  in the future, objects will be pushed into this array

  2. Create constructor function as template for objects that will be gathered in that database
  -> EXAMPLE: function NewBook(title, author) {this.title=title, this.author=author};

  3. Create first instance of NewLibrary within .ready function, but before .submit function

  4. Create first instance of NewBook within .submit function. Every time new-book form is submitted, it will create a new instance of NewBook / aka a new NewBook object.

  5. In the business logic, create a custom method that will act on any NewLibrary. This custom method will push the NewBook objects to the array in the library. Then call it from the user interface logic
    a) create the custom method -> EXAMPLE: NewLibrary.prototype.addBookToLibrary(bookToAdd){this.books.push(bookToAdd)};
    b) in the user interface .submit, use the custom method on your library -> EXAMPLE: brittsLibrary.addBookToLibrary(newBookObject) - this passes a new object to be pushed each time the form is submitted
  
  



  */