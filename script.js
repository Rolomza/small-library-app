let myLibrary = [];

function Book(title,author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookToLibrary = (title, author, pages, read) => {
    myLibrary.push(new Book(title, author, pages, read))
}

const removeBookFromLibrary = (title) => {
    myLibrary.filter(book => {
        if(book.title === title) {
            myLibrary.splice(myLibrary.indexOf(book), 1)
        }
    })
}

const createDeleteButton = (row) => {
    let deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-btn')
    deleteButton.textContent = 'Delete'
    let td = document.createElement('td')
    td.appendChild(deleteButton)
    row.appendChild(td)
}

const createNewRow = (arr) => {
    let tableRow = document.createElement('tr')
    for(let i = 0; i < 4; i++) {
        let tableData = document.createElement('td')
        tableData.textContent = arr[i]
        tableRow.appendChild(tableData)
    }
    createDeleteButton(tableRow)
    table.appendChild(tableRow)
}

const newBook = () => {
    let inputArr = []
    inputTitle = prompt('Title:')
    inputAuthor = prompt('Author:')
    inputPages = prompt('Pages number:')
    inputRead = prompt('Did you read it?')
    inputArr.push(inputTitle,inputAuthor,inputPages,inputRead)
    console.log(inputArr)
    addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead)

    createNewRow(inputArr)
    console.log(myLibrary)
}

function removeBook(e) {
    if(e.target.className === 'delete-btn') {
        let bookTitle = e.target.parentNode.parentNode.firstElementChild.textContent
        removeBookFromLibrary(bookTitle)
        table.removeChild(e.target.parentNode.parentNode)
    }
    console.log(myLibrary)
}

const table = document.querySelector('.main-table')
table.addEventListener('click', removeBook)

const addBookBtn = document.querySelector('.add-btn')
addBookBtn.addEventListener('click', newBook)

myLibrary.push( new Book('Moby Dick', 'Herman Melville', 752, 'No'))
myLibrary.push( new Book('1984', 'George Orwell', 349, 'Yes'))
myLibrary.push( new Book('Pride and Prejudice', 'Jane Austen', 266, 'No'))

const render = (arr) => {
    let firstRender = []
    arr.forEach(book => {
        firstRender.push(book.title, book.author, book.pages, book.read)
        createNewRow(firstRender)
        firstRender = []
    })
}
console.log(myLibrary)
render(myLibrary)