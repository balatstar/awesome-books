import { BookList } from './modules/bookList.js';

document.addEventListener('DOMContentLoaded', () => {
  const bookListSection = document.querySelector('.book-list-section');
  const bookListHeading = document.createElement('h1');
  bookListHeading.className = 'heading';
  bookListHeading.innerText = 'All Awesome Books';
  bookListSection.appendChild(bookListHeading);
  const bookListContainer = document.createElement('div');
  bookListContainer.className = 'book-list border full-width';
  bookListSection.appendChild(bookListContainer);

  BookList.loadBookSection();
});

// Menu functionality
const addButton = document.querySelector('.add-btn');
const listButton = document.querySelector('.menu :nth-child(1) button');
const addBookButton = document.querySelector('.menu :nth-child(3) button');
const contactButton = document.querySelector('.menu :nth-child(5) button');

addButton.addEventListener('click', () => BookList.addBook());
listButton.addEventListener('click', () => BookList.openBookListSection());
addBookButton.addEventListener('click', () => BookList.openAddBookSection());
contactButton.addEventListener('click', () => BookList.openContactSection());
