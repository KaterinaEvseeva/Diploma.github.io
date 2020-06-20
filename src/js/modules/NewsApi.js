// // NewsApi. Отвечает за взаимодействие с NewsAPI. У класса есть конструктор, принимающий опции и единственный обязательный метод getNews. 
// // getNews возвращает список новостей на основе запроса.

//  export default class NewsApi {
//     constructor(keyWord, previousDate, currentDate) {
//         this.keyWord = keyWord;
//         this.previousDate = previousDate;
//         this.currentDate = currentDate;
//     }

//    getNews(){
//     return fetch(`https://cors-anywhere.herokuapp.com/` + 
//     `https://praktikum.tk/news/v2/everything?q=${keyWord.value}&from=${previousDate}&to=${currentDate}&pageSize=${100}&apiKey=422aacd7b9af4b66bca82e0f23418cf8`, 
//     {
//         method: 'GET',
//       })
//         .then(res => {
//           if (res.ok) {
//             return res.json();
//           }
//           return Promise.reject(`Не удалось получить данные. Ошибка:${res.status}`);
//         })
//         .catch(err => {
//           throw err;
//         });
//     }
    
// }
