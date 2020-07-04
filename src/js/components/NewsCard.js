import months from '../constants/Constants';
export default class NewsCard {
    constructor(title, publishedAt, sourceName, description, urlToImage) {
        this.title = title;
        this.publishedAt = publishedAt;
        this.sourceName = sourceName;
        this.description = description;
        this.urlToImage = urlToImage;
    }

    create(data) {
        const template = ` <div class="search-resault__grid search-resault__grid_card card">
            <img class="card__image" src="${data.urlToImage}" alt="${data.title}">
            <div class="card__data">
            <h5 class="card__today">${data.publishedAt}</h5>
                <h2 class="card__header">${data.title}</h2>
                <p class="card__text">${data.description}.</p>
                <a class="card__resource" href="#">${data.source.name}</a>
            </div>
        </div>`;
        return template;

        // <h5 class="card__today">${dateFormatted(new Date(data.publishedAt))}</h5>
        // <h5 class="card__today">${data.publishedAt}</h5>


    }

    dateFormatted(publishedAt) {
        this.template.querySelector('.card__today').textContent = `${publishedAt.getDate()} ${months[publishedAt.getMonth()]}, ${publishedAt.getFullYear()}`;
    }

    // convertDate(data) {
    //     this.template.querySelector('.card__today').textContent = NewsCard._setFormattedDate(data.Date);

    // }
    // static _setFormattedDate(dataDate) {
    //     const formatter = new Intl.DateTimeFormat('ru-RU', {
    //       day: 'numeric',
    //       month: 'long',
    //       year: 'numeric',
    //     });
    //     const [
    //       { value: day },
    //       ,
    //       { value: month },
    //       ,
    //       { value: year },
    //     ] = formatter.formatToParts(new Date(dataDate));

    //     return `${day} ${month}, ${year}`;

    //   }
}