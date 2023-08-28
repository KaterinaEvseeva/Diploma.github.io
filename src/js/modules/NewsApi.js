import constants from '../constants/Constants';
const {
    ONE_WEEK
} = constants;

export default class NewsApi {
    constructor(options, SearchInput, showFail) {
        this.url = options.url;
        this.apiKey = options.apiKey;
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
                    headers: this.headers,
                mode: 'cors',
              credentials: 'include',
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
