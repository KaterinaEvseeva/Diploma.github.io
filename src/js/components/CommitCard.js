// Аналогичен компоненту NewsCard только для карточек коммитов на странице «О проекте».

// import { codePointAt } from "core-js/fn/string";
import {dateFormatted} from '../constants/Constants';

export default class CommitCard {
    constructor(date, name, email, message, avatar_url) {
      this.date = date;
      this.name = name;
      this.email = email;
      this.message = message;
      this.avatar_url = avatar_url;
    }

     createGitCard(commitData) {
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
          <p class="git__text">${commitData.commit.email}</p>
      </div>
  </div>
      `;
  }
  
}