import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  // const checkInInput = document.getElementById('check-in-date');
  // const inputHandler = function(e) {
  //   result.innerHTML = e.target.value;
  // }
  // const checkInDate = checkInInput.value;

  renderUserBlock('Ivan', '/img/avatar.png', 5);
  renderSearchFormBlock('', '');
  renderSearchStubBlock();
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
