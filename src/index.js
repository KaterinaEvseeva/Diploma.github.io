import './pages/style.css';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import NewsApi from './js/modules/NewsApi';
import constants from './js/constants/Constants';
import SearchInput from './js/components/SearchInput';
import {
    searchResaultGrid
} from './js/constants/Constants';
import {
    searchResaultProgress
} from './js/constants/Constants';
import {
    searchResaultShowMore
} from './js/constants/Constants';
import {
    searchResaultFail
} from './js/constants/Constants';

const {
    NEWSAPI_KEY,
    NEWSAPI_URL,
} = constants;

const input = document.querySelector('.main__input');
const search = document.querySelector('.main__search');
const searchData = input.value;

const card = new NewsCard();
const cardList = new NewsCardList(searchResaultGrid, card, []);
const newsapi = new NewsApi({
    url: NEWSAPI_URL,
    apiKey: NEWSAPI_KEY,
    headers: {
        authorization: NEWSAPI_KEY,
        'Content-Type': 'application/json',
    }
});

const searchInput = new SearchInput(searchResaultGrid, cardList, searchResaultProgress,
    document.querySelector('.search-resault'), searchResaultShowMore, searchResaultFail
);

search.addEventListener('submit', () => {
    event.preventDefault();
    // searchInput.removeShowResaultHeader();
    searchInput.removeAll();
    searchInput.showPreloader();

    const searchData = input.value;
    if (!searchData) {
        searchInput.showFail();
    }
    newsapi.getNews(searchData)
        .then(articles => {
            console.log(articles)
            cardList.showCards(articles, searchData);
            if (articles.length == 0) {
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
