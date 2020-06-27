// // NewsApi. Отвечает за взаимодействие с NewsAPI. У класса есть конструктор, принимающий опции и единственный обязательный метод getNews. 
// // getNews возвращает список новостей на основе запроса.

 export default class NewsApi {
    constructor(url, apiKey, previousDate, currentDate, cardList, searchResaultFail, searchProgess, headers ) {
        this.url = url;
        this.apiKey = apiKey;
        this.previousDate = previousDate;
        this.currentDate = currentDate;
        this.cardList = cardList;
        this.searchResaultFail = searchResaultFail;
        this.searchProgess = searchProgess;
        this.headers = headers;
    }
    getNews(searchData) {
        return fetch(`${this.url}?q=${searchData}&apiKey=${this.apiKey}&pageSize=100`, {
            // method: 'GET',
            headers: this.headers,
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Не удалось получить данные. Ошибка:${res.status}`);
        }).then((data) => {
            if (data.articles.length == 0) {
                this.searchResaultFail.querySelector('.search-resault__fail_txt').innerHTML = 'К сожалению по вашему запросу ничего не найдено.';
                searchResaultFail.querySelector('.search-resault__fail_header').innerHTML = 'Ничего не найдено';

                searchResaultFail.classList.remove('search-resault__fail_hidden');
            } else {
                localStorage.setItem('search-resault', JSON.stringify(data.articles));

                document.querySelector('.search-resault__grid').innerHTML = '';

                this.cardList.showCards();

                searchResaultGrid.classList.remove('search-resault__grid_hidden');
            }

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

//    getNews(){
//     return fetch(`https://cors-anywhere.herokuapp.com/` + 
//     `https://praktikum.tk/news/v2/everything?q=${keyWord.value}&from=${previousDate}&to=${currentDate}&pageSize=${100}&apiKey=422aacd7b9af4b66bca82e0f23418cf8`, 
//     {
//         method: 'GET',
//       })
//         .then(res => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(`Не удалось получить данные. Ошибка:${res.status}`);
//         })
//         .catch(err => {
//           throw err;
//         });
//     }
    
// }
