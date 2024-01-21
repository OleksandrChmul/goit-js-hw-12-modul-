import axios from 'axios';

const API_KEY = '41779008-0ca907175e945c15bd83f3619';
const BASE_URL = `https://pixabay.com/api/`;

export async function fetchImages(searchQuery, page = 1) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}?${searchParams}`;
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
