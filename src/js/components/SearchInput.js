// SearchInput. Конструктор класса принимает колбэк-функцию, исполняемую при сабмите формы поиска. В колбэк-функции описывается взаимодействие с API, 
// списком карточек и локальным браузерным хранилищем. Полученные от NewsAPI данные должны приводить к обновлению хранилища, а список карточек отображать 
// полученные данные на странице. Кроме этого у класса SearchInput должны быть методы для валидации формы поиска и методы, управляющие работой кнопки сабмита.
export default class SearchInput {
    constructor(api, form, cardList, container) {
        this.api = api;
        this.form = form;
        this.cardList = cardList;
        this.container = container;
    }
    showPreloader() {
        document.querySelector('.search-resault__progress').classList.remove('search-resault__progress_hidden');

    }
    removePreloader() {
        document.querySelector('.search-resault__progress').classList.add('search-resault__progress_hidden');
    }
    showMoreResault() {
        if (this.container.childElementCount >= this.cardList.length) {
            document.querySelector('.search-resault__show-more').classList.add('search-resault__show-more_hidden');
        } else {
            document.querySelector('.search-resault__show-more').classList.remove('search-resault__show-more_hidden');
        }
    }

    showFail() {
        document.querySelector('.search-resault__fail_txt').textContent = 'К сожалению по вашему запросу ничего не найдено.';
        document.querySelector('.search-resault__fail_header').textContent = 'Ничего не найдено';
        document.querySelector('.search-resault__fail').classList.remove('search-resault__fail_hidden');
        const searchResaultHeader = document.querySelector('.search-resault__header');
        searchResaultHeader.classList.add('search-resault__header_hidden');
        document.querySelector('.search-resault__show-more').classList.add('search-resault__show-more_hidden');

    }

    removeAll() {
        this.removePreloader();
        document.querySelector('.search-resault__fail').classList.add('search-resault__fail_hidden');
        this.removeShowCards();
        localStorage.setItem('search-resault', JSON.stringify({
            articles: [],
            searchData: null
        }));

    }
    removeShowCards() {
        const searchResaultGrid = document.querySelector('.search-resault__grid');
        searchResaultGrid.classList.add('search-resault__grid_hidden');
    }
    showBadRequest() {
        const searchResaultHeader = document.querySelector('.search-resault__header');
        const searchResaultFail = document.querySelector('.search-resault__fail');
        searchResaultFail.querySelector('.search-resault__fail_txt').textContent = 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
        searchResaultFail.querySelector('.search-resault__fail_header').textContent = 'Во время запроса произошла ошибка.';
        searchResaultFail.classList.remove('search-resault__fail_hidden');
        searchResaultHeader.classList.add('search-resault__header_hidden');
    }

}
export {
    showFail
}
from './SearchInput';
export {
    removeShowCards
}
from './SearchInput';