var date_all_for_auto = new Date;
date_all_for_auto.setDate(date_all_for_auto.getDate() + 14);
document.cookie = 'test_all_for_auto=1; path=/; expires=' + date_all_for_auto.toUTCString();
document.oncopy = function () {
    var bodyEl = document.getElementsByTagName('body')[0], selection = window.getSelection();
    if (selection.toString().length > 25) {
        var newDiv = document.createElement('div'),
            pageLink = ['<p>Источник: <a href="', document.location.href, '">', document.location.href, '</a> © AUTO.RIA.com™</p>'].join('');
        newDiv.style.position = 'absolute';
        newDiv.style.left = '-99999px';
        bodyEl.appendChild(newDiv);
        newDiv.innerHTML = selection + pageLink;
        selection.selectAllChildren(newDiv);
        window.setTimeout(function () {
            bodyEl.removeChild(newDiv)
        }, 0)
    }
}
!function (e) {
    "use strict";
    var n = function (n, t, o) {
        var l, r = e.document, i = r.createElement("link");
        if (t) l = t; else {
            var a = (r.body || r.getElementsByTagName("head")[0]).childNodes;
            l = a[a.length - 1]
        }
        var d = r.styleSheets;
        i.rel = "stylesheet", i.href = n, i.media = "only x", l.parentNode.insertBefore(i, t ? l : l.nextSibling);
        var f = function (e) {
            for (var n = i.href, t = d.length; t--;)if (d[t].href === n)return e();
            setTimeout(function () {
                f(e)
            })
        };
        return i.onloadcssdefined = f, f(function () {
            i.media = o || "all"
        }), i
    };
    "undefined" != typeof module ? module.exports = n : e.loadCSS = n
}("undefined" != typeof global ? global : this);
loadCSS("https://css.riastatic.com/stylesheets/screen.css?v=1.092");
loadCSS("https://css.riastatic.com/stylesheets/init.css?v=1.092");
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
    var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-P46SHG8');
