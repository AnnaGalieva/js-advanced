//напишите функцию setCookie(name,value,days),которая устанавливает cookie с указанным именем, значением и сроком действия в днях
let setCookie = (name, value, days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    let cookieValue = encodeURIComponent(value) + '; expires' + expirationDate.toUTCString();
    document.cookie = name + '=' + cookieValue;
};
setCookie('username', 'J D', 7);
setCookie('userinfo', 'm', 5);
//напишите функцию getCookie(name),которая возвращает значение cookie с указанным именем
let getCookie = (name) => {
    let cookies = document.cookies.split(';');
    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};
let username = getCookie('username');
console.log('Значение cookie"username"', username);
//напишите функцию deleteCookie(name), которая удаляет cookie с указанным именем
let deleteCookie = (name) => {
    document.cookie = name + '=; experes=Thu, 01 jan 1970 00:00:00 UTC; path=/;';
};
deleteCookie('username');