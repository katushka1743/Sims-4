// ФУНКЦИИ ДЛЯ АВТОРИЗАЦИИ
const form_auth = document.forms.auth; // Получаем форму авторизации

form_auth.addEventListener('submit', (event) => { // Обработчик события отправки формы
    event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)
    let test = true; // Переменная для проверки валидности всех полей

    // Проверка логина
    if (form_auth.login.validity.valid) { // Проверяем, валиден ли логин
        document.getElementById('inp_name').innerText = form_auth.login.value; // Отображаем логин в элементе
        document.getElementById('name_header').innerText = form_auth.login.value; // Отображаем логин в заголовке
        const loginLabel = form_auth.login.labels[0]; // Получаем метку логина
        if (loginLabel) {
            loginLabel.innerText = ""; // Очищаем метку, если логин прошёл проверку            
        }
    } else {
        const loginLabel = form_auth.login.labels[0]; // Получаем метку логина
        if (loginLabel) {
            loginLabel.innerText = "ОШИБКА! Неверно введён логин."; // Сообщение об ошибке для логина
        }
        test = false; // Устанавливаем test в false, если логин не валиден
    } 

    // Проверка даты
    if (form_auth.date.validity.valid) { // Проверяем, валидна ли дата
        document.getElementById('inp_date').innerText = form_auth.date.value; // Отображаем дату в элементе
        const dateLabel = form_auth.date.labels[0]; // Получаем метку даты
        if (dateLabel) {
            dateLabel.innerText = ""; // Очищаем метку, если дата прошла проверку
        }
    } else {
        const dateLabel = form_auth.date.labels[0]; // Получаем метку даты
        if (dateLabel) {
            dateLabel.innerText = "ОШИБКА! Неверно введена дата."; // Сообщение об ошибке для даты
        }
        test = false; // Устанавливаем test в false, если дата не валидна
    } 

    document.getElementById('inp_gender').innerText = form_auth.input_gender.value; // Отображаем пол в элементе

    // Если все проверки пройдены, переключаем страницы
    if (test) {
        document.getElementById('navigation').classList.remove('no'); // Сокрытие кнопок навигации в форме авторизации       
        togglePages(); // Вызов функции для переключения страниц
    }
});

// ФУНКЦИИ ДЛЯ ПЕРЕХОДА ОТ АВТОРИЗАЦИИ К САЙТУ И ОБРАТНО

let curPageMain = 0; // Счётчик текущей страницы
let mainPages = document.getElementsByClassName('site'); // Получаем массив страниц

function togglePages() {
    mainPages[curPageMain].classList.add('not'); // Скрываем текущую страницу (элемент)
    
    if (curPageMain == 0) { // Проверяем, если текущая страница - это страница авторизации
        curPageMain = 1; // Переход на основную страницу (индекс 1)
    } else {
        curPageMain = 0; // Переход на страницу авторизации (индекс 0)
    }
    
    mainPages[curPageMain].classList.remove('not'); // Показываем новую страницу (элемент)
    mainPages[curPageMain].classList.add('show'); // Добавляем класс 'show' для показа страницы
}

function exit() {
    mainPages[curPageMain].classList.add('not'); // Скрываем текущую страницу (элемент)
    document.getElementById('navigation').classList.add('no');     
    
    curPageMain = 0; // Возвращаемся на страницу авторизации (индекс 0)
    
    mainPages[curPageMain].classList.remove('not'); // Показываем страницу авторизации (элемент)
    mainPages[curPageMain].classList.add('show'); // Добавляем класс 'show' для показа страницы

    document.getElementById('name_header').innerText = 'Ваш логин'; // Устанавливаем значение по умолчанию в заголовок

    resetForm(); // Вызов функции очищения
}

