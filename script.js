const book1 ={title: "The Hobbit", 
author: "J.R.R. Tolkien",
pages:295, 
read: false}


function bookInfo(book) {


    if (book.read ==false) {
        return `${book.title} by ${book.author}, ${book.pages} pages, not read yet`
    }
    else {
        return `${book.title} by ${book.author}, ${book.pages} pages, already read`
    }}




console.log(bookInfo(book1))