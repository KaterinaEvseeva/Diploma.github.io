export default class NewsCardList {
    constructor(card, container, data, addForm) {
        this.card = card;
        this.container = container;
        this.data = data;
        this.addForm = addForm;
    }
    addCard() {
        event.preventDefault();
        const cardTitle = this.addForm.elements.title.value;
        const cardDate = this.addForm.elements.publishedAt.value;
        const cardSourceName = this.addForm.elements.sourceName.value;
        const cardDescription = this.addForm.elements.description.value;
        const cardUrlToImage = this.addForm.elements.urlToImage.value;
        const CreateNewCard = this.card.create(cardTitle, cardDate, cardSourceName, cardDescription, cardUrlToImage);
		this.container.insertAdjacentHTML('beforeend', CreateNewCard);
        
    }
    render(data) {
        for (const value of data) {
            const template = this.card.create(value.title, value.publishedAt, value.sourceName, value.description, value.urlToImage);
            this.container.insertAdjacentHTML('beforeend', template);
        }
    }
}




  
// addCard() {
//     const cardName = this.addForm.elements.name.value;
//     const cardLink = this.addForm.elements.link.value;
//     const CreateNewCardFromUser = this.card.createCard(cardLink, cardName);
//     this.container.insertAdjacentHTML('beforeend', CreateNewCardFromUser);
// };
// render(data) {
//     for (const key of data) {
//         const template = this.card.createCard(key.link, key.name);
//         this.container.insertAdjacentHTML('beforeend', template);
//     }
// }