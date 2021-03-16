let myLibrary = [];

function Book(title,author, pages, read) {
    this.title = title;
    this.authot = author;
    this.pages = pages;
    this.read = read;
}



function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}

function removeBookFromLibrary(title) {
    myLibrary.filter(book => {
        if(book.title === title) {
            myLibrary.splice(myLibrary.indexOf(book),1)
        } else {
            return 'No existe tal libro'
        }
    })
}

console.log(myLibrary)

addBookToLibrary('Job', 'Desconocido', 31, true)
addBookToLibrary('Genesis', 'Moises', 54, true)
addBookToLibrary('Apocalipsis', 'Juan', 25, false)


console.log(myLibrary)

removeBookFromLibrary('Genesis')

console.log(myLibrary)