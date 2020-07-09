import {
   data
} from "autoprefixer";

const constants = {
   ONE_WEEK: 24 * 60 * 60 * 1000 * 7,
   ONE_DAY: 1000 * 60 * 60 * 24,
   NEWSAPI_KEY: '422aacd7b9af4b66bca82e0f23418cf8',
   NEWSAPI_URL: 'https://praktikum.tk/news/v2/everything',
   CARDS_PER_STRING: 3,
   GITHUB_API_URL: 'https://api.github.com/repos/KateinaEvseeva/Diploma.github.io/commits?sha=level-1',
   // NEWSAPI_KEY: 'ced98f7ead66496eb2bb2486228275c9',

};

export const months = [
   'Января', "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "АВгуста", "Сентября", "Октября", "Ноября", "Декабря"
];

export const weekDayName = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

export const searchResaultGrid = document.querySelector('.search-resault__grid');

export const searchResaultProgress = document.querySelector('.search-resault__progress');

export const searchResaultShowMore = document.querySelector('.search-resault__show-more');

export const searchResaultFail = document.querySelector('.search-resault__fail');

export const searchResaultHeader = document.querySelector('.search-resault__header');

export default constants;