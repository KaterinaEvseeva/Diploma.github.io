export default class NewsCardList {
    constructor(card, container, data, addForm) {
        this.card = card;
        this.container = container;
        this.data = data;
        this.addForm = addForm;
    }
    showCards() {
        const box = document.querySelector('.search-resault__grid');
        const articles = JSON.parse(localStorage.getItem('search-result'));

        box.innerHTML += articles.slice(box.childElementCount, box.childElementCount + 3).map(card.create).join('');
    
        if(box.childElementCount >= articles.length) {
            document.querySelector('.search-resault__show-more').classList.add('search-resault__show-more_hidden');
        } else {
            document.querySelector('.search-resault__show-more').classList.remove('search-resault__show-more_hidden');
        }
    }
    
}
