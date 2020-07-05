export default class CommitCardList {
    constructor(container, commitCard, commitData) {
        this.container = container;
        this.commitCard = commitCard;
        this.commitData = commitData;
    }

    showCommitCards(commitData) {
        document.querySelector('.git.swiper-wrapper').innerText = data.map(createGitCard).join('');

    }
}