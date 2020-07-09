import {
    swiper
} from '../utils/Swiper';
export default class CommitCardList {
    constructor(container, commitCard) {
        this.container = container;
        this.commitCard = commitCard;

    }

    showCommitCards(data) {
        document.querySelector('.git.swiper-wrapper').insertAdjacentHTML("afterBegin", data.map(this.commitCard.createGitCard).join(''));
        swiper.update();
    }

}