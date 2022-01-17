import debounce from 'lodash.debounce';

console.log(debounce)


// import {getDataFromForm, renderSearchFormBlock, search} from './search-form.js'
// import {renderSearchStubBlock} from './search-results.js'
// import {renderUserBlock, User} from './user.js'
// import {renderToast} from './lib.js'
// import {callback} from "./place.js";
// import {getTodosByCount} from "./getToDos.js";
//
// const userData: User = {
//   name: 'Nata',
//   avatarUrl: '/img/avatar.png'
// };
// localStorage.setItem('user', JSON.stringify(userData));
//
// function getUserData() {
//   if (!window.localStorage) {
//     return null;
//   }
//   const userJson: unknown = JSON.parse(localStorage.getItem('user'));
//   if (!userJson) {
//     return null;
//   }
//   return userJson as User;
// };
// const actualUserData = getUserData();
//
// localStorage.setItem('favoritesAmount', '10');
//
// function getFavoritesAmount() {
//   if (!window.localStorage) {
//     return null;
//   }
//   const favoriteItemsAmount: unknown = localStorage.getItem('favoritesAmount');
//
//   return favoriteItemsAmount as number;
// };
//
// const actualFavoriteItemsAmount = getFavoritesAmount();
//
// window.addEventListener('DOMContentLoaded', () => {
//   renderUserBlock(actualUserData.name, actualUserData.avatarUrl, actualFavoriteItemsAmount);
//   renderSearchFormBlock();
//   renderSearchStubBlock();
//   getTodosByCount(2);
//   renderToast(
//     {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
//     {
//       name: 'Понял', handler: () => {
//         console.log('Уведомление закрыто')
//       }
//     }
//   )
//   const searchButton = document.getElementById('search-button') as HTMLButtonElement;
//   searchButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     search(getDataFromForm(), callback);
//
//   })
//
// })
