import { DateTime } from './luxon.js';

function currentDate() {
    const dateElement = document.querySelector('#date');
    const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    dateElement.textContent = now;
  }
  
  export default currentDate;