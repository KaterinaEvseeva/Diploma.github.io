//  Класс списка карточек новостей.
export default class NewsCardList {
    constructor(container, card, articles) {
        this.card = card;
        this.container = container;
        this.articles = articles;
    }
    showCards(articles) {
        if (articles){
            this.articles = articles;
                localStorage.setItem('search-resault', JSON.stringify(articles));
                document.querySelector('.search-resault__grid').innerHTML = '';
        }

        this.container.innerHTML += this.articles.slice(this.container.childElementCount, this.container.childElementCount + 3).map(this.card.create).join('');    
        if(this.container.childElementCount >= this.articles.length) {
            document.querySelector('.search-resault__show-more').classList.add('search-resault__show-more_hidden');
        } else {
            document.querySelector('.search-resault__show-more').classList.remove('search-resault__show-more_hidden');
        }
    }
    
}
