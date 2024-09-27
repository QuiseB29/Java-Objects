let books = ['Harry Potter', 'Hobbit', 'Lord of the rings']

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBook(arr,books) {
    arr.push(books);
    return arr;
}

console.log(addBook(books, "Elves"))

Book.prototype.displayInfo = function() {
    console.log("We are reading " + this.title + ", and it's fantastic");
}

let harryPotter = new Book("Harry Potter", ["J.k Rowling"], 400 );
let hobbit = new Book("Hobbit", ["J.R.R Tolkien"], 350);


harryPotter.introduce()
hobbit.introduce()

