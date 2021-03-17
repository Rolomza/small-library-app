let myLibrary = [];

function Book(title,author, pages, read) {
    this.title = title;
    this.authot = author;
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
    row.appendChild(deleteButton)
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
        let bookTitle = e.target.parentNode.firstElementChild.textContent
        removeBookFromLibrary(bookTitle)
        table.removeChild(e.target.parentNode)
    }
    console.log(myLibrary)
}

const table = document.querySelector('.main-table')
table.addEventListener('click', removeBook)

const addBookBtn = document.querySelector('.add-btn')
addBookBtn.addEventListener('click', newBook)
