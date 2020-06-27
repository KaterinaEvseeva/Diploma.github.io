import './pages/style.css';
// import './js/modules/DataStorage';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import NewsApi from './js/modules/NewsApi';

const input = document.querySelector('.main__input');
const search = document.querySelector('.main__search');

const container = document.querySelector('.search-resault__grid');
const articles = JSON.parse(localStorage.getItem('search-result'));
const NEWSAPI_KEY = '422aacd7b9af4b66bca82e0f23418cf8';
const NEWSAPI_URL = 'https://newsapi.org/v2/everything';

const card = new NewsCard();
const cardList = new NewsCardList(container, card, articles);
const newsapi = new NewsApi({
    url: NEWSAPI_URL,
    headers: {
        authorization: NEWSAPI_KEY,
        'Content-Type': 'application/json',
    }
});

search.addEventListener('submit', () => {
    event.preventDefault();
    const searchData = input.value;
    if (!searchData) {
        return;
    }
    newsapi.getNews(searchData)
    .then(articles => {
        cardList.showCards(articles);
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`);
      });
});

// function getNews(event) {
//     event.preventDefault();

//     const searchData = input.value;

//     if (!searchData) {
//         return;
//     }

//     const searchProgess = document.querySelector('.search-resault__progress');
//     searchProgess.classList.remove('search-resault__progress_hidden');

//     const searchResaultGrid = document.querySelector('.search-resault__grid');
//     searchResaultGrid.classList.add('search-resault__grid_hidden');

//     const searchResaultFail = document.querySelector('.search-resault__fail');
//     searchResaultFail.classList.add('search-resault__fail_hidden');
//     document.querySelector('.search-resault__show-more').classList.add('search-resault__show-more_hidden');


//     const apiKey = '422aacd7b9af4b66bca82e0f23418cf8';

//     //const url = `https://cors-anywhere.herokuapp.com/` + `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

//     const url = `https://newsapi.org/v2/everything?q=${searchData}&apiKey=${apiKey}`;


//     fetch(url)
//         .then((res) => {
//             if (res.ok) {
//                 return res.json();
//             }
//             return Promise.reject(`Не удалось получить данные. Ошибка:${res.status}`);
//         }).then((data) => {
//             if (data.articles.length == 0) {
//                 searchResaultFail.querySelector('.search-resault__fail_txt').innerHTML = 'К сожалению по вашему запросу ничего не найдено.';
//                 searchResaultFail.querySelector('.search-resault__fail_header').innerHTML = 'Ничего не найдено';  

//                 searchResaultFail.classList.remove('search-resault__fail_hidden');
//             } else {
//                 localStorage.setItem('search-result', JSON.stringify(data.articles));

//                 document.querySelector('.search-resault__grid').innerHTML = '';

//                 cardList.showCards();

//                 searchResaultGrid.classList.remove('search-resault__grid_hidden');
//             }


//         }).catch(err => {
//             console.warn(err);
//             searchResaultFail.querySelector('.search-resault__fail_txt').innerHTML = 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
//             searchResaultFail.querySelector('.search-resault__fail_header').innerHTML = 'Во время запроса произошла ошибка.';

//             searchResaultFail.classList.remove('search-resault__fail_hidden');

//         })
//         .finally(() => {
//             searchProgess.classList.add('search-resault__progress_hidden');

//         });
// }


document.querySelector('.search-resault__button').addEventListener('click', () => {
    cardList.showCards();
});






// const newsApi = new NewsApi({
//     url: `https://newsapi.org/v2/everything?q=${searchData}&apiKey=${apiKey}&pageSize=100`,
// });

// newsApi.getNews().
// then(data => cardList.showCards(data))
// .catch(err => {
//     console.log(`Ошибка: ${err}`);
//   });

// search.addEventListener('submit', () => {
//     event.preventDefault();

//     const searchData = input.value;

//     if (!searchData) {
//         return;
//     }

//     const searchProgess = document.querySelector('.search-resault__progress');
//     searchProgess.classList.remove('search-resault__progress_hidden');

//     const searchResaultGrid = document.querySelector('.search-resault__grid');
//     searchResaultGrid.classList.add('search-resault__grid_hidden');

//     const searchResaultFail = document.querySelector('.search-resault__fail');
//     searchResaultFail.classList.add('search-resault__fail_hidden');
//     document.querySelector('.search-resault__show-more').classList.add('search-resault__show-more_hidden');
//     newsApi.getNews();
// //     newsApi.getNews().
// // then(data => cardList.showCards(data))
// // .catch(err => {
// //     console.log(`Ошибка: ${err}`);
// //   });

// });

// const url = `https://cors-anywhere.herokuapp.com/` + `https://newsapi.org/v2/everything?q=${searchData}&apiKey=${apiKey}`;
