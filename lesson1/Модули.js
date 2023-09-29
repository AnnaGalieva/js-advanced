//Экспорт
//чтбы получить доступ к объектам, надо их экспортировать
export const name = 'square'; //ключевое слово export

export function draw(ctx, length, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, length, length);

    return {
        length: length,
        x: x,
        y: y,
        color: color
    };
}
////внутри блоков экспортировать нельзя

//импорт

import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
import * as Square from './modules/square.js'; //импортировать всё что можно
// /js-examples/modules / basic - modules / modules / square.js
//     . / modules / square.js //точка в начале пути может использоваться для обозначения текущей диретроии