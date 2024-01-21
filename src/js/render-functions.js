import { refs } from './refs';

export function renderGalleryList(hits) {
  const markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
          <li>
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" />
        <div class="gallery-list-info">
          <p>likes: ${likes}</p>
          <p>views: ${views}</p>
          <p>comments: ${comments}</p>
          <p>downloads: ${downloads}</p>
        </div>
      </a>
    </li>`
    )
    .join('');
  refs.galleryList.insertAdjacentHTML('afterbegin', markup);
}

export function clearGalleryList() {
  refs.galleryList.innerHTML = '';
}
