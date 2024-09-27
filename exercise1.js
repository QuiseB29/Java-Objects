let books = ['Harry Potter', 'Hobbit', 'Lord of the rings']

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Function to add a new book to the library
function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
}

// Function to search books by title
function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

// Function to search books by author
function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

function filterBooksByPages() {
    return library.filter(book => book.pages > 100);
}


console.log(filterBooksByPages());
console.log(addBook(books, "Elves"))
console.log(searchByTitle('Hobbit'))
console.log(filterBooksByPages());

//display book info
Book.prototype.displayInfo = function() {
    console.log("We are reading " + this.title + ", and it's fantastic");
}

let harryPotter = new Book("Harry Potter PT 2", ["J.k Rowling"], 400 );
let hobbit = new Book("Hobbit Five Armies", ["J.R.R Tolkien"], 350);


harryPotter.introduce()
hobbit.introduce()

