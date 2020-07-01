//  Класс списка карточек новостей.
export default class NewsCardList {
    constructor(container, card, articles) {
        this.card = card;
        this.container = container;
        this.articles = articles;
    }
    showCards(articles) {
        if (articles) {
            this.articles = articles;
            localStorage.setItem('search-resault', JSON.stringify(articles));
            document.querySelector('.search-resault__grid').innerHTML = '';
        }

        this.container.innerHTML += this.articles.slice(this.container.childElementCount, this.container.childElementCount + 3).map(this.card.create).join('');
    }

}
