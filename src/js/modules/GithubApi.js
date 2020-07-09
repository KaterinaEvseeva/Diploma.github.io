import constants from '../constants/Constants';
const {GITHUB_API_URL} = constants;

export default class GithubApi {
    constructor(gitUrl) {
        this.gitUrl = gitUrl;
    }

    getCommits() {
        return fetch(GITHUB_API_URL)
            .then(resault => {
                if (resault.ok) {
                    return resault.json();
                }
            })
            .then((data) => {
                return data;
            })
    }
}