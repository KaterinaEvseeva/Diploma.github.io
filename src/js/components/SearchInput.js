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

    showMoreResault() {
        if(this.container.childElementCount >= this.articles.length) {
            document.querySelector('.search-resault__show-more').classList.add('search-resault__show-more_hidden');
        } else {
            document.querySelector('.search-resault__show-more').classList.remove('search-resault__show-more_hidden');
        }
    }

    // checkInputValidity(input, errorMessage) {
    //     if (input.validity.valueMissing) {
    //         return errorMessage.textContent = "Нужно ввести ключевое слово";
    //     }
    //     errorMessage.textContent = "";
    // }
}