function resetForm() {
    pages[curPage].classList.add('no'); // Скрываем текущую страницу
    pages[0].classList.remove('no'); // Показываем первую страницу
    buttons_nav[curPage].classList.remove('active'); // Убираем активный класс с текущей кнопки
    buttons_nav[0].classList.add('active'); // Добавляем активный класс к первой кнопке
    curPage = 0; // Обновляем счётчик текущей страницы

    form_auth.reset(); // Сбрасываем форму авторизации

    // Сброс формы теста к исходным значениям при выходе
    form_test.reset();

    // Очистка текста результата
    document.getElementById('res').innerText = '';
    document.getElementById('inp_testing_result').innerText = 'Результата пока нет, но вы можете пройти тест!';

    // Удаление класса 'check' у элементов, связанных с ответами
    document.getElementById('ch1').classList.remove('check');
    document.getElementById('ch2').classList.remove('check');
    document.getElementById('ch3').classList.remove('check');

    // Очистка текстов ошибок для всех вопросов
    document.getElementById('error1').innerText = '';
    document.getElementById('error2').innerText = '';
    document.getElementById('error3').innerText = '';
    document.getElementById('error4').innerText = '';
    document.getElementById('error5').innerText = '';
    document.getElementById('error6').innerText = '';

    // Удаление классов 'OK' и 'error' для всех сообщений об ошибках
    document.getElementById('error1').classList.remove('OK');
    document.getElementById('error1').classList.remove('error');
    document.getElementById('error2').classList.remove('OK');
    document.getElementById('error2').classList.remove('error');
    document.getElementById('error3').classList.remove('OK');
    document.getElementById('error3').classList.remove('error');
    document.getElementById('error4').classList.remove('OK');
    document.getElementById('error4').classList.remove('error');
    document.getElementById('error5').classList.remove('OK');
    document.getElementById('error5').classList.remove('error');
    document.getElementById('error6').classList.remove('OK');
    document.getElementById('error6').classList.remove('error');

    // Разблокировка полей формы после сброса
    form_test.q1.disabled = false; 
    form_test.q2.disabled = false; 
    form_test.q3.disabled = false; 

    // Разблокировка радиокнопок после сброса
    document.getElementById('q4a').disabled = false;
    document.getElementById('q4b').disabled = false;
    document.getElementById('q4c').disabled = false;
    document.getElementById('q4d').disabled = false;

    document.getElementById('q5a').disabled = false;
    document.getElementById('q5b').disabled = false;
    document.getElementById('q5c').disabled = false;
    document.getElementById('q5d').disabled = false;

    document.getElementById('q6a').disabled = false;
    document.getElementById('q6b').disabled = false;
    document.getElementById('q6c').disabled = false;
    document.getElementById('q6d').disabled = false;
}

const btn_exit = document.getElementById("btn_exit"); // Получаем элемент кнопки для выхода в хедере
btn_exit.addEventListener("click", exit); // Добавляем обработчик события для кнопки выхода

const btn_out = document.getElementById("btn_out"); // Получаем элемент кнопки для выхода в личном кабинете
btn_out.addEventListener("click", exit); // Добавляем обработчик события для кнопки выхода



// ФУНКЦИИ ДЛЯ ПЕРЕХОДА ПО СТРАНИЦАМ, РАЗДЕЛАМ

let curPage = 0; // Счётчик текущей страницы
let pages = document.getElementsByClassName('page'); // Массив страниц
let buttons_nav = document.getElementsByClassName('btn_nav'); // Массив кнопок навигации

// Обработчик события для кнопки "Меню 1" (ОПИСАНИЕ)
document.getElementById('menu1').addEventListener('click', () => { 
    pages[curPage].classList.add('no'); // Скрываем текущую страницу
    pages[0].classList.remove('no'); // Показываем первую страницу
    buttons_nav[curPage].classList.remove('active'); // Убираем активный класс с текущей кнопки
    buttons_nav[0].classList.add('active'); // Добавляем активный класс к первой кнопке
    curPage = 0; // Обновляем счётчик текущей страницы
});

// Обработчик события для кнопки "Логотип" (ОПИСАНИЕ)
document.getElementById('logotip').addEventListener('click', () => { 
    pages[curPage].classList.add('no'); // Скрываем текущую страницу
    pages[0].classList.remove('no'); // Показываем первую страницу
    buttons_nav[curPage].classList.remove('active'); // Убираем активный класс с текущей кнопки
    buttons_nav[0].classList.add('active'); // Добавляем активный класс к первой кнопке
    curPage = 0; // Обновляем счётчик текущей страницы
});

