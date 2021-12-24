import {renderBlock} from './lib.js';

export function renderSearchFormBlock(checkInDate: string, checkOutDate: string) {
   const today = new Date();

  const checkDate = (value) => {
    if (value < 10)
      return '0' + value
  };

  const currentYear = today.getFullYear().toString();

  const currentMonth = (today.getMonth() + 1);
  console.log('month', currentMonth)


  const lastDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);

  const maxCheckOutDate = lastDayOfNextMonth.getFullYear().toString() + '-' + checkDate((lastDayOfNextMonth.getMonth() + 1).toString()) + '-' + lastDayOfNextMonth.getDate().toString();
console.log('maxOut', maxCheckOutDate)
  const currentDay = today.getDate();
  console.log('day', currentDay)

  const nextDay = today.getDate() + 1;
  console.log('nextDay', nextDay)

  const nextNextDay = today.getDate() + 2;
  console.log('nextNextDay', nextNextDay)

  const minCheckInDate = currentYear + '-' + currentMonth.toString() + '-' + currentDay.toString();

  const minCheckOutDate = currentYear + '-' + currentMonth.toString() + '-' + nextDay.toString();

  const defaultCheckInCDate = currentYear + '-' + currentMonth.toString() + '-' + nextDay.toString();

  const defaultCheckOutDate = currentYear + '-' + currentMonth.toString() + '-' + nextNextDay.toString();

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
<!--          <div class="providers">-->
<!--            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>-->
<!--            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>-->
<!--          </div>-->
          
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkInDate || defaultCheckInCDate}" min="${minCheckInDate}" max="${maxCheckOutDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDate || defaultCheckOutDate}" min="${minCheckOutDate}" max="${maxCheckOutDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" /> 
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
