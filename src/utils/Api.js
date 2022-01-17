import {TELEGRAM_TOKEN_SECRET as token} from "./config"
import {TELEGRAM_CHAT_ID as chat_id} from "./config"

class Api {
  constructor({ address, headers }) {
    this._address = address;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  sendMessageInfoEmail(info) {
    return fetch(`${this._address}&parse_mode=HTML&text=Запрос на подробную информацию. Email: ${info.email}; Topic: ${info.topic}`, {
      method: "POST",
      headers: this._headers,
    }).then(this._checkResponse)
  }

  sendMessageContactPhoneEng(info) {
    return fetch(`${this._address}&parse_mode=HTML&text=Свяжитесь со мной! Topic: ${info.topic}, Имя: ${info.name}, Телефон: ${info.phone}, Почта: ${info.email}, Комментарий: ${info.comment}`, {
      method: "POST",
      headers: this._headers,
    }).then(this._checkResponse)
  }
  /*

  sendMessageContactPhoneEng(info) {
    return fetch(`${this._address}&parse_mode=HTML&text=Свяжитесь со мной! ${info}`, {
      method: "POST",
      headers: this._headers,
    }).then(this._checkResponse)
  }
  */

}

export const TelegramApi = new Api({
  address:
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}`,
  headers: {
    "Content-Type": "application/json",
  },
});
