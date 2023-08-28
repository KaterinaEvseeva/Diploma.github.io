import {
   data
} from "autoprefixer";

const constants = {
   ONE_WEEK: 24 * 60 * 60 * 1000 * 7,
   ONE_DAY: 1000 * 60 * 60 * 24,
   NEWSAPI_KEY: 'ced98f7ead66496eb2bb2486228275c9',
   NEWSAPI_URL: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ced98f7ead66496eb2bb2486228275c9',


};

export const months = [
   'Января', "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "АВгуста", "Сентября", "Октября", "Ноября", "Декабря"
];

export const weekDayName = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

export default constants;
