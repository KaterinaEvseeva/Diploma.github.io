import {
   data
} from "autoprefixer";

const constants = {
   ONE_WEEK: 24 * 60 * 60 * 1000 * 7,
   ONE_DAY: 1000 * 60 * 60 * 24,
   NEWSAPI_KEY: 'ced98f7ead66496eb2bb2486228275c9',
   NEWSAPI_URL: 'https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=sailing+dinghies+site:contososailing.com&mkt=en-us HTTP/1.1',


};

export const months = [
   'Января', "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "АВгуста", "Сентября", "Октября", "Ноября", "Декабря"
];

export const weekDayName = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

export default constants;
