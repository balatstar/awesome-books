import BookList from './modules/bookList.js';
import { addBook } from './modules/addBook.js';
import { removeBook } from './modules/removeBook.js';

const listButton = document.querySelector('.menu :nth-child(1) button');
const addBookButton = document.querySelector('.menu :nth-child(3) button');
const contactButton = document.querySelector('.menu :nth-child(5) button');

listButton.addEventListener('click', () => {
  BookList.openBookListSection();
});

addBookButton.addEventListener('click', () => {
  BookList.openAddBookSection();
});

contactButton.addEventListener('click', () => {
  BookList.openContactSection();
});

BookList.loadBookSection();

export { listButton, addBookButton, contactButton };
