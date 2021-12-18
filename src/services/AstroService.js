export default class AstroService {
  data = [];

  sendDataPost(data, url) {
    return fetch(url, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
  }
}