// Обработчик события для кнопки "Меню 2" (СЛОВАРЬ)
document.getElementById('menu2').addEventListener('click', () => {
    pages[curPage].classList.add('no'); // Скрываем текущую страницу
    pages[1].classList.remove('no'); // Показываем вторую страницу
    buttons_nav[curPage].classList.remove('active'); // Убираем активный класс с текущей кнопки
    buttons_nav[1].classList.add('active'); // Добавляем активный класс ко второй кнопке
    curPage = 1; // Обновляем счётчик текущей страницы
});

// Обработчик события для кнопки "Меню 3" (ГАЛЕРЕЯ)
document.getElementById('menu3').addEventListener('click', () => {
    pages[curPage].classList.add('no'); // Скрываем текущую страницу
    pages[2].classList.remove('no'); // Показываем третью страницу
    buttons_nav[curPage].classList.remove('active'); // Убираем активный класс с текущей кнопки
    buttons_nav[2].classList.add('active'); // Добавляем активный класс к третьей кнопке
    curPage = 2; // Обновляем счётчик текущей страницы
});

// Обработчик события для кнопки "Меню 4" (ТЕСТ)
document.getElementById('menu4').addEventListener('click', () => {
    pages[curPage].classList.add('no'); // Скрываем текущую страницу
    pages[3].classList.remove('no'); // Показываем четвёртую страницу
    buttons_nav[curPage].classList.remove('active'); // Убираем активный класс с текущей кнопки
    buttons_nav[3].classList.add('active'); // Добавляем активный класс к четвёртой кнопке
    curPage = 3; // Обновляем счётчик текущей страницы
});

// Обработчик события для кнопки "Меню 5" (ЛИЧНЫЙ КАБИНЕТ)
document.getElementById('menu5').addEventListener('click', () => {
    pages[curPage].classList.add('no'); // Скрываем текущую страницу
    pages[4].classList.remove('no'); // Показываем пятую страницу
    buttons_nav[curPage].classList.remove('active'); // Убираем активный класс с текущей кнопки
    buttons_nav[4].classList.add('active'); // Добавляем активный класс к пятой кнопке
    curPage = 4; // Обновляем счётчик текущей страницы
});

// ФУНКЦИИ ДЛЯ ПОИСКОВИКА
const items = ["Симлиш", "Сим", "Мод", "Чит", "Набор", "Дополнение", "Каталог", "Зелья", "Присоединиться к работе", "Жизненный опыт", "Семья", "Соседство", "Навыки", "Событие", "Карьера", "Стиль жизни", "Эмоции", "Кастомизация", "Общественные места", "Секреты"]; // Словарь

