function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

function toJson(response) {
  return response.json();
}

export default function (url, options) {
  return fetch(url, options)
    .then(status)
    .then(toJson);
}
