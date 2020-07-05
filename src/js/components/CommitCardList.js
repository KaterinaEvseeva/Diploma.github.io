import {
    construct
} from "core-js/fn/reflect";

//  NewsCardList
export default class CommitCardList {
    constructor(container, commitCard, commitData) {
        this.container = container;
        this.commitCard = commitCard;
        this.commitData = commitData;
    }

    showCommitCards(commitData) {
        document.querySelector('.git.swiper-wrapper').innerHTML = data.map(createGitCard).join('');

    }
}