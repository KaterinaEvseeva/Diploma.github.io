// // NewsApi. Отвечает за взаимодействие с NewsAPI. У класса есть конструктор, принимающий опции и единственный обязательный метод getNews. 
// // getNews возвращает список новостей на основе запроса.

import constants from '../constants/Constants';
const { ONE_DAY, ONE_WEEK } = constants;

export default class NewsApi {
    constructor(options, SearchInput, showFail, _lastDay) {
        this.url = options.url;
        this.apiKey = options.apiKey;
        this._lastDay = options.lastDay;
        this.currentDate = options.currentDate;
        this.searchResaultFail = options.searchResaultFail;
        this.searchProgess = options.searchProgess;
        this.headers = options.headers;
        this.proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        this.SearchInput = SearchInput;
        this.showFail = showFail;
    }

    _getDates() {
        const dt = new Date(Date.now() - ONE_WEEK)
        return `&from=${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, 0)}-${String(dt.getDate()).padStart(2, 0)}`
    }
    getNews(searchData) {
        return new Promise((resolve, reject) => {
            fetch(`${this.proxyUrl}${this.url}?q=${searchData}${this._getDates()}&apiKey=${this.apiKey}&pageSize=100`, {
                    // return fetch(`${this.proxyUrl}${this.url}?q=${searchData}&apiKey=${this.apiKey}&pageSize=100`, {
                    headers: this.headers,
                })
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                    return reject(`Не удалось получить данные. Ошибка:${res.status}`);
                }).then((data) => {
                    resolve(data.articles);

                }).catch(reject)
        });
    }
}

