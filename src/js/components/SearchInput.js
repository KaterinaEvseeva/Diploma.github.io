// SearchInput. Конструктор класса принимает колбэк-функцию, исполняемую при сабмите формы поиска. В колбэк-функции описывается взаимодействие с API, 
// списком карточек и локальным браузерным хранилищем. Полученные от NewsAPI данные должны приводить к обновлению хранилища, а список карточек отображать 
// полученные данные на странице. Кроме этого у класса SearchInput должны быть методы для валидации формы поиска и методы, управляющие работой кнопки сабмита.
export default class SearchInput {
    constructor(api, form, articles, container) {
        this.api = api;
        this.form = form;
        this.articles = articles;
        this.container = container;
    }
    showPreloader() {
        document.querySelector('.search-resault__progress').classList.remove('search-resault__progress_hidden');

    }
    removePreloader() {
        document.querySelector('.search-resault__progress').classList.add('search-resault__progress_hidden');
    }
    showMoreResault() {
        if (this.container.childElementCount >= this.articles.length) {
            document.querySelector('.search-resault__show-more').classList.add('search-resault__show-more_hidden');
        } else {
            document.querySelector('.search-resault__show-more').classList.remove('search-resault__show-more_hidden');
        }
    }

    showFail() {
        if (this.articles.length == 0) {
            document.querySelector('.search-resault__fail_txt').innerHTML = 'К сожалению по вашему запросу ничего не найдено.';
            document.querySelector('.search-resault__fail_header').innerHTML = 'Ничего не найдено';
            document.querySelector('.search-resault__fail').classList.remove('search-resault__fail_hidden');
            // const searchResaultGrid = document.querySelector('.search-resault__grid');
            // searchResaultGrid.classList.remove('search-resault__grid_hidden');
        }
    }
    removeShowCards() {
        const searchResaultGrid = document.querySelector('.search-resault__grid');
        searchResaultGrid.classList.add('search-resault__grid_hidden');
    }
    showBadRequest() {
        const searchResaultFail = document.querySelector('.search-resault__fail');
        searchResaultFail.querySelector('.search-resault__fail_txt').innerHTML = 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
        searchResaultFail.querySelector('.search-resault__fail_header').innerHTML = 'Во время запроса произошла ошибка.';
        searchResaultFail.classList.remove('search-resault__fail_hidden');
    }

    // checkInputValidity(input, errorMessage) {
    //     if (input.validity.valueMissing) {
    //         return errorMessage.textContent = "";
    //     }
    //     errorMessage.textContent = "";
    // }
}
export {
    showFail
}
from './SearchInput';
export {
    removeShowCards
}
from './SearchInput';