const values = [
    "Симлиш - Вымышленный язык, на котором общаются персонажи в игре The Sims 4. Симлиш состоит из забавных звуков и фраз, которые создают уникальную атмосферу и юмор в игре.",
    "Сим - Персонаж, управляемый игроком в The Sims 4. Сим может иметь свои уникальные черты, желания и жизненные цели, а также развивать навыки и строить отношения с другими Симами.",
    "Мод - Пользовательское дополнение или изменение, созданное игроками, которое изменяет или добавляет новые функции в игру The Sims 4. Моды могут варьироваться от простых косметических изменений до сложных систем геймплея.",
    "Чит - Специальный код или команда, позволяющая игроку получить преимущества в игре, такие как неограниченные деньги, мгновенное выполнение действий или изменение характеристик Симов.",
    "Набор - Коллекция контента, включающая в себя новые предметы, одежду, прически и другие элементы, которые игроки могут использовать для кастомизации своих Симов и их окружения. Наборы могут быть как бесплатными, так и платными.",
    "Дополнение - Расширение для The Sims 4, которое добавляет новые функции, механики, локации и контент в игру. Дополнения значительно обогащают игровой процесс и открывают новые возможности для игроков.",
    "Каталог - Меню в игре, где игроки могут просматривать и выбирать предметы для покупки и размещения в домах Симов. Каталог включает в себя мебель, декор, одежду и другие элементы.",
    "Зелья - Специальные предметы в игре, которые Симы могут использовать для получения различных эффектов, таких как изменение настроения, превращение в другого Симa или улучшение навыков.",
    "Присоединиться к работе - Действие, позволяющее Симам начать карьеру в одной из доступных профессий. Игроки могут выбирать различные карьерные пути, которые влияют на жизнь и развитие Симов.",
    "Жизненный опыт - Набор событий и достижений, которые Симы переживают на протяжении своей жизни в игре. Жизненный опыт включает в себя важные моменты, такие как взросление, создание семьи и карьерные успехи, которые формируют их личность и историю.",
    "Семья - Группа Симов, которые живут вместе и могут быть связаны кровными узами или браком. Семьи могут включать в себя родителей, детей, бабушек и дедушек, а также других родственников.",
    "Соседство - Область, в которой живут Симы. Соседства состоят из различных участков, домов и общественных мест, где Симы могут взаимодействовать друг с другом и исследовать окружающий мир.",
    "Навыки - Уровни мастерства, которые Симы могут развивать в различных областях, таких как кулинария, рисование, спорт и другие. Навыки влияют на качество действий Симов и открывают новые возможности в игре.",
    "Событие - Специальное мероприятие, которое Симы могут организовать или участвовать в нем, например, день рождения, свадьба или праздник. События могут включать в себя уникальные действия и награды.",
    "Карьера - Профессиональный путь, который Симы могут выбрать для заработка денег и достижения успеха. Каждая карьера имеет свои уникальные уровни, задачи и возможности для продвижения.",
    "Стиль жизни - Набор предпочтений и привычек Симов, который влияет на их поведение и взаимодействие с окружающим миром. Стиль жизни может включать в себя такие аспекты, как здоровье, социальные связи и хобби.",
    "Эмоции - Состояния, которые Симы могут испытывать в зависимости от их действий, окружения и взаимодействий с другими Симами. Эмоции влияют на поведение Симов и могут открывать или закрывать определенные действия.",
    "Кастомизация - Процесс изменения внешнего вида Симов и их окружения с помощью различных инструментов и предметов. Игроки могут настраивать одежду, прически, мебель и архитектуру по своему вкусу.",
    "Общественные места - Локации, где Симы могут встречаться, общаться и проводить время вне своих домов. Общественные места могут включать в себя парки, кафе, клубы и другие заведения.",    "Секреты - Скрытые элементы или механики в игре, которые игроки могут обнаружить, исследуя мир The Sims 4. Секреты могут включать в себя уникальные предметы, персонажей или сюжетные линии."
];

const inp_search = document.getElementById('inp_search'); // Поле ввода для поиска
const dict_out = document.getElementById('dict_out'); // Элемент для вывода результатов поиска
const btn_search = document.getElementById('btn_search'); // Кнопка для выполнения поиска
const out_value = document.getElementById('out_value'); // Поле вывода для описания выбранного элемента

// Изначальная очистка вывода
dict_out.innerHTML = ''; // Очистка вывода перед отображением результатов

// Перебор элементов словаря для отображения соответствующих запросу
items.forEach((item, index) => {
    // Проверка, содержит ли элемент поиска введённый текст (без учёта регистра)
    if (item.toLowerCase().includes(inp_search.value.toLowerCase())) {
        const btn_dict = document.createElement('button'); // Создание кнопки для найденного элемента
        btn_dict.innerText = item; // Добавление текста в элемент кнопки
        dict_out.appendChild(btn_dict); // Добавление кнопки в вывод

        // Добавление обработчика события для кнопки
        btn_dict.addEventListener('click', () => {
            out_value.innerText = values[index]; // Вывод соответствующего значения при нажатии на кнопку
        });
    }
});

