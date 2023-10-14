// Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов. Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для своего гарнитура. После того как пользователь собрал свой комплект и сохраняет свой выбор, информация о нем сохраняется в куки. При следующем посещении сайта их индивидуальные настройки автоматически загружаются, и они видят ранее созданный мебельный комплект.
// Создайте базовую HTML-структуру с различными элементами мебели (например, стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).
// Пользователи могут выбирать разные элементы и параметры, чтобы составить свой мебельный гарнитур.
// После выбора всех желаемых параметров предоставьте кнопку "Сохранить комплект", которая сохраняет текущий выбор пользователя в куки.
// При следующем посещении сайта автоматически загрузите сохраненные параметры из куки и отобразите ранее созданный комплект.
// Убедитесь, что у пользователей есть возможность очистить сохраненные настройки (очистить куки).

saveBtn.addEventListener('click', () => {

    // document.cookie = `color=${tableColor.value}`;
    // document.cookie = `material=${chairMaterial.value}`;
    Cookies.set('myname', 'New');
});

console.log(document.cookie);

loadBtn.addEventListener('click', () => {
    const cookies = document.cookie.split(/;/);
    console.log(document.cookie.split(/;/));
    for (let i = 0; i < cookies.length; i++) {

        if (cookies[i].split('=')[0] === 'color') {
            tableColor.value = cookies[i].split('=')[1];
        }
        if (cookies[i].split('=')[0] === 'material') {
            chairMaterial.value = cookies[i].split('=')[1];
        }
    }
});
clearBtn.addEventListener('click', () => {
    const allCookie = document.cookie.split(/;/)

    for (let i = 0; i < allCookie.length; i++) {
        nnn = allCookie[i].split('=');
        // Cookies.set(allCookie[i].split('=')[0], 'New')
        // Cookies.set(nnn[0], 'New')
        Cookies.remove('color');
        console.log(Cookies.get('color'));
        console.log(typeof nnn[0]);

    }
    Cookies.remove('color', { path: '' });
})
console.log(document.cookie);