window.ria = {langId: '2' | 0 || 2};
var _gaq = _gaq || [];
if (location.search.indexOf('disable_gaq=1') == -1) {
    _gaq.push(['_setAccount', 'UA-119062-1']);
    _gaq.push(['_trackPageview']);
    _gaq.push(['_trackPageLoadTime']);
    _gaq.push(['b._setAccount', 'UA-37267794-4']);
    _gaq.push(['b._trackPageview']);
}
(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

var OA_zones = {
    'banner_940x180': 78,
    'banner_940x110': 79,
    'banner_700x180': 100,
    'banner_700x180_mob': 108,
    'banner_400x180': 80,
    'banner_480x150': 81,
    'banner_300x150': 86,
    'banner_620x120': 83,
    'banner_620x120_promo': 84,
    'banner_620x120_mob': 109,
    'banner_600x300': 85,
    'banner_220x150': 101,
    'banner_750x180': 107,
    'banner_300x150_2': 87,
    'CatFish_mob': 115,
    'banner_login': 50
};
(function () {
    var brand = Number() || 0, model = Number() || 0, catalogName = 'category';
    switch (catalogName) {
        case "brandModel":
        case "marka_model":
            if (!brand || !model) window.location = "/404.html";
            break;
    }
})();
<
div > < div
class
= "boxed" > < span
class
= "icon-notification"
onclick = "_gaq.push(['_trackEvent','Show_Notification','clickon_button','header'])" > < / span > < span
class
= "count-favorite {showCountOfNotifications}" > {countOfNotifications} < / span > < / div > < div
class
= "popup __uarr notification-popup hide" > < div
class
= "item-row {showCountOfNotifications}"
id = "js-head-notification-popup" > < span
class
= "size18" > У
Вас
{
    countOfNotifications
}
&
nbsp;
<
span
class
= "{oneNew}" > новое < / span > < span
class
= "{manyNew}" > новых < / span > & nbsp;
<
span
class
= "{oneNew}" > уведомление < / span > < span
class
= "{manyNew}" > уведомлений < / span >
:                </
span > < span
class
= "area size13 {showMakeAllViewed}" > < a
class
= "makeAllViewed"
href = "javascript:void(0);"
onclick = "_gaq.push(['_trackEvent','DoRead_Notification','clickon_link','header'])" > Сделать
все
прочитанным < / a > < / span > < / div > < div
id = "notificationBarItemsContainer" > < / div > < a
href = "https://auto.ria.com/mynotifications/"
class
= "item-row boxed text-c bg-item"
onclick = "_gaq.push(['_trackEvent','ShowMore_Notification','clickon_link','header'])" > Смотреть
все < span
class
= "{showCountOfNotifications}" > {countOfNotifications} < / span > < span
class
= "hid{showCountOfNotifications}" > уведомления < / span > & nbsp;
<
span
class
= "{oneNew}" > новое < / span > < span
class
= "{manyNew}" > новых < / span > & nbsp;
<
span
class
= "{oneNew}" > уведомление < / span > < span
class
= "{manyNew}" > уведомлений < / span >
→            </
a > < / div > < / div > < div
class
= "item-row unlink text noread"
data - notification - id = "{notificationId}"
data - url = "{notificationLink}"
target = "_blank"
onclick = "_gaq.push(['_trackEvent','Goto_Notification','clickon_link','header'])" > < a
class
= "close notification-popup-close removeNotification {removeNotification}"
href = "javascript:void(0);"
title = "удалить в архив"
onclick = "_gaq.push(['_trackEvent','Delete_Notification','clickon_icon','header'])" >
×</
a > < i
class
= "{iconByStatus}" > ! < / i > < span
class
= "fl-r {dateClass} n-date" > {date} < br / > {time} < / span > < span
class
= "n-message" > < span
class
= "d-table" > < span
class
= "t-cell" > < span
{
    title
}
></
span > < / span > < / span > < / span > < / div > < header
class
= "app-header"
id = "headerApp" > < div
class
= "app-head" > < div
class
= "container" > < div
class
= "app-head-bar" > < div
class
= "item notification-bar"
id = "notificationBarContainer" > < / div > < a
href = "https://auto.ria.com/notepad.html"
class
= "item"
id = "headerBookmarksLink" > < span
class
= "{bookmarksIconClass}" > < / span > < span
class
= "count-favorite"
style = "display: {withBookmarksCount}" > {bookmarksCount} < / span > < / a > < div
class
= "item user-menu"
id = "headerLinkToMyMenu"
style = "display: {withMyMenuLink}" > < a
href = "https://auto.ria.com/mymenu/"
class
= "link-mymenu" > < span
class
= "tl" > Моё
меню < / span > < img
class
= "user-avatar"
width = "30"
height = "30"
src = "{userAvatar}" / > < / a > < div
class
= "popup __uarr user-popup"
style = "display: {withPopup}" > < div
class
= "wrapper" > < a
href = "https://auto.ria.com/?exit=yes"
class
= "area" > Выход < / a > < div
class
= "avatar" > < img
class
= "user-avatar"
width = "70"
src = "{userAvatar}" / > < / div > < ul
class
= "unstyle popup-user__info" > < li
class
= "user-name" > {userName} < / li > < li
class
= "id" > ID
:
{
    userId
}
</
li > < li
class
= "phone"
style = "display: {withUserPhones_0}" > {userPhones_0} < / li > < li
class
= "phone"
style = "display: {withUserPhones_1}" > {userPhones_1} < / li > < li
class
= "phone"
style = "display: {withUserPhones_2}" > {userPhones_2} < / li > < li
class
= "phone"
style = "display: {withUserPhones_3}" > {userPhones_3} < / li > < li
class
= "phone"
style = "display: {withUserPhones_4}" > {userPhones_4} < / li > < li
class
= "phone"
style = "display: {withUserPhones_5}" > {userPhones_5} < / li > < / ul > < / div > < hr / > < div
class
= "wrapper" > < div
class
= "text-c" > < a
class
= "button large"
href = "https://auto.ria.com/mymenu/" > Перейти
в
личный
кабинет < / a > < / div > < ul
class
= "unstyle user-data__menu" > < li
class
= "item-menu" > < i
class
= "icon-add-small" > < / i > Добавлено < a
href = "https://auto.ria.com/user/menu/?section=active&viewType=active" > {activeAdsCount}
объявлений < / a > < / li > < / ul > < / div > < / div > < / div > < a
href = "https://auto.ria.com/login.html"
class
= "item"
style = "display: {withLoginLink}" > < span
class
= "tl" > Вход < / span > < span
class
= "circle" > < i
class
= "icon-user" > < / i > < / span > < / a > < span
class
= "item multilang" > рус | < a
id = "ukr"
class
= "selectLang"
data - lang - code = "uk"
href = "https://auto.ria.com/uk/legkovie/?page=0" > укр < / a > < / span > < / div > < nav
class
= "nav-head" > < a
class
= "item"
target = "_blank"
href = "https://www.ria.com/" > RIA.com < / a > < a
class
= "item active"
href = "https://auto.ria.com/" > Автомобили < / a > < a
class
= "item"
target = "_blank"
href = "https://dom.ria.com/?utm_source=auto_ria&utm_medium=text_link&utm_content=nedvigimost&utm_campaign=header" > Недвижимость < / a > < a
class
= "item"
target = "_blank"
href = "https://market.ria.com/?utm_source=auto.ria.com&utm_medium=text_link&utm_content=magazin_avtotovarov&utm_campaign=header" > Автомагазин < / a > < a
class
= "item"
target = "_blank"
href = "https://zapchasti.ria.com/" > Автозапчасти < / a > < / nav > < / div > < / div > < div
class
= "container bn-place panel-banner"
id = "banner_940x180" > < / div > < div
class
= "container-header" > < a
href = "https://auto.ria.com/"
class
= "logo" > < img
src = "https://css.riastatic.com/images/autoria.png"
width = "160"
height = "48" / > < / a > < div
class
= "areabar" > < a
href = "https://auto.ria.com/add_auto.html"
class
= "button-add" > < i
class
= "icon-add-white" > < / i > Добавить
объявление < / a > < / div > < div
class
= "wrapper" > < ul
class
= "unstyle nav-list" > < li
class
= "nav-list_item" > < a
href = "https://auto.ria.com/car/used/"
class
= "elem-tab"
data - type = "bu" > Автомобили
б / у < / a > < / li > < li
class
= "nav-list_item" > < a
href = "https://auto.ria.com/newauto/"
class
= "elem-tab"
data - type = "new" > Новые
авто < / a > < / li > < li
class
= "nav-list_item" > < a
href = "https://auto.ria.com/news/"
class
= "elem-tab"
data - type = "news" > Новости < / a > < / li > < li
class
= "nav-list_item  has-dropdown " > < a
href = "https://auto.ria.com/all_for_auto/?popup=2"
class
= "elem-tab"
id = "AllForAuto"
data - type = "all_for_auto"
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_all_for_auto', 'all_for_auto_popup'])" > Все
для
авто < / a > < div
class
= "nav-list_dropdown" > < div
class
= "dropdown-title" > Ремонт
авто < / div > < ul
class
= "unstyle dropdown-list" > < li
class
= "dropdown-list_item" > < a
href = "https://auto.ria.com/autoservice/sto/"
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_autoservice', 'Want_to_sell_popup'])" > Каталог
СТО < span
class
= "grey" > (93) < / span > < / a > < / li > < li
class
= "dropdown-list_item" > < a
href = "https://auto.ria.com/avtorazborka/"
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_avtorazborka', 'Want_to_sell_popup'])" > Каталог
авторазборок < span
class
= "grey" > (803) < / span > < / a > < / li > < li
class
= "dropdown-list_item" > < a
href = "https://zapchasti.ria.com/"
target = "_blank"
title = ""
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_zapchasti', 'Want_to_sell_popup'])" > Автозапчасти
на
RIA.com < span
class
= "grey" > (900
000 +
)</
span > < / a > < / li > < li
class
= "dropdown-list_item" > < a
href = "https://auto.ria.com/avtorazborka/#stolzakazov"
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_autoservice_table', 'Want_to_bay_popup'])" > Стол
заказа
запчастей < / a > < / li > < / ul > < div
class
= "dropdown-title" > Услуги
для
авто < / div > < ul
class
= "unstyle dropdown-list" > < li
class
= "dropdown-list_item" > < a
href = "https://auto.ria.com/avtovikup/"
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_avtovikup', 'Want_to_sell_popup'])" > Автовыкуп < / a > < / li > < li
class
= "dropdown-list_item" > < a
href = "https://auto.ria.com/autocheck/"
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_autocheck', 'Want_to_bay_popup'])" >
«
Проверьте
авто
»
на
AUTO.RIA < / a > < / li > < li
class
= "dropdown-list_item" > < a
href = "https://auto.ria.com/price/average/"
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_average_price', 'Want_to_bay_popup'])" > Подсчет
средней
цены
авто < / a > < / li > < li
class
= "dropdown-list_item" > < a
href = "https://auto.ria.com/rastamozhka-avto/#catalogsCustomCalculator"
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_rastamozhka', 'undefined_popup'])" > Таможенный
калькулятор < / a > < / li > < / ul > < div
class
= "dropdown-title" > Поиск
автомобиля
и
автотоваров < / div > < ul
class
= "unstyle dropdown-list" > < li
class
= "dropdown-list_item" > < a
href = "https://auto.ria.com/dealers/"
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_dealers', 'Want_to_buy_popup'])" > Авто
с
пробегом
от
Автодилеров < / a > < / li > < li
class
= "dropdown-list_item" > < a
href = "https://auto.ria.com/autointer/"
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_autointer', 'Want_to_buy_popup'])" > Авто
из - за
рубежа < / a > < / li > < li
class
= "dropdown-list_item" > < a
href = "https://auto.ria.com/reviews/"
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_reviews', 'undefined_popup'])" > Отзывы
об
авто < span
class
= "grey" > (99
000 +
)</
span > < / a > < / li > < li
class
= "dropdown-list_item" > < a
href = "https://market.ria.com/?utm_source=auto.ria.com&amp;utm_medium=text_link&amp;utm_content=main_page&amp;utm_campaign=main_page_avto"
target = "_blank"
onclick = "_gaq.push(['_trackEvent', 'all_for_auto', 'Click_on_market_ria', 'undefined_popup'])" > Товары
для
авто < span
class
= "grey" > (27
000 +
)</
span > < / a > < / li > < / ul > < / div > < / li > < / ul > < / div > < div
class
= "review-front" > < a
class
= "size21 unlink brand-color"
href = "https://auto.ria.com/stat/"
target = "_blank" > 1400
авто
за
день
продається
на
AUTO.RIA < / a > < / div > < / div > < / header > < header
class
= "app-header-mobile"
id = "headerApp" > < a
href = "https://auto.ria.com/"
onclick = "_gaq.push(['_trackEvent', 'logo_mobile_header', 'Click_on_header', 'Header']);"
class
= "logo" > < img
src = "https://css.riastatic.com/images/autoria.png"
width = "160"
height = "48"
alt = "" / > < / a > < div
class
= "app-head" > < div
class
= "app-head-bar" > < a
href = "https://auto.ria.com/notepad.html"
class
= "item bookmarks"
id = "headerBookmarksLink" > < span
class
= "{bookmarksIconClass}" > < / span > < span
class
= "count-favorite"
style = "display: {withBookmarksCount}" > {bookmarksCount} < / span > < / a > < a
href = "https://auto.ria.com/search/"
onclick = "_gaq.push(['_trackEvent', 'search_mobile_header', 'Click_on_header', 'Header']);"
class
= "item" > < span
class
= "icon-search" > < / span > < / a > < a
href = "https://auto.ria.com/add_auto.html"
onclick = "_gaq.push(['_trackEvent', 'add_mobile_header', 'Click_on_header', 'Header']);"
class
= "item pluse" > < span
class
= "icon-pluse" > < / span > < / a > < a
href = "https://auto.ria.com/mymenu/"
onclick = "_gaq.push(['_trackEvent', 'mymenu_mobile_header', 'Click_on_header', 'Header']);"
data - toggle = "#userSubMenu"
class
= "item" > < span
class
= "icon-menu" > < / span > < / a > < / div > < / div > < div
class
= "collapse"
id = "userSubMenu" > < ul
class
= "unstyle menu" > < li
class
= "item-menu" > < span
class
= "m_multilang" > < a
class
= "on"
href = "javascript:void(0)" > рус < / a > < a
class
= "selectLang"
data - lang - code = "uk"
href = "https://auto.ria.com/uk/legkovie/?page=0" > укр < / a > < / span > < a
class
= "_menu"
href = "https://auto.ria.com/login.html?from_url=/legkovie/?page=0"
style = "display: {withLoginLink}" > Вход < / a > < a
class
= "_menu"
href = "https://auto.ria.com/mymenu/"
style = "display: {withoutLoginLink}" > Моё
меню < / a > < / li > < li
class
= "item-menu" > < a
href = "https://auto.ria.com/car/used/" > Автомобили
б / у < / a > < / li > < li
class
= "item-menu" > < a
href = "https://auto.ria.com/newauto/" > Новые
авто < / a > < / li > < li
class
= "item-menu" > < a
href = "https://auto.ria.com/news/" > Новости < / a > < / li > < li
class
= "item-menu" > < a
href = "https://auto.ria.com/all_for_auto/" > Все
для
авто < / a > < / li > < li
class
= "item-menu" > < a
href = "https://auto.ria.com/mobile_app/" > Загрузить
приложение < / a > < / li > < li
class
= "item-menu"
style = "display: {withoutLoginLink}" > < a
class
= "_login"
href = "https://auto.ria.com/?exit=yes/" > Выход < / a > < / li > < / ul > < / div > < / header > < div
class
= "fixed-mobile"
id = "CatFish_mob_contaner" > < a
class
= "close"
href = "javascript:void(0);"
onclick = "$('#CatFish_mob_contaner').empty();" >
×</
a > < div
id = "CatFish_mob" > < / div > < / div > < div
class
= "fixed-mobile"
id = "CatFish_mob_contaner" > < / div > window.ria = window.ria || {};
window.ria.exchangeRates = [{
    "name": "USD",
    "bid": "26.29",
    "ask": "26.33",
    "changeBid": 0,
    "changeAsk": 0,
    "date": "2017-05-11T20:00:00.000Z",
    "unix_time": 1494450000
}, {
    "name": "EUR",
    "bid": "28.49",
    "ask": "28.59",
    "changeBid": 0,
    "changeAsk": 0,
    "date": "2017-05-11T20:00:00.000Z",
    "unix_time": 1494450000
}];
_gaq.push(['_setCustomVar', 1, 'Catalog_main_page_count', '20', 2]);
<
div
id = "showBreadcrumbs"
class
= "panel-breadcrumbs"
ria_ppih_index = "true"
ria_ppih_title = "Подсказка"
ria_ppih_text = "Позволяет перейти на любой тематический раздел или подраздел сайта без использования поиска" > < div
class
= "breadcrumbs size13"
id = "final_page__breadcrumbs_container" > < div
itemscope = ""
itemtype = "http://data-vocabulary.org/Breadcrumb"
class
= "item" > < a
itemprop = "url"
href = "https://auto.ria.com/"
title = "AUTO.RIA — лидер автомобильной интернет-торговли"
itemprop = "url" > < span
itemprop = "title" > AUTO.RIA.com < / span > < / a > < / div > < div
itemscope = ""
itemtype = "http://data-vocabulary.org/Breadcrumb"
class
= "item" > < a
itemprop = "url"
href = "https://auto.ria.com/car/used/"
title = "Бу авто"
itemprop = "url" > < span
itemprop = "title" > Бу
авто < / span > < / a > < / div > < div
class
= "item" > < span > Легковые < / span > < / div > < / div > < / div > < div
id = "showBreadcrumbs" > < / div > < li
class
= "list-item"
data - text = "{name}" > < a
class
= "item" > {name} < / a > < / li > < div
class
= "bn-place span4"
id = "banner_300x250" > < div
id = "adriver_banner" > < / div > < / div > window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19550518] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-14 15:47:05",
    "updateDate": "2017-05-14 15:52:32",
    "expireDate": "2017-08-14 15:47:05",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 27700,
    "UAH": 729341,
    "EUR": 25510,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 601, "label": 1, "hotType": "горячее", "expireDate": "2017-05-19 13:01:25"},
    "autoData": {
        "description": "ИНТЕЛЛЕКТУАЛЬНАЯ ЛИНЗОВАННАЯ LED-оптика-автоматически адаптируется к текущей ситуации на дороге,функция улучшенного освещения при ",
        "version": "TSI TURBO 7G-TRONIC",
        "onModeration": false,
        "year": 2014,
        "autoId": 19550518,
        "statusId": 0,
        "withVideo": false,
        "race": "194 тыс. км",
        "raceInt": 194,
        "fuelName": "Газ/бензин, 2 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Mercedes-Benz",
    "markId": 48,
    "modelName": "E-Class",
    "modelId": 428,
    "photoData": {
        "count": 114,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182828131m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182828131sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182828131b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182828131f.jpg"
    },
    "linkToView": "/auto_mercedes-benz_e-class_19550518.html",
    "title": "Mercedes-Benz E-Class TSI TURBO 7G-TRONIC",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": true, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19550518/",
        "hasRestrictions": false,
        "checkDate": "14.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
<
div
class
= "hover-photo {first}" > < a
target = "{linkTarget}"
class
= "{photoClass}"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
rel = "nofollow" > < img
src = "{img}" / > < span
class
= "hover-title" > {marka}
{
    model
}
{
    complete
}
</
span > < / a > < div
class
= "hover-description" > < span
class
= "green" > {price} < / span > {currency} < / div > < / div > < div
class
= "hover-photo {first}" > < a
target = "{linkTarget}"
class
= "{photoClass}"
href = "{link}"
action = "send_statistics"
rel = "nofollow"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}" > < img
src = "{img}" / > < span
class
= "hover-title" > {marka}
{
    model
}
{
    complete
}
</
span > < / a > < div
class
= "hover-description" > < span
class
= "green" > {price} < / span > {currency} < / div > < div
class
= "details" > < ul
class
= "unstyle characteristic" > < li
class
= "item {fuelHide}" > < i
class
= "icons-characteristics-fuel" > < / i > {engineVolume}
л., {fuel} < / li > < li
class
= "item {gearHide}" > < i
class
= "icons-characteristics-transmission" > < / i > {gear} < / li > < li
class
= "item" > < i
class
= "icon-location" > < / i > {city} < / li > < / ul > < / div > < / div > < div
class
= "item boxed" > < a
target = "{linkTarget}"
class
= "{photoClass}"
href = "{link}"
action = "send_statistics"
rel = "nofollow"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
class
= "photo-185x120"
title = "{marka} {model} {complete}" > < img
src = "{img}" / > < / a > < dl
class
= "subscribe-item" > < dt
class
= "title rows" > < a
target = "{linkTarget}"
action = "send_statistics"
rel = "nofollow"
block = "informer"
element = "link"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
title = "{marka} {model} {complete}"
href = "{link}" > < strong > {marka}
{
    model
}
{
    complete
}
</
strong > < / a > < / dt > < dd
class
= "rows" > < strong
class
= "price" > {price} < / strong > {currency} < / dd > < dd
class
= "rows" > < i
class
= "icon-location" > < / i > {city} < / dd > < dd
class
= "rows" > < span
class
= "grey" > {year} < / span > < / dd > < / dl > < / div > < a
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
class
= "{photoClass}"
action = "send_statistics"
block = "informer_bottom"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
class
= "photo-185x120"
title = "{marka} {model} {complete}" > < span
class
= "item-description" > < span
class
= "top-information boxed" > < span
class
= "name overflowed" > {marka}
{
    model
}
</
span > < span
class
= "price overflowed" > {priceText} < span
class
= "size18" > {price} < / span > {currency} < / span > < / span > < span
class
= "labels-list boxed" > < span
class
= "label-hot darck-blue {testdriveHide}" > Тест - драйв < / span > < span
class
= "label-hot red {creditorsHide}" > Кредит < / span > < span
class
= "label-hot red {actionsHide}" > Акция < / span > < span
class
= "label-hot green-b {inStockHide}" > Есть
в
наличии < / span > < / span > < / span > < span
class
= "description" > < ul
class
= "unstyle hover-characteristic boxed" > < li
class
= "item-char location"
title = "Регион" > < span
class
= "item-icon" > < i
class
= "icon-location-white" > < / i > < / span > {city} < / li > < li
class
= "item-char {fuelHide}"
title = "Топливо" > < span
class
= "item-icon" > < i
class
= "icon-fuel-white" > < / i > < / span > {engineVolume}
л., {fuel} < / li > < li
class
= "item-char {gearHide}"
title = "Коробка" > < span
class
= "item-icon" > < i
class
= "icon-transmission-white" > < / i > < / span > {gear} < / li > < / ul > < / span > < img
src = "{img}"
alt = "{marka} {model} {complete}" / > < / a > < div
class
= "ticket-item paid-informer" > < div
class
= "action-bar" > < span
class
= "item promote-level informer" > реклама < / span > < / div > < div
class
= "content-bar" > < div
class
= "ticket-photo" > < a
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
class
= "photo-185x120"
action = "send_statistics"
block = "informer_top"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
title = "{marka} {model} {complete}" > < img
alt = "{marka} {model} {complete}"
title = "{marka} {model} {complete}"
src = "{img}" / > < / a > < / div > < div
class
= "content" > < div
class
= "head-ticket" > < div
class
= "item ticket-title" > < a
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
class
= "address"
action = "send_statistics"
block = "informer_top"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
title = "{marka} {model} {complete}" > < strong > {marka}
{
    model
}
{
    complete
}
</
strong > {year} < / a > < / div > < / div > < div
class
= "price-ticket" > < strong
class
= "green size18" > {price} < / strong > {currency} & nbsp;
<
span
class
= "label-hot in-stock {inStockHide}"
title = "Это авто в данный момент находится на площадке у салона" > Есть
в
наличии < / span > < div
class
= "location" > < i
class
= "icon-location" > < / i > {city} < / div > < / div > < div
class
= "if-dealer" > < span
class
= "dealer-logo {withSalonLogo}" > < img
width = "40"
src = "https://cdn.riastatic.com/photos/{salonLogo}sn.jpg"
title = "{salonName}" / > < / span > < / div > < div
class
= "definition-data" > < ul
style = "height: 20px;margin-bottom: 2px;"
class
= "unstyle characteristic overflowed" > < li
class
= "item-char {withEngineVolumeFuel}"
title = "Топливо" > < i
class
= "icons-characteristics-fuel" > < / i > {engineVolume}
л., {fuel} < / li > < li
class
= "item-char {gearHide}"
title = "Коробка" > < i
class
= "icons-characteristics-transmission" > < / i > {gear} < / li > < li
class
= "item-char"
title = "Привод"
style = "display:{withDriveType};" > < i
class
= "icons-characteristics-drive" > < / i > {drive} < / li > < li
class
= "item-char"
title = "Тип кузова"
style = "display:{withBodyType};" > < i
class
= "icon-bodytype" > < / i > {body} < / li > < / ul > < / div > < div
class
= "label-block clearfix" > < span
class
= "label-hot red {actionsHide}" > Акция < / span > < span
class
= "label-hot red {creditorsHide}"
style = "margin-bottom: 2px;" > Кредит < / span > < span
class
= "label-hot darck-blue {testdriveHide}" > Тест - драйв < / span > < a
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
class
= "fl-r"
action = "send_statistics"
block = "informer_top"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
title = "{marka} {model} {complete}" > {salonWebsite}
→</
a > < / div > < / div > < / div > < / div > < div
class
= "ticket-item-newauto paid" > < div
class
= "informer-label" > реклама < / div > < div
class
= "top-block" > < div
class
= "clearfix" > < div
class
= "name overflowed informer" > < a
class
= "bold size17"
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
action = "send_statistics"
block = "informer_top"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
title = "{marka} {model} {complete}" > {marka}
{
    model
}
{
    complete
}
</
a > < / div > < div
class
= "year grey text-r" > {year} < / div > < / div > < div
class
= "clearfix block-price with-in-stock" > < div
class
= "column" > < div
class
= "item-width overflowed" > < strong
class
= "size22 green"
title = "{price}" > {price} < / strong > {currency} < span
class
= "label-hot in-stock {inStockHide}"
title = "Это авто в данный момент находится на площадке у автосалона" > в
наличии < / span > < / div > < / div > < div
class
= "column" > < div
class
= "item-width overflowed text-r block-region" > {city} < / div > < / div > < / div > < / div > < div
class
= "block-photo" > < a
target = "{linkTarget}"
class
= "photo-car"
href = "{link}"
rel = "nofollow"
action = "send_statistics"
block = "informer_top"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
title = "{marka} {model} {complete}" > < span
class
= "hot-block left" > < span
class
= "label darck-blue {testdriveHide}"
onclick = "event.preventDefault();window.open('/newauto/testdrive/?marka_id={markaId}&amp;model_id={modelId}&amp;year={year}', '_blank')" > Тест - драйв < / span > < span
class
= "label red {creditorsHide}" > Кредит < / span > < span
class
= "label red {actionsHide}" > Акция < / span > < / span > < img
alt = "{marka} {model} {complete}"
title = "{marka} {model} {complete}"
src = "{img}" / > < div
class
= "description" > < div
class
= "boxed item-description text-c" > Автосалон
:
{
    salonName
}
</
div > < / div > < / a > < / div > < div
class
= "characteristic-bottom mobile-hide" > < div
class
= "clearfix" > < ul
class
= "unstyle characteristic-block clearfix" > < li
class
= "item-char column overflowed {withEngineVolumeFuel}"
title = "Топливо" > < span
class
= "item-icon" > < i
class
= "icons-characteristics-fuel" > < / i > < / span > {engineVolume}
л., {fuel} < / li > < li
class
= "item-char column overflowed {gearHide}"
title = "Коробка" > < span
class
= "item-icon" > < i
class
= "icons-characteristics-transmission" > < / i > < / span > {gear} < / li > < li
class
= "item-char column overflowed"
title = "Привод"
style = "display:{withDriveType};" > < span
class
= "item-icon" > < i
class
= "icons-characteristics-drive" > < / i > < / span > {drive} < / li > < li
class
= "item-char column overflowed" > < a
href = "javascript:void(0);"
class
= "link-dotted"
data - type = "characteristics"
data - completeid = "{completeId}"
data - autoid = "{autoId}" > Все
характеристики < / a > < / li > < / ul > < / div > < / div > < / div > < div
class
= "ticket-item paid informer var1" > < div
class
= "content-bar" > < div
class
= "ticket-photo" > < a
target = "{linkTarget}"
title = "{marka} {model} {complete} {year}"
rel = "nofollow"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
class
= "photo-185x120" > < img
alt = "{marka} {model} {complete} {year}"
title = "{marka} {model} {complete} {year}"
src = "{img}" / > < / a > < / div > < div
class
= "content" > < div
class
= "head-ticket" > < div
class
= "item ticket-title" > < a
target = "{linkTarget}"
class
= "address"
title = "{marka} {model} {complete} {year}"
rel = "nofollow"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}" > < strong > Новый
{
    marka
}
{
    model
}
{
    complete
}
</
strong > {year} < / a > < / div > < / div > < div
class
= "price-ticket" > < span
class
= "size16" > < strong
class
= "green" > {priceUsd} < / strong > {currencyUsd} < / span > < span
class
= "label-hot in-stock {inStockHide}"
title = "Это авто в данный момент находится на площадке у салона" > Есть
в
наличии < / span > < div
class
= "location" > < i
class
= "icon-location" > < / i > {city} < / div > < / div > < div
class
= "if-dealer" > < a
target = "{linkTarget}"
title = "{marka} {model} {complete} {year}"
rel = "nofollow"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}" > < div
class
= "text-r" > Автосалон < / div > < span > < img
width = "40"
data - ga - section = "Ads"
src = "{salon_logo}" / > < / span > < / a > < / div > < div
class
= "definition-data" > < ul
class
= "unstyle characteristic" > < li
class
= "item-char {gearHide}" > < i
class
= "icons-characteristics-fuel"
title = "Тип топлива" > < / i > {engineVolume}
л., {fuel} < / li > < li
class
= "item-char {gearHide}" > < i
class
= "icons-characteristics-transmission"
title = "Тип коробки передач" > < / i > {gear} < / li > < / ul > < div
class
= "label-block {labelBlockHide}" > Автосалон
предлагает: <
span
class
= "{actionsHide}" > Акция < / span > < span
class
= "{creditorsHide}" > Кредит < / span > < span
class
= "{testdriveHide}" > Тест - драйв < / span > < / div > < / div > < / div > < / div > < / div > < div
class
= "ticket-item paid informer var2" > < div
class
= "content-bar" > < div
class
= "ticket-photo" > < a
target = "{linkTarget}"
title = "{marka} {model} {complete} {year}"
rel = "nofollow"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
class
= "photo-185x120" > < img
alt = "{marka} {model} {complete} {year}"
title = "{marka} {model} {complete} {year}"
src = "{img}" / > < / a > < / div > < div
class
= "content" > < div
class
= "head-ticket" > < span
class
= "label-hot blue"
title = "Новый {marka} {model} {complete} {year}" > новый < / span > < div
class
= "item ticket-title" > < a
target = "{linkTarget}"
class
= "address"
title = "{marka} {model} {complete} {year}"
rel = "nofollow"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}" > < strong > {marka}
{
    model
}
{
    complete
}
</
strong > {year} < / a > < / div > < / div > < div
class
= "price-ticket" > < span
class
= "size16" > < strong
class
= "green" > {priceUsd} < / strong > {currencyUsd} < / span > < span
class
= "label-hot in-stock {inStockHide}"
title = "Это авто в данный момент находится на площадке у салона" > Есть
в
наличии < / span > < div
class
= "location" > < i
class
= "icon-location" > < / i > {city} < / div > < / div > < div
class
= "if-dealer" > < a
target = "{linkTarget}"
title = "{marka} {model} {complete} {year}"
rel = "nofollow"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}" > < div
class
= "text-r" > Автосалон < / div > < span > < img
width = "40"
data - ga - section = "Ads"
src = "{salon_logo}" / > < / span > < / a > < / div > < div
class
= "definition-data" > < ul
class
= "unstyle characteristic" > < li
class
= "item-char {gearHide}" > < i
class
= "icons-characteristics-fuel"
title = "Тип топлива" > < / i > {engineVolume}
л., {fuel} < / li > < li
class
= "item-char {gearHide}" > < i
class
= "icons-characteristics-transmission"
title = "Тип коробки передач" > < / i > {gear} < / li > < / ul > < div
class
= "label-block {labelBlockHide}" > Автосалон
предлагает: <
span
class
= "{actionsHide}" > Акция < / span > < span
class
= "{creditorsHide}" > Кредит < / span > < span
class
= "{testdriveHide}" > Тест - драйв < / span > < / div > < / div > < / div > < div
class
= "footer-ticket footer-ticket--mod clearfix" > < span
class
= "view-all" > < a
class
= "show-more size15"
href = "/newauto/search/"
target = "_blank"
action = "send_statistics"
block = "informer"
element = "all"
internal = "1" > Смотреть
все
45
700 + новых
авто < / a > < / span > < / div > < / div > < / div > < a
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
class
= "item-rotator boxed" > < span
class
= "photo-185x120 photo-item"
title = "{marka} {model} {complete} {year}" > < img
src = "{img}" / > < / span > < dl
class
= "description-item" > < dt
class
= "rows name" > < span
class
= "size18 link" > {marka}
{
    model
}
{
    complete
}
</
span > < / dt > < dd
class
= "rows" > < span
class
= "grey" > {year} < / span > < / dd > < dd
class
= "rows" > < strong
class
= "green size18" > {price} < / strong > < span
class
= "text" > {currency} < / span > < / dd > < dd
class
= "rows text" > < i
class
= "icon-location" > < / i > {city} < / dd > < / dl > < / a > < a
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
class
= "item-rotator" > < div
class
= "top-information" > < span
class
= "link name size18 overflowed" > {marka}
{
    model
}
{
    complete
}
</
span > < span
class
= "grey fl-r" > {year} < / span > < / div > < div
class
= "block-price" > < strong
class
= "price size18 green" > {price} < / strong > {currency} < span
class
= "label-hot in-stock {inStockHide}" > в
нaличии < / span > < / div > < div
class
= "photo-item" > < img
src = "{img}"
alt = "" / > < span
class
= "description" > < span
class
= "labels-list boxed" > < span
class
= "label-hot red {actionsHide}" > Акция < / span > < span
class
= "label-hot blue {creditorsHide}" > Кредит < / span > < span
class
= "label-hot blue {testdriveHide}" > Тест - драйв < / span > < / span > < span
class
= "list-characteristic" > < span
class
= "item-list boxed location" > < span
class
= "item-icon" > < i
class
= "icon-location-white" > < / i > < / span > {city} < / span > < span
class
= "item-list boxed {gearHide}" > < span
class
= "item-icon" > < i
class
= "icon-fuel-white" > < / i > < / span > < span
class
= "size18" > {engineVolume}
л., {fuel} < / span > < / span > < span
class
= "item-list boxed {gearHide}" > < span
class
= "item-icon" > < i
class
= "icon-transmission-white" > < / i > < / span > < span
class
= "size18" > {gear} < / span > < / span > < / span > < / span > < / div > < / a > < section
id = "newautoInformerTop"
class
= "box-panel newauto-rotator-top-carousel newauto-rotator-top-search hide" > < div
class
= "head" > < h2
class
= "title-head inline" > < a
href = "/newauto/search/"
action = "send_statistics"
block = "informer"
target = "_blank"
element = "newauto"
internal = "1" > Новые
авто
от
405
автосалонов < / a > < span
class
= "area"
style = "position: relative;" > < a
class
= "show-more size15"
href = "/newauto/search/"
target = "_blank"
action = "send_statistics"
block = "informer"
element = "all"
internal = "1" > Смотреть
все
47
500 + новых
авто < / a > < / span > < / h2 > < / div > < div
class
= "carousel" > < !-- < a
href = "javascript:void(0)"
class
= "carousel-control prev"
data - action = "prev" > < / a > -- > < !-- < a
href = "javascript:void(0)"
class
= "carousel-control next"
data - action = "next" > < / a > -- > < div
class
= "carousel-inner"
id = "searchResultsNewAutoInformerTop" > < / div > < / div > < / section > < section
id = "newautoInformerTop"
class
= "box-panel newauto-for-searchby hide" > < h2
class
= "title-head" > < a
href = "/newauto/"
action = "send_statistics"
block = "informer"
target = "_blank"
element = "newauto"
internal = "1" > Новые
авто < / a > < span
class
= "size15" > на
AUTO.RIA < / span > < / h2 > < div
class
= "carousel" > < !-- < a
href = "javascript:void(0)"
class
= "carousel-control prev"
data - action = "prev" > < / a > -- > < !-- < a
href = "javascript:void(0)"
class
= "carousel-control next"
data - action = "next" > < / a > -- > < div
id = "newautoInformerTopMobile" > < / div > < / div > < / section > window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19550596] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-13 14:53:39",
    "updateDate": "2017-05-13 14:53:39",
    "expireDate": "2017-08-13 14:53:39",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 19700,
    "UAH": 518701,
    "EUR": 18143,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 312, "label": 1, "hotType": "горячее", "expireDate": "2017-05-20 23:13:09"},
    "autoData": {
        "description": "СУПЕР ЦЕНА!,ЭКСКЛЮЗИВНЫЙ ВАРИАНТ!,НА ГАРАНТИИ!,NEW-МОДЕЛЬ-2015!,САМАЯ МАКСИМАЛЬНАЯ КОМПЛЕКТАЦИЯ-TEKNA+!,ЕДИНСТВЕННЫЙ в Украине в Т",
        "version": "AT MAXI-FULL TEKNA+",
        "onModeration": false,
        "year": 2016,
        "autoId": 19550596,
        "statusId": 0,
        "withVideo": false,
        "race": "39 тыс. км",
        "raceInt": 39,
        "fuelName": "Газ/бензин, 1.6 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Nissan",
    "markId": 55,
    "modelName": "Sentra",
    "modelId": 2689,
    "photoData": {
        "count": 110,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_sentra__182831209m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_sentra__182831209sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_sentra__182831209b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_sentra__182831209f.jpg"
    },
    "linkToView": "/auto_nissan_sentra_19550596.html",
    "title": "Nissan Sentra AT MAXI-FULL TEKNA+",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19550596/",
        "hasRestrictions": false,
        "checkDate": "13.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19550545] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-14 14:29:03",
    "updateDate": "2017-05-14 14:29:03",
    "expireDate": "2017-08-14 14:29:03",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 27800,
    "UAH": 731974,
    "EUR": 25602,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 310, "label": 1, "hotType": "горячее", "expireDate": "2017-05-24 19:41:46"},
    "autoData": {
        "description": "САМАЯ НИЗКАЯ ЦЕНА в УКРАИНЕ ЗА ЧИСТЫЙ 2014г.в. в ТП и БЕЗ ОГРАНИЧЕНИЙ на ПЕРЕОФОРМЛЕНИЕ,МОЖНО-СНИМАТЬ С УЧЕТА,ПОКУПАТЬ,ПРОДАВАТЬ и",
        "version": "7G-TRONIC TSI TURBO",
        "onModeration": false,
        "year": 2014,
        "autoId": 19550545,
        "statusId": 0,
        "withVideo": false,
        "race": "167 тыс. км",
        "raceInt": 167,
        "fuelName": "Газ/бензин, 2 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Mercedes-Benz",
    "markId": 48,
    "modelName": "E-Class",
    "modelId": 428,
    "photoData": {
        "count": 97,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182829078m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182829078sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182829078b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182829078f.jpg"
    },
    "linkToView": "/auto_mercedes-benz_e-class_19550545.html",
    "title": "Mercedes-Benz E-Class 7G-TRONIC TSI TURBO",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19550545/",
        "hasRestrictions": false,
        "checkDate": "14.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[18845773] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-14 11:17:52",
    "updateDate": "2017-05-14 11:17:52",
    "expireDate": "2017-08-14 11:17:52",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 26900,
    "UAH": 708277,
    "EUR": 24774,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 310, "label": 1, "hotType": "горячее", "expireDate": "2017-05-23 08:46:27"},
    "autoData": {
        "description": "САМАЯ НИЗКАЯ ЦЕНА!Авто НАХОДИТСЯ в г.Хмельницкий,в САЛОНЕ!*ВАЖНО-БЕЗ ОГРАНИЧЕНИЙ на ПЕРЕОФОРМЛЕНИЕ,МОЖНО-СНИМАТЬ С УЧЕТА,ПОКУПАТЬ,",
        "version": "7G-TRONIC TSI TURBO",
        "onModeration": false,
        "year": 2014,
        "autoId": 18845773,
        "statusId": 0,
        "withVideo": false,
        "race": "141 тыс. км",
        "raceInt": 141,
        "fuelName": "Газ/бензин, 2 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Mercedes-Benz",
    "markId": 48,
    "modelName": "E-Class",
    "modelId": 428,
    "photoData": {
        "count": 93,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__183718175m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__183718175sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__183718175b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__183718175f.jpg"
    },
    "linkToView": "/auto_mercedes-benz_e-class_18845773.html",
    "title": "Mercedes-Benz E-Class 7G-TRONIC TSI TURBO",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/18845773/",
        "hasRestrictions": false,
        "checkDate": "14.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19593015] = {
    "userId": 5341619,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": false,
    "exchangePossible": false,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-04-22 16:59:14",
    "updateDate": "2017-04-28 09:24:02",
    "expireDate": "2017-05-22 16:59:14",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675612589", "phone": "(067) 213-00-00"},
    "USD": 39972,
    "UAH": 1052450,
    "EUR": 36812,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 255, "label": 1, "hotType": "горячее", "expireDate": "2017-05-19 17:54:58"},
    "autoData": {
        "description": "Infiniti QX50, 2017 года, г. Хмельницкий Бензиновый 2, 5 л двигатель сочетает мгновенный отклик с повышенной эффективностью. Он вы",
        "version": "Elete",
        "onModeration": false,
        "year": 2017,
        "autoId": 19593015,
        "statusId": 0,
        "withVideo": false,
        "race": "без пробега",
        "raceInt": 0,
        "fuelName": "Бензин, 2.5 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "UAH",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Infiniti",
    "markId": 128,
    "modelName": "QX50",
    "modelId": 45131,
    "photoData": {
        "count": 110,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/infiniti_qx50__183456718m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/infiniti_qx50__183456718sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/infiniti_qx50__183456718b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/infiniti_qx50__183456718f.jpg"
    },
    "linkToView": "/auto_infiniti_qx50_19593015.html",
    "title": "Infiniti QX50 Elete",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 0,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19593015/",
        "hasRestrictions": false,
        "checkDate": "12.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://infiniti.km.ua/",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/24/2402/2402s.jpg",
        "type": "Автосалон",
        "id": 2402,
        "name": "АВТОЦЕНТР \"ЛИГА ЛЮКС\"",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[17888192] = {
    "userId": 5341619,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-04-04 08:30:48",
    "updateDate": "2017-04-04 08:30:48",
    "expireDate": "2017-07-04 08:30:48",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675612589", "phone": "(067) 213-00-00"},
    "USD": 55830,
    "UAH": 1470000,
    "EUR": 51417,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 251, "label": 1, "hotType": "горячее", "expireDate": "2017-05-19 17:54:11"},
    "autoData": {
        "description": "Аудиосистема Bose 5.1 с встроенным в переднюю панель жестким диском на 10 ГБ и с 16 динамиками мощностью 391 Ватт Информационн",
        "version": "3.7 High-Tech AWD",
        "onModeration": false,
        "year": 2015,
        "autoId": 17888192,
        "statusId": 0,
        "withVideo": false,
        "race": "без пробега",
        "raceInt": 0,
        "fuelName": "Бензин, 3.7 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "UAH",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Infiniti",
    "markId": 128,
    "modelName": "Q70",
    "modelId": 45130,
    "photoData": {
        "count": 130,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/infiniti_q70__161392895m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/infiniti_q70__161392895sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/infiniti_q70__161392895b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/infiniti_q70__161392895f.jpg"
    },
    "linkToView": "/auto_infiniti_q70_17888192.html",
    "title": "Infiniti Q70 3.7 High-Tech AWD",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/17888192/",
        "hasRestrictions": false,
        "checkDate": "12.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://infiniti.km.ua/",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/24/2402/2402s.jpg",
        "type": "Автосалон",
        "id": 2402,
        "name": "АВТОЦЕНТР \"ЛИГА ЛЮКС\"",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[18206041] = {
    "userId": 5341619,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": false,
    "exchangePossible": false,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-04-17 15:09:34",
    "updateDate": "2017-04-28 10:40:07",
    "expireDate": "2017-07-17 15:09:34",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675612589", "phone": "(067) 213-00-00"},
    "USD": 56249,
    "UAH": 1481040,
    "EUR": 51803,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 250, "label": 1, "hotType": "горячее", "expireDate": "2017-05-19 17:53:17"},
    "autoData": {
        "description": "Первый и единственный официальный дилер INFINITI в западном регионе! Система кругового обзора AVM + Система обнаружения приближающ",
        "version": "3.0",
        "onModeration": false,
        "year": 2016,
        "autoId": 18206041,
        "statusId": 0,
        "withVideo": false,
        "race": "без пробега",
        "raceInt": 0,
        "fuelName": "Дизель, 3 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "UAH",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Infiniti",
    "markId": 128,
    "modelName": "QX70",
    "modelId": 45133,
    "photoData": {
        "count": 110,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/infiniti_qx70__165367659m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/infiniti_qx70__165367659sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/infiniti_qx70__165367659b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/infiniti_qx70__165367659f.jpg"
    },
    "linkToView": "/auto_infiniti_qx70_18206041.html",
    "title": "Infiniti QX70 3.0",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/18206041/",
        "hasRestrictions": false,
        "checkDate": "12.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://infiniti.km.ua/",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/24/2402/2402s.jpg",
        "type": "Автосалон",
        "id": 2402,
        "name": "АВТОЦЕНТР \"ЛИГА ЛЮКС\"",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19550554] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-14 14:33:06",
    "updateDate": "2017-05-14 14:33:06",
    "expireDate": "2017-08-14 14:33:06",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 27800,
    "UAH": 731974,
    "EUR": 25602,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 246, "label": 3, "hotType": "срочно", "expireDate": "2017-05-21 19:17:38"},
    "autoData": {
        "description": "Седан ПРЕДСТАВИТЕЛЬСКОГО класса!ВЫСОЧАЙШИЙ уровень-КОМФОРТА,НАДЕЖНОСТИ и передовых технологий-НЕМЕЦКАЯ РОСКОШЬ!Каждая деталь-говор",
        "version": "7G-TRONIC TSI TURBO",
        "onModeration": false,
        "year": 2014,
        "autoId": 19550554,
        "statusId": 0,
        "withVideo": false,
        "race": "167 тыс. км",
        "raceInt": 167,
        "fuelName": "Газ/бензин, 2 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Mercedes-Benz",
    "markId": 48,
    "modelName": "E-Class",
    "modelId": 428,
    "photoData": {
        "count": 96,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182829296m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182829296sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182829296b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182829296f.jpg"
    },
    "linkToView": "/auto_mercedes-benz_e-class_19550554.html",
    "title": "Mercedes-Benz E-Class 7G-TRONIC TSI TURBO",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19550554/",
        "hasRestrictions": false,
        "checkDate": "14.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[18660837] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-14 11:20:07",
    "updateDate": "2017-05-14 11:20:07",
    "expireDate": "2017-08-14 11:20:06",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 26900,
    "UAH": 708277,
    "EUR": 24774,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 236, "label": 1, "hotType": "горячее", "expireDate": "2017-05-23 17:51:15"},
    "autoData": {
        "description": "*ВАЖНО-БЕЗ ОГРАНИЧЕНИЙ на ПЕРЕОФОРМЛЕНИЕ,МОЖНО-СНИМАТЬ С УЧЕТА,ПОКУПАТЬ,ПРОДАВАТЬ и тд.!!!САМАЯ НИЗКАЯ ЦЕНА!Авто НАХОДИТСЯ в г.Хме",
        "version": "7G-TRONIC TSI TURBO",
        "onModeration": false,
        "year": 2014,
        "autoId": 18660837,
        "statusId": 0,
        "withVideo": false,
        "race": "141 тыс. км",
        "raceInt": 141,
        "fuelName": "Газ/бензин, 2 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Mercedes-Benz",
    "markId": 48,
    "modelName": "E-Class",
    "modelId": 428,
    "photoData": {
        "count": 93,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__170836367m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__170836367sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__170836367b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__170836367f.jpg"
    },
    "linkToView": "/auto_mercedes-benz_e-class_18660837.html",
    "title": "Mercedes-Benz E-Class 7G-TRONIC TSI TURBO",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/18660837/",
        "hasRestrictions": false,
        "checkDate": "14.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19550523] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-14 15:50:22",
    "updateDate": "2017-05-14 15:51:03",
    "expireDate": "2017-08-14 15:50:22",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 27700,
    "UAH": 729341,
    "EUR": 25510,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 229, "label": 3, "hotType": "срочно", "expireDate": "2017-05-21 16:29:47"},
    "autoData": {
        "description": "Авто НАХОДИТСЯ в г.Хмельницкий,в САЛОНЕ!ИНТЕЛЛЕКТУАЛЬНАЯ ЛИНЗОВАННАЯ LED-оптика-автоматически адаптируется к текущей ситуации на д",
        "version": "TSI TURBO 7G-TRONIC",
        "onModeration": false,
        "year": 2014,
        "autoId": 19550523,
        "statusId": 0,
        "withVideo": false,
        "race": "194 тыс. км",
        "raceInt": 194,
        "fuelName": "Газ/бензин, 2 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Mercedes-Benz",
    "markId": 48,
    "modelName": "E-Class",
    "modelId": 428,
    "photoData": {
        "count": 114,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182828598m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182828598sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182828598b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182828598f.jpg"
    },
    "linkToView": "/auto_mercedes-benz_e-class_19550523.html",
    "title": "Mercedes-Benz E-Class TSI TURBO 7G-TRONIC",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": true, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19550523/",
        "hasRestrictions": false,
        "checkDate": "14.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[7514380] = {
    "userId": 1027429,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-13 15:00:20",
    "updateDate": "2017-05-13 15:00:20",
    "expireDate": "2017-06-13 15:35:32",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "676000876", "phone": "(067) 314-06-06"},
    "USD": 17246,
    "UAH": 454090,
    "EUR": 15883,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 225, "label": 3, "hotType": "срочно", "expireDate": "2017-05-16 11:51:22"},
    "autoData": {
        "description": "* живыми деньгами - звоните! NEW 2017! Рестайлинг! Выбор цвета/комплектации! LED;Кондиционер;Электростеклоподьемники; Электроусил",
        "version": "AT XE",
        "onModeration": false,
        "year": 2017,
        "autoId": 7514380,
        "statusId": 0,
        "withVideo": false,
        "race": "без пробега",
        "raceInt": 0,
        "fuelName": "Бензин, 1.6 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "UAH",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Nissan",
    "markId": 55,
    "modelName": "Juke",
    "modelId": 24932,
    "photoData": {
        "count": 63,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_juke__143820989m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_juke__143820989sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_juke__143820989b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_juke__143820989f.jpg"
    },
    "linkToView": "/auto_nissan_juke_7514380.html",
    "title": "Nissan Juke AT XE",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/7514380/",
        "hasRestrictions": false,
        "checkDate": "13.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "Nissan Лига-II",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[17358113] = {
    "userId": 1027429,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-04-23 10:00:30",
    "updateDate": "2017-04-25 13:44:51",
    "expireDate": "2017-05-23 10:12:03",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "676000876", "phone": "(067) 314-06-06"},
    "USD": 20775,
    "UAH": 547000,
    "EUR": 19133,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 225, "label": 3, "hotType": "срочно", "expireDate": "2017-05-16 11:05:43"},
    "autoData": {
        "description": "* живыми деньгами - звоните! В НАЛИЧИИ! Выбор цвета/комплектаций! (NCC)-КОМПЛЕКС СИСТЕМ УПРАВЛЕНИЯ ШАССИ(обеспечивает плавность хо",
        "version": "1.2T AT XE ",
        "onModeration": false,
        "year": 2017,
        "autoId": 17358113,
        "statusId": 0,
        "withVideo": false,
        "race": "без пробега",
        "raceInt": 0,
        "fuelName": "Бензин, 1.2 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "UAH",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Nissan",
    "markId": 55,
    "modelName": "Qashqai",
    "modelId": 2197,
    "photoData": {
        "count": 68,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_qashqai__154035026m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_qashqai__154035026sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_qashqai__154035026b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_qashqai__154035026f.jpg"
    },
    "linkToView": "/auto_nissan_qashqai_17358113.html",
    "title": "Nissan Qashqai 1.2T AT XE ",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 0,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/17358113/",
        "hasRestrictions": false,
        "checkDate": "12.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "Nissan Лига-II",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19573176] = {
    "userId": 1027429,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-04-19 15:58:30",
    "updateDate": "2017-04-25 15:23:03",
    "expireDate": "2017-05-19 15:58:30",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "676000876", "phone": "(067) 314-06-06"},
    "USD": 31640,
    "UAH": 833090,
    "EUR": 29139,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 225, "label": 3, "hotType": "срочно", "expireDate": "2017-05-16 11:47:21"},
    "autoData": {
        "description": "* живыми деньгами - звоните! 2017г! ВЫБОР ЦВЕТА И КОМПЛЕКТАЦИИ! АВS;EBD;ESP,ActiveTraceControl; Противобуксовочная система-TCS;Э",
        "version": "1.6 dCi AT SE Style",
        "onModeration": false,
        "year": 2017,
        "autoId": 19573176,
        "statusId": 0,
        "withVideo": false,
        "race": "без пробега",
        "raceInt": 0,
        "fuelName": "Дизель, 1.6 л.",
        "gearboxName": "Вариатор",
        "isSold": false,
        "mainCurrency": "UAH",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Nissan",
    "markId": 55,
    "modelName": "X-Trail",
    "modelId": 507,
    "photoData": {
        "count": 109,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_x-trail__183381322m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_x-trail__183381322sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_x-trail__183381322b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_x-trail__183381322f.jpg"
    },
    "linkToView": "/auto_nissan_x-trail_19573176.html",
    "title": "Nissan X-Trail 1.6 dCi AT SE Style",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": true, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 0,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19573176/",
        "hasRestrictions": false,
        "checkDate": "12.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "Nissan Лига-II",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19550586] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-13 14:53:26",
    "updateDate": "2017-05-13 14:53:26",
    "expireDate": "2017-08-13 14:53:26",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 19700,
    "UAH": 518701,
    "EUR": 18143,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 223, "label": 3, "hotType": "срочно", "expireDate": "2017-05-15 18:26:41"},
    "autoData": {
        "description": "СУПЕР ЦЕНА!,ЭКСКЛЮЗИВНЫЙ ВАРИАНТ!,НА ГАРАНТИИ!,NEW-МОДЕЛЬ-2015!,САМАЯ МАКСИМАЛЬНАЯ КОМПЛЕКТАЦИЯ-TEKNA+!,ЕДИНСТВЕННЫЙ в Украине в Т",
        "version": "AT MAXI-FULL TEKNA+",
        "onModeration": false,
        "year": 2016,
        "autoId": 19550586,
        "statusId": 0,
        "withVideo": false,
        "race": "39 тыс. км",
        "raceInt": 39,
        "fuelName": "Газ/бензин, 1.6 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Nissan",
    "markId": 55,
    "modelName": "Sentra",
    "modelId": 2689,
    "photoData": {
        "count": 111,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_sentra__182830023m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_sentra__182830023sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_sentra__182830023b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_sentra__182830023f.jpg"
    },
    "linkToView": "/auto_nissan_sentra_19550586.html",
    "title": "Nissan Sentra AT MAXI-FULL TEKNA+",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19550586/",
        "hasRestrictions": false,
        "checkDate": "13.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[18774666] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-14 15:54:12",
    "updateDate": "2017-05-14 15:55:36",
    "expireDate": "2017-08-14 15:54:12",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 27700,
    "UAH": 729341,
    "EUR": 25510,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 221, "label": 1, "hotType": "горячее", "expireDate": "2017-05-19 18:20:19"},
    "autoData": {
        "description": "Седан ПРЕДСТАВИТЕЛЬСКОГО класса!ВЫСОЧАЙШИЙ уровень-КОМФОРТА,НАДЕЖНОСТИ и передовых технологий-НЕМЕЦКАЯ РОСКОШЬ!Каждая деталь-говор",
        "version": "TSI TURBO 7G-TRONIC",
        "onModeration": false,
        "year": 2014,
        "autoId": 18774666,
        "statusId": 0,
        "withVideo": false,
        "race": "194 тыс. км",
        "raceInt": 194,
        "fuelName": "Газ/бензин, 2 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Mercedes-Benz",
    "markId": 48,
    "modelName": "E-Class",
    "modelId": 428,
    "photoData": {
        "count": 116,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182874921m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182874921sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182874921b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182874921f.jpg"
    },
    "linkToView": "/auto_mercedes-benz_e-class_18774666.html",
    "title": "Mercedes-Benz E-Class TSI TURBO 7G-TRONIC",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": true, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/18774666/",
        "hasRestrictions": false,
        "checkDate": "14.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19612106] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-14 11:21:55",
    "updateDate": "2017-05-14 11:21:55",
    "expireDate": "2017-08-14 11:21:55",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 26900,
    "UAH": 708277,
    "EUR": 24774,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 220, "label": 3, "hotType": "срочно", "expireDate": "2017-05-23 18:19:33"},
    "autoData": {
        "description": "Авто НАХОДИТСЯ в г.Хмельницкий,в САЛОНЕ!Седан ПРЕДСТАВИТЕЛЬСКОГО класса!ВЫСОЧАЙШИЙ уровень-КОМФОРТА,надежности и передовых техноло",
        "version": "7G-TRONIC TSI TURBO",
        "onModeration": false,
        "year": 2014,
        "autoId": 19612106,
        "statusId": 0,
        "withVideo": false,
        "race": "141 тыс. км",
        "raceInt": 141,
        "fuelName": "Газ/бензин, 2 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Mercedes-Benz",
    "markId": 48,
    "modelName": "E-Class",
    "modelId": 428,
    "photoData": {
        "count": 93,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__183720662m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__183720662sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__183720662b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__183720662f.jpg"
    },
    "linkToView": "/auto_mercedes-benz_e-class_19612106.html",
    "title": "Mercedes-Benz E-Class 7G-TRONIC TSI TURBO",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19612106/",
        "hasRestrictions": false,
        "checkDate": "14.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19553889] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-14 14:35:17",
    "updateDate": "2017-05-14 14:35:17",
    "expireDate": "2017-08-14 14:35:17",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 27800,
    "UAH": 731974,
    "EUR": 25602,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 219, "label": 1, "hotType": "горячее", "expireDate": "2017-05-24 22:03:06"},
    "autoData": {
        "description": "САМАЯ НИЗКАЯ ЦЕНА в УКРАИНЕ ЗА ЧИСТЫЙ 2014г.в. в ТП и БЕЗ ОГРАНИЧЕНИЙ на ПЕРЕОФОРМЛЕНИЕ,МОЖНО-СНИМАТЬ С УЧЕТА,ПОКУПАТЬ,ПРОДАВАТЬ и",
        "version": "7G-TRONIC TSI TURBO",
        "onModeration": false,
        "year": 2014,
        "autoId": 19553889,
        "statusId": 0,
        "withVideo": false,
        "race": "167 тыс. км",
        "raceInt": 167,
        "fuelName": "Газ/бензин, 2 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Mercedes-Benz",
    "markId": 48,
    "modelName": "E-Class",
    "modelId": 428,
    "photoData": {
        "count": 99,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182879882m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182879882sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182879882b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182879882f.jpg"
    },
    "linkToView": "/auto_mercedes-benz_e-class_19553889.html",
    "title": "Mercedes-Benz E-Class 7G-TRONIC TSI TURBO",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": true, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19553889/",
        "hasRestrictions": false,
        "checkDate": "14.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19647946] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-13 14:54:51",
    "updateDate": "2017-05-13 14:54:51",
    "expireDate": "2017-08-13 14:54:51",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 19700,
    "UAH": 518701,
    "EUR": 18143,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 218, "label": 1, "hotType": "горячее", "expireDate": "2017-05-15 18:30:50"},
    "autoData": {
        "description": "СУПЕР ЦЕНА!,ЭКСКЛЮЗИВНЫЙ ВАРИАНТ!,НА ГАРАНТИИ!,NEW-МОДЕЛЬ-2015!,САМАЯ МАКСИМАЛЬНАЯ КОМПЛЕКТАЦИЯ-TEKNA+!,ЕДИНСТВЕННЫЙ в Украине в Т",
        "version": "AT MAXI-FULL TEKNA+",
        "onModeration": false,
        "year": 2016,
        "autoId": 19647946,
        "statusId": 0,
        "withVideo": false,
        "race": "39 тыс. км",
        "raceInt": 39,
        "fuelName": "Газ/бензин, 1.6 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Nissan",
    "markId": 55,
    "modelName": "Sentra",
    "modelId": 2689,
    "photoData": {
        "count": 111,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_sentra__184226322m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_sentra__184226322sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_sentra__184226322b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/nissan_sentra__184226322f.jpg"
    },
    "linkToView": "/auto_nissan_sentra_19647946.html",
    "title": "Nissan Sentra AT MAXI-FULL TEKNA+",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": true, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19647946/",
        "hasRestrictions": false,
        "checkDate": "13.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19256455] = {
    "userId": 1072865,
    "chipsCount": 0,
    "locationCityName": "Сумы",
    "auctionPossible": false,
    "exchangePossible": false,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-01 12:58:11",
    "updateDate": "2017-05-13 09:48:20",
    "expireDate": "2017-06-03 17:52:55",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "810526", "phone": "(050) 707-84-06"},
    "USD": 17000,
    "UAH": 447610,
    "EUR": 15656,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 205, "label": 1, "hotType": "горячее", "expireDate": "2017-05-20 23:39:33"},
    "autoData": {
        "description": "Авто в прекрасном техническом состоянии (проверка на любом СТО). 3-х зонный климат контроль, 3 ряда сидений, безключевой доступ, д",
        "version": "",
        "onModeration": false,
        "year": 2012,
        "autoId": 19256455,
        "statusId": 0,
        "withVideo": false,
        "race": "33 тыс. км",
        "raceInt": 33,
        "fuelName": "Дизель, 2 л.",
        "gearboxName": "Ручная / Механика",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Fiat",
    "markId": 23,
    "modelName": "Freemont",
    "modelId": 37037,
    "photoData": {
        "count": 58,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/fiat_freemont__178697975m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/fiat_freemont__178697975sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/fiat_freemont__178697975b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/fiat_freemont__178697975f.jpg"
    },
    "linkToView": "/auto_fiat_freemont_19256455.html",
    "title": "Fiat Freemont",
    "stateData": {
        "name": "Сумы",
        "regionName": "Сумская",
        "linkToCatalog": "/city/sumy/",
        "title": "Поиск объявлений по городу Сумы",
        "stateId": 8
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 0,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19256455/",
        "hasRestrictions": false,
        "checkDate": "14.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {"link": "", "logo": "", "type": "", "id": 0, "name": "", "packageId": 0, "typeId": 0},
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
window.ria = window.ria || {};
window.ria.server = window.ria.server || {};
window.ria.server.results = window.ria.server.results || {};
window.ria.server.results[19552622] = {
    "userId": 3916367,
    "chipsCount": 0,
    "locationCityName": "Хмельницкий",
    "auctionPossible": true,
    "exchangePossible": true,
    "realtyExchange": false,
    "exchangeType": "Любой",
    "exchangeTypeId": 0,
    "addDate": "2017-05-14 15:57:36",
    "updateDate": "2017-05-14 15:58:32",
    "expireDate": "2017-08-14 15:57:36",
    "userHideADSStatus": false,
    "userPhoneData": {"phoneId": "675191647", "phone": "(067) 314-04-36"},
    "USD": 27700,
    "UAH": 729341,
    "EUR": 25510,
    "isAutoAddedByPartner": false,
    "partnerId": 0,
    "levelData": {"level": 204, "label": 3, "hotType": "срочно", "expireDate": "2017-05-25 10:49:55"},
    "autoData": {
        "description": "Авто НАХОДИТСЯ в г.Хмельницкий,в САЛОНЕ!13;05;2017г-сделано ПОЛНОЕ обслуживание-на руках ЗАКЛЮЧЕНИЕ СЕРВИСНОГО центра!ИНТЕЛЛЕКТУАЛ",
        "version": "TSI TURBO 7G-TRONIC",
        "onModeration": false,
        "year": 2014,
        "autoId": 19552622,
        "statusId": 0,
        "withVideo": false,
        "race": "194 тыс. км",
        "raceInt": 194,
        "fuelName": "Газ/бензин, 2 л.",
        "gearboxName": "Автомат",
        "isSold": false,
        "mainCurrency": "USD",
        "fromArchive": false,
        "categoryId": 1,
        "custom": 0
    },
    "markName": "Mercedes-Benz",
    "markId": 48,
    "modelName": "E-Class",
    "modelId": 428,
    "photoData": {
        "count": 116,
        "seoLinkM": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182859983m.jpg",
        "seoLinkSX": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182859983sx.jpg",
        "seoLinkB": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182859983b.jpg",
        "seoLinkF": "https://cdn.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__182859983f.jpg"
    },
    "linkToView": "/auto_mercedes-benz_e-class_19552622.html",
    "title": "Mercedes-Benz E-Class TSI TURBO 7G-TRONIC",
    "stateData": {
        "name": "Хмельницкий",
        "regionName": "Хмельницкая",
        "linkToCatalog": "/city/khmelnickij/",
        "title": "Поиск объявлений по городу Хмельницкий",
        "stateId": 4
    },
    "oldTop": {"isActive": false, "expireDate": ""},
    "canSetSpecificPhoneToAdvert": false,
    "dontComment": 1,
    "sendComments": 0,
    "badges": [],
    "checkedVin": {
        "isShow": false,
        "linkToReport": "/vin-check/auto/19552622/",
        "hasRestrictions": false,
        "checkDate": "14.05.2017",
        "isChecked": false
    },
    "isLeasing": 0,
    "dealer": {
        "link": "/gosalon/?http://www.liga-nissan.km.ua",
        "logo": "https://cdn.riastatic.com/photos/auto/new_autosalon/0/5/551/551s.jpg",
        "type": "Автосалон",
        "id": 551,
        "name": "",
        "packageId": 0,
        "typeId": 0
    },
    "withInfoBar": false,
    "infoBarText": "",
    "optionStyles": []
};
<
a
class
= "item"
href = "{link}" > {title}({count}) < / a > < span
class
= "tagging red"
data - empty - search - label = "{param}"
data - empty - search - wrapper - id = "{wrapperId}" > {label} < / span > < div
data - empty - search - url = "{url}"
id = "moreResultsWrapper_{wrappId}" > < div
class
= "like-title-head m-padding box-sizing"
id = "moreResultsQueryParams_{wrappId}" > < a
href = "{linkToAllAdvertisements}"
class
= "bold" > {countResult} < / a > авто
по
параметрам:&
nbsp;
</
div > < div
class
= "showcase-main-more row mshow interested"
id = "emptyResultsItemsWrapper_{wrappId}" > < / div > < div
class
= "boxed box-panel line m-padding box-sizing {viewAllClass}" > < a
class
= "area btn-blue"
href = "{linkToAllAdvertisements}" > Смотреть
все < strong > {countResult} < / strong > объявлений
→</
a > < / div > < / div > < div
class
= "item-showcase-offer"
id = "emptyResultItem_{itemId}" > < a
class
= "link-showcase"
href = "{advertisementSrc}" > < span
class
= "photo photobg" > < span
class
= "emblem hide"
id = "emptyResultItemLabel" > {label} < / span > < span
class
= "loadPhoto loaded" > < img
width = "220"
height = "143"
title = "{title}"
alt = "{title}"
src = "{imgSrc}" / > < / span > < span
class
= "title" > {title} < / span > < / span > < ul
class
= "description" > < li
class
= "e-desc" > {year} < br / > < span
class
= "race" > {race} < / span > < / li > < li
class
= "e-desc desc-price" > < span
class
= "price" > {price} & nbsp;
{
    currency
}
</
span > < / li > < / ul > < / a > < / div > < div
class
= "warning middle notfound span9" > < i
class
= "alert-warning" > < / i > < div
class
= "message" > < div
class
= "size17" > К
сожалению, по
Вашему
запросу < span
class
= "bold" > Объявлений
не
найдено. < / span > < / div > < / div > < / div > < div
class
= "item-showcase-offer bestdeals-block"
style = "margin: 0;" > < a
class
= "photo"
href = "{link}"
onclick = "_gaq.push(['_trackEvent', 'Informer_BU', 'click_on_photo', 'final_page'])" > < span
class
= "emblem {hotTypeHide}"
style = "background-color: #db5c4c;" > {hotType} < / span > < i
class
= "icon-news-video {withVideoHide}" > < / i > < img
width = "220"
height = "143"
src = "{seoLinkF}" / > < span
class
= "title" > < span
style = "max-height: 43px; overflow: hidden; display: block;" > {title} < / span > < ul
class
= "unstyle hover-characteristic box-panel boxed"
style = "font-size: 14px; margin-top: 5px;" > < li
class
= "item-char"
title = "" > < i
class
= "icon-location-white" > < / i > {locationCityName} < / li > < li
class
= "item-char"
title = "" > < i
class
= "icon-fuel-white" > < / i > {fuelName} < / li > < li
class
= "item-char"
title = "" > < i
class
= "icon-transmission-white" > < / i > {gearboxName} < / li > < / ul > < / span > < / a > < ul
class
= "description"
style = "padding: 0;" > < li
class
= "e-desc" > {year} < br / > < span
class
= "race" > {race} < / span > < / li > < li
class
= "e-desc desc-price" > < span
class
= "price" > {price} & nbsp;
{
    currency
}
</
span > < / li > < / ul > < / div > < section
class
= "box-panel line"
id = "showCategoryInformerMarket"
data - type = "category2" > < div
class
= "boxed" > < span
class
= "title-head" > {title1} < / span > < div
class
= "count-market" > {title2} < / div > < / div > < div
id = "widthWrapper"
class
= "showcase-main-offer boxed showcase-market text-c" > < !--"width: 700px"-- > < div
id = "itemsBlock" > < / div > < a
href = "javascript:void(0)"
class
= "carousel-control prev"
data - action = "prev"
data - direction = "-1" > < / a > < a
href = "javascript:void(0)"
class
= "carousel-control next"
data - action = "next"
data - direction = "1" > < / a > < / div > < / section > < div
id = "showCategoryInformerMarket" > < / div > < div
class
= "item"
data - index = "{i}" > < a
class
= "unlink"
target = "_blank"
href = "{link}" > < span
class
= "item-market" > < span
class
= "{class}" > < / span > < / span > < span
class
= "unlink size16 d-block" > {text} < / span > < span
class
= "grey size13 d-block" > {count} < / span > < / a > < / div > < div
class
= "hover-photo {first}" > < a
target = "{linkTarget}"
class
= "{photoClass}"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
rel = "nofollow" > < img
src = "{img}" / > < span
class
= "hover-title" > {marka}
{
    model
}
{
    complete
}
</
span > < / a > < div
class
= "hover-description" > < span
class
= "green" > {price} < / span > {currency} < / div > < / div > < div
class
= "hover-photo {first}" > < a
target = "{linkTarget}"
class
= "{photoClass}"
href = "{link}"
action = "send_statistics"
rel = "nofollow"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}" > < img
src = "{img}" / > < span
class
= "hover-title" > {marka}
{
    model
}
{
    complete
}
</
span > < / a > < div
class
= "hover-description" > < span
class
= "green" > {price} < / span > {currency} < / div > < div
class
= "details" > < ul
class
= "unstyle characteristic" > < li
class
= "item {fuelHide}" > < i
class
= "icons-characteristics-fuel" > < / i > {engineVolume}
л., {fuel} < / li > < li
class
= "item {gearHide}" > < i
class
= "icons-characteristics-transmission" > < / i > {gear} < / li > < li
class
= "item" > < i
class
= "icon-location" > < / i > {city} < / li > < / ul > < / div > < / div > < div
class
= "item boxed" > < a
target = "{linkTarget}"
class
= "{photoClass}"
href = "{link}"
action = "send_statistics"
rel = "nofollow"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
class
= "photo-185x120"
title = "{marka} {model} {complete}" > < img
src = "{img}" / > < / a > < dl
class
= "subscribe-item" > < dt
class
= "title rows" > < a
target = "{linkTarget}"
action = "send_statistics"
rel = "nofollow"
block = "informer"
element = "link"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
title = "{marka} {model} {complete}"
href = "{link}" > < strong > {marka}
{
    model
}
{
    complete
}
</
strong > < / a > < / dt > < dd
class
= "rows" > < strong
class
= "price" > {price} < / strong > {currency} < / dd > < dd
class
= "rows" > < i
class
= "icon-location" > < / i > {city} < / dd > < dd
class
= "rows" > < span
class
= "grey" > {year} < / span > < / dd > < / dl > < / div > < a
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
class
= "{photoClass}"
action = "send_statistics"
block = "informer_bottom"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
class
= "photo-185x120"
title = "{marka} {model} {complete}" > < span
class
= "item-description" > < span
class
= "top-information boxed" > < span
class
= "name overflowed" > {marka}
{
    model
}
</
span > < span
class
= "price overflowed" > {priceText} < span
class
= "size18" > {price} < / span > {currency} < / span > < / span > < span
class
= "labels-list boxed" > < span
class
= "label-hot darck-blue {testdriveHide}" > Тест - драйв < / span > < span
class
= "label-hot red {creditorsHide}" > Кредит < / span > < span
class
= "label-hot red {actionsHide}" > Акция < / span > < span
class
= "label-hot green-b {inStockHide}" > Есть
в
наличии < / span > < / span > < / span > < span
class
= "description" > < ul
class
= "unstyle hover-characteristic boxed" > < li
class
= "item-char location"
title = "Регион" > < span
class
= "item-icon" > < i
class
= "icon-location-white" > < / i > < / span > {city} < / li > < li
class
= "item-char {fuelHide}"
title = "Топливо" > < span
class
= "item-icon" > < i
class
= "icon-fuel-white" > < / i > < / span > {engineVolume}
л., {fuel} < / li > < li
class
= "item-char {gearHide}"
title = "Коробка" > < span
class
= "item-icon" > < i
class
= "icon-transmission-white" > < / i > < / span > {gear} < / li > < / ul > < / span > < img
src = "{img}"
alt = "{marka} {model} {complete}" / > < / a > < div
class
= "ticket-item paid-informer" > < div
class
= "action-bar" > < span
class
= "item promote-level informer" > реклама < / span > < / div > < div
class
= "content-bar" > < div
class
= "ticket-photo" > < a
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
class
= "photo-185x120"
action = "send_statistics"
block = "informer_top"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
title = "{marka} {model} {complete}" > < img
alt = "{marka} {model} {complete}"
title = "{marka} {model} {complete}"
src = "{img}" / > < / a > < / div > < div
class
= "content" > < div
class
= "head-ticket" > < div
class
= "item ticket-title" > < a
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
class
= "address"
action = "send_statistics"
block = "informer_top"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
title = "{marka} {model} {complete}" > < strong > {marka}
{
    model
}
{
    complete
}
</
strong > {year} < / a > < / div > < / div > < div
class
= "price-ticket" > < strong
class
= "green size18" > {price} < / strong > {currency} & nbsp;
<
span
class
= "label-hot in-stock {inStockHide}"
title = "Это авто в данный момент находится на площадке у салона" > Есть
в
наличии < / span > < div
class
= "location" > < i
class
= "icon-location" > < / i > {city} < / div > < / div > < div
class
= "if-dealer" > < span
class
= "dealer-logo {withSalonLogo}" > < img
width = "40"
src = "https://cdn.riastatic.com/photos/{salonLogo}sn.jpg"
title = "{salonName}" / > < / span > < / div > < div
class
= "definition-data" > < ul
style = "height: 20px;margin-bottom: 2px;"
class
= "unstyle characteristic overflowed" > < li
class
= "item-char {withEngineVolumeFuel}"
title = "Топливо" > < i
class
= "icons-characteristics-fuel" > < / i > {engineVolume}
л., {fuel} < / li > < li
class
= "item-char {gearHide}"
title = "Коробка" > < i
class
= "icons-characteristics-transmission" > < / i > {gear} < / li > < li
class
= "item-char"
title = "Привод"
style = "display:{withDriveType};" > < i
class
= "icons-characteristics-drive" > < / i > {drive} < / li > < li
class
= "item-char"
title = "Тип кузова"
style = "display:{withBodyType};" > < i
class
= "icon-bodytype" > < / i > {body} < / li > < / ul > < / div > < div
class
= "label-block clearfix" > < span
class
= "label-hot red {actionsHide}" > Акция < / span > < span
class
= "label-hot red {creditorsHide}"
style = "margin-bottom: 2px;" > Кредит < / span > < span
class
= "label-hot darck-blue {testdriveHide}" > Тест - драйв < / span > < a
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
class
= "fl-r"
action = "send_statistics"
block = "informer_top"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
title = "{marka} {model} {complete}" > {salonWebsite}
→</
a > < / div > < / div > < / div > < / div > < div
class
= "ticket-item-newauto paid" > < div
class
= "informer-label" > реклама < / div > < div
class
= "top-block" > < div
class
= "clearfix" > < div
class
= "name overflowed informer" > < a
class
= "bold size17"
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
action = "send_statistics"
block = "informer_top"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
title = "{marka} {model} {complete}" > {marka}
{
    model
}
{
    complete
}
</
a > < / div > < div
class
= "year grey text-r" > {year} < / div > < / div > < div
class
= "clearfix block-price with-in-stock" > < div
class
= "column" > < div
class
= "item-width overflowed" > < strong
class
= "size22 green"
title = "{price}" > {price} < / strong > {currency} < span
class
= "label-hot in-stock {inStockHide}"
title = "Это авто в данный момент находится на площадке у автосалона" > в
наличии < / span > < / div > < / div > < div
class
= "column" > < div
class
= "item-width overflowed text-r block-region" > {city} < / div > < / div > < / div > < / div > < div
class
= "block-photo" > < a
target = "{linkTarget}"
class
= "photo-car"
href = "{link}"
rel = "nofollow"
action = "send_statistics"
block = "informer_top"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
title = "{marka} {model} {complete}" > < span
class
= "hot-block left" > < span
class
= "label darck-blue {testdriveHide}"
onclick = "event.preventDefault();window.open('/newauto/testdrive/?marka_id={markaId}&amp;model_id={modelId}&amp;year={year}', '_blank')" > Тест - драйв < / span > < span
class
= "label red {creditorsHide}" > Кредит < / span > < span
class
= "label red {actionsHide}" > Акция < / span > < / span > < img
alt = "{marka} {model} {complete}"
title = "{marka} {model} {complete}"
src = "{img}" / > < div
class
= "description" > < div
class
= "boxed item-description text-c" > Автосалон
:
{
    salonName
}
</
div > < / div > < / a > < / div > < div
class
= "characteristic-bottom mobile-hide" > < div
class
= "clearfix" > < ul
class
= "unstyle characteristic-block clearfix" > < li
class
= "item-char column overflowed {withEngineVolumeFuel}"
title = "Топливо" > < span
class
= "item-icon" > < i
class
= "icons-characteristics-fuel" > < / i > < / span > {engineVolume}
л., {fuel} < / li > < li
class
= "item-char column overflowed {gearHide}"
title = "Коробка" > < span
class
= "item-icon" > < i
class
= "icons-characteristics-transmission" > < / i > < / span > {gear} < / li > < li
class
= "item-char column overflowed"
title = "Привод"
style = "display:{withDriveType};" > < span
class
= "item-icon" > < i
class
= "icons-characteristics-drive" > < / i > < / span > {drive} < / li > < li
class
= "item-char column overflowed" > < a
href = "javascript:void(0);"
class
= "link-dotted"
data - type = "characteristics"
data - completeid = "{completeId}"
data - autoid = "{autoId}" > Все
характеристики < / a > < / li > < / ul > < / div > < / div > < / div > < div
class
= "ticket-item paid informer var1" > < div
class
= "content-bar" > < div
class
= "ticket-photo" > < a
target = "{linkTarget}"
title = "{marka} {model} {complete} {year}"
rel = "nofollow"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
class
= "photo-185x120" > < img
alt = "{marka} {model} {complete} {year}"
title = "{marka} {model} {complete} {year}"
src = "{img}" / > < / a > < / div > < div
class
= "content" > < div
class
= "head-ticket" > < div
class
= "item ticket-title" > < a
target = "{linkTarget}"
class
= "address"
title = "{marka} {model} {complete} {year}"
rel = "nofollow"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}" > < strong > Новый
{
    marka
}
{
    model
}
{
    complete
}
</
strong > {year} < / a > < / div > < / div > < div
class
= "price-ticket" > < span
class
= "size16" > < strong
class
= "green" > {priceUsd} < / strong > {currencyUsd} < / span > < span
class
= "label-hot in-stock {inStockHide}"
title = "Это авто в данный момент находится на площадке у салона" > Есть
в
наличии < / span > < div
class
= "location" > < i
class
= "icon-location" > < / i > {city} < / div > < / div > < div
class
= "if-dealer" > < a
target = "{linkTarget}"
title = "{marka} {model} {complete} {year}"
rel = "nofollow"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}" > < div
class
= "text-r" > Автосалон < / div > < span > < img
width = "40"
data - ga - section = "Ads"
src = "{salon_logo}" / > < / span > < / a > < / div > < div
class
= "definition-data" > < ul
class
= "unstyle characteristic" > < li
class
= "item-char {gearHide}" > < i
class
= "icons-characteristics-fuel"
title = "Тип топлива" > < / i > {engineVolume}
л., {fuel} < / li > < li
class
= "item-char {gearHide}" > < i
class
= "icons-characteristics-transmission"
title = "Тип коробки передач" > < / i > {gear} < / li > < / ul > < div
class
= "label-block {labelBlockHide}" > Автосалон
предлагает: <
span
class
= "{actionsHide}" > Акция < / span > < span
class
= "{creditorsHide}" > Кредит < / span > < span
class
= "{testdriveHide}" > Тест - драйв < / span > < / div > < / div > < / div > < / div > < / div > < div
class
= "ticket-item paid informer var2" > < div
class
= "content-bar" > < div
class
= "ticket-photo" > < a
target = "{linkTarget}"
title = "{marka} {model} {complete} {year}"
rel = "nofollow"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
class
= "photo-185x120" > < img
alt = "{marka} {model} {complete} {year}"
title = "{marka} {model} {complete} {year}"
src = "{img}" / > < / a > < / div > < div
class
= "content" > < div
class
= "head-ticket" > < span
class
= "label-hot blue"
title = "Новый {marka} {model} {complete} {year}" > новый < / span > < div
class
= "item ticket-title" > < a
target = "{linkTarget}"
class
= "address"
title = "{marka} {model} {complete} {year}"
rel = "nofollow"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}" > < strong > {marka}
{
    model
}
{
    complete
}
</
strong > {year} < / a > < / div > < / div > < div
class
= "price-ticket" > < span
class
= "size16" > < strong
class
= "green" > {priceUsd} < / strong > {currencyUsd} < / span > < span
class
= "label-hot in-stock {inStockHide}"
title = "Это авто в данный момент находится на площадке у салона" > Есть
в
наличии < / span > < div
class
= "location" > < i
class
= "icon-location" > < / i > {city} < / div > < / div > < div
class
= "if-dealer" > < a
target = "{linkTarget}"
title = "{marka} {model} {complete} {year}"
rel = "nofollow"
href = "{link}"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}" > < div
class
= "text-r" > Автосалон < / div > < span > < img
width = "40"
data - ga - section = "Ads"
src = "{salon_logo}" / > < / span > < / a > < / div > < div
class
= "definition-data" > < ul
class
= "unstyle characteristic" > < li
class
= "item-char {gearHide}" > < i
class
= "icons-characteristics-fuel"
title = "Тип топлива" > < / i > {engineVolume}
л., {fuel} < / li > < li
class
= "item-char {gearHide}" > < i
class
= "icons-characteristics-transmission"
title = "Тип коробки передач" > < / i > {gear} < / li > < / ul > < div
class
= "label-block {labelBlockHide}" > Автосалон
предлагает: <
span
class
= "{actionsHide}" > Акция < / span > < span
class
= "{creditorsHide}" > Кредит < / span > < span
class
= "{testdriveHide}" > Тест - драйв < / span > < / div > < / div > < / div > < div
class
= "footer-ticket footer-ticket--mod clearfix" > < span
class
= "view-all" > < a
class
= "show-more size15"
href = "/newauto/search/"
target = "_blank"
action = "send_statistics"
block = "informer"
element = "all"
internal = "1" > Смотреть
все
45
700 + новых
авто < / a > < / span > < / div > < / div > < / div > < a
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
class
= "item-rotator boxed" > < span
class
= "photo-185x120 photo-item"
title = "{marka} {model} {complete} {year}" > < img
src = "{img}" / > < / span > < dl
class
= "description-item" > < dt
class
= "rows name" > < span
class
= "size18 link" > {marka}
{
    model
}
{
    complete
}
</
span > < / dt > < dd
class
= "rows" > < span
class
= "grey" > {year} < / span > < / dd > < dd
class
= "rows" > < strong
class
= "green size18" > {price} < / strong > < span
class
= "text" > {currency} < / span > < / dd > < dd
class
= "rows text" > < i
class
= "icon-location" > < / i > {city} < / dd > < / dl > < / a > < a
target = "{linkTarget}"
href = "{link}"
rel = "nofollow"
action = "send_statistics"
block = "informer"
element = "image"
type = "click"
internal = "{internal}"
marka_id = "{markaId}"
model_id = "{modelId}"
complete_id = "{completeId}"
autosalon_id = "{autosalonId}"
auto_id = "{autoId}"
class
= "item-rotator" > < div
class
= "top-information" > < span
class
= "link name size18 overflowed" > {marka}
{
    model
}
{
    complete
}
</
span > < span
class
= "grey fl-r" > {year} < / span > < / div > < div
class
= "block-price" > < strong
class
= "price size18 green" > {price} < / strong > {currency} < span
class
= "label-hot in-stock {inStockHide}" > в
нaличии < / span > < / div > < div
class
= "photo-item" > < img
src = "{img}"
alt = "" / > < span
class
= "description" > < span
class
= "labels-list boxed" > < span
class
= "label-hot red {actionsHide}" > Акция < / span > < span
class
= "label-hot blue {creditorsHide}" > Кредит < / span > < span
class
= "label-hot blue {testdriveHide}" > Тест - драйв < / span > < / span > < span
class
= "list-characteristic" > < span
class
= "item-list boxed location" > < span
class
= "item-icon" > < i
class
= "icon-location-white" > < / i > < / span > {city} < / span > < span
class
= "item-list boxed {gearHide}" > < span
class
= "item-icon" > < i
class
= "icon-fuel-white" > < / i > < / span > < span
class
= "size18" > {engineVolume}
л., {fuel} < / span > < / span > < span
class
= "item-list boxed {gearHide}" > < span
class
= "item-icon" > < i
class
= "icon-transmission-white" > < / i > < / span > < span
class
= "size18" > {gear} < / span > < / span > < / span > < / span > < / div > < / a > < section
id = "newautoInformerBottom"
class
= "box-panel newauto-rotator-redesign" > < div
class
= "head" > < h2
class
= "title-head inline" > < a
href = "/newauto/"
action = "send_statistics"
target = "_blank"
block = "informer"
element = "newauto"
internal = "1" > Новые
авто < / a > < span
class
= "size15" > на
AUTO.RIA < / span > < span
class
= "area"
style = "position: relative;" > < a
class
= "show-more size15 offers_count "
href = "/newauto/search/?category_id=1"
target = "_blank"
action = "send_statistics"
block = "informer"
element = "all"
internal = "1" > Смотреть
все < / a > < / span > < / h2 > < / div > < div
class
= "carousel" > < a
href = "javascript:void(0)"
class
= "carousel-control prev"
data - action = "prev" > < / a > < a
href = "javascript:void(0)"
class
= "carousel-control next"
data - action = "next" > < / a > < div
class
= "carousel-inner"
id = "searchResultsNewAutoInformerBottom" > < / div > < / div > < / section > < section
id = "newautoInformerBottom"
class
= "box-panel newauto-for-searchby" > < h2
class
= "title-head" > < a
href = "/newauto/"
action = "send_statistics"
target = "_blank"
block = "informer"
element = "newauto"
internal = "1" > Новые
авто < / a > < span
class
= "size15" > на
AUTO.RIA < / span > < / h2 > < div
class
= "carousel" > < a
href = "javascript:void(0)"
class
= "carousel-control prev"
data - action = "prev" > < / a > < a
href = "javascript:void(0)"
class
= "carousel-control next"
data - action = "next" > < / a > < div
id = "searchResultsNewAutoInformerBottomMobile" > < / div > < / div > < / section > < footer
class
= "app-footer"
id = "footerApp" > < div
class
= "container" > < div
class
= "support-app-footer" > < div
class
= "title-panel" > Служба
заботы
о
пользователях < i
class
= "logo-ria-mini" > < / i > < / div > < div
class
= "wrapper" > < img
class
= "photo"
src = "https://css.riastatic.com/images/demo/elena_tranchuk.jpg"
width = "67"
alt = "Трончук Елена" / > < div
class
= "data" > < div
class
= "title" > Трончук
Елена < / div > консyльтант
по
вопросам
работы
сайта
AUTO.RIA.com < div
class
= "hotline" > < p > 0(800)
210
012 < / p > < p > < span
class
= "size11 nowrap" > (бесплатно
со
всех
телефонов
по
Украине
)</
span > < / p > < p > (067)
431 - 82 - 29 < / p > < p > (093)
190 - 27 - 23 < / p > < p > (050)
416 - 86 - 88 < / p > < a
href = "http://help.ria.com/index.php?/Knowledgebase/List/Index/2/autoriaua"
target = "_blank"
class
= "button  button-primary" > Возникли
вопросы ?
</
a > < / div > < / div > < / div > < / div > < div
class
= "signature-app-footer" > < div
class
= "nav-app-footer" > < div
class
= "head-bar" > < div
class
= "title-com" > Компания < / div > < div
class
= "title-par" > Партнерам < div
class
= "social-btn" > < a
target = "_blank"
href = "https://twitter.com/AUTO_RIA_com"
class
= "i-btn-twitter"
title = ""
rel = "nofollow" > < / a > < a
target = "_blank"
href = "https://plus.google.com/+%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B0/posts"
class
= "i-btn-gplus"
title = ""
rel = "nofollow" > < / a > < a
target = "_blank"
href = "https://www.facebook.com/AUTORIAcom"
class
= "i-btn-facebook"
title = ""
rel = "nofollow" > < / a > < a
target = "_blank"
href = "https://www.youtube.com/channel/UCNILl5ht9pjREG0sdwtV96w"
class
= "i-btn-youtube"
title = ""
rel = "nofollow" > < / a > < a
target = "_blank"
href = "http://ok.ru/autoria?st._aid=ExternalGroupWidget_OpenGroup"
class
= "i-btn-ok"
title = ""
rel = "nofollow" > < / a > < a
target = "_blank"
href = "https://vk.com/autoria"
class
= "i-btn-vk"
title = ""
rel = "nofollow" > < / a > < / div > < / div > < / div > < div
class
= "content-bar" > < ul
class
= "list" > < li
class
= "item" > < a
href = "https://uk.wikipedia.org/wiki/AUTO.RIA"
title = "Википедия об AUTO.RIA"
target = "_blank" > Википедия < / a > об
AUTO.RIA < / li > < li
class
= "item" > < a
href = "https://www.ria.com/work/vacancies/"
title = "Вакансии на проекте AUTO.RIA"
rel = "nofollow" > Вакансии < / a > на
проекте
AUTO.RIA < / li > < li
class
= "item" > < a
href = "https://auto.ria.com/price/"
title = "Реклама на сайте AUTO.RIA" > Реклама
на
сайте < / a > AUTO.RIA < / li > < li
class
= "item" > < a
href = "http://help.ria.com/index.php?/Knowledgebase/List/Index/2/autoriaua"
title = "Помощь по сайту AUTO.RIA" > Помощь
по
сайту < / a > AUTO.RIA < / li > < li
class
= "item" > < a
href = "https://auto.ria.com/map/"
title = "Карта сайта AUTO.RIA" > Карта
сайта < / a > AUTO.RIA < / li > < / ul > < ul
class
= "list" > < li
class
= "item" > < a
href = "http://bezpeka.ria.com/"
title = "Безопасные сделки с AUTO.RIA"
rel = "nofollow" > Безопасные
сделки < / a > с
AUTO.RIA < / li > < li
class
= "item" > < a
href = "https://www.ria.com/offert/"
title = "Политика конфиденциальности на AUTO.RIA"
rel = "nofollow" > Политика
конфиденциальности < / a > & nbsp;
|&
nbsp;
<
a
href = "http://help.ria.com/index.php?/Knowledgebase/Article/View/589/0/oplatyriacom---politik-vozvrt-pltezhejj"
title = "Политика возврата средств на AUTO.RIA"
rel = "nofollow" > возврата
средств < / a > & nbsp;
на
AUTO.RIA < / li > < li
class
= "item" > < a
href = "http://cobrand.ria.com/"
title = "Партнерская программа"
rel = "nofollow" > Партнерская
программа < / a > AUTO.RIA < / li > < / ul > < / div > < / div > < p
class
= "copyright" > < i
class
= "logo-ria-small" > < / i > & copy;
2004 - 2017
RIA.com.Все
права
защищены < a
target = "_blank"
href = "https://itunes.apple.com/ru/app/auto.ria-avtoria-novye-i-b/id1083363297?mt=8"
class
= "btn-apple-store"
title = ""
rel = "nofollow" > < / a > < a
target = "_blank"
href = "https://play.google.com/store/apps/details?id=com.ria.auto"
class
= "btn-google-play"
title = ""
rel = "nofollow" > < / a > < / p > < / div > < / div > < / footer > < footer
class
= "app-footer-mobile"
id = "footerApp" > < div
class
= "copyright" > < i
class
= "logo-ria-small" > < / i > & copy;
2004 - 2017
RIA.com < div
class
= "area" > < a
href = "http://help.ria.com/index.php?/Knowledgebase/List/Index/2/autoriaua"
target = "_blank"
title = ""
rel = "nofollow" > Помощь < / a > < / div > < / div > < / footer > (function (d, w, c) {
        (w[c] = w[c] || []).push(function () {
            try {
                w.yaCounter91244 = new Ya.Metrika({id: 91244, webvisor: true, clickmap: true});
            } catch (e) {
            }
        });
        var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () {
            n.parentNode.insertBefore(s, n);
        };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";
        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f);
        } else {
            f();
        }
    })(document, window, "yandex_metrika_callbacks");
