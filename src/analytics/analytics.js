import '../pages/style.css';
import '../pages/analytics.css';
// import searchData from '../index';
// import card from '../index';
import NewsCardList from '../js/components/NewsCardList';
const {articles} = NewsCardList;

// const search = (new URL(location)).get('search')

const analyticsRequest = document.querySelector('.analytics__title_request');
analyticsRequest.textContent = searchData.value;

const newsPerWeek = document.querySelector('.analytics__num');
const newsInHeaders = document.querySelector('.analytics__num_headers');
newsPerWeek.textContent = this.articles.length;