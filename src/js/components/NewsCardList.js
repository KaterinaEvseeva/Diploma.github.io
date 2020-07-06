import {searchResaultGrid} from '../constants/Constants';
import {searchResaultHeader} from '../constants/Constants';
import constants from '../constants/Constants';
const {CARDS_PER_STRING} = constants;
export default class NewsCardList {
    constructor(container, card, articles) {
        this.card = card;
        this.container = container;
        this.articles = articles;
    }
    showCards(articles, searchData) {
        console.log(articles)
        if (articles) {
            this.articles = articles;
            this.container.innerText = ''
            localStorage.setItem('search-resault', JSON.stringify({
                articles,
                searchData
            }));

            while (searchResaultGrid.firstChild) {
                searchResaultGrid.removeChild(searchResaultGrid.firstChild)
            };

        }

        console.log(this.articles)
        this.container.innerHTML += this.articles.slice(this.container.childElementCount, this.container.childElementCount + CARDS_PER_STRING).map(this.card.create).join('');

        searchResaultGrid.classList.remove('search-resault__grid_hidden');
        searchResaultHeader.classList.remove('search-resault__header_hidden');
    }

    get length() {
        return this.articles.length;
    }

}
