//напишите функцию generateRandomNumber(),которая возвращает Promise, выполняющийся через 1 сек и резолвит случайное число от1 до 10. если возникла ошибка при генерации числа,Promise должен быть отклонен с сообщением об ошибке

let generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            if (randomNumber) {

            } else {
                reject('Ошибка генерации случайного числа');
            }
        }, 1000);
    });
};

generateRandomNumber()
    .then((number) => {
        console.log('сгенерировано случайное число:', number);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });

//напишите функцию fetchData(url),которая принимает URL в качестве аргумента и возвращает Promise ,выполняющий запрос данных по указанному URL.Если запрос завершается успешно Promise должен резолвить полученные данные. В случае ошибки запроса, Promise должен быть отклонен с сообщением об ошибке

let fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject('Ошибка загрузки данных'));
    });
};
//https://randombig.cat/roar.json
fetchData('https://api.exampple.com/data')
    .then((data) => {
        console.log('Получены данные:'), data;
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });

// напишите функцию checkFileExists(file),которая принимает имя файла в качестве аргумента и возвращает Promise ,выполняющий через 2 секунды. Promise должен резолвиться, если файл существует, и отклониться если файла нет
let checkIFileExists = (file) => {
};
let checkFileExists = (file) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileExists = checkIFileExists(file);
            if (fileExists) {
                resolve('файл существует');
            } else {
                reject('файл не существует');
            }
        }, 2000);
    });
};
checkFileExists('example.txt')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log('Ошибка:', error);
    });
//then напишите функцию calculateSum(a,b), которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен быть выполнен суммой двух чисел.

let calculateSum = (a, b) => {
    return new Promise((resolve, reject) => {
        const sum = a + b;
        resolve(sum);
    });
}
calculateSum(3, 7)
    .then((result) => {
        console.log('сумма чисел:', result);
    });
//напишите функцию divideNumbers(a,b),которая принимает два числа в качестве аргументов и возвращает Promise. Promise должен выполнять деление первого числа на второе. Если второе число равно 0,Promise должен быть отклонен с сообщением о невозможности деления на 0

let divideNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('невозможно делить на 0');
        } else {
            resolve(a / b);
        }
    });
};
divideNumbers(10, 2)
    .then((result) => {
        console.log('результат деления:', result);
    })
    .catch((error) => {
        console.log('ошибка', error);
    });

//цепочка промиссов
new Promise(function (resolve) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
});

//finaly
let processData = (data) => {
};
let performOperation = (data) => {
    return new Promise((resolve, reject) => {
        let result = processData(data);
        if (result) {
            resolve(result);
        } else {
            reject('ошибка операции');
        }
    }).finally(() => {
        console.log('Опервция завершена');
    });
};
performOperation('example')
    .then((result) => {
        console.log('результат операции:', result);
    })
    .catch((error) => {
        console.log('ошибка', error);
    });


Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('ошибка')), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))])
    .then(console.log)
    .catch(console.log);
//будет ошибка,
//вы разрабатываете приложение, которое отправляет запросы к разным серверам и хотите определить, какой сервер отвечает быстрее. Напишите функцию chekServerResponse(urls),которая принимает массив  URL адресов в качестве аргумента и возвращает Promise. Promise должен быть выполнен с URL адресом сервера, который первым ответил на запрос
let chekServerResponse = (urls) => {
    let promises = urls.map((url) => fetch(url));
    return Promise.race(promises)
        .then((response) => {
            return response.url;
        });
};
let urls = [];
chekServerResponse(urls)
    .then((fastestServer) => {
        console.log('самый быстрый сервер',fastestServer);
    })
    .catch((error)=>{
        console.log('ошибка',error);
    });



