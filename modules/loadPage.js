import BookList from './bookList.js';

function loadPage() {
  const bookListSection = document.querySelector('.book-list-section');
  const bookListHeading = document.createElement('h1');
  bookListHeading.className = 'heading';
  bookListHeading.innerText = 'All Awesome Books';
  bookListSection.appendChild(bookListHeading);
  const bookListContainer = document.createElement('div');
  bookListContainer.className = 'book-list border full-width';
  bookListSection.appendChild(bookListContainer);

  BookList.loadBookSection();
}

export default loadPage;
