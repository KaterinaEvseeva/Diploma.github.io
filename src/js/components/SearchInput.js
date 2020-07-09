// SearchInput. Конструктор класса принимает колбэк-функцию, исполняемую при сабмите формы поиска. В колбэк-функции описывается взаимодействие с API, 
// списком карточек и локальным браузерным хранилищем. Полученные от NewsAPI данные должны приводить к обновлению хранилища, а список карточек отображать 
// полученные данные на странице. Кроме этого у класса SearchInput должны быть методы для валидации формы поиска и методы, управляющие работой кнопки сабмита.
import {
    searchResaultGrid
} from '../constants/Constants';
import {
    searchResaultProgress
} from '../constants/Constants';
import {
    searchResaultShowMore
} from '../constants/Constants';
import {
    searchResaultFail
} from '../constants/Constants';
import {
    searchResaultHeader
} from '../constants/Constants';

export default class SearchInput {
    constructor(api, form, cardList, container) {
        this.api = api;
        this.form = form;
        this.cardList = cardList;
        this.container = container;
    }
    showPreloader() {
        searchResaultProgress.classList.remove('search-resault__progress_hidden');

    }
    removePreloader() {
        searchResaultProgress.classList.add('search-resault__progress_hidden');
    }
    showMoreResault() {
        if (this.container.childElementCount >= this.cardList.length) {
            searchResaultShowMore.classList.add('search-resault__show-more_hidden');
        } else {
            searchResaultShowMore.classList.remove('search-resault__show-more_hidden');
        }
    }

    showFail() {
        document.querySelector('.search-resault__fail_txt').textContent = 'К сожалению по вашему запросу ничего не найдено.';
        document.querySelector('.search-resault__fail_header').textContent = 'Ничего не найдено';
        searchResaultFail.classList.remove('search-resault__fail_hidden');
        searchResaultHeader.classList.add('search-resault__header_hidden');
        searchResaultShowMore.classList.add('search-resault__show-more_hidden');

    }

    removeAll() {
        this.removePreloader();
        searchResaultFail.classList.add('search-resault__fail_hidden');
        this.removeShowCards();
        this.removeShowResaultHeader();

        localStorage.setItem('search-resault', JSON.stringify({
            articles: [],
            searchData: null
        }));

    }
    removeShowCards() {
        searchResaultGrid.classList.add('search-resault__grid_hidden');
    }

    removeShowResaultHeader() {
        document.querySelector('.search-resault__desc').classList.add('search-resault__desc_hidden');
        searchResaultHeader.classList.add('search-resault__header_hidden');

    }

    showBadRequest() {
        searchResaultFail.querySelector('.search-resault__fail_txt').textContent = 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
        searchResaultFail.querySelector('.search-resault__fail_header').textContent = 'Во время запроса произошла ошибка.';
        searchResaultFail.classList.remove('search-resault__fail_hidden');
        searchResaultHeader.classList.add('search-resault__header_hidden');
    }

}
