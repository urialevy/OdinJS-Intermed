function Book(title, author, pages, read) {
    this.title = title
    this.author = author;
    this.pages = pages
    this.read = read

}

Book.prototype.bookInfo = function(arg) {
    if (this.read == false) {
        return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`
    }
    else {
        return `${this.title} by ${this.author}, ${this.pages} pages, already read`
    }}

const book1 = new Book ('The Hobbit', 'J.R.R. Tolkien', 295, true)
const book2 = new Book ('Catcher in the Rye', 'J.D. Salinger',234, false)
const book3 = new Book ('A Memory of Light', 'Robert Jordan', 909, true)
book1.bookInfo(book1)

