
import '../pages/about.css';
import '../pages/style.css';

import '../../node_modules/swiper/css/swiper.css';
import '../../node_modules/swiper/css/swiper.min.css';
import CommitCard from '../js/components/CommitCard';

import CommitCardList from '../js/components/CommitCardList';
import GithubApi from '../js/modules/GithubApi';
import constants from '../js/constants/Constants';
const {MAX_COMMITS} = constants;


const container = document.querySelector('.git.swiper-wrapper');

const commitCard = new CommitCard();
const commitCardList = new CommitCardList(container, commitCard);
const githubApi = new GithubApi();

githubApi.getCommits()
    .then(data => {
        commitCardList.showCommitCards(data.slice(0, MAX_COMMITS));
    })
    .catch((err) => {
        container.textContent = `Коммиты не найдены, код ошибки ${err}`;
    })