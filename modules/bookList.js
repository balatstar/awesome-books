import Book from './book.js';

export default class BookList {
  static loadBookSection() {
    const bookListSection = document.querySelector('.book-list-section');
    bookListSection.innerHTML = ''; // Clear the book list section

    const bookListContainer = document.createElement('div');
    bookListContainer.className = 'book-list border full-width';
    bookListSection.appendChild(bookListContainer);

    const bookDB = JSON.parse(localStorage.getItem('bookData')) || [];
    const listButton = document.querySelector('.menu :nth-child(1) button');
    listButton.style.color = 'rgba(100, 126, 255, 1)';

    if (bookDB.length === 0) {
      const noteText = document.createElement('p');
      noteText.innerText = 'Please add some books to your list';
      noteText.className = 'note-text';
      bookListContainer.appendChild(noteText);
    } else {
      bookDB.forEach((book) => {
        const postElement = document.createElement('article');
        postElement.classList.add('book-item');
        postElement.innerHTML = `
          <p class="book-title">"${book.title}" by ${book.author}</p>
        `;
        bookListContainer.appendChild(postElement);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn border';
        removeBtn.innerText = 'Remove';
        removeBtn.id = book.id;
        postElement.appendChild(removeBtn);

        removeBtn.addEventListener('click', () => {
          BookList.removeBook(book.id);
          BookList.loadBookSection(); // Reload book list after removing
        });
      });
    }
  }

  static openAddBookSection() {
    const listButton = document.querySelector('.menu :nth-child(1) button');
    const addBookButton = document.querySelector('.menu :nth-child(3) button');
    const contactButton = document.querySelector('.menu :nth-child(5) button');
    const addBookSection = document.querySelector('#add-book-section');
    const contactSection = document.querySelector('#contact-section');
    const bookListSection = document.querySelector('#book-list-section');

    listButton.style.color = '';
    addBookButton.style.color = 'rgba(100, 126, 255, 1)';
    contactButton.style.color = '';
    bookListSection.style.display = 'none';
    addBookSection.style.display = 'flex';
    contactSection.style.display = 'none';
  }

  static openBookListSection() {
    const listButton = document.querySelector('.menu :nth-child(1) button');
    const addBookButton = document.querySelector('.menu :nth-child(3) button');
    const contactButton = document.querySelector('.menu :nth-child(5) button');
    const bookListSection = document.querySelector('#book-list-section');
    const addBookSection = document.querySelector('#add-book-section');
    const contactSection = document.querySelector('#contact-section');

    listButton.style.color = 'rgba(100, 126, 255, 1)';
    addBookButton.style.color = '';
    contactButton.style.color = '';
    bookListSection.style.display = '';
    addBookSection.style.display = 'none';
    contactSection.style.display = 'none';
  }

  static openContactSection() {
    const listButton = document.querySelector('.menu :nth-child(1) button');
    const addBookButton = document.querySelector('.menu :nth-child(3) button');
    const contactButton = document.querySelector('.menu :nth-child(5) button');
    const bookListSection = document.querySelector('#book-list-section');
    const addBookSection = document.querySelector('#add-book-section');
    const contactSection = document.querySelector('#contact-section');

    listButton.style.color = '';
    addBookButton.style.color = '';
    contactButton.style.color = 'rgba(100, 126, 255, 1)';
    bookListSection.style.display = 'none';
    addBookSection.style.display = 'none';
    contactSection.style.display = 'flex';
  }

  static addBook() {
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const bookDB = JSON.parse(localStorage.getItem('bookData')) || [];

    if (titleInput.value && authorInput.value) {
      const book = new Book(titleInput.value, authorInput.value);
      bookDB.push(book);
      localStorage.setItem('bookData', JSON.stringify(bookDB));
    }

    BookList.openAddBookSection();
    BookList.loadBookSection();
  }

  static removeBook(id) {
    const bookDB = JSON.parse(localStorage.getItem('bookData')) || [];
    const newBookData = bookDB.filter((book) => book.id !== id);
    localStorage.setItem('bookData', JSON.stringify(newBookData));
    BookList.loadBookSection();
  }
}
