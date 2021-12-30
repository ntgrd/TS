import { renderBlock } from './lib.js'

export interface User {
  name: string;
  avatarUrl: string;
};

export function renderUserBlock (userName: string, linkToUserAvatar: string, favoriteItemsAmount?: number) {
  const favoritesCaption = favoriteItemsAmount || 'ничего нет';
  const hasFavoriteItems = !!favoriteItemsAmount;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${linkToUserAvatar}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
