// Аналогичен компоненту NewsCard только для карточек коммитов на странице «О проекте».

import { codePointAt } from "core-js/fn/string";

export default class CommitCard {
    constructor(commiterName, commiterEmail, commiterDate, message, avatarUrl) {
      this.commiterName = commiterName;
      this.commiterEmail = commiterEmail;
      this.commiterDate = commiterDate;
      this.message = message;
      this.avatarUrl = avatarUrl;
    }

    createCommitCard (commitData) {
        const commiterName = document.querySelector('.git__author');
        commiterName.textContent = commitData.commit.committer.name;

        return  ;

    }
}