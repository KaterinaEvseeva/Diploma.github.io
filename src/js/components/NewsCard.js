import {
    dateFormatted
} from '../utils/DataFormatting';
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
             <h5 class="card__today">${dateFormatted(new Date(data.publishedAt))}</h5>
                <h2 class="card__header">${data.title}</h2>
                <p class="card__text">${data.description}.</p>
                <a class="card__resource" href="#">${data.source.name}</a>
            </div>
        </div>`;
        return template;
    }
}