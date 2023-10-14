// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой задержки — отображать новости на странице.
// Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное выполнение и ошибки с использованием then() и catch().
// При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует её снова после завершения операции (будь то успешная загрузка или ошибка).

const mockDatabase = [
    { title: "Новость 1", content: "Содержимое новости 1..." },
    { title: "Новость 2", content: "Содержимое новости 2..." },
    // ... другие статьи
];
const btn = document.querySelector('.btn');
const news = document.querySelector('.news-box');


btn.addEventListener('click', () => {
    btn.disabled = true;
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.floor(Math.random() * 10) + 1;
            console.log(random);
            if (random === 5) {
                reject(new Error('Ошибка данных'));
            } else {
                resolve(mockDatabase);
            }
        }, 2000);
    }).then((resolve) => {
        resolve.forEach(element => {
            const listItem = document.createElement('li');
            listItem.textContent = element;
            news.append(listItem);
        });
    }).catch((error) => {
        console.log("Ошибка:" + error);
    }).finally(() => {
        btn.disabled = false;
    });
})