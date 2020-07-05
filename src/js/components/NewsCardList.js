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
            document.querySelector('.search-resault__grid').insertAdjacentHTML = '';

        }

        console.log(this.articles)

        this.container.innerHTML += this.articles.slice(this.container.childElementCount, this.container.childElementCount + 3).map(this.card.create).join('');

        const searchResaultGrid = document.querySelector('.search-resault__grid');
        searchResaultGrid.classList.remove('search-resault__grid_hidden');
        document.querySelector('.search-resault__header').classList.remove('search-resault__header_hidden');
    }

    get length() {
        return this.articles.length;
    }

}
