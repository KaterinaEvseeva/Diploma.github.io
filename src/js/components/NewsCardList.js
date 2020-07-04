//  Класс списка карточек новостей.
export default class NewsCardList {
    constructor(container, card, articles) {
        this.card = card;
        this.container = container;
        this.articles = articles;
    }
    showCards(articles) {
        console.log(articles)
        if (articles) {
            this.articles = articles;
            this.container.innerHTML = ''
            localStorage.setItem('search-resault', JSON.stringify(articles));
            // document.querySelector('.search-resault__grid').innerHTML = '';
            document.querySelector('.search-resault__grid').insertAdjacentHTML  = '';

        }

        console.log(this.articles)

        this.container.innerHTML += this.articles.slice(this.container.childElementCount, this.container.childElementCount + 3).map(this.card.create).join('');

        const searchResaultGrid = document.querySelector('.search-resault__grid');
        // document.querySelector('.search-resault__fail_hidden').classList.add
        searchResaultGrid.classList.remove('search-resault__grid_hidden');
    }

    get length() {
        return this.articles.length
    }

}
