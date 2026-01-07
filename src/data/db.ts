import { IQuestion } from "@/types";

export const db: Array<IQuestion[]> = [
  [
    {
      id: 1,
      content: "Что такое база данных?",
      options: [
        {
          id: 1,
          content: "Организованная совокупность структурированных данных, хранящихся в электронной системе",
          isRight: true,
        },
        { id: 2, content: "Программа для редактирования текстовых документов", isRight: false },
        { id: 3, content: "Любой файл, хранящийся на жестком диске компьютера", isRight: false },
        { id: 4, content: "Устройство для вывода информации на экран", isRight: false },
      ],
    },
    {
      id: 2,
      content: "Что такое модель данных?",
      options: [
        { id: 5, content: "Совокупность структур данных и операций над ними", isRight: true },
        { id: 6, content: "Красивый интерфейс приложения", isRight: false },
        { id: 7, content: "Схема подключения серверов к сети", isRight: false },
        { id: 8, content: "Процесс резервного копирования информации", isRight: false },
      ],
    },
    {
      id: 3,
      content: "Что такое реляционная модель данных?",
      options: [
        { id: 9, content: "Модель, основанная на представлении данных в виде таблиц (отношений)", isRight: true },
        { id: 10, content: "Иерархическая структура в виде дерева", isRight: false },
        { id: 11, content: "Набор объектов с методами и свойствами", isRight: false },
        { id: 12, content: "Граф, описывающий связи между документами", isRight: false },
      ],
    },
    {
      id: 4,
      content: "Что значит модель 'СУЩНОСТЬ-СВЯЗЬ'?",
      options: [
        { id: 13, content: "Инструмент концептуального моделирования (ER-модель)", isRight: true },
        { id: 14, content: "Протокол передачи данных в интернете", isRight: false },
        { id: 15, content: "Физическая схема расположения жестких дисков", isRight: false },
        { id: 16, content: "Алгоритм шифрования паролей", isRight: false },
      ],
    },
    {
      id: 5,
      content: "Какие разделы существуют в SQL?",
      options: [
        { id: 17, content: "DDL, DML, DCL, TCL", isRight: true },
        { id: 18, content: "HTML, CSS, JS", isRight: false },
        { id: 19, content: "POST, GET, PUT, DELETE", isRight: false },
        { id: 20, content: "TCP, IP, HTTP", isRight: false },
      ],
    },
    {
      id: 6,
      content: "Что такое нормализация?",
      options: [
        { id: 21, content: "Процесс удаления избыточности и обеспечения целостности данных", isRight: true },
        { id: 22, content: "Увеличение объема базы данных для хранения видео", isRight: false },
        { id: 23, content: "Сжатие базы данных архиватором", isRight: false },
        { id: 24, content: "Проверка базы данных на наличие вирусов", isRight: false },
      ],
    },
    {
      id: 7,
      content: "Какой командой выполняется выборка данных?",
      options: [
        { id: 25, content: "SELECT", isRight: true },
        { id: 26, content: "EXTRACT", isRight: false },
        { id: 27, content: "GET", isRight: false },
        { id: 28, content: "PICK", isRight: false },
      ],
    },
    {
      id: 8,
      content: "Укажите ответ с типами данных в MySql",
      options: [
        { id: 29, content: "INT, VARCHAR, DATE, BLOB", isRight: true },
        { id: 30, content: "STRING, NUMBER, BOOLEAN, OBJECT", isRight: false },
        { id: 31, content: "Array, List, Map, Set", isRight: false },
        { id: 32, content: "Char, Float, Double, Script", isRight: false },
      ],
    },
    {
      id: 9,
      content: "Какие данные хранит тип BLOB?",
      options: [
        { id: 33, content: "Двоичные большие объекты (изображения, аудио)", isRight: true },
        { id: 34, content: "Только целые числа", isRight: false },
        { id: 35, content: "Короткие текстовые строки", isRight: false },
        { id: 36, content: "Логические значения TRUE/FALSE", isRight: false },
      ],
    },
    {
      id: 10,
      content: "Укажите команды групп DDL?",
      options: [
        { id: 37, content: "CREATE, ALTER, DROP", isRight: true },
        { id: 38, content: "SELECT, INSERT, UPDATE", isRight: false },
        { id: 39, content: "COMMIT, ROLLBACK", isRight: false },
        { id: 40, content: "GRANT, REVOKE", isRight: false },
      ],
    },
    {
      id: 11,
      content: "Укажите ответ с специальными предикатами SQL",
      options: [
        { id: 41, content: "BETWEEN, IN, LIKE, IS NULL", isRight: true },
        { id: 42, content: "AND, OR, NOT, XOR", isRight: false },
        { id: 43, content: "IF, ELSE, CASE, SWITCH", isRight: false },
        { id: 44, content: "SUM, AVG, MIN, MAX", isRight: false },
      ],
    },
    {
      id: 12,
      content: "Что такое реляционная алгебра?",
      options: [
        { id: 45, content: "Теоретический язык запросов, основанный на операциях над отношениями", isRight: true },
        { id: 46, content: "Математическая дисциплина о решении квадратных уравнений", isRight: false },
        { id: 47, content: "Способ подсчета количества строк в таблице", isRight: false },
        { id: 48, content: "Графический интерфейс для создания таблиц", isRight: false },
      ],
    },
    {
      id: 13,
      content: "Команда группировки данных",
      options: [
        { id: 49, content: "GROUP BY", isRight: true },
        { id: 50, content: "ORDER BY", isRight: false },
        { id: 51, content: "SORT BY", isRight: false },
        { id: 52, content: "COLLECT BY", isRight: false },
      ],
    },
    {
      id: 14,
      content: "Укажите ответ с агрегатными функциями",
      options: [
        { id: 53, content: "COUNT, SUM, AVG, MIN, MAX", isRight: true },
        { id: 54, content: "UPPER, LOWER, LEN, CONCAT", isRight: false },
        { id: 55, content: "NOW, DATE, TIME, YEAR", isRight: false },
        { id: 56, content: "ADD, SUB, MULT, DIV", isRight: false },
      ],
    },
    {
      id: 15,
      content: "Укажите команды групп DDL",
      options: [
        { id: 57, content: "TRUNCATE, CREATE, RENAME", isRight: true },
        { id: 58, content: "INSERT, DELETE, UPDATE", isRight: false },
        { id: 59, content: "SELECT, JOIN, WHERE", isRight: false },
        { id: 60, content: "COMMIT, SAVEPOINT", isRight: false },
      ],
    },
    {
      id: 16,
      content: "Каким ключеывм словом объявляются константы в PL/SQL?",
      options: [
        { id: 61, content: "CONSTANT", isRight: true },
        { id: 62, content: "FINAL", isRight: false },
        { id: 63, content: "STATIC", isRight: false },
        { id: 64, content: "IMMUTABLE", isRight: false },
      ],
    },
    {
      id: 17,
      content: "Что такое подпрограммы в PL/SQL?",
      options: [
        { id: 65, content: "Именованные блоки PL/SQL (процедуры и функции)", isRight: true },
        { id: 66, content: "Вложенные циклы", isRight: false },
        { id: 67, content: "Команды операционной системы", isRight: false },
        { id: 68, content: "Драйверы подключения к базе", isRight: false },
      ],
    },
    {
      id: 18,
      content: "Сколько разделов может содержать блок PL/SQL",
      options: [
        { id: 69, content: "Три (Declare, Begin, Exception)", isRight: true },
        { id: 70, content: "Один (только Start)", isRight: false },
        { id: 71, content: "Пять", isRight: false },
        { id: 72, content: "Неограниченное количество", isRight: false },
      ],
    },
    {
      id: 19,
      content: "Сколько нормальных форм существует в проектировании?",
      options: [
        { id: 73, content: "6 основных (1NF-5NF + BCNF) и выше", isRight: true },
        { id: 74, content: "Только одна", isRight: false },
        { id: 75, content: "Ровно три", isRight: false },
        { id: 76, content: "Десять", isRight: false },
      ],
    },
    {
      id: 20,
      content: "Что такое триггеры",
      options: [
        { id: 77, content: "Хранимые процедуры, которые срабатывают автоматически при событии", isRight: true },
        { id: 78, content: "Кнопки в пользовательском интерфейсе", isRight: false },
        { id: 79, content: "Тип данных для хранения времени", isRight: false },
        { id: 80, content: "Внешние ключи", isRight: false },
      ],
    },
    {
      id: 21,
      content: "Что такое динамический SQL?",
      options: [
        { id: 81, content: "SQL-запросы, которые строятся и выполняются во время выполнения программы", isRight: true },
        { id: 82, content: "Запросы, которые работают быстрее обычных", isRight: false },
        { id: 83, content: "Анимация в базе данных", isRight: false },
        { id: 84, content: "Автоматическое обновление таблиц", isRight: false },
      ],
    },
    {
      id: 22,
      content: "Что такое SQL.",
      options: [
        { id: 85, content: "Структурированный язык запросов для работы с БД", isRight: true },
        { id: 86, content: "Язык разметки веб-страниц", isRight: false },
        { id: 87, content: "Система управления файлами", isRight: false },
        { id: 88, content: "Протокол передачи почты", isRight: false },
      ],
    },
    {
      id: 23,
      content: "Предназначение UNION;",
      options: [
        { id: 89, content: "Объединение результатов двух и более SELECT-запросов", isRight: true },
        { id: 90, content: "Слияние двух таблиц в одну физическую", isRight: false },
        { id: 91, content: "Удаление дубликатов внутри одной колонки", isRight: false },
        { id: 92, content: "Сортировка данных по возрастанию", isRight: false },
      ],
    },
    {
      id: 24,
      content: "Предназначение JOIN;",
      options: [
        { id: 93, content: "Соединение строк из двух или более таблиц на основе общего поля", isRight: true },
        { id: 94, content: "Добавление новых строк в таблицу", isRight: false },
        { id: 95, content: "Создание связи между серверами", isRight: false },
        { id: 96, content: "Разделение одной таблицы на две", isRight: false },
      ],
    },
    {
      id: 25,
      content: "Укажите ответ с условными операторами в PL/SQL",
      options: [
        { id: 97, content: "IF, ELSIF, CASE", isRight: true },
        { id: 98, content: "WHILE, LOOP, FOR", isRight: false },
        { id: 99, content: "SWITCH, CHOOSE", isRight: false },
        { id: 100, content: "WHERE, HAVING", isRight: false },
      ],
    },
  ],
  [
    {
      id: 26,
      content: "Что такое проектирование базы данных.",
      options: [
        { id: 101, content: "Процесс создания схемы БД на основе требований", isRight: true },
        { id: 102, content: "Написание кода на языке Java", isRight: false },
        { id: 103, content: "Установка СУБД на компьютер", isRight: false },
        { id: 104, content: "Очистка жесткого диска", isRight: false },
      ],
    },
    {
      id: 27,
      content: "Укажите ответ с операторами цикла в PL/SQL",
      options: [
        { id: 105, content: "LOOP, WHILE, FOR", isRight: true },
        { id: 106, content: "REPEAT, UNTIL", isRight: false },
        { id: 107, content: "GOTO, EXIT", isRight: false },
        { id: 108, content: "START, END", isRight: false },
      ],
    },
    {
      id: 28,
      content: "Из каких уровней состоит трёх уровневая архитектура БД;",
      options: [
        { id: 109, content: "Внешний, концептуальный, внутренний", isRight: true },
        { id: 110, content: "Верхний, средний, нижний", isRight: false },
        { id: 111, content: "Клиент, сервер, база", isRight: false },
        { id: 112, content: "Физический, логический, программный", isRight: false },
      ],
    },
    {
      id: 29,
      content: "Что такое транзакция;",
      options: [
        {
          id: 113,
          content: "Логическая единица работы, которая выполняется целиком или не выполняется вовсе",
          isRight: true,
        },
        { id: 114, content: "Запрос на выборку данных", isRight: false },
        { id: 115, content: "Процесс передачи файла по сети", isRight: false },
        { id: 116, content: "Команда создания таблицы", isRight: false },
      ],
    },
    {
      id: 30,
      content: "Из каких команды состоит группа DML",
      options: [
        { id: 117, content: "SELECT, INSERT, UPDATE, DELETE", isRight: true },
        { id: 118, content: "CREATE, DROP, ALTER", isRight: false },
        { id: 119, content: "GRANT, REVOKE", isRight: false },
        { id: 120, content: "COMMIT, ROLLBACK", isRight: false },
      ],
    },
    {
      id: 31,
      content: "Выберите вариант с правильным синтаксисом команды UPDATE",
      options: [
        { id: 121, content: "UPDATE table_name SET col1 = val1 WHERE condition", isRight: true },
        { id: 122, content: "UPDATE col1 = val1 FROM table_name", isRight: false },
        { id: 123, content: "SET table_name UPDATE col1 = val1", isRight: false },
        { id: 124, content: "UPDATE INTO table_name VALUES (val1)", isRight: false },
      ],
    },
    {
      id: 32,
      content: "Что такое файловая система?",
      options: [
        {
          id: 125,
          content: "Порядок, определяющий способ организации, хранения и именования данных на носителях",
          isRight: true,
        },
        { id: 126, content: "Сама база данных", isRight: false },
        { id: 127, content: "Программа для работы с интернетом", isRight: false },
        { id: 128, content: "Жесткий диск компьютера", isRight: false },
      ],
    },
    {
      id: 33,
      content: "Какие проблемы возникают при многопользовательском доступе?",
      options: [
        { id: 129, content: "Потеря обновлений, 'грязное' чтение, неповторяющееся чтение", isRight: true },
        { id: 130, content: "Медленная печать на принтере", isRight: false },
        { id: 131, content: "Отсутствие интернета", isRight: false },
        { id: 132, content: "Переполнение оперативной памяти видеокарты", isRight: false },
      ],
    },
    {
      id: 34,
      content: "Что такое СУБД?",
      options: [
        { id: 133, content: "Система управления базами данных (комплекс программ)", isRight: true },
        { id: 134, content: "Система удаленного бесплатного доступа", isRight: false },
        { id: 135, content: "Сетевой узел базы данных", isRight: false },
        { id: 136, content: "Способ универсального бинарного доступа", isRight: false },
      ],
    },
    {
      id: 35,
      content: "Какие есть пользователи баз данных?",
      options: [
        { id: 137, content: "Администраторы, разработчики, конечные пользователи", isRight: true },
        { id: 138, content: "Системные блоки и мониторы", isRight: false },
        { id: 139, content: "Только анонимные пользователи", isRight: false },
        { id: 140, content: "Провайдеры и хостеры", isRight: false },
      ],
    },
    {
      id: 36,
      content: "Какие преимущества использования баз данных?",
      options: [
        { id: 141, content: "Целостность, безопасность, отсутствие избыточности, быстрый доступ", isRight: true },
        { id: 142, content: "Они всегда бесплатные", isRight: false },
        { id: 143, content: "Не требуют оперативной памяти", isRight: false },
        { id: 144, content: "Работают без процессора", isRight: false },
      ],
    },
    {
      id: 37,
      content: "Какие уровни архитектуры СУБД вы знаете?",
      options: [
        { id: 145, content: "Внешний, концептуальный, внутренний (ANSI/SPARC)", isRight: true },
        { id: 146, content: "Начальный и продвинутый", isRight: false },
        { id: 147, content: "Программный и аппаратный", isRight: false },
        { id: 148, content: "Локальный и глобальный", isRight: false },
      ],
    },
    {
      id: 38,
      content: "Какие промежуточные уровни существуют между 3-мя основными?",
      options: [
        { id: 149, content: "Логический и физический интерфейсы отображения", isRight: true },
        { id: 150, content: "Уровень пользователя и уровень админа", isRight: false },
        { id: 151, content: "Уровень Wi-Fi", isRight: false },
        { id: 152, content: "Уровень кода и уровень таблиц", isRight: false },
      ],
    },
    {
      id: 39,
      content: "Какие функции несет СУБД?",
      options: [
        { id: 153, content: "Управление данными, защита, обеспечение доступа, транзакции", isRight: true },
        { id: 154, content: "Создание текстовых документов и презентаций", isRight: false },
        { id: 155, content: "Установка операционной системы", isRight: false },
        { id: 156, content: "Проверка правописания", isRight: false },
      ],
    },
    {
      id: 40,
      content: "Что такое сущность?",
      options: [
        { id: 157, content: "Объект реального мира, информацию о котором нужно хранить", isRight: true },
        { id: 158, content: "Название колонки в таблице", isRight: false },
        { id: 159, content: "Сам файл базы данных", isRight: false },
        { id: 160, content: "Программный код триггера", isRight: false },
      ],
    },
    {
      id: 41,
      content: "Что такое связь?",
      options: [
        { id: 161, content: "Ассоциация между двумя или более сущностями", isRight: true },
        { id: 162, content: "Провод между компьютером и сервером", isRight: false },
        { id: 163, content: "Скорость интернета", isRight: false },
        { id: 164, content: "Логин и пароль пользователя", isRight: false },
      ],
    },
    {
      id: 42,
      content: "Зачем применяется моделирование?",
      options: [
        { id: 165, content: "Для визуализации и структурирования требований перед созданием БД", isRight: true },
        { id: 166, content: "Для украшения документации", isRight: false },
        { id: 167, content: "Чтобы компьютер работал быстрее", isRight: false },
        { id: 168, content: "Для шифрования данных", isRight: false },
      ],
    },
    {
      id: 43,
      content: "Сколько типов бинарных связей вы знаете?",
      options: [
        { id: 169, content: "1:1, 1:N, N:M", isRight: true },
        { id: 170, content: "Только один", isRight: false },
        { id: 171, content: "Около ста", isRight: false },
        { id: 172, content: "А, B, C", isRight: false },
      ],
    },
    {
      id: 44,
      content: "Что такое реляционная модель?",
      options: [
        { id: 173, content: "Представление данных в виде двумерных таблиц", isRight: true },
        { id: 174, content: "Облачное хранилище", isRight: false },
        { id: 175, content: "Система папок в Windows", isRight: false },
        { id: 176, content: "Набор текстовых файлов", isRight: false },
      ],
    },
    {
      id: 45,
      content: "Что такое домен?",
      options: [
        { id: 177, content: "Множество допустимых значений для атрибута", isRight: true },
        { id: 178, content: "Адрес сайта в интернете", isRight: false },
        { id: 179, content: "Главный сервер в сети", isRight: false },
        { id: 180, content: "Имя пользователя базы данных", isRight: false },
      ],
    },
    {
      id: 46,
      content: "Что такое отношение?",
      options: [
        { id: 181, content: "Математическое название таблицы в реляционной модели", isRight: true },
        { id: 182, content: "Связь между мужем и женой", isRight: false },
        { id: 183, content: "Процентное соотношение данных", isRight: false },
        { id: 184, content: "Команда SQL", isRight: false },
      ],
    },
    {
      id: 47,
      content: "Чем отношение отличается от таблицы?",
      options: [
        { id: 185, content: "Отношение не содержит дубликатов строк и порядок строк не важен", isRight: true },
        { id: 186, content: "В отношении нельзя хранить числа", isRight: false },
        { id: 187, content: "Таблица всегда больше отношения", isRight: false },
        { id: 188, content: "Ничем не отличается", isRight: false },
      ],
    },
    {
      id: 48,
      content: "Что такое реляционная алгебра?",
      options: [
        { id: 189, content: "Формальный язык операций над отношениями", isRight: true },
        { id: 190, content: "Способ программирования на Python", isRight: false },
        { id: 191, content: "Раздел высшей математики о векторах", isRight: false },
        { id: 192, content: "Набор правил именования таблиц", isRight: false },
      ],
    },
    {
      id: 49,
      content: "Какие виды операторов реляционной алгебры заложил Эдгар Кодд?",
      options: [
        { id: 193, content: "Выборка, проекция, объединение, соединение и др.", isRight: true },
        { id: 194, content: "Сложение, вычитание, умножение, деление", isRight: false },
        { id: 195, content: "IF, ELSE, THEN", isRight: false },
        { id: 196, content: "GET, POST", isRight: false },
      ],
    },
    {
      id: 50,
      content: "Какие свойства есть у реляционных операторов?",
      options: [
        { id: 197, content: "Замкнутость (результат операции — тоже отношение)", isRight: true },
        { id: 198, content: "Цветность и прозрачность", isRight: false },
        { id: 199, content: "Склонность к ошибкам", isRight: false },
        { id: 200, content: "Зависимость от операционной системы", isRight: false },
      ],
    },
  ],
  [
    {
      id: 51,
      content: "Что такое реляционное исчисление?",
      options: [
        { id: 201, content: "Непроцедурный язык запросов, основанный на предикатах", isRight: true },
        { id: 202, content: "Метод подсчета количества таблиц", isRight: false },
        { id: 203, content: "Алгоритм сжатия базы данных", isRight: false },
        { id: 204, content: "Процесс удаления данных", isRight: false },
      ],
    },
    {
      id: 52,
      content: "Что такое жизненный цикл информационной системы?",
      options: [
        { id: 205, content: "Период времени от идеи создания до вывода из эксплуатации", isRight: true },
        { id: 206, content: "Время работы компьютера без перезагрузки", isRight: false },
        { id: 207, content: "Срок годности лицензии на ПО", isRight: false },
        { id: 208, content: "Процесс установки антивируса", isRight: false },
      ],
    },
    {
      id: 53,
      content: "Какие основные модели разработки жизненного цикла ИС существуют?",
      options: [
        { id: 209, content: "Каскадная, спиральная, итеративная", isRight: true },
        { id: 210, content: "Линейная и квадратная", isRight: false },
        { id: 211, content: "Быстрая и медленная", isRight: false },
        { id: 212, content: "Платная и бесплатная", isRight: false },
      ],
    },
    {
      id: 54,
      content: "Что такое концептуальное проектирование?",
      options: [
        { id: 213, content: "Создание абстрактной модели данных без привязки к конкретной СУБД", isRight: true },
        { id: 214, content: "Написание SQL-скриптов создания таблиц", isRight: false },
        { id: 215, content: "Покупка серверов и оборудования", isRight: false },
        { id: 216, content: "Рисование иконок приложения", isRight: false },
      ],
    },
    {
      id: 55,
      content: "Что такое аномалия?",
      options: [
        { id: 217, content: "Проблема в структуре данных (вставки, удаления, обновления)", isRight: true },
        { id: 218, content: "Ошибка в коде на языке C++", isRight: false },
        { id: 219, content: "Вирус в базе данных", isRight: false },
        { id: 220, content: "Неправильный пароль", isRight: false },
      ],
    },
    {
      id: 56,
      content: "Какие виды нормальных форм существуют?",
      options: [
        { id: 221, content: "1НФ, 2НФ, 3НФ, БКНФ, 4НФ, 5НФ", isRight: true },
        { id: 222, content: "Круглая, квадратная, плоская", isRight: false },
        { id: 223, content: "Альфа, Бета, Гамма", isRight: false },
        { id: 224, content: "Стандартная и расширенная", isRight: false },
      ],
    },
    {
      id: 57,
      content: "Какими свойствами обладают все нормальные формы?",
      options: [
        { id: 225, content: "Каждая следующая форма включает требования предыдущих", isRight: true },
        { id: 226, content: "Они замедляют работу базы данных", isRight: false },
        { id: 227, content: "Они необязательны для использования", isRight: false },
        { id: 228, content: "Они зависят от версии SQL", isRight: false },
      ],
    },
    {
      id: 58,
      content: "Что такое нормализация?",
      options: [
        { id: 229, content: "Метод декомпозиции таблиц для устранения избыточности", isRight: true },
        { id: 230, content: "Процесс добавления новых данных", isRight: false },
        { id: 231, content: "Сортировка таблиц по алфавиту", isRight: false },
        { id: 232, content: "Настройка прав доступа", isRight: false },
      ],
    },
    {
      id: 59,
      content: "Что такое многозначные зависимости?",
      options: [
        { id: 233, content: "Ситуация, когда один ключ определяет набор значений другого атрибута", isRight: true },
        { id: 234, content: "Когда в таблице много строк", isRight: false },
        { id: 235, content: "Зависимость базы данных от интернета", isRight: false },
        { id: 236, content: "Связь между двумя базами данных", isRight: false },
      ],
    },
    {
      id: 60,
      content: "Что такое доменно-ключевая нормальная форма?",
      options: [
        { id: 237, content: "Высшая нормальная форма, исключающая любые аномалии", isRight: true },
        { id: 238, content: "Форма для хранения доменных имен", isRight: false },
        { id: 239, content: "Специальный вид первичного ключа", isRight: false },
        { id: 240, content: "Способ шифрования доменов", isRight: false },
      ],
    },
    {
      id: 61,
      content: "Какие категории языков объединяет в себе SQL?",
      options: [
        { id: 241, content: "DDL, DML, DCL, TCL", isRight: true },
        { id: 242, content: "C++, Java, Python", isRight: false },
        { id: 243, content: "English, Russian, German", isRight: false },
        { id: 244, content: "Frontend, Backend, DevOps", isRight: false },
      ],
    },
    {
      id: 62,
      content: "Что такое оператор?",
      options: [
        { id: 245, content: "Ключевое слово, выполняющее определенное действие в запросе", isRight: true },
        { id: 246, content: "Человек, работающий за компьютером", isRight: false },
        { id: 247, content: "Название таблицы", isRight: false },
        { id: 248, content: "Тип переменной", isRight: false },
      ],
    },
    {
      id: 63,
      content: "Какие виды констант существуют в SQL?",
      options: [
        { id: 249, content: "Строковые, числовые, константы даты и времени", isRight: true },
        { id: 250, content: "Постоянные и временные", isRight: false },
        { id: 251, content: "Глобальные и локальные", isRight: false },
        { id: 252, content: "Простые и сложные", isRight: false },
      ],
    },
    {
      id: 64,
      content: "Какие группы операторов языка SQL вы знаете?",
      options: [
        { id: 253, content: "Определения, манипуляции, управления, транзакций", isRight: true },
        { id: 254, content: "Математические и логические", isRight: false },
        { id: 255, content: "Входные и выходные", isRight: false },
        { id: 256, content: "Статические и динамические", isRight: false },
      ],
    },
    {
      id: 65,
      content: "Что такое идентификатор?",
      options: [
        { id: 257, content: "Имя объекта базы данных (таблицы, колонки)", isRight: true },
        { id: 258, content: "Пароль пользователя", isRight: false },
        { id: 259, content: "Уникальный номер ошибки", isRight: false },
        { id: 260, content: "Тип данных в SQL", isRight: false },
      ],
    },
    {
      id: 66,
      content: "Что такое язык определения данных?",
      options: [
        { id: 261, content: "DDL — команды для создания и изменения структуры БД", isRight: true },
        { id: 262, content: "DML — команды для работы со строками", isRight: false },
        { id: 263, content: "Язык описания интерфейсов", isRight: false },
        { id: 264, content: "Словарь терминов", isRight: false },
      ],
    },
    {
      id: 67,
      content: "Что такое язык манипулирование данных?",
      options: [
        { id: 265, content: "DML — команды для вставки, удаления и изменения записей", isRight: true },
        { id: 266, content: "Язык для хакерских атак на базу", isRight: false },
        { id: 267, content: "Средство для настройки прав доступа", isRight: false },
        { id: 268, content: "Интерфейс для работы мышкой", isRight: false },
      ],
    },
    {
      id: 68,
      content: "Какой оператор используется для выборки данных?",
      options: [
        { id: 269, content: "SELECT", isRight: true },
        { id: 270, content: "TAKE", isRight: false },
        { id: 271, content: "SHOW", isRight: false },
        { id: 272, content: "READ", isRight: false },
      ],
    },
    {
      id: 69,
      content: "Какой оператор используется для обновление данных?",
      options: [
        { id: 273, content: "UPDATE", isRight: true },
        { id: 274, content: "REFRESH", isRight: false },
        { id: 275, content: "UPGRADE", isRight: false },
        { id: 276, content: "CHANGE", isRight: false },
      ],
    },
    {
      id: 70,
      content: "Какой оператор используется для удаление данных?",
      options: [
        { id: 277, content: "DELETE", isRight: true },
        { id: 278, content: "REMOVE", isRight: false },
        { id: 279, content: "ERASE", isRight: false },
        { id: 280, content: "DROP", isRight: false },
      ],
    },
    {
      id: 71,
      content: "Как добавляются строки в таблицу?",
      options: [
        { id: 281, content: "С помощью команды INSERT INTO", isRight: true },
        { id: 282, content: "С помощью команды ADD ROW", isRight: false },
        { id: 283, content: "Автоматически при открытии таблицы", isRight: false },
        { id: 284, content: "Через команду CREATE", isRight: false },
      ],
    },
    {
      id: 72,
      content: "Что такое агрегатная функция?",
      options: [
        { id: 285, content: "Функция, вычисляющая одно значение на основе набора строк", isRight: true },
        { id: 286, content: "Функция для удаления базы данных", isRight: false },
        { id: 287, content: "Способ объединения двух таблиц", isRight: false },
        { id: 288, content: "Специальный вид триггера", isRight: false },
      ],
    },
    {
      id: 73,
      content: "Перечислите основные агрегатные функции.",
      options: [
        { id: 289, content: "SUM, AVG, MIN, MAX, COUNT", isRight: true },
        { id: 290, content: "FIRST, LAST, MID", isRight: false },
        { id: 291, content: "UPPER, LOWER, LEN", isRight: false },
        { id: 292, content: "IF, ELSE, CASE", isRight: false },
      ],
    },
    {
      id: 74,
      content: "Где используется HAVING?",
      options: [
        { id: 293, content: "Для фильтрации сгруппированных данных (после GROUP BY)", isRight: true },
        { id: 294, content: "Вместо оператора WHERE для обычных строк", isRight: false },
        { id: 295, content: "Только в команде CREATE TABLE", isRight: false },
        { id: 296, content: "Для сортировки данных", isRight: false },
      ],
    },
    {
      id: 75,
      content: "Какие виды соединений бывают?",
      options: [
        { id: 297, content: "INNER, LEFT, RIGHT, FULL OUTER JOIN", isRight: true },
        { id: 298, content: "UP, DOWN, MIDDLE JOIN", isRight: false },
        { id: 299, content: "START, END JOIN", isRight: false },
        { id: 300, content: "SIMPLE, COMPLEX JOIN", isRight: false },
      ],
    },
  ],
  [
    {
      id: 76,
      content: "Что такое самосоединение?",
      options: [
        { id: 301, content: "Соединение таблицы самой с собой (Self Join)", isRight: true },
        { id: 302, content: "Автоматическое подключение к БД", isRight: false },
        { id: 303, content: "Создание копии таблицы", isRight: false },
        { id: 304, content: "Объединение двух одинаковых баз", isRight: false },
      ],
    },
    {
      id: 77,
      content: "Что такое подзапрос?",
      options: [
        { id: 305, content: "Запрос SELECT, вложенный в другой SQL-запрос", isRight: true },
        { id: 306, content: "Маленький запрос, который быстро работает", isRight: false },
        { id: 307, content: "Комментарий к коду", isRight: false },
        { id: 308, content: "Запрос на создание пользователя", isRight: false },
      ],
    },
    {
      id: 78,
      content: "Что такое соотнесенный подзапрос?",
      options: [
        { id: 309, content: "Подзапрос, результат которого зависит от значений внешнего запроса", isRight: true },
        { id: 310, content: "Запрос, который выполняется только один раз", isRight: false },
        { id: 311, content: "Связь между двумя разными серверами", isRight: false },
        { id: 312, content: "Запрос, возвращающий ошибку", isRight: false },
      ],
    },
    {
      id: 79,
      content: "Что такое язык определения данных?",
      options: [
        { id: 313, content: "DDL — команды управления структурой (CREATE, ALTER, DROP)", isRight: true },
        { id: 314, content: "Словарь данных в Excel", isRight: false },
        { id: 315, content: "Язык программирования C#", isRight: false },
        { id: 316, content: "Документация к базе данных", isRight: false },
      ],
    },
    {
      id: 80,
      content: "Какие объекты можно создавать с помощью языка определения данных?",
      options: [
        { id: 317, content: "Таблицы, индексы, представления, триггеры", isRight: true },
        { id: 318, content: "Только текстовые файлы", isRight: false },
        { id: 319, content: "Логины и пароли в соцсетях", isRight: false },
        { id: 320, content: "Картинки и видео", isRight: false },
      ],
    },
    {
      id: 81,
      content: "Как производить модификацию таблиц с помощью DDL?",
      options: [
        { id: 321, content: "С помощью команды ALTER TABLE", isRight: true },
        { id: 322, content: "С помощью команды UPDATE TABLE", isRight: false },
        { id: 323, content: "Удалить таблицу и создать заново", isRight: false },
        { id: 324, content: "Отредактировать файл БД в блокноте", isRight: false },
      ],
    },
    {
      id: 82,
      content: "Что такое представление?",
      options: [
        { id: 325, content: "Виртуальная таблица, содержимое которой определяется запросом (VIEW)", isRight: true },
        { id: 326, content: "Красивый график в отчете", isRight: false },
        { id: 327, content: "Интерфейс администратора", isRight: false },
        { id: 328, content: "Схема связей сущностей", isRight: false },
      ],
    },
    {
      id: 83,
      content: "Что такое транзакция?",
      options: [
        {
          id: 329,
          content: "Неделимый набор операций, завершающийся успешно или полностью отменяющийся",
          isRight: true,
        },
        { id: 330, content: "Любое нажатие клавиши в программе", isRight: false },
        { id: 331, content: "Перевод денег с карты на карту (только)", isRight: false },
        { id: 332, content: "Процесс сохранения файла", isRight: false },
      ],
    },
    {
      id: 84,
      content: "Перечислите основные свойства ACID.",
      options: [
        { id: 333, content: "Атомарность, Согласованность, Изолированность, Долговечность", isRight: true },
        { id: 334, content: "Актуальность, Скорость, Интерес, Доступность", isRight: false },
        { id: 335, content: "Кислотность, Щелочность, Прочность, Вязкость", isRight: false },
        { id: 336, content: "Адаптивность, Целостность, Интерактивность, Динамичность", isRight: false },
      ],
    },
    {
      id: 85,
      content: "Какие способы восстановления данных существуют в СУБД?",
      options: [
        { id: 337, content: "Использование журналов транзакций и резервных копий", isRight: true },
        { id: 338, content: "Перезагрузка компьютера", isRight: false },
        { id: 339, content: "Написание данных по памяти", isRight: false },
        { id: 340, content: "Поиск данных в интернете", isRight: false },
      ],
    },
    {
      id: 86,
      content: "Перечислите основные технологии доступа к данным.",
      options: [
        { id: 341, content: "ODBC, JDBC, ADO.NET, OLE DB", isRight: true },
        { id: 342, content: "HTTP, FTP, SMTP, POP3", isRight: false },
        { id: 343, content: "Wi-Fi, Bluetooth, Ethernet", isRight: false },
        { id: 344, content: "MP3, AVI, JPG, PNG", isRight: false },
      ],
    },
    {
      id: 87,
      content: "Что такое open database connectivity?",
      options: [
        { id: 345, content: "ODBC — стандартный программный интерфейс для доступа к СУБД", isRight: true },
        { id: 346, content: "Бесплатный интернет-канал", isRight: false },
        { id: 347, content: "Открытая дверь в серверную", isRight: false },
        { id: 348, content: "Способ взлома паролей", isRight: false },
      ],
    },
    {
      id: 88,
      content: "Что такое OLEDB?",
      options: [
        { id: 349, content: "Интерфейс Microsoft для доступа к различным источникам данных", isRight: true },
        { id: 350, content: "Тип старой оперативной памяти", isRight: false },
        { id: 351, content: "Название базы данных фирмы Oracle", isRight: false },
        { id: 352, content: "Код ошибки в Windows", isRight: false },
      ],
    },
    {
      id: 89,
      content: "Что такое JDBC?",
      options: [
        { id: 353, content: "Java Database Connectivity — стандарт для Java-приложений", isRight: true },
        { id: 354, content: "Драйвер для видеокарты", isRight: false },
        { id: 355, content: "Специальный тип джойстика", isRight: false },
        { id: 356, content: "Язык программирования JavaScript", isRight: false },
      ],
    },
    {
      id: 90,
      content: "С помощью какой команды создаётся хранимая процедура SQL",
      options: [
        { id: 357, content: "CREATE PROCEDURE", isRight: true },
        { id: 358, content: "NEW PROCEDURE", isRight: false },
        { id: 359, content: "MAKE PROCEDURE", isRight: false },
        { id: 360, content: "ADD PROCEDURE", isRight: false },
      ],
    },
    {
      id: 91,
      content: "Что такое первичный ключ?",
      options: [
        { id: 361, content: "Уникальный идентификатор строки в таблице", isRight: true },
        { id: 362, content: "Главный пароль от базы", isRight: false },
        { id: 363, content: "Первая колонка в любой таблице", isRight: false },
        { id: 364, content: "Ключ от офиса разработчиков", isRight: false },
      ],
    },
    {
      id: 92,
      content: "Что такое внешний ключ?",
      options: [
        { id: 365, content: "Поле, ссылающееся на первичный ключ другой таблицы", isRight: true },
        { id: 366, content: "Ключ, принесенный на флешке", isRight: false },
        { id: 367, content: "Дополнительный пароль для доступа извне", isRight: false },
        { id: 368, content: "Индекс для ускорения поиска", isRight: false },
      ],
    },
    {
      id: 93,
      content: "Основные операторы реляционной алгебры?",
      options: [
        { id: 369, content: "Селекция, проекция, произведение, объединение, разность", isRight: true },
        { id: 370, content: "Плюс, минус, умножить, разделить", isRight: false },
        { id: 371, content: "IF, FOR, WHILE", isRight: false },
        { id: 372, content: "CREATE, ALTER, DROP", isRight: false },
      ],
    },
    {
      id: 94,
      content: "Две группы реляционной алгебры?",
      options: [
        { id: 373, content: "Теоретико-множественные и специальные реляционные", isRight: true },
        { id: 374, content: "Простые и сложные", isRight: false },
        { id: 375, content: "Числовые и текстовые", isRight: false },
        { id: 376, content: "Внутренние и внешние", isRight: false },
      ],
    },
    {
      id: 95,
      content: "Операция объединение реляционной алгебры?",
      options: [
        { id: 377, content: "Формирует отношение, содержащее все кортежи обоих исходных отношений", isRight: true },
        { id: 378, content: "Умножает количество строк одной таблицы на другую", isRight: false },
        { id: 379, content: "Удаляет все данные", isRight: false },
        { id: 380, content: "Оставляет только общие строки", isRight: false },
      ],
    },
    {
      id: 96,
      content: "Операция пересечение реляционной алгебры?",
      options: [
        { id: 381, content: "Выбирает только те кортежи, которые есть в обоих отношениях одновременно", isRight: true },
        { id: 382, content: "Складывает значения в колонках", isRight: false },
        { id: 383, content: "Удаляет дубликаты", isRight: false },
        { id: 384, content: "Объединяет таблицы по внешнему ключу", isRight: false },
      ],
    },
    {
      id: 97,
      content: "Операция вычитание реляционной алгебры?",
      options: [
        {
          id: 385,
          content: "Находит кортежи, которые есть в первом отношении, но отсутствуют во втором",
          isRight: true,
        },
        { id: 386, content: "Уменьшает числовые значения в таблице", isRight: false },
        { id: 387, content: "Удаляет колонку из таблицы", isRight: false },
        { id: 388, content: "Считает разницу между количеством строк", isRight: false },
      ],
    },
    {
      id: 98,
      content: "Операция декартово произведение реляционной алгебры?",
      options: [
        { id: 389, content: "Создает все возможные комбинации строк из двух отношений", isRight: true },
        { id: 390, content: "Рисует график функции", isRight: false },
        { id: 391, content: "Умножает первичные ключи", isRight: false },
        { id: 392, content: "Сортирует данные в шахматном порядке", isRight: false },
      ],
    },
    {
      id: 99,
      content: "Как устанавливается взаимосвязь между таблицами в реляционной модели данных?",
      options: [
        { id: 393, content: "Через совпадение значений первичного и внешнего ключей", isRight: true },
        { id: 394, content: "С помощью проводов и кабелей", isRight: false },
        { id: 395, content: "Путем записи имен таблиц в один текстовый файл", isRight: false },
        { id: 396, content: "С помощью одинаковых названий таблиц", isRight: false },
      ],
    },
    {
      id: 100,
      content: "Что такое кортеж?",
      options: [
        { id: 397, content: "Строка в реляционном отношении", isRight: true },
        { id: 398, content: "Столбец в таблице", isRight: false },
        { id: 399, content: "Набор всех таблиц базы данных", isRight: false },
        { id: 400, content: "Тип данных для хранения букв", isRight: false },
      ],
    },
  ],
  [
    {
      id: 101,
      content: "Что такое атрибут?",
      options: [
        { id: 401, content: "Именованный столбец в отношении", isRight: true },
        { id: 402, content: "Свойство программы", isRight: false },
        { id: 403, content: "Уникальный номер транзакции", isRight: false },
        { id: 404, content: "Команда для удаления данных", isRight: false },
      ],
    },
    {
      id: 102,
      content: "Что такое домен?",
      options: [
        { id: 405, content: "Набор допустимых значений для одного или нескольких атрибутов", isRight: true },
        { id: 406, content: "Имя сайта", isRight: false },
        { id: 407, content: "Права доступа администратора", isRight: false },
        { id: 408, content: "Место на диске", isRight: false },
      ],
    },
    {
      id: 103,
      content: "Какое ключевое слово используется для группировки данных?",
      options: [
        { id: 409, content: "GROUP BY", isRight: true },
        { id: 410, content: "ORDER BY", isRight: false },
        { id: 411, content: "SORT BY", isRight: false },
        { id: 412, content: "CLUSTER", isRight: false },
      ],
    },
    {
      id: 104,
      content: "Какое ключевое слово используется для сортировки данных?",
      options: [
        { id: 413, content: "ORDER BY", isRight: true },
        { id: 414, content: "SORT BY", isRight: false },
        { id: 415, content: "ARRANGE", isRight: false },
        { id: 416, content: "GROUP BY", isRight: false },
      ],
    },
    {
      id: 105,
      content: "Укажите виды ключей в реляционной модели",
      options: [
        { id: 417, content: "Первичный, внешний, кандидатный, составной", isRight: true },
        { id: 418, content: "Золотой, серебряный, бронзовый", isRight: false },
        { id: 419, content: "Цифровой и аналоговый", isRight: false },
        { id: 420, content: "Открытый и закрытый", isRight: false },
      ],
    },
    {
      id: 106,
      content: "Выберите вариант с строковыми функциями MySQL",
      options: [
        { id: 421, content: "CONCAT(), SUBSTR(), LENGTH(), UPPER()", isRight: true },
        { id: 422, content: "SUM(), AVG(), COUNT()", isRight: false },
        { id: 423, content: "NOW(), DATE(), YEAR()", isRight: false },
        { id: 424, content: "ABS(), ROUND(), CEIL()", isRight: false },
      ],
    },
    {
      id: 107,
      content: "Выберите вариант с числовыми функциями MySQL?",
      options: [
        { id: 425, content: "ABS(), ROUND(), SQRT(), MOD()", isRight: true },
        { id: 426, content: "LEN(), TRIM(), REPLACE()", isRight: false },
        { id: 427, content: "JOIN(), UNION()", isRight: false },
        { id: 428, content: "DATE_ADD(), DATEDIFF()", isRight: false },
      ],
    },
    {
      id: 108,
      content: "Выберите вариант с функциями работы с датой MySQL?",
      options: [
        { id: 429, content: "NOW(), CURDATE(), DATE_FORMAT(), DATEDIFF()", isRight: true },
        { id: 430, content: "STR_TO_NUM(), CAST()", isRight: false },
        { id: 431, content: "SUM(), COUNT(), MIN()", isRight: false },
        { id: 432, content: "IFNULL(), COALESCE()", isRight: false },
      ],
    },
  ],
];
