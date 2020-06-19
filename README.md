# My Library

#### An Object Oriented Programming exercise for Epicodus, 06.15.2020

## By Brittany Lindgren

## Description

Do you love reading, but have so many books that you forget what's on your shelves? Now you can store information about your books here in this nifty app and view all of your titles in one place.

## Setup/Installation Requirements

1. Follow this [link to the project repository](https://github.com/LINDGRENBA/my-library) on GitHub.

2. Click on the "Clone or download" button to copy the project link.
![Image of GitHub Clone or download button](img/readme/clone-download-button.PNG) 

3. If you are comfortable with the command line, you can copy the project link and clone it through your commad line with the command `git clone`. Otherwise, I recommend choosing "**Download ZIP**". 
![Download ZIP option on GitHub](img/readme/download-zip.PNG)

4. Once the ZIP file has finished downloading, you can right click on the file to view the zip folder in your downloads. 
![ZIP folder in downloads](img/readme/zip-folder.PNG)

5. Right click on the project ZIP folder that you have just downloaded and choose the option "**Copy To...**", then choose the location where you would like to save this folder. 
![Saving ZIP to new location with 'Copy To'](img/readme/copy-to.PNG)

6. Navigate to the final location where you have chosen to save the project folder.

7. To view the code itself, right click, choose "open with..." and open using a text editor such as VS Code or Atom, etc.

#### Additional Setup/Installation Notes:

* It is not necessary to run a server to view this project.

* No additional code is necessary to view this project.

## Specifications

#### Behavior: Program will create a library object using a constructor function
* Input: No input
* Output: brittsLibrary = {books = [], currentId = 0}

#### Behavior: Program will automatically create a new library when page is loaded
* Input: no input
* Output: //in user interface logic, within .ready function, but before .submit function - let libraryName = new NewLibrary();

#### Behavior: Program will take in the title of a new book from index.html form
* Input: Extremely Loud & Incredibly Close
* Output: Extremely Loud & Incredibly Close

#### Behavior: Program will create a book object using a constructor function when user submits a form
* Input: no input, but business logic will have Book constructor function
* Output: bookOne = {title: "If on a winter's night a traveler", author: "Italo Calvino"}

other properties to include later: yearPublished: 1979, numberOfPages: 260, haveRead: true 

#### Behavior: Program will push each new book object into the books array within the library object  
* Input: bookOne {properties:values}, bookTwo {properties: values}
* Output: brittsLibrary = {books = [bookOne, bookTwo]}

#### Behavior: Each book object will be assigned a unique call number when created 
* Input: let bookOne = new Book(param, param...), let bookTwo = new Book(param, param...), ...
* Output: brittsLibrary = {books = [bookOne{Id:1}, bookTwo{Id:2}, ...]}
* note: instead of assigning a unique call number at time of creating new book object, assigned it at time book object is pushed to books array

#### Behavior: Program will take a call number and find the book object with the matching call number 
* Input: 2
* Output: bookTwo {properties:values}

#### Behavior: Program will take a call number and delete it **CURRENT SPEC I'M WORKING ON**
* Input: 2
* Output: newBook object at index 2 is deleted

#### Behavior Program will insert the title of the book into a list at the bottom of the page
* Input: The Sparrow (input in user form)
* Output: The Sparrow (displayed below form)

#### Behavior: Program will insert book object into div when user clicks on book object title
* Input: User clicks If on a Winter's Night a Traveler
* Output: Program inserts title: Italo Calvino

#### Behavior: Program will find book by title if user does search by title instead of call number
* Input: WRITE
* Output: WRITE

#### Behavior:
* Input: 
* Output:

## Known Bugs

#### Not Yet Resolved
* There are no known bugs at this time.
#### Resolved
* 


## User Interface, To Resolve
#### Not Yet Resolved (on Styling Branch)
* The front end is not yet connected to the UI and business logic
#### Resolved
* 

## Support and contact details

Please feel free to contact me through GitHub (username: LINDGRENBA) with any questions, ideas or concerns.  

## Technologies Used

* HTML5
* CSS3
* Bootstrap v-3.3.7
* JavaScript
* jQuery v-3.5.0
* Visual Studio Code 
* Git and Git BASH 

### License

*This site is licensed under the MIT license.*

Copyright (c) YEAR **_Brittany Lindgren & Teresa Rosinski & Micheal Hansen_**