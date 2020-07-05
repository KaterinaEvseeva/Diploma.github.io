// Вспомогательные функции не относятся к каким-то конкретным классам — это часть функциональности, которая может быть использована в разных местах. 
// Например, это может быть функция форматирования даты или функция, работающая с массивом.
import {months} from '../constants/Constants';

export const dateFormatted = date =>  `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;