<
!--//--><![CDATA[//><!--        var pp_gemius_identifier = new String('1vA6D_NhUvtTkwZMEn6w06RunDPikRgddAeCLxl50M7.Q7');        //--><!]]>            var google_tag_params = {},        /* <![CDATA[ */                google_conversion_id = 982029751,                google_custom_params = window.google_tag_params,                google_remarketing_only = true;        /* ]]> */            var tns_already, tnscm_adn = tnscm_adn || [], currentProtocol = ("https:" == location.protocol ? "https:" : "http:");        (function(c,m){if(c.indexOf&&c.indexOf(m)<0){c.unshift(m);}}(tnscm_adn,"inline_cm"));        if ("undefined"==typeof(tns_already) || null==tns_already || 0==tns_already)        {            tns_already=1;            var i=new Image();            i.src=currentProtocol + "//pa.tns-ua.com/bug/pic.gif?siteid=AUTO.RIA.COM&j=1&nocache="+Math.random();            (function(){                var p=document.getElementsByTagName('head')[0];                var s=document.createElement("script");                s.type="text/javascript";                s.src= currentProtocol + "//source.mmi.bemobile.ua/cm/cm.js";                s.async = true;                p.appendChild(s);            })();        };            var chkRegPspId = /PSP_ID=.+?/ig;        var chkRegUserOnline = /user_online=.+?/ig;        var chkPspId = chkRegPspId.exec(document.cookie);        var chkUserOnline = chkRegUserOnline.exec(document.cookie);        if (chkPspId && !chkUserOnline) {            var checkOnlineImage = document.createElement("IMG");            checkOnlineImage.src = "//ui.ria.com/last_visit/set/index.jpg";        }        var chkRe=/(^|;)ui=.+?\;/gi,chkArray=chkRe.exec(document.cookie);if(!chkArray){document.cookie="chk=1; path=/; domain=ria.com;";var uiImage=document.createElement("IMG");uiImage.src="//ui.ria.com/set/index.jpg"}{"fallback":{},"locales":{"ru-RU":{"common.day":"((день|дня|дней))","common.nouns.week.nominative":"((неделя|недели|недель))","finalPage.topType":"((горячее|дешевле|=3 срочно)):type","catalogs.custom.priceRequired":"Укажите стоимость авто","catalogs.custom.errorPriceValue":"Цена должна быть не меньше 100","catalogs.custom.errorPriceNotNumber":"Цена должна быть указана в цыфрах","catalogs.custom.engineVolumeNotNumber":"Укажите объем двигателя в см3","catalogs.custom.smallEngineVolume":"Объем двигателя не должен быть меньше 500 см","common.negotiated":"((договорная|договорные|договорных))","finalPage.alsoLookingThis":"С этим авто также смотрели","finalPage.wall.successMessage.answer":"Ваш ответ успешно добавлен","finalPage.wall.exchangeTypes.yourPayment":"хочу доплату","finalPage.wall.exchangeTypes.myPayment":"моя доплата","common.verbs.pickUp.present.simple":"поднять","common.advertisement.genitive":"((объявления|объявлений|объявлений))","common.prepositions.in":"в","common.nouns.search.prepositional":"((поиске|поисках|поисках))","common.advertisement":"((объявление|объявления|объявлений))","common.nouns.chip.nominative":"((фишка|фишки|фишек))","common.verbs.update.present.simple":"обновить","common.nouns.date.accusative":"((дату|даты|дат))","common.nouns.publication.genitive":"((публикации|публикаций|публикаций))","common.adverbs.repeatedly":"повторно","common.verbs.public":"опубликовать","common.prepositions.on":"на","common.nouns.account.prepositional":"((счету|счетах))","common.nouns.promotion.genitive":"((продвижения|продвижений))","common.adjectives.personal.masculine.prepositional":"((личном|личных))","finalPage.advertisement.added":"Объявление добавлено"}}}