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

const createButtons = (row) => {
    let deleteButton = document.createElement('button')
    let changeStateBtn = document.createElement('button')
    deleteButton.classList.add('delete-btn')
    deleteButton.textContent = 'Delete'
    changeStateBtn.classList.add('state-btn')
    changeStateBtn.textContent = 'Change State'
    let td = document.createElement('td')
    td.appendChild(changeStateBtn)
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
    createButtons(tableRow)
    table.appendChild(tableRow)
}

const newBook = (inputTitle, inputAuthor, inputPages, inputRead) => {
    let inputArr = []
    inputArr.push(inputTitle,inputAuthor,inputPages,inputRead)
    console.log(inputArr)
    addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead)

    createNewRow(inputArr)
    console.log(myLibrary)
}

function options(e) {
    if(e.target.className === 'delete-btn') {
        let bookTitle = e.target.parentNode.parentNode.firstElementChild.textContent
        removeBookFromLibrary(bookTitle)
        table.removeChild(e.target.parentNode.parentNode)
    } else if(e.target.className === 'state-btn') {
        let readState = e.target.parentNode.parentNode.childNodes[3]
        if (readState.textContent === 'Yes') {
            readState.textContent = 'No'
        } else {
            readState.textContent = 'Yes'
        }
    }
}

const render = (arr) => {
    let firstRender = []
    arr.forEach(book => {
        firstRender.push(book.title, book.author, book.pages, book.read)
        createNewRow(firstRender)
        firstRender = []
    })
}

const clearForm = () => {
   
}

const table = document.querySelector('.main-table')
table.addEventListener('click', options)

const modalBtn = document.querySelector('.modal-btn')
const modalBg = document.querySelector('.modal-bg')
const modalClose = document.querySelector('.modal-close')
const addBookBtn = document.querySelector('.add-btn')
const warning = document.getElementById('warning')

modalBtn.addEventListener('click', _ => {
    modalBg.classList.add('bg-active')
})

modalClose.addEventListener('click', _ => {
    modalBg.classList.remove('bg-active')
})

addBookBtn.addEventListener('click', () => {
    const titleInput = document.getElementById('title').value
    const authorInput = document.getElementById('author-form').value
    const pagesInput = document.getElementById('pages-form').value
    const readInput = document.querySelector('input[name=read]').value
    if(titleInput.length && authorInput.length && pagesInput.length && readInput.length) {
        newBook(titleInput, authorInput, pagesInput, readInput)
        modalBg.classList.remove('bg-active')
        titleInput = ""
        authorInput = ""
        pagesInput = ""
    }
})

myLibrary.push( new Book('Moby Dick', 'Herman Melville', 752, 'No'))
myLibrary.push( new Book('1984', 'George Orwell', 349, 'Yes'))
myLibrary.push( new Book('Pride and Prejudice', 'Jane Austen', 266, 'No'))

render(myLibrary)