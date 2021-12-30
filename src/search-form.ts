import {renderBlock} from './lib.js';
import {getDateString, getNextDay, getPlusTwoDays} from "./date.js";
import {callback} from "./place.js";

export interface SearchFormData {
  city: string,
  checkInDate: string;
  checkOutDate: string;
  maxPrice: number
}

export function getDataFromForm() {
  const cityInput = document.getElementById('city') as HTMLInputElement;
  const actualCity = cityInput.value;
  const checkInInput = document.getElementById('check-in-date') as HTMLInputElement;
  const actualCheckInDate = checkInInput.value;
  const checkOutInput = document.getElementById('check-out-date') as HTMLInputElement;
  const actualCheckOutDate = checkOutInput.value;
  const maxPriceInput = document.getElementById('max-price') as HTMLInputElement;
  const actualMaxPrice = +maxPriceInput.value;

  const actualSearchData: SearchFormData = {
    city: actualCity,
    checkInDate: actualCheckInDate,
    checkOutDate: actualCheckOutDate,
    maxPrice: actualMaxPrice
  }
  return actualSearchData
}

export function search (actualSearchData): void {
    console.log('actual', actualSearchData)
}

export function renderSearchFormBlock(checkInDate = getDateString(getNextDay()), checkOutDate = getDateString(getPlusTwoDays(checkInDate))) {
  const today: Date = new Date();
  const minCheckInDate = getDateString(new Date());
  const lastDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  const maxCheckOutDate = getDateString(lastDayOfNextMonth)

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
          <div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>
          
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkInDate}" min="${minCheckInDate}" max="${maxCheckOutDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDate}" min="${getPlusTwoDays(checkInDate)}" max="${maxCheckOutDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" /> 
          </div>
          <div>
            <div><button id="search-button">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
