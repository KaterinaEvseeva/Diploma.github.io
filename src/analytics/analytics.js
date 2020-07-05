import '../pages/style.css';
import '../pages/analytics.css';
import { format } from 'path';

const data = JSON.parse(localStorage.getItem('search-resault'));
console.log(data)

if(!data || !data.searchData) {
    //TODO:  !!!
    alert('Err data')
    location = '/';
}
else {
    console.log(data)
    document.querySelector('.analytics__title_request').innerText = data.searchData;
    document.querySelector('.analytics__num').innerText = data.articles.length || 0;

    const {
        titleCount,
        weekDays
    } = articlesStatistics(data.searchData, data.articles);

    document.querySelector('.analytics__num_headers').innerText = titleCount;

    const articlesStat = Object.values(weekDays).sort((item1, item2) => {
        let res = item1.year - item2.year;
        if(res == 0) {
            res = item1.month - item2.month;
        }

        if(res == 0) {
            res = item1.date - item2.date;
        }

        return res;
    }).slice(1);
    

    let maxCnt = Math.max(...articlesStat.map(item => item.cnt));
    console.log(maxCnt)

    if(maxCnt <= 40) {
        maxCnt = 40;
    }
    else {
        const tmp = Math.round(maxCnt / 100) * 100;
        if(tmp < maxCnt) {
            maxCnt =  100 + tmp;
        }
        else {
            maxCnt = tmp;
        }
    }

    const points = [0, Math.round(maxCnt * 0.25), Math.round(maxCnt * 0.5), Math.round(maxCnt * 0.75), maxCnt];
    for(let i = 0; i < points.length; ++i) {
        document.querySelector(`.diagramm__scala_num:nth-child(${i + 1})`).innerText = points[i];
    }
    for(let i = 0; i < articlesStat.length; ++i) {
        console.log(articlesStat[i])

        const diagramBox = document.querySelector(`.digaramm__week_box:nth-child(${i + 1})`);
        diagramBox.querySelector('.diagramm__week_day').innerText = `${articlesStat[i].date}, ${articlesStat[i].dayWeek}`;
        setTimeout(() => {
            diagramBox.querySelector('.digaramm__week_quantity').style.maxWidth = `${Math.round(articlesStat[i].cnt / maxCnt * 100)}%`;
        }, 100);
    }
}

function articlesStatistics(searchData, articles) {
    console.log(searchData, articles)
    let titleCount = 0;

    const weekDays = {};
    let dt = new Date()
    for(let i = 0; i < 8; ++i) {
        weekDays[`${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()}`] = {
            dayWeek: dt.getDay(),
            date: dt.getDate(),
            month: dt.getMonth(),
            year: dt.getFullYear(),
            cnt: 0
        }

        dt = new Date(dt.valueOf() - 1000 * 60 * 60 * 24);
    }


    for(const article of articles) {
        const publishedAt = new Date(article.publishedAt);
        const key = `${publishedAt.getFullYear()}-${publishedAt.getMonth()}-${publishedAt.getDate()}`;
        if(!(key in weekDays)) {
            console.warn(`Not found ${key}`, article);
            continue;
        }
        const titleCountArticle = [...article.title.matchAll(new RegExp(`( |^)${searchData}`, 'ig'))].length;

        weekDays[key].cnt += titleCountArticle;
        weekDays[key].cnt += [...article.description.matchAll(new RegExp(`( |^)${searchData}`, 'ig'))].length;

        titleCount += titleCountArticle;
    }

    return {
        titleCount,
        weekDays
    }
}

/*import searchData from '../index';
/// import card from '../index';
import NewsCardList from '../js/components/NewsCardList';
const {articles} = NewsCardList;

// const search = (new URL(location)).get('search')

const analyticsRequest = document.querySelector('.analytics__title_request');
analyticsRequest.textContent = searchData.value;

const newsPerWeek = ;
newsPerWeek.innerHTML = articles.length;

const newsInHeaders = document.querySelector('.analytics__num_headers');

const analyticsTitle = document.querySelector('.analytics__title');
analyticsTitle.innerHTML = `Вы спросили: ${searchData}`;*/

