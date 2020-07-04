import './pages/style.css';
// import './js/modules/DataStorage';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import NewsApi from './js/modules/NewsApi';
import constants from './js/constants/Constants';
import SearchInput from './js/components/SearchInput';

const {
    NEWSAPI_KEY,
    NEWSAPI_URL,
} = constants;

const input = document.querySelector('.main__input');
const search = document.querySelector('.main__search');
const container = document.querySelector('.search-resault__grid');

const card = new NewsCard();
const cardList = new NewsCardList(container, card, []);
const newsapi = new NewsApi({
    url: NEWSAPI_URL,
    apiKey: NEWSAPI_KEY,
    headers: {
        authorization: NEWSAPI_KEY,
        'Content-Type': 'application/json',
    }
});

const searchInput = new SearchInput(container, cardList, document.querySelector('.search-resault__progress'), document.querySelector('.search-resault'),
    document.querySelector('.search-resault__show-more'), document.querySelector('.search-resault__fail')
);

search.addEventListener('submit', () => {
    event.preventDefault();
    searchInput.removeAll();
    searchInput.showPreloader();

     const searchData = input.value;
    if (!searchData) {
        searchInput.showFail();
    } 
    newsapi.getNews(searchData)
        .then(articles => {
            console.log(articles)
            cardList.showCards(articles);
            if(articles.length == 0) {
                return searchInput.showFail();
            }
            searchInput.showMoreResault();
        })
        .catch(() => {
            searchInput.showBadRequest();
        })
        .finally(() => {
            searchInput.removePreloader();
        });
});

document.querySelector('.search-resault__button').addEventListener('click', () => {
    cardList.showCards();
});


// export  const searchData = input.value; 
// export const card = new NewsCard();
