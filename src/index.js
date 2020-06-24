import './pages/style.css';
// import NewsApi from './js/modules/NewsApi';
// import './js/modules/DataStorage';
import NewsCard from './js/components/NewsCard';
// import NewsCardList from './js/components/NewsCardList';
// import { data } from 'autoprefixer';


const input = document.querySelector('.main__input');
const search = document.querySelector('.main__search');
// const newsApi = new NewsApi;
const card = new NewsCard();
// const newsCardList = new NewsCardList(newsContainer, card, form);
// newsCardList.render();
// const newsContainer = document.querySelector('.search-resault__container');


//     const form = document.forms.new;
//  
// function render() {
//     for (const value of data) {
//         const template = create(value.title, value.publishedAt, value.sourceName, value.description, value.urlToImage);
//         container.insertAdjacentHTML('beforeend', template);
//     }
// }
// search.addEventListener('submit', addCard);
// render();

search.addEventListener('submit', getNews);
// search.addEventListener('submit', newsCardList.render);

// window.addEventListener('load', newsCardList.render);



// function createCard(data) {
//     const template = ` <div class="search-resault__grid search-resault__grid_card card">
//         <img class="card__image" src="${data.urlToImage}" alt="${data.title}">
//         <div class="card__data">
//             <h5 class="card__today">${data.publishedAt}</h5>
//             <h2 class="card__header">${data.title}</h2>
//             <p class="card__text">${data.description}.</p>
//             <a class="card__resource" href="#">${data.source.name}</a>
//         </div>
//     </div>`;
//     return template;
// }

function showCards() {
    const box = document.querySelector('.search-resault__grid');

    const articles = JSON.parse(localStorage.getItem('search-result'));

    box.innerHTML += articles.slice(box.childElementCount, box.childElementCount + 3).map(card.create).join('');

    if(box.childElementCount >= articles.length) {
        document.querySelector('.search-resault__show-more').classList.add('search-resault__show-more_hidden');
    } else {
        document.querySelector('.search-resault__show-more').classList.remove('search-resault__show-more_hidden');

    }
}

function getNews(event) {
    event.preventDefault();

    const searchData = input.value;

    if (!searchData) {
        return;
    }

    const searchProgess = document.querySelector('.search-resault__progress');
    searchProgess.classList.remove('search-resault__progress_hidden');

    const searchResaultGrid = document.querySelector('.search-resault__grid');
    searchResaultGrid.classList.add('search-resault__grid_hidden');

    const searchResaultFail = document.querySelector('.search-resault__fail');
    searchResaultFail.classList.add('search-resault__fail_hidden');
    document.querySelector('.search-resault__show-more').classList.add('search-resault__show-more_hidden');


    const apiKey = '422aacd7b9af4b66bca82e0f23418cf8';

    //const url = `https://cors-anywhere.herokuapp.com/` + `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

    const url = `https://newsapi.org/v2/everything?q=${searchData}&apiKey=${apiKey}`;


    fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Не удалось получить данные. Ошибка:${res.status}`);
        }).then((data) => {
            if (data.articles.length == 0) {
                searchResaultFail.querySelector('.search-resault__fail_txt').innerHTML = 'К сожалению по вашему запросу ничего не найдено.';
                searchResaultFail.querySelector('.search-resault__fail_header').innerHTML = 'Ничего не найдено';  

                searchResaultFail.classList.remove('search-resault__fail_hidden');
            } else {
                localStorage.setItem('search-result', JSON.stringify(data.articles));

                document.querySelector('.search-resault__grid').innerHTML = '';

                showCards();

                searchResaultGrid.classList.remove('search-resault__grid_hidden');
            }


        }).catch(err => {
            console.warn(err);
            searchResaultFail.querySelector('.search-resault__fail_txt').innerHTML = 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
            searchResaultFail.querySelector('.search-resault__fail_header').innerHTML = 'Во время запроса произошла ошибка.';

            searchResaultFail.classList.remove('search-resault__fail_hidden');

        })
        .finally(() => {
            searchProgess.classList.add('search-resault__progress_hidden');

        });
}

search.addEventListener('submit', getNews);

document.querySelector('.search-resault__button').addEventListener('click', showCards);

