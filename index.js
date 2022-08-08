import viewBook from './modules/viewBook.js';
import heading from './modules/heading.js';
import bookContainer from './modules/bookContainer.js';
import contact from './modules/contact.js';
import bookForm from './modules/bookForm.js';
import mainComponent from './modules/mainComponent.js';
import Header from './modules/headerComponent.js';
import footerComponent from './modules/footerComponent.js';
import Book from './modules/book.js';
import DateTimeLuxon from './modules/dateTimeLuxon.js';

const root = document.querySelector('#root');

const header = new Header().component();

root.insertAdjacentHTML('afterbegin', header);
root.insertAdjacentHTML('beforeend', mainComponent(
  {
    children: [
      viewBook({ heading, bookContainer }),
      bookForm({ heading, add: true }),
      contact({ heading })].join(''),
  },
));
root.insertAdjacentHTML('beforeend', footerComponent());

const menu = document.querySelector('.menu-ul');
menu.addEventListener('click', (e) => {
  const target = e.target ?? null;
  if (target.nodeName.toLowerCase() === 'a') {
    const allAnchor = menu.querySelectorAll('.link');
    allAnchor.forEach((each) => {
      each.classList.remove('active');
    });
    target.classList.add('active');
    const sectionId = target.getAttribute('href');
    const targetSection = document.querySelector(sectionId);
    const getAllLink = document.querySelectorAll('.section');

    getAllLink.forEach((each) => {
      each.classList.remove('active');
    });

    targetSection.classList.add('active');
  }
});

const form = document.querySelector('.input-form');
const uList = document.querySelector('.uList');

const book = new Book({ uList });
book.loadData();

form.addEventListener('submit', function formHandler(e) {
  e.preventDefault();
  const title = this.querySelector('.form-title').value;
  const author = this.querySelector('.form-author').value;
  book.add(title, author);
  this.reset();
});

uList.addEventListener('click', (e) => {
  const { target } = e;
  if (target.nodeName.toLowerCase() === 'button') {
    const getId = target.classList[1].split('-')[1];
    book.remove(getId);
  }
});

setInterval(() => {
  const getClock = document.querySelector('.date-time');
  const timeStr = new DateTimeLuxon().getTime();
  getClock.textContent = timeStr;
}, 1000);