// Обработчик события для кнопки поиска
btn_search.addEventListener('click', () => {
    out_value.innerText = ''; // Очистка вывода при нажатии на кнопку
    dict_out.innerHTML = ''; // Очистка вывода перед новым поиском
    items.forEach((item, index) => {
        // Проверка, содержит ли элемент поиска введённый текст (без учёта регистра)
        if (item.toLowerCase().includes(inp_search.value.toLowerCase())) {
            const btn_dict = document.createElement('button'); // Создание кнопки для найденного элемента
            btn_dict.innerText = item; // Добавление текста в элемент кнопки
            dict_out.appendChild(btn_dict); // Добавление кнопки в вывод

            // Добавление обработчика события для кнопки
            btn_dict.addEventListener('click', () => {
                out_value.innerText = values[index]; // Вывод соответствующего значения при нажатии на кнопку
            });
        }
    });
});


// ФУНКЦИИ ДЛЯ ГАЛЕРЕИ

let car = document.getElementsByClassName('def'); // Получение элементов с классом 'def'
let x = 0; // Индекс текущего слайда

const btnP = document.getElementById('btnP'); // Получение кнопки для перемещения вправо
btnP.addEventListener('click', funP); // Добавление обработчика события на кнопку

const btnM = document.getElementById('btnM'); // Получение кнопки для перемещения влево
btnM.addEventListener('click', funM); // Добавление обработчика события на кнопку

const count_img = document.getElementById('count_img'); // Получение элемента для отображения счетчика слайдов

updateSlideCount(); // Обновление счетчика слайдов

function updateSlideCount() {
    count_img.innerText = `${x + 1} слайд из ${car.length}`; // Обновление текста счетчика
}

// Функция для перемещения вправо
function funP() {
    // Проверка конца массива 'car'
    if (x < car.length - 1) {                       
        x += 1; // Увеличение индекса 'x'
    } else {
        x = car.length - 1; // Установка 'x' на последний индекс
    }
    // Установка значения CSS переменной "--el"
    document.documentElement.style.setProperty("--el", x * (-800) + 'px'); // Перемещение слайда
    updateSlideCount(); // Обновление счетчика слайдов
}

// Функция для перемещения влево
function funM() {
    // Проверка начала массива 'car'
    if (x > 0) {                       
        x -= 1; // Уменьшение индекса 'x'
    } else {
        x = 0; // Установка 'x' на 0
    }                               
    // Установка значения CSS переменной "--el"
    document.documentElement.style.setProperty("--el", x * (-800) + 'px'); // Перемещение слайда
    updateSlideCount(); // Обновление счетчика слайдов
}


//  ФУНКЦИИ ДЛЯ ТЕСТА

// Получение формы с именем 'test'
const form_test = document.forms.test;

