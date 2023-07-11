import { BookList } from './modules/bookList.js';
import { DateTime } from './modules/luxon.js';

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

// Display current date/time
const dateElement = document.querySelector('#date');
const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
dateElement.textContent = now;

// Menu functionality
const addButton = document.querySelector('.add-btn');
const listButton = document.querySelector('.menu :nth-child(1) button');
const addBookButton = document.querySelector('.menu :nth-child(3) button');
const contactButton = document.querySelector('.menu :nth-child(5) button');

addButton.addEventListener('click', () => BookList.addBook());
listButton.addEventListener('click', () => BookList.openBookListSection());
addBookButton.addEventListener('click', () => BookList.openAddBookSection());
contactButton.addEventListener('click', () => BookList.openContactSection());
