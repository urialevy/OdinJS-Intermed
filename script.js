function Book(title, author, pages, read) {
    this.title = title
    this.author = author;
    this.pages = pages
    this.read = read

}

// const book1 ={title: "The Hobbit", 
// author: "J.R.R. Tolkien",
// pages:295, 
// read: false}


function bookInfo(book) {


    if (book.read == false) {
        return `${book.title} by ${book.author}, ${book.pages} pages, not read yet`
    }
    else {
        return `${book.title} by ${book.author}, ${book.pages} pages, already read`
    }}




const book1 = new Book ('The Hobbit', 'J.R.R. Tolkien', 295, true)
const book2 = new Book ('Catcher in the Rye', 'J.D. Salinger','234', false)
const book3 = new Book ('A Memory of Light', 'Robert Jordan', 909, true)
console.log(bookInfo(book1))
console.log(bookInfo(book2))
console.log(bookInfo(book3))