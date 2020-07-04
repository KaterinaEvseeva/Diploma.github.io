import '../pages/about.css';
import '../pages/style.css';

import '../../node_modules/swiper/css/swiper.css';
import '../../node_modules/swiper/css/swiper.min.css';
import months from '../js/constants/Constants';
// import { data } from 'autoprefixer';


const dateFormatted = date =>  `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;

function createGitCard(commitData) {
    return `
<div class="git__card swiper-slide">
    <div class="git__card_container">
        <p class="git__day">${dateFormatted(new Date(commitData.commit.committer.date))}</p>
        <div class="git__data">
            <img class="git__photo" src="${!commitData.author ? 'https://avatars1.githubusercontent.com/u/62433500?s=460&u=4a3cbc3821b2d264f61dc21e213813879f5a6d2c&v=4' : commitData.author.avatar_url}"
                alt="${commitData.commit.committer.name}">
            <div class="git__contact">
                <h4 class="git__author">${commitData.commit.committer.name}</h4>
                <h5 class="git__email">${commitData.commit.committer.email}</h5>
            </div>
        </div>
        <p class="git__text">${commitData.commit.message}</p>
    </div>
</div>
    `;
}

// export class GitHubApi {
function getCommites() {
    return fetch('https://api.github.com/repos/KaterinaEvseeva/Diploma.github.io/commits?sha=level-1')
        .then(result => {
            if (result.ok) {
                return result.json();
            }
        })
        .then((data) => {
            console.log(data.map(createGitCard).join(''))
            document.querySelector('.git.swiper-wrapper').innerHTML = data.map(createGitCard).join('');


            const swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 16,
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    450: {
                        slidesPerView: 2,
                        spaceBetween: 8
                    },
                    850: {
                        slidesPerView: 3,
                        spaceBetween: 16
                    }
                },
    
                loop: true,
                infinite: true,
                grabCursor: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    // type: 'bullets',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
    
            });
        })
        .catch((err) => {
            alert('gitMistake')
            console.warn(err)
        })
}
// }

// const gitHubApi = new GitHubApi()
// function createCommitCard (commitData) {
//     const commiterName = document.querySelector('.git__author');
//     const name = commitData.commit.committer.name;
//     commiterName.textContent = name;
// return  ;
// }

// gitHubApi.getCommites()
// .then (commitData => {
//     createCommitCard(commitData);
//     })

// window.addEventListener('onload', getCommites());
//document.querySelector('.body__git').addEventListener('click', getCommites());

getCommites();