// Добавление обработчика события 'submit' для формы
form_test.addEventListener('submit', (event) => {
    // Отмена стандартного поведения отправки формы
    event.preventDefault();
    // Инициализация переменной для хранения результата
    let result = 0;
    
    // Добавление валидных ответов на вопросы q1, q2 и q3 к результату
    result += form_test.q1.validity.valid; 
    result += form_test.q2.validity.valid; 
    result += form_test.q3.validity.valid; 
    
    // Преобразование значений из полей q4, q5 и q6 в числа и добавление к результату
    result += Number(form_test.q4.value); 
    result += Number(form_test.q5.value); 
    result += Number(form_test.q6.value); 
    
    // Отображение результата в элементе с id 'res'
    document.getElementById('res').innerText = result;
    document.getElementById('inp_testing_result').innerText = result;
    
    // Добавление класса 'check' к элементам с id 'ch1', 'ch2' и 'ch3'
    document.getElementById('ch1').classList.add('check');
    document.getElementById('ch2').classList.add('check');
    document.getElementById('ch3').classList.add('check');
    
    // Проверка валидности ответа на вопрос q1
    if (form_test.q1.validity.valid) {
        document.getElementById('error1').innerText = 'Да, это правильный ответ!';
        document.getElementById('error1').classList.add('OK'); // Добавление класса для правильного ответа
    } else {
        document.getElementById('error1').innerText = 'О нет, это неправильный ответ! Правильный ответ: Программирование.';
        document.getElementById('error1').classList.add('error'); // Добавление класса для неправильного ответа
    } 
    
    // Проверка валидности ответа на вопрос q2
    if (form_test.q2.validity.valid) {
        document.getElementById('error2').innerText = 'Да, это правильный ответ!';
        document.getElementById('error2').classList.add('OK'); // Добавление класса для правильного ответа
    } else {
        document.getElementById('error2').innerText = 'О нет, это неправильный ответ! Правильный ответ: Кулинария.';
        document.getElementById('error2').classList.add('error'); // Добавление класса для неправильного ответа
    } 

    // Проверка валидности ответа на вопрос q3
    if (form_test.q3.validity.valid) {
        document.getElementById('error3').innerText = 'Да, это правильный ответ!';
        document.getElementById('error3').classList.add('OK'); // Добавление класса для правильного ответа
    } else {
        document.getElementById('error3').innerText = 'О нет, это неправильный ответ! Правильный ответ: Виллоу Крик.';
        document.getElementById('error3').classList.add('error'); // Добавление класса для неправильного ответа
    } 

    // Проверка валидности ответа на вопрос q4
    if (Number(form_test.q4.value) == 1) {
        document.getElementById('error4').innerText = 'Да, это правильный ответ!';
        document.getElementById('error4').classList.add('OK'); // Добавление класса для правильного ответа
    } else {
        document.getElementById('error4').innerText = 'О нет, это неправильный ответ! Правильный ответ: Зомби.';
        document.getElementById('error4').classList.add('error'); // Добавление класса для неправильного ответа
    }

    // Проверка валидности ответа на вопрос q5
    if (Number(form_test.q5.value) == 1) {
        document.getElementById('error5').innerText = 'Да, это правильный ответ!';
        document.getElementById('error5').classList.add('OK'); // Добавление класса для правильного ответа
    } else {
        document.getElementById('error5').innerText = 'О нет, это неправильный ответ! Правильный ответ: Механика.';
        document.getElementById('error5').classList.add('error'); // Добавление класса для неправильного ответа
    }

    // Проверка валидности ответа на вопрос q6
    if (Number(form_test.q6.value) == 1) {
        document.getElementById('error6').innerText = 'Да, это правильный ответ!';
        document.getElementById('error6').classList.add('OK'); // Добавление класса для правильного ответа
    } else {
        document.getElementById('error6').innerText = 'О нет, это неправильный ответ! Правильный ответ: Управление временем.';
        document.getElementById('error6').classList.add('error'); // Добавление класса для неправильного ответа
    }

    // Запрет на изменение ответов после проверки
    form_test.q1.disabled = true; 
    form_test.q2.disabled = true; 
    form_test.q3.disabled = true; 
    
    // Запрет на изменение радиокнопок после проверки
    document.getElementById('q4a').disabled = true; 
    document.getElementById('q4b').disabled = true; 
    document.getElementById('q4c').disabled = true; 
    document.getElementById('q4d').disabled = true; 

    document.getElementById('q5a').disabled = true; 
    document.getElementById('q5b').disabled = true; 
    document.getElementById('q5c').disabled = true; 
    document.getElementById('q5d').disabled = true; 

    document.getElementById('q6a').disabled = true; 
    document.getElementById('q6b').disabled = true; 
    document.getElementById('q6c').disabled = true; 
    document.getElementById('q6d').disabled = true; 

    // Условие для красивого оформления результата
    if (result == 6) { // Все ответы правильные
        document.getElementById('res').classList.add('cogr'); // Класс для полного успеха
    } else {
        if (result == 4 || result == 5) { // Почти все ответы правильные
            document.getElementById('res').classList.add('almcogr'); // Класс для частичного успеха
        } else {
            document.getElementById('res').classList.add('notcogr'); // Класс для неудачи
        }
    }
});

// Обработчик события для кнопки сброса в тесте
document.getElementById('btnReset').addEventListener('click', () => {
    resetForm();
});































