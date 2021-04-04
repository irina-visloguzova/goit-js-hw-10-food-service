import menuCardsTmp from '../templates/menu-cards.hbs';
import menu from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const CardsMarkup = createCardsMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', CardsMarkup);

function createCardsMarkup() {
  return menuCardsTmp(menu);
};