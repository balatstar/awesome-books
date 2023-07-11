import currentDate from './modules/currentDate.js';
import loadPage from './modules/loadPage.js';
import menuFunction from './modules/menu.js';

// Load page content
document.addEventListener('DOMContentLoaded', loadPage);

// Display current date/time
currentDate();

// Menu functionality
menuFunction();