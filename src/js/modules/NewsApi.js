// // NewsApi. Отвечает за взаимодействие с NewsAPI. У класса есть конструктор, принимающий опции и единственный обязательный метод getNews. 
// // getNews возвращает список новостей на основе запроса.

// import constants from '../constants/Constants';
// const { ONE_DAY } = constants;
 export default class NewsApi {
    constructor(options) {
        this.url = options.url;
        this.apiKey = options.apiKey;
        // this._lastDay = options.lastDay;
        this.currentDate = options.currentDate;
        this.searchResaultFail = options.searchResaultFail;
        this.searchProgess = options.searchProgess;
        this.headers = options.headers;
        this.proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    }

    // _getDates() {
    //     const today = new PublishedAt();
    //     const lastDay = new PublishedAt(today.getTime() - this._lastDay * 86400000);
    //     return `&from=${lastDay
    //       .toISOString()
    //       .slice(0, 10)}&to=${today.toISOString().slice(0, 10)}`;
    //   }
    getNews(searchData) {
        // return fetch(`${this.proxyUrl}${this.url}?q=${searchData}${this._getDates()}&apiKey=${this.apiKey}&pageSize=100`, {
    return fetch(`${this.proxyUrl}${this.url}?q=${searchData}&apiKey=${this.apiKey}&pageSize=100`, {

            headers: this.headers,
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Не удалось получить данные. Ошибка:${res.status}`);
        }).then((data) => {
            return data.articles;
            // if (data.articles.length == 0) {
            //     this.searchResaultFail.querySelector('.search-resault__fail_txt').innerHTML = 'К сожалению по вашему запросу ничего не найдено.';
            //     searchResaultFail.querySelector('.search-resault__fail_header').innerHTML = 'Ничего не найдено';

            //     searchResaultFail.classList.remove('search-resault__fail_hidden');
            // } else {
            //     searchResaultGrid.classList.remove('search-resault__grid_hidden');
            // }

        }).catch(err => {
            console.warn(err);
            const searchResaultFail = document.querySelector('.search-resault__fail');

            searchResaultFail.querySelector('.search-resault__fail_txt').innerHTML = 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
            searchResaultFail.querySelector('.search-resault__fail_header').innerHTML = 'Во время запроса произошла ошибка.';

            searchResaultFail.classList.remove('search-resault__fail_hidden');

        })
        .finally(() => {
            document.querySelector('.search-resault__progress').classList.add('search-resault__progress_hidden');

        });
    }


 }
