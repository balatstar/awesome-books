import BookList from './bookList.js';

function menuFunction() {
const addButton = document.querySelector('.add-btn');
const listButton = document.querySelector('.menu :nth-child(1) button');
const addBookButton = document.querySelector('.menu :nth-child(3) button');
const contactButton = document.querySelector('.menu :nth-child(5) button');

addButton.addEventListener('click', () => BookList.addBook());
listButton.addEventListener('click', () => BookList.openBookListSection());
addBookButton.addEventListener('click', () => BookList.openAddBookSection());
contactButton.addEventListener('click', () => BookList.openContactSection());
}

export default menuFunction;