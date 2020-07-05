import {
   data
} from "autoprefixer";

const constants = {
   ONE_WEEK: 24 * 60 * 60 * 1000 * 7,
   ONE_DAY: 1000 * 60 * 60 * 24,
   NEWSAPI_KEY: '422aacd7b9af4b66bca82e0f23418cf8',
   NEWSAPI_URL: 'https://newsapi.org/v2/everything',
   // NEWSAPI_KEY: 'ced98f7ead66496eb2bb2486228275c9',


};

export const months = [
   'Января', "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "АВгуста", "Сентября", "Октября", "Ноября", "Декабря"
];

export const weekDayName = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

export default constants;