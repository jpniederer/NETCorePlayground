export const getData = (url) =>
  fetch(url).then(response => response.json());

export const postData = (url = '', data = {}) => {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .catch(error => console.error(`Error posting to ${url}. Error: ${error}`));
};