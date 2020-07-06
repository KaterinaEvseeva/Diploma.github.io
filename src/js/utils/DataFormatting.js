import {months} from '../constants/Constants';

export const dateFormatted = date =>  `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;
