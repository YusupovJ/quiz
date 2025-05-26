import { IQuestion } from "@/types";

export const mta: Array<IQuestion[]> = [
  [
    {
      id: 1,
      content: "Что из перечисленного не\r\nявляется типом данных?",
      options: [
        { id: 1, content: "Целые числа", isRight: false },
        { id: 2, content: "Фактические цифры", isRight: false },
        { id: 3, content: "Комплексные числа", isRight: false },
        { id: 4, content: "Матрицы", isRight: true },
      ],
    },
    {
      id: 2,
      content: "Каковы основные типы\r\nалгоритмов?",
      options: [
        {
          id: 5,
          content: "линейный, ветвящийся,\r\nповторяющийся",
          isRight: true,
        },
        { id: 6, content: "Статический, динамичный", isRight: false },
        { id: 7, content: "Цифровой, аналоговый", isRight: false },
        { id: 8, content: "Блочный, масштабируемый", isRight: false },
      ],
    },
    {
      id: 3,
      content: "Рекурсивный алгоритм – это",
      options: [
        { id: 9, content: "Одноразовый алгоритм", isRight: false },
        {
          id: 10,
          content: "Алгоритм, который называет\r\n себя",
          isRight: true,
        },
        {
          id: 11,
          content: "Алгоритм параллельного\r\nвыполнения",
          isRight: false,
        },
        { id: 12, content: "Алгоритм бесконечного цикла", isRight: false },
      ],
    },
    {
      id: 4,
      content: "Что из перечисленного является\r\nпримером структуры данных?",
      options: [
        { id: 13, content: "Целое число", isRight: false },
        { id: 14, content: "Нить", isRight: false },
        { id: 15, content: "Куча", isRight: true },
        { id: 16, content: "логическое значение", isRight: false },
      ],
    },
    {
      id: 5,
      content: "Каковы основные части\r\nалгоритма?",
      options: [
        { id: 17, content: "Начать, закончить", isRight: false },
        { id: 18, content: "Начало, изменение, результат", isRight: true },
        { id: 19, content: "Отправка, получение", isRight: false },
        { id: 20, content: "Начни, делай, результат", isRight: false },
      ],
    },
    {
      id: 6,
      content: "Какая структура данных основана\r\nна принципе LIFO?",
      options: [
        { id: 21, content: "Очередь", isRight: false },
        { id: 22, content: "Коллекция", isRight: false },
        { id: 23, content: "Стек", isRight: true },
        { id: 24, content: "Память", isRight: false },
      ],
    },
    {
      id: 7,
      content: "Какой из алгоритмов сортировки\r\nработает быстрее?",
      options: [
        { id: 25, content: "Bubblesort", isRight: false },
        { id: 26, content: "Selection sort", isRight: false },
        { id: 27, content: "Quicksort", isRight: true },
        { id: 28, content: "Insertion sort", isRight: false },
      ],
    },
    {
      id: 8,
      content: "Что такое динамическое\r\nпрограммирование?",
      options: [
        { id: 29, content: "Статическая оптимизация кода", isRight: false },
        {
          id: 30,
          content: "Решение маленьких проблем\r\n через большие проблемы",
          isRight: true,
        },
        {
          id: 31,
          content: "Динамически изменяющиеся\r\nданные",
          isRight: false,
        },
        {
          id: 32,
          content: "Создание алгоритмов\r\n ветвления",
          isRight: false,
        },
      ],
    },
    {
      id: 9,
      content: "Как измеряется сложность\r\nалгоритма?",
      options: [
        {
          id: 33,
          content: "Линейная и квадратичная\r\nсложность",
          isRight: false,
        },
        {
          id: 34,
          content: "Постоянная и логарифмическая\r\n сложность",
          isRight: false,
        },
        { id: 35, content: "Асимптотическая сложность", isRight: true },
        {
          id: 36,
          content: "Прогрессивная и регрессивная\r\n сложность",
          isRight: false,
        },
      ],
    },
    {
      id: 10,
      content: "Какая из следующих структур\r\nданных хранит пары ключ -\r\nзначение?",
      options: [
        { id: 37, content: "Список", isRight: false },
        { id: 38, content: "Кортеж", isRight: false },
        { id: 39, content: "Словарь", isRight: true },
        { id: 40, content: "Сет", isRight: false },
      ],
    },
    {
      id: 11,
      content: "Как работают жадные\r\nалгоритмы?",
      options: [
        {
          id: 41,
          content: "Всегда выбирает лучшее\r\nлокальное решение",
          isRight: true,
        },
        {
          id: 42,
          content: "Выбирает худшее локальное\r\n решение",
          isRight: false,
        },
        { id: 43, content: "Попробую все возможности", isRight: false },
        {
          id: 44,
          content: "Сочетает в себе несколько\r\n локальных решений",
          isRight: false,
        },
      ],
    },
    {
      id: 12,
      content: "Какой оператор используется в\r\nалгоритмах ветвления?",
      options: [
        { id: 45, content: "если-еще", isRight: true },
        { id: 46, content: "пока", isRight: false },
        { id: 47, content: "для", isRight: false },
        { id: 48, content: "продолжать", isRight: false },
      ],
    },
    {
      id: 13,
      content: "Какая структура данных основана\r\nна принципе FIFO?",
      options: [
        { id: 49, content: "Куча", isRight: false },
        { id: 50, content: "Очередь", isRight: true },
        { id: 51, content: "Коллекция", isRight: false },
        { id: 52, content: "Список", isRight: false },
      ],
    },
    {
      id: 14,
      content: "Какое условие должно\r\nприсутствовать в рекурсивных\r\nалгоритмах?",
      options: [
        { id: 53, content: "Предварительное условие", isRight: false },
        { id: 54, content: "Условие прекращения", isRight: true },
        { id: 55, content: "Линейное условие", isRight: false },
        { id: 56, content: "Состояние весов", isRight: false },
      ],
    },
    {
      id: 15,
      content: "Какая структура данных\r\nпозволяет хранить несколько\r\nэлементов в порядке?",
      options: [
        { id: 57, content: "Куча", isRight: false },
        { id: 58, content: "Список", isRight: true },
        { id: 59, content: "Очередь", isRight: false },
        { id: 60, content: "Хэш-таблица", isRight: false },
      ],
    },
    {
      id: 16,
      content: "Какая структура данных имеет\r\nпеременную длину?",
      options: [
        { id: 61, content: "Нить", isRight: false },
        { id: 62, content: "Куча", isRight: false },
        { id: 63, content: "Список", isRight: true },
        { id: 64, content: "Кортеж", isRight: false },
      ],
    },
    {
      id: 17,
      content: "Какая структура данных хранит\r\nэлементы в виде пар?",
      options: [
        { id: 65, content: "Набор", isRight: false },
        { id: 66, content: "Куча", isRight: false },
        { id: 67, content: "Словарь", isRight: true },
        { id: 68, content: "Очередь", isRight: false },
      ],
    },
    {
      id: 18,
      content: "Как работает структура данных\r\nстека?",
      options: [
        { id: 69, content: "ФИФО", isRight: false },
        { id: 70, content: "LIFO", isRight: true },
        { id: 71, content: "Случайный", isRight: false },
        { id: 72, content: "Линейный", isRight: false },
      ],
    },
    {
      id: 19,
      content: "Какая структура данных хранит\r\nнеповторяющиеся элементы?",
      options: [
        { id: 73, content: "Набор", isRight: true },
        { id: 74, content: "Список", isRight: false },
        { id: 75, content: "Куча", isRight: false },
        { id: 76, content: "Словарь", isRight: false },
      ],
    },
    {
      id: 20,
      content: "Как создается связанный список?",
      options: [
        { id: 77, content: "В виде сети", isRight: false },
        {
          id: 78,
          content: "Узлы соединены\r\nпоследовательно",
          isRight: true,
        },
        { id: 79, content: "В виде матрицы", isRight: false },
        { id: 80, content: "В форме круга", isRight: false },
      ],
    },
    {
      id: 21,
      content: "Как называется структура,\r\nсодержащая другую в структуре\r\nданных?",
      options: [
        { id: 81, content: "Связанный список", isRight: false },
        { id: 82, content: "Рекурсивные структуры", isRight: true },
        { id: 83, content: "Коллекция", isRight: false },
        { id: 84, content: "Статическая структура", isRight: false },
      ],
    },
    {
      id: 22,
      content: "В какой структуре данных\r\nэлементы добавляются и\r\nудаляются только с одного конца?",
      options: [
        { id: 85, content: "Куча", isRight: false },
        { id: 86, content: "Очередь", isRight: false },
        { id: 87, content: "Список", isRight: true },
        { id: 88, content: "Словарь", isRight: false },
      ],
    },
    {
      id: 23,
      content: "Что такое структура данных\r\nмассива?",
      options: [
        { id: 89, content: "Динамический", isRight: false },
        { id: 90, content: "Статический", isRight: false },
        {
          id: 91,
          content: "Хранит большие объемы\r\nданных",
          isRight: false,
        },
        { id: 92, content: "Все элементы одного типа", isRight: true },
      ],
    },
    {
      id: 24,
      content: "Структура данных Queue\r\n(Очередь), по которой\r\nдобавляются элементы?",
      options: [
        { id: 93, content: "Голова", isRight: false },
        { id: 94, content: "Середина", isRight: false },
        { id: 95, content: "Конец", isRight: true },
        { id: 96, content: "Из любой части", isRight: false },
      ],
    },
    {
      id: 25,
      content: "Как устроен алгоритм движка?",
      options: [
        {
          id: 97,
          content: "С последовательным анализом\r\n данных",
          isRight: true,
        },
        { id: 98, content: "С параллельным алгоритмом", isRight: false },
        { id: 99, content: "С обработкой со всех точек", isRight: false },
        { id: 100, content: "Это не работает", isRight: false },
      ],
    },
  ],
  [
    {
      id: 26,
      content: "Каков минимальный тип данных\r\nв структуре данных?",
      options: [
        { id: 101, content: "Int", isRight: false },
        { id: 102, content: "Плавать", isRight: false },
        { id: 103, content: "логическое значение", isRight: true },
        { id: 104, content: "Нить", isRight: false },
      ],
    },
    {
      id: 27,
      content: "Что такое рекурсивный алгоритм?",
      options: [
        {
          id: 105,
          content: " Процесс, в котором часть\r\nалгоритма неоднократно\r\n вызывает себя .",
          isRight: true,
        },
        {
          id: 106,
          content: "Частью алгоритма является\r\nпроцесс, состоящий из циклов .",
          isRight: false,
        },
        {
          id: 107,
          content: "Алгоритм, который\r\nвыполняется только один раз",
          isRight: false,
        },
        {
          id: 108,
          content: "Часть алгоритма параллельной\r\nобработки",
          isRight: false,
        },
      ],
    },
    {
      id: 28,
      content: "Что является основным\r\nэлементом алгоритмов,\r\nоснованных на рекурсии?",
      options: [
        {
          id: 109,
          content: "Обработка данных через строки",
          isRight: false,
        },
        {
          id: 110,
          content: "Алгоритм снова вызывает себя",
          isRight: true,
        },
        {
          id: 111,
          content: "Работа с постоянными\r\nзначениями",
          isRight: false,
        },
        {
          id: 112,
          content: "Однократное выполнение\r\nалгоритма",
          isRight: false,
        },
      ],
    },
    {
      id: 29,
      content: "Когда в рекурсивном алгоритме\r\nнеобходимо условие остановки?",
      options: [
        { id: 113, content: "При каждом звонке", isRight: false },
        { id: 114, content: "Только при последнем звонке", isRight: false },
        {
          id: 115,
          content: "Когда базовый уровень\r\nдостигнут",
          isRight: true,
        },
        { id: 116, content: "Только в цикле", isRight: false },
      ],
    },
    {
      id: 30,
      content: "Какой из следующих алгоритмов\r\nявляется рекурсивным?",
      options: [
        { id: 117, content: "Сортировка слиянием", isRight: true },
        { id: 118, content: "Пузырьковая сортировка", isRight: false },
        { id: 119, content: "Сортировка выбором", isRight: false },
        { id: 120, content: "Сортировка вставками", isRight: false },
      ],
    },
    {
      id: 31,
      content: "На каком принципе основано\r\nвычисление чисел Фибоначчи с\r\nпомощью рекурсивного\r\nалгоритма?",
      options: [
        { id: 121, content: "Добавить базовую стоимость", isRight: false },
        {
          id: 122,
          content: "Формирование каждого числа\r\nиз двух предыдущих чисел",
          isRight: true,
        },
        {
          id: 123,
          content: "Последовательный порядок\r\n элементов",
          isRight: false,
        },
        { id: 124, content: "Удвойте каждый элемент", isRight: false },
      ],
    },
    {
      id: 32,
      content: "Для решения какой задачи не\r\nиспользуется рекурсивный\r\nподход?",
      options: [
        { id: 125, content: "Числа Фибоначчи", isRight: false },
        {
          id: 126,
          content: "Проверка баланса кронштейнов",
          isRight: false,
        },
        { id: 127, content: "Умножение матриц", isRight: true },
        { id: 128, content: "Обход бинарных деревьев", isRight: false },
      ],
    },
    {
      id: 33,
      content: "Что такое альтернативный метод\r\nрекурсии?",
      options: [
        { id: 129, content: "Цикл", isRight: true },
        { id: 130, content: "Множество", isRight: false },
        { id: 131, content: "Функция", isRight: false },
        { id: 132, content: "Коллекция", isRight: false },
      ],
    },
    {
      id: 34,
      content: "Что такое хвостовая рекурсия?",
      options: [
        {
          id: 133,
          content: "Рекурсия работает только в\r\nбазовом случае",
          isRight: false,
        },
        {
          id: 134,
          content: "Рекурсивный вызов\r\nиспользуется только как\r\nпоследняя операция .",
          isRight: true,
        },
        {
          id: 135,
          content: "Рекурсия продолжается от\r\n начала до конца",
          isRight: false,
        },
        {
          id: 136,
          content: "Рекурсивный вызов\r\nзавершается посередине",
          isRight: false,
        },
      ],
    },
    {
      id: 35,
      content: "Какая из следующих задач\r\nиспользуется в подходе «Разделяй\r\nи властвуй»?",
      options: [
        { id: 137, content: "Сортировка слиянием", isRight: true },
        { id: 138, content: "Линейный поиск", isRight: false },
        { id: 139, content: "Пузырьковая сортировка", isRight: false },
        { id: 140, content: "Хэш", isRight: false },
      ],
    },
    {
      id: 36,
      content: "Какова роль стека в рекурсивных\r\nалгоритмах?",
      options: [
        {
          id: 141,
          content: "Чтобы сохранить каждый\r\nзвонок",
          isRight: true,
        },
        { id: 142, content: "Для поглощения данных", isRight: false },
        {
          id: 143,
          content: "Для сбора переработанных\r\n вещей",
          isRight: false,
        },
        {
          id: 144,
          content: "Просто чтобы показать базовые\r\n случаи",
          isRight: false,
        },
      ],
    },
    {
      id: 37,
      content: "В каком случае работает\r\nрекурсивная версия алгоритма\r\nдвоичного поиска?",
      options: [
        {
          id: 145,
          content: "Когда элементы расположены в\r\nпорядке возрастания",
          isRight: true,
        },
        {
          id: 146,
          content: "Когда элементы расположены в\r\nпорядке убывания",
          isRight: false,
        },
        { id: 147, content: "В любом порядке", isRight: false },
        {
          id: 148,
          content: "Когда остался только один\r\n предмет",
          isRight: false,
        },
      ],
    },
    {
      id: 38,
      content: "Как работают рекурсивные\r\nфункции?",
      options: [
        {
          id: 149,
          content: "Каждый вызов создает новый\r\nмассив",
          isRight: false,
        },
        {
          id: 150,
          content: "Разбивает большую проблему\r\nна мелкие части",
          isRight: true,
        },
        {
          id: 151,
          content: "Каждый вызов создает новую\r\n структуру данных",
          isRight: false,
        },
        {
          id: 152,
          content: "Вместо цикла используется\r\n рекурсия",
          isRight: false,
        },
      ],
    },
    {
      id: 39,
      content: "Почему важен базовый случай\r\nрекурсивной функции?",
      options: [
        {
          id: 153,
          content: "Чтобы предотвратить\r\nнепрекращающиеся звонки",
          isRight: true,
        },
        { id: 154, content: "Чтобы ускорить алгоритм", isRight: false },
        {
          id: 155,
          content: "Последовательное\r\nиспользование функций",
          isRight: false,
        },
        { id: 156, content: "Чтобы создать цикл", isRight: false },
      ],
    },
    {
      id: 40,
      content: "Как найти факториал с помощью\r\nрекурсивного алгоритма?",
      options: [
        { id: 157, content: "п * факториал (n-1)", isRight: true },
        { id: 158, content: "n + факториал(n+1)", isRight: false },
        { id: 159, content: "n - факториал(n-1)", isRight: false },
        { id: 160, content: "п * факториал(n+2)", isRight: false },
      ],
    },
    {
      id: 41,
      content: "Когда рекурсивные алгоритмы\r\nэффективны?",
      options: [
        {
          id: 161,
          content: "Когда проблему можно разбить\r\nна более мелкие части",
          isRight: true,
        },
        {
          id: 162,
          content: "Когда проблему можно решить\r\nс помощью цикла",
          isRight: false,
        },
        {
          id: 163,
          content: "Когда проблему можно решить\r\n с помощью набора",
          isRight: false,
        },
        {
          id: 164,
          content: "Только когда есть базовое\r\n состояние",
          isRight: false,
        },
      ],
    },
    {
      id: 42,
      content: "Какой алгоритм поиска данных\r\nработает в линейном порядке?",
      options: [
        { id: 165, content: "Бинарный поиск", isRight: false },
        { id: 166, content: "Линейный поиск", isRight: true },
        { id: 167, content: "Хэш-поиск", isRight: false },
        { id: 168, content: "Поиск в глубину", isRight: false },
      ],
    },
    {
      id: 43,
      content: "При каких условиях работает\r\nалгоритм двоичного поиска?",
      options: [
        { id: 169, content: "В любом наборе данных", isRight: false },
        {
          id: 170,
          content: "В отсортированном наборе\r\nданных",
          isRight: true,
        },
        { id: 171, content: "В случайном наборе данных", isRight: false },
        { id: 172, content: "Только в цифрах", isRight: false },
      ],
    },
    {
      id: 44,
      content: "На какой структуре данных\r\nалгоритм поиска хеша работает\r\nэффективно?",
      options: [
        { id: 173, content: "Куча", isRight: false },
        { id: 174, content: "Очередь", isRight: false },
        { id: 175, content: "Хэш-таблица", isRight: true },
        { id: 176, content: "Связанный список", isRight: false },
      ],
    },
    {
      id: 45,
      content: "Какой алгоритм поиска основан\r\nна двоичном разбиении?",
      options: [
        { id: 177, content: "Линейный поиск", isRight: false },
        { id: 178, content: "Бинарный поиск", isRight: true },
        { id: 179, content: "Поиск в ширину", isRight: false },
        { id: 180, content: "Интерполяционный поиск", isRight: false },
      ],
    },
    {
      id: 46,
      content: "В какой структуре данных\r\nиспользуется поиск в глубину?",
      options: [
        { id: 181, content: "Графики", isRight: true },
        { id: 182, content: "Списки", isRight: false },
        { id: 183, content: "Очередь", isRight: false },
        { id: 184, content: "Массивы", isRight: false },
      ],
    },
    {
      id: 47,
      content: "Как измеряется временная\r\nсложность в алгоритмах поиска?",
      options: [
        { id: 185, content: "Обозначение Big-O", isRight: true },
        { id: 186, content: "логарифмический", isRight: false },
        { id: 187, content: "Полиномиальный", isRight: false },
        { id: 188, content: "Квадрат", isRight: false },
      ],
    },
    {
      id: 48,
      content: "Какую структуру данных\r\nиспользует алгоритм поиска в\r\nширину?",
      options: [
        { id: 189, content: "Куча", isRight: false },
        { id: 190, content: "Очередь", isRight: true },
        { id: 191, content: "Хэш-таблица", isRight: false },
        { id: 192, content: "Связанный список", isRight: false },
      ],
    },
    {
      id: 49,
      content: "Какой алгоритм поиска данных\r\nнаиболее эффективен?",
      options: [
        { id: 193, content: "Бинарный поиск", isRight: false },
        { id: 194, content: "Линейный поиск", isRight: false },
        { id: 195, content: "Хэш-поиск", isRight: true },
        { id: 196, content: "Жадный поиск", isRight: false },
      ],
    },
    {
      id: 50,
      content: "Какова временная сложность\r\nалгоритма двоичного поиска?",
      options: [
        { id: 197, content: "На)", isRight: false },
        { id: 198, content: "О (логарифм n)", isRight: true },
        { id: 199, content: "О (n²)", isRight: false },
        { id: 200, content: "О(1)", isRight: false },
      ],
    },
  ],
  [
    {
      id: 51,
      content: "Как при поиске используется\r\nалгоритм интерполяционного\r\nпоиска?",
      options: [
        { id: 201, content: "Линейные данные", isRight: false },
        { id: 202, content: "Непонятная информация", isRight: false },
        {
          id: 203,
          content: "Массивы отсортированных\r\nчисел",
          isRight: true,
        },
        { id: 204, content: "Масштабировать данные", isRight: false },
      ],
    },
    {
      id: 52,
      content: "По какому принципу работает\r\nалгоритм жадного поиска?",
      options: [
        {
          id: 205,
          content: "Каждый раз выбираем лучшее\r\nлокальное решение",
          isRight: true,
        },
        { id: 206, content: "Попробуйте все возможности", isRight: false },
        {
          id: 207,
          content: "Добавление нескольких\r\nлокальных решений",
          isRight: false,
        },
        { id: 208, content: "Бесконечное повторение", isRight: false },
      ],
    },
    {
      id: 53,
      content: "Какое условие должно быть в\r\nалгоритме двоичного поиска?",
      options: [
        {
          id: 209,
          content: "Данные должны быть\r\nотсортированы",
          isRight: true,
        },
        {
          id: 210,
          content: "Данные должны быть\r\n случайными",
          isRight: false,
        },
        {
          id: 211,
          content: "Поиск должен быть\r\nнепрерывным",
          isRight: false,
        },
        {
          id: 212,
          content: "Вся информация должна быть\r\nдоступна",
          isRight: false,
        },
      ],
    },
    {
      id: 54,
      content: "Какой алгоритм поиска чаще\r\nвсего используется при\r\nпараллельном поиске?",
      options: [
        { id: 213, content: "Поиск в глубину", isRight: false },
        { id: 214, content: "Поиск в ширину", isRight: true },
        { id: 215, content: "Линейный поиск", isRight: false },
        { id: 216, content: "Хэш-поиск", isRight: false },
      ],
    },
    {
      id: 55,
      content: "Как работает хеш-функция?",
      options: [
        { id: 217, content: "Индексируя ключи", isRight: true },
        { id: 218, content: "Поддерживая порядок", isRight: false },
        {
          id: 219,
          content: "В основе лежит принцип LIFO.",
          isRight: false,
        },
        { id: 220, content: "Поиск без ключа", isRight: false },
      ],
    },
    {
      id: 56,
      content: "Какую проблему эффективно\r\nрешает поиск в ширину?",
      options: [
        { id: 221, content: "Минимальный поиск пути", isRight: true },
        {
          id: 222,
          content: "Нахождение максимального\r\n значения",
          isRight: false,
        },
        { id: 223, content: "Сортировка", isRight: false },
        { id: 224, content: "Нахождение среднего значения", isRight: false },
      ],
    },
    {
      id: 57,
      content: "Для чего используется алгоритм\r\nхеширования?",
      options: [
        { id: 225, content: "Чтобы отсортировать данные", isRight: false },
        {
          id: 226,
          content: "Для поиска и индексирования\r\n данных",
          isRight: true,
        },
        { id: 227, content: "Для сжатия данных", isRight: false },
        { id: 228, content: "Чтобы проанализировать текст", isRight: false },
      ],
    },
    {
      id: 58,
      content: "Как строится хеш-таблица?",
      options: [
        { id: 229, content: "Использование стека", isRight: false },
        {
          id: 230,
          content: "Использование пар ключ -\r\n значение",
          isRight: false,
        },
        { id: 231, content: "Через очередь", isRight: false },
        { id: 232, content: "Использование массивов", isRight: true },
      ],
    },
    {
      id: 59,
      content: "Какова функция хеш-функции?",
      options: [
        {
          id: 233,
          content: "Размещайте элементы в\r\nопределенном порядке",
          isRight: false,
        },
        { id: 234, content: "Управление данными", isRight: false },
        {
          id: 235,
          content: "Быстрый поиск значений путем\r\nиндексации ключей",
          isRight: true,
        },
        { id: 236, content: "Очистка элементов", isRight: false },
      ],
    },
    {
      id: 60,
      content: "Когда происходит хеш-коллизия?",
      options: [
        {
          id: 237,
          content: "Два ключа возвращают одно и\r\nто же значение",
          isRight: false,
        },
        {
          id: 238,
          content: "Два разных ключа вернут одно\r\nи то же значение хеш-функции .",
          isRight: true,
        },
        { id: 239, content: "Хэш-таблица заполнена", isRight: false },
        { id: 240, content: "Недостаточно памяти", isRight: false },
      ],
    },
    {
      id: 61,
      content: "Что из перечисленного является\r\nраспространенным методом\r\nразрешения коллизий хэшей?",
      options: [
        { id: 241, content: "Метод строки", isRight: false },
        { id: 242, content: "Линейное зондирование", isRight: true },
        { id: 243, content: "принцип LIFO", isRight: false },
        { id: 244, content: "Бинарный поиск", isRight: false },
      ],
    },
    {
      id: 62,
      content: "В чем преимущество хеш -\r\nтаблицы?",
      options: [
        {
          id: 245,
          content: "Всегда работаю на\r\nмаксимальной скорости",
          isRight: false,
        },
        {
          id: 246,
          content: "Позволяет осуществлять поиск\r\nс временной сложностью O(1).",
          isRight: true,
        },
        { id: 247, content: "Переупорядочивает данные", isRight: false },
        {
          id: 248,
          content: "Он всегда работает с\r\nотсортированными данными",
          isRight: false,
        },
      ],
    },
    {
      id: 63,
      content: "В какой области широко\r\nиспользуются алгоритмы\r\nхеширования?",
      options: [
        { id: 249, content: "Обработка изображений", isRight: false },
        {
          id: 250,
          content: "Криптография и безопасность\r\n данных",
          isRight: true,
        },
        { id: 251, content: "Работа с массивами", isRight: false },
        { id: 252, content: "Анализ текстовых данных", isRight: false },
      ],
    },
    {
      id: 64,
      content: "Каким свойством должна\r\nобладать хеш-функция?",
      options: [
        {
          id: 253,
          content: "Должно быть\r\nдетерминированным",
          isRight: true,
        },
        { id: 254, content: "Это должно быть случайно", isRight: false },
        {
          id: 255,
          content: "Каждый раз он должен\r\nвозвращать другой результат",
          isRight: false,
        },
        {
          id: 256,
          content: "Следует адаптировать только к\r\n небольшим массивам .",
          isRight: false,
        },
      ],
    },
    {
      id: 65,
      content: "Какова цель открытой адресации?",
      options: [
        { id: 257, content: "Экономьте память", isRight: true },
        { id: 258, content: "Избегайте коллизий хешей", isRight: false },
        { id: 259, content: "Обработка ключей", isRight: false },
        { id: 260, content: "Создайте масштабируемость", isRight: false },
      ],
    },
    {
      id: 66,
      content: "Для чего используется первичный\r\nиндекс в хеш-таблице?",
      options: [
        { id: 261, content: "Для более быстрого поиска", isRight: true },
        {
          id: 262,
          content: "Чтобы ввести новую\r\n информацию",
          isRight: false,
        },
        { id: 263, content: "Сортировать", isRight: false },
        { id: 264, content: "Сжатие массива", isRight: false },
      ],
    },
    {
      id: 67,
      content: "Что такое двойное хеширование?",
      options: [
        {
          id: 265,
          content: "Применение хеш-функций\r\nдважды",
          isRight: false,
        },
        { id: 266, content: "Создание двух хеш-таблиц", isRight: false },
        {
          id: 267,
          content: "Использование двух разных хеш\r\n функций во избежание\r\n коллизий",
          isRight: true,
        },
        {
          id: 268,
          content: "Возврат двух значений для\r\n одних и тех же ключей",
          isRight: false,
        },
      ],
    },
    {
      id: 68,
      content: "Какой уровень сложности\r\nиспользуется для хеширования?",
      options: [
        { id: 269, content: "На)", isRight: false },
        { id: 270, content: "О(1)", isRight: true },
        { id: 271, content: "О (логарифм n)", isRight: false },
        { id: 272, content: "О(п^2)", isRight: false },
      ],
    },
    {
      id: 69,
      content: "Что такое идеальное\r\nхеширование?",
      options: [
        {
          id: 273,
          content: "Создайте обширную базу\r\nданных",
          isRight: false,
        },
        {
          id: 274,
          content: "Нахождение отдельной хэш -\r\n функции для каждого ключа",
          isRight: false,
        },
        {
          id: 275,
          content: "Оптимизация хеш-функций для\r\nполного исключения коллизий",
          isRight: true,
        },
        { id: 276, content: "Конденсация ключей", isRight: false },
      ],
    },
    {
      id: 70,
      content: "Какова будет временная\r\nсложность поиска данных из хеш -\r\nтаблицы?",
      options: [
        { id: 277, content: "На)", isRight: false },
        { id: 278, content: "О (логарифм n)", isRight: false },
        { id: 279, content: "О(1)", isRight: true },
        { id: 280, content: "О(п^2)", isRight: false },
      ],
    },
    {
      id: 71,
      content: "Почему хеширование\r\nиспользуется в криптографии?",
      options: [
        { id: 281, content: "Для сжатия данных", isRight: false },
        { id: 282, content: "Чтобы зашифровать данные", isRight: false },
        {
          id: 283,
          content: "Для безопасного просмотра и\r\n аутентификации",
          isRight: true,
        },
        {
          id: 284,
          content: "Чтобы следить за\r\nдеятельностью",
          isRight: false,
        },
      ],
    },
    {
      id: 72,
      content: "Какова основная цель\r\nсортировки?",
      options: [
        { id: 285, content: "Хранение данных", isRight: false },
        { id: 286, content: "Классификация данных", isRight: false },
        { id: 287, content: "Сортировка данных", isRight: true },
        { id: 288, content: "Изменить данные", isRight: false },
      ],
    },
    {
      id: 73,
      content: "Как работает алгоритм\r\nсортировки?",
      options: [
        { id: 289, content: "Собирает данные", isRight: false },
        { id: 290, content: "Обрабатывает данные", isRight: false },
        {
          id: 291,
          content: "Упорядочивает данные по\r\n порядку",
          isRight: true,
        },
        { id: 292, content: "Обрабатывает удаление данных", isRight: false },
      ],
    },
    {
      id: 74,
      content: "Какой из следующих методов\r\nявляется строгим методом\r\nсортировки?",
      options: [
        { id: 293, content: "Пузырьковая сортировка", isRight: true },
        { id: 294, content: "Случайная сортировка", isRight: false },
        { id: 295, content: "Ручная сортировка", isRight: false },
        { id: 296, content: "Быстрая сортировка", isRight: false },
      ],
    },
    {
      id: 75,
      content:
        "В чем основная особенность\r\nалгоритма пузырьковой\r\nсортировки, который является\r\nодним из строгих методов\r\nсортировки?",
      options: [
        {
          id: 297,
          content: "Сортировка данных без\r\nпроверки",
          isRight: false,
        },
        {
          id: 298,
          content: "Сравните и замените каждый\r\n элемент",
          isRight: true,
        },
        {
          id: 299,
          content: "Просто смотрю на последний\r\n элемент",
          isRight: false,
        },
        { id: 300, content: "Случайное размещение", isRight: false },
      ],
    },
  ],
  [
    {
      id: 76,
      content: "Как оценивается эффективность\r\nалгоритма «Быстрая\r\nсортировка»?",
      options: [
        { id: 301, content: "О(п^2)", isRight: false },
        { id: 302, content: "О (п журнал п)", isRight: true },
        { id: 303, content: "На)", isRight: false },
        { id: 304, content: "О (логарифм n)", isRight: false },
      ],
    },
    {
      id: 77,
      content: "Какой из следующих методов\r\nсортировки основан на принципе\r\n«Разделяй и властвуй»?",
      options: [
        { id: 305, content: "Пузырьковая сортировка", isRight: false },
        { id: 306, content: "Быстрая сортировка", isRight: true },
        { id: 307, content: "Сортировка выбором", isRight: false },
        { id: 308, content: "Сортировка вставками", isRight: false },
      ],
    },
    {
      id: 78,
      content: "Какая операция в алгоритме\r\nсортировки слиянием занимает\r\nбольше всего времени?",
      options: [
        { id: 309, content: "Интеграция данных", isRight: true },
        { id: 310, content: "Разделение данных", isRight: false },
        { id: 311, content: "Обработка данных", isRight: false },
        { id: 312, content: "Удалить данные", isRight: false },
      ],
    },
    {
      id: 79,
      content: "Как работает алгоритм\r\nсортировки выбором?",
      options: [
        {
          id: 313,
          content: " Выборочно размещает\r\nминимальный элемент на\r\n каждом шаге",
          isRight: true,
        },
        {
          id: 314,
          content: "Каждый раз помещает\r\nмаксимальный элемент в конец",
          isRight: false,
        },
        { id: 315, content: "Меняется только один раз", isRight: false },
        {
          id: 316,
          content: "Сортировка без проверки\r\n каждого элемента",
          isRight: false,
        },
      ],
    },
    {
      id: 80,
      content: "Когда алгоритм сортировки\r\nвставками эффективен?",
      options: [
        { id: 317, content: "В больших объемах данных", isRight: false },
        {
          id: 318,
          content: "В небольших и частично\r\nупорядоченных данных",
          isRight: true,
        },
        {
          id: 319,
          content: "В больших и случайных данных",
          isRight: false,
        },
        { id: 320, content: "Размер данных незначителен", isRight: false },
      ],
    },
    {
      id: 81,
      content: "Как измеряется\r\nпроизводительность алгоритмов\r\nсортировки?",
      options: [
        {
          id: 321,
          content: "Время работы алгоритма и\r\n количество операций",
          isRight: true,
        },
        { id: 322, content: "Процесс обработки данных", isRight: false },
        {
          id: 323,
          content: "Сложность написания\r\n алгоритма",
          isRight: false,
        },
        { id: 324, content: "Размер данных", isRight: false },
      ],
    },
    {
      id: 82,
      content:
        "Какой из следующих алгоритмов\r\nсортировки выполнит\r\nнаименьшее количество\r\nперестановок, чтобы привести\r\nпоследовательность в",
      options: [
        { id: 325, content: "Пузырьковая сортировка", isRight: false },
        { id: 326, content: "Сортировка выбором", isRight: true },
        { id: 327, content: "Сортировка слиянием", isRight: false },
        { id: 328, content: "Сортировка вставками", isRight: false },
      ],
    },
    {
      id: 83,
      content: "Каковы свойства алгоритмов\r\nO(n^2) в алгоритмах сортировки?",
      options: [
        {
          id: 329,
          content: "Работает эффективно и быстро",
          isRight: false,
        },
        {
          id: 330,
          content: "Неэффективно, подходит\r\nтолько для небольших данных",
          isRight: true,
        },
        { id: 331, content: "Всегда эффективен", isRight: false },
        { id: 332, content: "Всегда дает лучший результат", isRight: false },
      ],
    },
    {
      id: 84,
      content: "Как работает алгоритм\r\nсортировки слиянием?",
      options: [
        {
          id: 333,
          content: "Сортировка данных в одном\r\n блоке",
          isRight: false,
        },
        {
          id: 334,
          content: "Разбивает данные пополам и\r\n собирает их обратно .",
          isRight: true,
        },
        {
          id: 335,
          content: "Размещает только\r\nминимальный элемент",
          isRight: false,
        },
        {
          id: 336,
          content: "Сортирует максимальный\r\n элемент",
          isRight: false,
        },
      ],
    },
    {
      id: 85,
      content: "Что является основным\r\nпараметром при оценке\r\nэффективности алгоритмов\r\nсортировки?",
      options: [
        {
          id: 337,
          content: "Время, необходимое для\r\n написания алгоритма",
          isRight: false,
        },
        {
          id: 338,
          content: "Сколько раз алгоритм\r\n опробован",
          isRight: false,
        },
        {
          id: 339,
          content: "Сложность и время выполнения\r\n алгоритма",
          isRight: true,
        },
        { id: 340, content: "Объем данных в алгоритме", isRight: false },
      ],
    },
    {
      id: 86,
      content: "Какова наилучшая\r\nпроизводительность алгоритма\r\nбыстрой сортировки?",
      options: [
        { id: 341, content: "О(п^2)", isRight: false },
        { id: 342, content: "О (п журнал п)", isRight: true },
        { id: 343, content: "О (логарифм n)", isRight: false },
        { id: 344, content: "На)", isRight: false },
      ],
    },
    {
      id: 87,
      content: "Какова основная особенность\r\nалгоритма XoaraSort?",
      options: [
        {
          id: 345,
          content: "Разделите данные на две части",
          isRight: true,
        },
        {
          id: 346,
          content: "Завершение минимального\r\n элемента",
          isRight: false,
        },
        { id: 347, content: "Случайное размещение данных", isRight: false },
        {
          id: 348,
          content: "Сортировать только\r\nотсортированные данные",
          isRight: false,
        },
      ],
    },
    {
      id: 88,
      content: "Как работает алгоритм MergeSort?",
      options: [
        { id: 349, content: "Рандомизировать данные", isRight: false },
        {
          id: 350,
          content: "Разделение и интеграция\r\n данных",
          isRight: true,
        },
        {
          id: 351,
          content: "Выделение минимального\r\n элемента на каждом шаге",
          isRight: false,
        },
        {
          id: 352,
          content: "Завершить максимальный\r\n элемент",
          isRight: false,
        },
      ],
    },
    {
      id: 89,
      content: "Как сортирует алгоритм\r\nSelectionSort?",
      options: [
        {
          id: 353,
          content: "Выбирайте минимальный\r\nэлемент на каждом шаге",
          isRight: true,
        },
        {
          id: 354,
          content: "Выберите максимальный\r\n элемент",
          isRight: false,
        },
        {
          id: 355,
          content: "Среднее размещение предметов",
          isRight: false,
        },
        { id: 356, content: "Сравнить все товары", isRight: false },
      ],
    },
    {
      id: 90,
      content: "Для каких типов данных\r\nэффективен алгоритм RadixSort?",
      options: [
        { id: 357, content: "Цифровые данные", isRight: true },
        { id: 358, content: "Текстовая информация", isRight: false },
        { id: 359, content: "Категориальная информация", isRight: false },
        { id: 360, content: "Случайные данные", isRight: false },
      ],
    },
    {
      id: 91,
      content: "На сколько частей разделен\r\nалгоритм быстрой сортировки?",
      options: [
        { id: 361, content: "1 часть", isRight: false },
        { id: 362, content: "2 части", isRight: true },
        { id: 363, content: "3 части", isRight: false },
        { id: 364, content: "на 4 части", isRight: false },
      ],
    },
    {
      id: 92,
      content: "На каком принципе основан\r\nалгоритм MergeSort?",
      options: [
        { id: 365, content: "Разделение и интеграция", isRight: true },
        {
          id: 366,
          content: "Выберите минимальный\r\n элемент",
          isRight: false,
        },
        {
          id: 367,
          content: "Выберите максимальный\r\nэлемент",
          isRight: false,
        },
        { id: 368, content: "Выбор среднего предмета", isRight: false },
      ],
    },
    {
      id: 93,
      content: "В каких ситуациях алгоритм\r\nQuickSort работает наиболее\r\nэффективно?",
      options: [
        { id: 369, content: "В случайных данных", isRight: true },
        { id: 370, content: "В небольших данных", isRight: false },
        {
          id: 371,
          content: "Когда все данные\r\nотсортированы",
          isRight: false,
        },
        {
          id: 372,
          content: "В частично упорядоченных\r\nданных",
          isRight: false,
        },
      ],
    },
    {
      id: 94,
      content: "В чем заключается самое большое\r\nпреимущество алгоритма\r\nRadixSort?",
      options: [
        { id: 373, content: "Сортирует за короткое время", isRight: true },
        {
          id: 374,
          content: "Возможна параллельная работа",
          isRight: false,
        },
        {
          id: 375,
          content: "Занимает мало места в памяти",
          isRight: false,
        },
        {
          id: 376,
          content: "Может обрабатывать любую\r\nинформацию",
          isRight: false,
        },
      ],
    },
    {
      id: 95,
      content: "На чем основан алгоритм\r\nXoaraSort?",
      options: [
        {
          id: 377,
          content: "Чтобы выбрать минимальные\r\nэлементы",
          isRight: false,
        },
        {
          id: 378,
          content: "Разделение по точкам поворота",
          isRight: true,
        },
        { id: 379, content: "Обмен данными", isRight: false },
        {
          id: 380,
          content: "Чтобы сравнить максимальные\r\nэлементы",
          isRight: false,
        },
      ],
    },
    {
      id: 96,
      content: "Какова временная сложность\r\nалгоритма MergeSort?",
      options: [
        { id: 381, content: "О (п журнал п)", isRight: true },
        { id: 382, content: "О(п^2)", isRight: false },
        { id: 383, content: "О (логарифм n)", isRight: false },
        { id: 384, content: "На)", isRight: false },
      ],
    },
    {
      id: 97,
      content: "Сколько свопов выполняет\r\nалгоритм SelectionSort?",
      options: [
        { id: 385, content: "Равно количеству данных", isRight: false },
        { id: 386, content: "Сравнивая все данные", isRight: false },
        {
          id: 387,
          content: "Минимальное количество\r\nобменов",
          isRight: true,
        },
        { id: 388, content: "Максимальный обмен", isRight: false },
      ],
    },
    {
      id: 98,
      content: "Как сортирует алгоритм\r\nRadixSort?",
      options: [
        { id: 389, content: "Сортировать по частям", isRight: true },
        { id: 390, content: "Случайный выбор", isRight: false },
        {
          id: 391,
          content: "Отсортируйте встретившиеся\r\nзначения",
          isRight: false,
        },
        { id: 392, content: "Сравнение каждого значения", isRight: false },
      ],
    },
    {
      id: 99,
      content: "Как алгоритм QuickSort\r\nэффективно сортирует данные?",
      options: [
        { id: 393, content: "Цифровые данные", isRight: false },
        { id: 394, content: "Текстовая информация", isRight: false },
        { id: 395, content: "Большие объемы данных", isRight: true },
        { id: 396, content: "Небольшой объем информации", isRight: false },
      ],
    },
    {
      id: 100,
      content: "В каком случае алгоритм\r\nMergeSort может дать сбой?",
      options: [
        { id: 397, content: "В больших объемах данных", isRight: false },
        { id: 398, content: "В случайных данных", isRight: false },
        {
          id: 399,
          content: "На компьютерах с небольшим\r\nобъемом памяти",
          isRight: true,
        },
        { id: 400, content: "В небольших данных", isRight: false },
      ],
    },
  ],
  [
    {
      id: 101,
      content: "Какова стратегия выбора опорной\r\nточки алгоритма XoaraSort?",
      options: [
        { id: 401, content: "Выберите начальный элемент", isRight: false },
        { id: 402, content: "Выберите средний элемент", isRight: false },
        { id: 403, content: "Выберите последний элемент", isRight: true },
        {
          id: 404,
          content: "Выберите минимальный\r\nэлемент",
          isRight: false,
        },
      ],
    },
    {
      id: 102,
      content: "Каково свойство статического\r\nмассива?",
      options: [
        { id: 405, content: "Размер фиксированный", isRight: true },
        {
          id: 406,
          content: "Размер меняется во время\r\n программы .",
          isRight: false,
        },
        { id: 407, content: "Хранит данные динамически", isRight: false },
        {
          id: 408,
          content: "Увеличивает размер в\r\nзависимости от размера данных",
          isRight: false,
        },
      ],
    },
    {
      id: 103,
      content: "В чем основное преимущество\r\nдинамического массива?",
      options: [
        { id: 409, content: "Размер не меняется", isRight: false },
        {
          id: 410,
          content: "Масштабирование в зависимости\r\n от объема данных",
          isRight: true,
        },
        {
          id: 411,
          content: "Возможность увеличения данных",
          isRight: false,
        },
        { id: 412, content: "Прекращение деятельности", isRight: false },
      ],
    },
    {
      id: 104,
      content: "Какие данные хранят линейные\r\nконтейнеры?",
      options: [
        { id: 413, content: "Одно значение", isRight: false },
        { id: 414, content: "Организованные данные", isRight: false },
        { id: 415, content: "Секретная информация", isRight: false },
        { id: 416, content: "Последовательность элементов", isRight: true },
      ],
    },
    {
      id: 105,
      content: "Как объявить статический массив?",
      options: [
        { id: 417, content: "Показать размер в программе", isRight: true },
        { id: 418, content: "Размеры позже", isRight: false },
        {
          id: 419,
          content: "Изменение размера во время\r\nпрограммы",
          isRight: false,
        },
        {
          id: 420,
          content: "Публикация без изменения\r\nразмера",
          isRight: false,
        },
      ],
    },
    {
      id: 106,
      content: "В каких ситуациях используется\r\nдинамический массив?",
      options: [
        {
          id: 421,
          content: "Если объем данных известен\r\nзаранее",
          isRight: false,
        },
        {
          id: 422,
          content: "Если размер данных является\r\n переменным",
          isRight: true,
        },
        {
          id: 423,
          content: "Если существует статический\r\nмассив",
          isRight: false,
        },
        { id: 424, content: "Если данные прерваны", isRight: false },
      ],
    },
    {
      id: 107,
      content: "Что такое итератор?",
      options: [
        { id: 425, content: "Метод обработки данных", isRight: false },
        {
          id: 426,
          content: "Инструмент сортировки данных",
          isRight: false,
        },
        {
          id: 427,
          content: "Механизм обхода набора данных",
          isRight: true,
        },
        { id: 428, content: "Инструмент хранения данных", isRight: false },
      ],
    },
    {
      id: 108,
      content: "Какие из следующих типов\r\nитераторов существуют?",
      options: [
        { id: 429, content: "Подвижный итератор", isRight: false },
        { id: 430, content: "Дополнительный итератор", isRight: false },
        { id: 431, content: "Переменная — это итератор", isRight: false },
        { id: 432, content: "Прямой итератор", isRight: true },
      ],
    },
    {
      id: 109,
      content: "Какую роль итераторы играют во\r\nвстроенных контейнерах?",
      options: [
        { id: 433, content: "Данные об изменениях", isRight: false },
        {
          id: 434,
          content: "Помогает в вводе и выходе\r\n данных",
          isRight: true,
        },
        {
          id: 435,
          content: "Выполняет математические\r\nоперации с данными",
          isRight: false,
        },
        {
          id: 436,
          content: "Используется для сортировки\r\nданных",
          isRight: false,
        },
      ],
    },
    {
      id: 110,
      content: "Какой оператор используется для\r\nсоздания статического массива?",
      options: [
        { id: 437, content: "маллок", isRight: false },
        { id: 438, content: "новый", isRight: false },
        { id: 439, content: "удалить", isRight: false },
        { id: 440, content: "статический", isRight: true },
      ],
    },
    {
      id: 111,
      content: "Как определяется размер памяти\r\nдинамического массива?",
      options: [
        { id: 441, content: "Это предопределено", isRight: false },
        { id: 442, content: "Изменено во время программы", isRight: true },
        {
          id: 443,
          content: "Расширяется в зависимости от\r\nобъема данных",
          isRight: false,
        },
        {
          id: 444,
          content: "Определяется только при\r\nзавершении программы",
          isRight: false,
        },
      ],
    },
    {
      id: 112,
      content: "Как делятся итераторы?",
      options: [
        { id: 445, content: "Изменяемый и неизменяемый", isRight: true },
        { id: 446, content: "Расширение и сужение", isRight: false },
        { id: 447, content: "Слева и справа", isRight: false },
        { id: 448, content: "Старое и новое", isRight: false },
      ],
    },
    {
      id: 113,
      content: "Какова конструкция линейных\r\nконтейнеров?",
      options: [
        { id: 449, content: "Графы и деревья", isRight: false },
        { id: 450, content: "Массивы и списки", isRight: true },
        { id: 451, content: "HashMaps и массивы", isRight: false },
        { id: 452, content: "Текстовые файлы", isRight: false },
      ],
    },
    {
      id: 114,
      content: "В чем основное различие между\r\nстатическими и динамическими\r\nмассивами?",
      options: [
        {
          id: 453,
          content: "Размер фиксирован и может быть\r\nизменен",
          isRight: true,
        },
        { id: 454, content: "Статический массив быстрее", isRight: false },
        {
          id: 455,
          content: "Динамический массив\r\nпредназначен для больших\r\nобъемов данных .",
          isRight: false,
        },
        {
          id: 456,
          content: "Статический массив работает в\r\nпостоянной памяти .",
          isRight: false,
        },
      ],
    },
    {
      id: 115,
      content: "Как итераторы используются для\r\nдоступа к наборам данных?",
      options: [
        { id: 457, content: "Поиск информации", isRight: false },
        {
          id: 458,
          content: "Последовательная прокрутка\r\n данных",
          isRight: true,
        },
        { id: 459, content: "Изменить данные", isRight: false },
        { id: 460, content: "Сортировка данных", isRight: false },
      ],
    },
    {
      id: 116,
      content: "Как управляется память\r\nдинамического массива?",
      options: [
        { id: 461, content: "Размер постоянный", isRight: false },
        {
          id: 462,
          content: "Память расширяется динамически",
          isRight: true,
        },
        { id: 463, content: "Это предопределено", isRight: false },
        {
          id: 464,
          content: "Память очищается автоматически",
          isRight: false,
        },
      ],
    },
    {
      id: 117,
      content: "Что такое связанный список?",
      options: [
        { id: 465, content: "Метод сортировки данных", isRight: false },
        {
          id: 466,
          content: "Последовательность элементов,\r\n каждый элемент ссылается на\r\n следующий",
          isRight: true,
        },
        { id: 467, content: "Метод хранения данных", isRight: false },
        {
          id: 468,
          content: "Размещение элементов по порядку",
          isRight: false,
        },
      ],
    },
    {
      id: 118,
      content: "Какие типы связанных списков\r\nсуществуют?",
      options: [
        { id: 469, content: "Статический и динамичный", isRight: false },
        { id: 470, content: "Линейный и связанный", isRight: false },
        { id: 471, content: "Однозвенный и двухзвенный", isRight: true },
        { id: 472, content: "Прямо и косвенно", isRight: false },
      ],
    },
    {
      id: 119,
      content: "Как связаны элементы в\r\nодносвязном списке?",
      options: [
        {
          id: 473,
          content: "Каждый элемент указывает только\r\nна следующий элемент",
          isRight: true,
        },
        {
          id: 474,
          content: "Каждый элемент имеет две\r\n ссылки",
          isRight: false,
        },
        {
          id: 475,
          content: "Элементы не связаны друг с\r\nдругом",
          isRight: false,
        },
        {
          id: 476,
          content: "Каждый элемент указывает\r\nпредыдущий и следующий\r\nэлемент .",
          isRight: false,
        },
      ],
    },
    {
      id: 120,
      content: "Сколько ссылок имеет каждый\r\nэлемент в двусвязном списке?",
      options: [
        { id: 477, content: "Один", isRight: false },
        { id: 478, content: "Два", isRight: true },
        { id: 479, content: "Три", isRight: false },
        { id: 480, content: "Четыре", isRight: false },
      ],
    },
    {
      id: 121,
      content: "Как называется заголовок\r\nсвязанного списка?",
      options: [
        { id: 481, content: "Узел", isRight: false },
        { id: 482, content: "Индикатор", isRight: false },
        { id: 483, content: "Голова", isRight: true },
        { id: 484, content: "Наконец (Хвост)", isRight: false },
      ],
    },
    {
      id: 122,
      content: "Какова цель линейно связанных\r\nсписков?",
      options: [
        {
          id: 485,
          content: "Ввод данных в случайном порядке",
          isRight: false,
        },
        {
          id: 486,
          content: "Чтобы сохранить\r\nпоследовательность",
          isRight: true,
        },
        { id: 487, content: "Удаление данных", isRight: false },
        { id: 488, content: "Чтобы отсортировать данные", isRight: false },
      ],
    },
    {
      id: 123,
      content: "В чем основное преимущество\r\nдвусвязного списка?",
      options: [
        { id: 489, content: "Занимает меньше памяти", isRight: false },
        {
          id: 490,
          content: "Позволяет двигаться в обоих\r\n направлениях",
          isRight: true,
        },
        {
          id: 491,
          content: "Автоматическая сортировка\r\nданных",
          isRight: false,
        },
        {
          id: 492,
          content: "Каждый элемент указывает только\r\nна следующий",
          isRight: false,
        },
      ],
    },
    {
      id: 124,
      content: "Какие компоненты необходимы для\r\nсоздания связанного списка?",
      options: [
        { id: 493, content: "Информация и индикатор", isRight: true },
        { id: 494, content: "Только информация", isRight: false },
        { id: 495, content: "Просто указание", isRight: false },
        {
          id: 496,
          content: "Информация, производительность\r\nи размер",
          isRight: false,
        },
      ],
    },
    {
      id: 125,
      content: "Как добавлять и удалять данные в\r\nсвязанных списках?",
      options: [
        {
          id: 497,
          content: "Данные размещаются\r\nпоследовательно",
          isRight: false,
        },
        {
          id: 498,
          content: "С помощью указателей меняется\r\n привязка",
          isRight: true,
        },
        {
          id: 499,
          content: "Данные вставляются в последний\r\nэлемент",
          isRight: false,
        },
        { id: 500, content: "Перемещая данные", isRight: false },
      ],
    },
  ],
  [
    {
      id: 126,
      content: "Каков индекс последнего элемента\r\nсвязанного списка?",
      options: [
        { id: 501, content: "Себе", isRight: false },
        { id: 502, content: "Ничего", isRight: true },
        {
          id: 503,
          content: "Переходим к следующему пункту",
          isRight: false,
        },
        { id: 504, content: "К стартовому элементу", isRight: false },
      ],
    },
    {
      id: 127,
      content: "Какую информацию содержит\r\nкаждый узел двусвязного списка?",
      options: [
        { id: 505, content: "Только информация", isRight: false },
        {
          id: 506,
          content: "Индикатор предыдущего и\r\n следующего элементов",
          isRight: true,
        },
        {
          id: 507,
          content: "Просто указатель на следующий\r\nэлемент",
          isRight: false,
        },
        {
          id: 508,
          content: "Просто указатель на предыдущий\r\nэлемент",
          isRight: false,
        },
      ],
    },
    {
      id: 128,
      content: "Какие операции легко выполнить\r\nпри работе с двусвязным списком?",
      options: [
        { id: 509, content: "Просто удалите", isRight: false },
        {
          id: 510,
          content: "Доступ к предыдущему и\r\nследующему элементу",
          isRight: true,
        },
        { id: 511, content: "Просто добавьте данные", isRight: false },
        { id: 512, content: "Сортировать только данные", isRight: false },
      ],
    },
    {
      id: 129,
      content: "Как осуществляется управление\r\nпамятью в связанных списках?",
      options: [
        { id: 513, content: "Статически выделенный", isRight: false },
        {
          id: 514,
          content: "Динамически выделяется для\r\nкаждого узла",
          isRight: true,
        },
        { id: 515, content: "Разделены только в начале", isRight: false },
        {
          id: 516,
          content: "Память выделяется автоматически",
          isRight: false,
        },
      ],
    },
    {
      id: 130,
      content: "Как искать данные в односвязном\r\nсписке?",
      options: [
        { id: 517, content: "Доступ к элементу напрямую", isRight: false },
        {
          id: 518,
          content: "Последовательный поиск с начала",
          isRight: true,
        },
        { id: 519, content: "Искать с конца", isRight: false },
        { id: 520, content: "Доступ по индексу", isRight: false },
      ],
    },
    {
      id: 131,
      content: "Какие шаги необходимы для\r\nсоздания связанного списка?",
      options: [
        { id: 521, content: "Просто добавьте", isRight: false },
        {
          id: 522,
          content: "Добавьте информацию и ссылку",
          isRight: true,
        },
        { id: 523, content: "Просто установите ссылку", isRight: false },
        { id: 524, content: "Просто удалите элемент", isRight: false },
      ],
    },
    {
      id: 132,
      content: "Сколько точек связи имеет каждый\r\nэлемент односвязного списка?",
      options: [
        { id: 525, content: "Один", isRight: true },
        { id: 526, content: "Два", isRight: false },
        { id: 527, content: "Три", isRight: false },
        { id: 528, content: "Четыре", isRight: false },
      ],
    },
    {
      id: 133,
      content: "Как реализовать алгоритм удаления\r\nэлементов в связанном списке?",
      options: [
        {
          id: 529,
          content: "Найдите элемент и измените\r\nуказатель на следующий элемент",
          isRight: true,
        },
        { id: 530, content: "Просто удалите элемент", isRight: false },
        {
          id: 531,
          content: "Изменить элемент после\r\nудаленного элемента",
          isRight: false,
        },
        { id: 532, content: "Всегда удалять с начала", isRight: false },
      ],
    },
    {
      id: 134,
      content: "Как искать данные в двусвязном\r\nсписке?",
      options: [
        { id: 533, content: "Проверьте каждый элемент", isRight: false },
        { id: 534, content: "Прямой доступ по индексу", isRight: false },
        { id: 535, content: "Поиск в обоих направлениях", isRight: true },
        { id: 536, content: "Автоматический поиск данных", isRight: false },
      ],
    },
    {
      id: 135,
      content: "Что такое многосвязный список?",
      options: [
        {
          id: 537,
          content: "Каждый узел указывает только на\r\nодин последующий узел",
          isRight: false,
        },
        {
          id: 538,
          content: "Каждый узел имеет несколько\r\nуказателей",
          isRight: true,
        },
        {
          id: 539,
          content: "Данные хранятся в одном\r\nнаправлении",
          isRight: false,
        },
        {
          id: 540,
          content: "Узлы располагаются\r\n последовательно",
          isRight: false,
        },
      ],
    },
    {
      id: 136,
      content: "Куда в связанном списке\r\nдобавляется операция добавления?",
      options: [
        { id: 541, content: "В начале", isRight: false },
        { id: 542, content: "В конце", isRight: false },
        { id: 543, content: "Только в середине", isRight: false },
        { id: 544, content: "В начале или в конце", isRight: true },
      ],
    },
    {
      id: 137,
      content: "Где происходит удаление в\r\nдвусвязном списке?",
      options: [
        { id: 545, content: "Только с самого начала", isRight: false },
        { id: 546, content: "Только с конца", isRight: false },
        { id: 547, content: "Из любого места", isRight: true },
        { id: 548, content: "Только с середины", isRight: false },
      ],
    },
    {
      id: 138,
      content: "Каков алгоритм обхода связанного\r\nсписка?",
      options: [
        {
          id: 549,
          content: "Замена каждого элемента\r\nследующим элементом",
          isRight: false,
        },
        {
          id: 550,
          content: "Изменение показателей в\r\nобратную сторону",
          isRight: true,
        },
        { id: 551, content: "Удалить список с начала", isRight: false },
        {
          id: 552,
          content: "Пролистнуть от конца к началу",
          isRight: false,
        },
      ],
    },
    {
      id: 139,
      content: "Как хранить данные в многосвязном\r\nсписке?",
      options: [
        {
          id: 553,
          content: "Каждый элемент хранит только\r\nодну часть информации .",
          isRight: false,
        },
        {
          id: 554,
          content: "Каждый узел может хранить\r\nнесколько указателей и данных .",
          isRight: true,
        },
        {
          id: 555,
          content: "Сохраняется только последний\r\nэлемент",
          isRight: false,
        },
        {
          id: 556,
          content: "В списке хранится информация\r\n только в начале",
          isRight: false,
        },
      ],
    },
    {
      id: 140,
      content: "Как данные связаны в двусвязном\r\nсписке?",
      options: [
        {
          id: 557,
          content: "Только к предыдущему элементу",
          isRight: false,
        },
        {
          id: 558,
          content: "Просто к следующему элементу",
          isRight: false,
        },
        {
          id: 559,
          content: "К предыдущему и следующему\r\nэлементу",
          isRight: true,
        },
        { id: 560, content: "Элементы не соединены", isRight: false },
      ],
    },
    {
      id: 141,
      content: "Для чего используются\r\nмногосвязные списки?",
      options: [
        {
          id: 561,
          content: "Для автоматической сортировки\r\nданных",
          isRight: false,
        },
        {
          id: 562,
          content: "Для создания иерархических\r\nструктур",
          isRight: true,
        },
        { id: 563, content: "Чтобы сохранить данные", isRight: false },
        { id: 564, content: "Для экономии памяти", isRight: false },
      ],
    },
    {
      id: 142,
      content: "Как получить доступ к последнему\r\nэлементу двусвязного списка?",
      options: [
        {
          id: 565,
          content: "Пройдите каждый пункт от начала\r\nдо конца",
          isRight: false,
        },
        { id: 566, content: "Прямой доступ", isRight: true },
        { id: 567, content: "Вернуться к началу", isRight: false },
        { id: 568, content: "Автоматическим поиском", isRight: false },
      ],
    },
    {
      id: 143,
      content: "Как логически представить\r\nмногосвязные списки?",
      options: [
        { id: 569, content: "Через матрицы", isRight: false },
        { id: 570, content: "Через индекс каждого узла", isRight: false },
        { id: 571, content: "Через графику", isRight: true },
        { id: 572, content: "Через линейные массивы", isRight: false },
      ],
    },
    {
      id: 144,
      content: "Какой алгоритм используется для\r\nпоиска данных в связанном списке?",
      options: [
        { id: 573, content: "Бинарный поиск", isRight: false },
        { id: 574, content: "Линейный поиск", isRight: true },
        { id: 575, content: "Прямой доступ", isRight: false },
        { id: 576, content: "Хэш-поиск", isRight: false },
      ],
    },
    {
      id: 145,
      content: "Что вы подразумеваете под\r\nсвязанным списком?",
      options: [
        {
          id: 577,
          content: " Каждый элемент в списке\r\nуказывает только на следующий\r\n элемент",
          isRight: true,
        },
        {
          id: 578,
          content: " Каждый элемент в списке\r\n ссылается на предыдущий и\r\n последующий элементы .",
          isRight: false,
        },
        {
          id: 579,
          content: " Каждый элемент относится к\r\n необязательным другим\r\n элементам .",
          isRight: false,
        },
        {
          id: 580,
          content: " Каждый элемент относится\r\n только к элементам после и до\r\n него .",
          isRight: false,
        },
      ],
    },
    {
      id: 146,
      content: "Сколько указателей имеет каждый\r\nузел в двусвязном списке?",
      options: [
        { id: 581, content: "Один", isRight: false },
        { id: 582, content: "Два", isRight: true },
        { id: 583, content: "Из трех", isRight: false },
        { id: 584, content: "Из четырех", isRight: false },
      ],
    },
    {
      id: 147,
      content: "Как работает алгоритм удаления\r\nэлемента из связанного списка?",
      options: [
        {
          id: 585,
          content: "Элемент найден и удален, затем\r\n список перекомпонован .",
          isRight: true,
        },
        {
          id: 586,
          content: "Элемент удаляется и заменяется\r\n другими элементами .",
          isRight: false,
        },
        { id: 587, content: "Все элементы будут удалены", isRight: false },
        { id: 588, content: "Объект не может быть удален", isRight: false },
      ],
    },
    {
      id: 148,
      content: "Сколько связей необходимо\r\nизменить, чтобы добавить новый\r\nузел в двусвязном списке?",
      options: [
        { id: 589, content: "Один", isRight: false },
        { id: 590, content: "Два", isRight: false },
        { id: 591, content: "Из трех", isRight: false },
        { id: 592, content: "Из четырех", isRight: true },
      ],
    },
    {
      id: 149,
      content: "Какие шаги предпринимаются для\r\nдобавления элемента в конец\r\nсвязанного списка?",
      options: [
        {
          id: 593,
          content: "Новый элемент добавляется в\r\n начало списка",
          isRight: false,
        },
        {
          id: 594,
          content: " Отображается ссылка на\r\n последний элемент и в конец\r\n добавляется новый элемент",
          isRight: true,
        },
        {
          id: 595,
          content: "Список будет полностью изменен",
          isRight: false,
        },
        {
          id: 596,
          content: "Невозможно добавить элемент в\r\n связанный список",
          isRight: false,
        },
      ],
    },
    {
      id: 150,
      content: "Как удалить элемент в двусвязном\r\nсписке?",
      options: [
        {
          id: 597,
          content: "Меняется только ссылка на\r\n предыдущий элемент",
          isRight: false,
        },
        {
          id: 598,
          content: "Меняется только ссылка на\r\n следующий элемент",
          isRight: false,
        },
        {
          id: 599,
          content: "Обе ссылки изменяются, а\r\n элемент удаляется .",
          isRight: true,
        },
        {
          id: 600,
          content: "Вам не нужно менять привязки,\r\n чтобы удалить элемент .",
          isRight: false,
        },
      ],
    },
  ],
  [
    {
      id: 151,
      content: "Каков алгоритм обращения к\r\nпервому элементу связанного\r\nсписка?",
      options: [
        { id: 601, content: "Список начинается с конца", isRight: false },
        {
          id: 602,
          content: "Начало списка адресовано\r\n напрямую",
          isRight: true,
        },
        {
          id: 603,
          content: "Элементы в списке меняются\r\n местами",
          isRight: false,
        },
        { id: 604, content: "Каждый товар проверяется", isRight: false },
      ],
    },
    {
      id: 152,
      content: "Что сделать, чтобы преобразовать\r\nдвусвязный список в циклический\r\nсписок?",
      options: [
        {
          id: 605,
          content: "Последний элемент списка\r\n должен быть связан с началом",
          isRight: true,
        },
        { id: 606, content: "Список следует перевернуть", isRight: false },
        {
          id: 607,
          content: "Каждый элемент необходимо\r\n изменить вручную",
          isRight: false,
        },
        {
          id: 608,
          content: "Ссылки в списке не могут быть\r\n изменены .",
          isRight: false,
        },
      ],
    },
    {
      id: 153,
      content: "Как работает алгоритм поиска\r\nэлемента в связанном списке?",
      options: [
        {
          id: 609,
          content: "Проверяются элементы от начала\r\n до конца списка",
          isRight: true,
        },
        {
          id: 610,
          content: "Каждый элемент в списке\r\nпроверяется по индексу",
          isRight: false,
        },
        {
          id: 611,
          content: "Проверяется только конец списка",
          isRight: false,
        },
        {
          id: 612,
          content: "Товар будет найден\r\n автоматически",
          isRight: false,
        },
      ],
    },
    {
      id: 154,
      content: "В чем преимущество двусвязного\r\nсписка?",
      options: [
        { id: 613, content: "Требуется больше памяти", isRight: false },
        {
          id: 614,
          content: "Доступ к элементам можно\r\n получить быстрее",
          isRight: true,
        },
        {
          id: 615,
          content: "Каждый элемент связан только со\r\n следующим элементом",
          isRight: false,
        },
        { id: 616, content: "Список остается неизменным", isRight: false },
      ],
    },
    {
      id: 155,
      content: "Каков алгоритм перебора связанного\r\nсписка и переноса элементов из\r\nконца списка в начало?",
      options: [
        {
          id: 617,
          content: "Все элементы в списке удаляются\r\n и добавляются новые .",
          isRight: false,
        },
        {
          id: 618,
          content: "Ссылки в списке будут изменены .",
          isRight: true,
        },
        {
          id: 619,
          content: "Элементы в списке проверяются\r\n один за другим",
          isRight: false,
        },
        { id: 620, content: "Список нельзя прокручивать", isRight: false },
      ],
    },
    {
      id: 156,
      content: "Каков алгоритм изменения порядка\r\nэлементов в двусвязном списке?",
      options: [
        {
          id: 621,
          content: "Проверяются элементы от начала\r\n до конца списка",
          isRight: false,
        },
        {
          id: 622,
          content: "Ссылка на каждый элемент\r\nначинается с последнего\r\n элемента .",
          isRight: true,
        },
        { id: 623, content: "Индексы элементов изменены", isRight: false },
        { id: 624, content: "Список нельзя отменить", isRight: false },
      ],
    },
    {
      id: 157,
      content: "Как обратиться к последнему\r\nэлементу связанного списка?",
      options: [
        {
          id: 625,
          content: "Все элементы просматриваются\r\n через родительский элемент",
          isRight: true,
        },
        {
          id: 626,
          content: "Ссылка делается на начало\r\n списка .",
          isRight: false,
        },
        {
          id: 627,
          content: "Последний элемент напрямую\r\n адресован",
          isRight: false,
        },
        {
          id: 628,
          content: "Необходимо изменить элементы в\r\n списке .",
          isRight: false,
        },
      ],
    },
    {
      id: 158,
      content: "Как искать элементы в двусвязном\r\nсписке по индексу?",
      options: [
        { id: 629, content: "Каждый товар проверяется", isRight: true },
        {
          id: 630,
          content: "Поиск напрямую только по\r\n индексу",
          isRight: false,
        },
        {
          id: 631,
          content: "Список следует полностью\r\n изменить .",
          isRight: false,
        },
        {
          id: 632,
          content: "Невозможно выполнить поиск по\r\n индексу",
          isRight: false,
        },
      ],
    },
    {
      id: 159,
      content: "Как изменить порядок элементов в\r\nодносвязном списке?",
      options: [
        {
          id: 633,
          content: "Привязка каждого элемента\r\n изменена",
          isRight: true,
        },
        {
          id: 634,
          content: "Каждый элемент удаляется и\r\n добавляется снова",
          isRight: false,
        },
        {
          id: 635,
          content: "Заменяются элементы от начала\r\n до конца списка .",
          isRight: false,
        },
        { id: 636, content: "Обратный порядок невозможен", isRight: false },
      ],
    },
    {
      id: 160,
      content: "Как называется операция\r\nдобавления элемента в стек?",
      options: [
        { id: 637, content: "очередь", isRight: false },
        { id: 638, content: "Толкать", isRight: true },
        { id: 639, content: "Поп", isRight: false },
        { id: 640, content: "Вставлять", isRight: false },
      ],
    },
    {
      id: 161,
      content: "Как называется операция удаления\r\nэлемента из стека?",
      options: [
        { id: 641, content: "Удаление из очереди", isRight: false },
        { id: 642, content: "Удалять", isRight: false },
        { id: 643, content: "Поп", isRight: true },
        { id: 644, content: "Потолок", isRight: false },
      ],
    },
    {
      id: 162,
      content: "Как называется операция\r\nдобавления элемента в очередь?",
      options: [
        { id: 645, content: "Толкать", isRight: false },
        { id: 646, content: "Поп", isRight: false },
        { id: 647, content: "очередь", isRight: true },
        { id: 648, content: "Вставлять", isRight: false },
      ],
    },
    {
      id: 163,
      content: "Как выполнить операцию по\r\nудалению элемента в очереди?",
      options: [
        { id: 649, content: "Толкать", isRight: false },
        { id: 650, content: "Удаление из очереди", isRight: true },
        { id: 651, content: "Удалять", isRight: false },
        { id: 652, content: "Поп", isRight: false },
      ],
    },
    {
      id: 164,
      content: "В каком порядке элементы\r\nудаляются из стека?",
      options: [
        {
          id: 653,
          content: "«Первым пришел – первым ушел»\r\n(FIFO)",
          isRight: false,
        },
        {
          id: 654,
          content: "Последний добавленный, первый\r\nудаленный (LIFO)",
          isRight: true,
        },
        { id: 655, content: "Элемент посередине удален .", isRight: false },
        {
          id: 656,
          content: "Нет возможности удалить\r\n элементы",
          isRight: false,
        },
      ],
    },
    {
      id: 165,
      content: "Куда добавлять элементы в колоду?",
      options: [
        { id: 657, content: "Только с самого начала", isRight: false },
        { id: 658, content: "Только с конца", isRight: false },
        { id: 659, content: "С начала и конца", isRight: true },
        { id: 660, content: "Только в середине", isRight: false },
      ],
    },
    {
      id: 166,
      content: "Где вы удаляете элементы в колоде?",
      options: [
        { id: 661, content: "Только с самого начала", isRight: false },
        { id: 662, content: "Только с конца", isRight: false },
        { id: 663, content: "С начала и конца", isRight: true },
        { id: 664, content: "Из любого места", isRight: false },
      ],
    },
    {
      id: 167,
      content: "Какой элемент очереди удаляется\r\nпервым?",
      options: [
        { id: 665, content: "Добавлен первый элемент", isRight: true },
        {
          id: 666,
          content: "Последний добавленный элемент",
          isRight: false,
        },
        { id: 667, content: "Элемент посередине", isRight: false },
        { id: 668, content: "Случайный предмет", isRight: false },
      ],
    },
    {
      id: 168,
      content: "Какова основная особенность стека?",
      options: [
        { id: 669, content: "Первым пришел первым ушел", isRight: false },
        {
          id: 670,
          content: "Последний пришел первым ушел",
          isRight: true,
        },
        { id: 671, content: "Элементы индексируются", isRight: false },
        {
          id: 672,
          content: "Товары автоматически\r\n сортируются",
          isRight: false,
        },
      ],
    },
    {
      id: 169,
      content: "Какая структура данных является\r\nстеком?",
      options: [
        { id: 673, content: "Линейный", isRight: true },
        { id: 674, content: "Неправильный", isRight: false },
        { id: 675, content: "Иерархический", isRight: false },
        { id: 676, content: "Графики", isRight: false },
      ],
    },
    {
      id: 170,
      content: "Каково практическое применение\r\nиспользования очереди?",
      options: [
        { id: 677, content: "Обработка вызовов функций", isRight: false },
        { id: 678, content: "Сортировка данных", isRight: false },
        {
          id: 679,
          content: "Выполняйте процедуры одну за\r\n другой .",
          isRight: true,
        },
        { id: 680, content: "Управление памятью", isRight: false },
      ],
    },
    {
      id: 171,
      content: "В чем преимущество колоды?",
      options: [
        {
          id: 681,
          content: "Его можно использовать только\r\nдля определенных типов данных .",
          isRight: false,
        },
        {
          id: 682,
          content: "Его можно использовать только\r\nкак стек",
          isRight: false,
        },
        {
          id: 683,
          content: "Его можно использовать как стек\r\n и очередь .",
          isRight: true,
        },
        {
          id: 684,
          content: "Его можно использовать только\r\n для иерархических данных .",
          isRight: false,
        },
      ],
    },
    {
      id: 172,
      content: "Как обратиться к верхнему элементу\r\nстека?",
      options: [
        { id: 685, content: "Через индекс", isRight: false },
        { id: 686, content: "Через верхнюю функцию", isRight: true },
        {
          id: 687,
          content: "через функцию постановки в\r\n очередь",
          isRight: false,
        },
        {
          id: 688,
          content: "через функцию удаления из\r\n очереди",
          isRight: false,
        },
      ],
    },
    {
      id: 173,
      content: "В чем основное отличие\r\nприоритетной очереди?",
      options: [
        {
          id: 689,
          content: "Сначала удаляется только\r\nпоследний добавленный элемент",
          isRight: false,
        },
        {
          id: 690,
          content: "Каждый предмет выдается в\r\nпорядке приоритета",
          isRight: true,
        },
        {
          id: 691,
          content: "Предметы рисуются в случайном\r\n порядке",
          isRight: false,
        },
        {
          id: 692,
          content: "Выводится только элемент с\r\n наибольшим значением .",
          isRight: false,
        },
      ],
    },
    {
      id: 174,
      content: "Какой информационной структурой\r\nявляется словарь?",
      options: [
        {
          id: 693,
          content: "Данные индексируются и\r\nсортируются",
          isRight: false,
        },
        {
          id: 694,
          content: "Хранится как пара ключ-значение .",
          isRight: true,
        },
        {
          id: 695,
          content: "Данные хранятся только в списке",
          isRight: false,
        },
        {
          id: 696,
          content: "Сохраняются только числовые\r\n данные",
          isRight: false,
        },
      ],
    },
  ],
  [
    {
      id: 175,
      content: "Когда лучше всего использовать\r\nприоритетную очередь?",
      options: [
        {
          id: 697,
          content: "При обработке данных в\r\nпоследовательном порядке",
          isRight: false,
        },
        {
          id: 698,
          content: "Когда необходимо быстро\r\nотделить самые важные элементы",
          isRight: true,
        },
        {
          id: 699,
          content: "Только когда необходимо\r\n перезаписать данные",
          isRight: false,
        },
        {
          id: 700,
          content: "При добавлении и удалении\r\n данных не требуется",
          isRight: false,
        },
      ],
    },
    {
      id: 176,
      content: "Как могут выглядеть ключи в\r\nсловаре?",
      options: [
        { id: 701, content: "Просто цифры", isRight: false },
        { id: 702, content: "Только струны", isRight: false },
        {
          id: 703,
          content: "Просто простой тип информации",
          isRight: false,
        },
        {
          id: 704,
          content: "Любой неизменяемый тип данных",
          isRight: true,
        },
      ],
    },
    {
      id: 177,
      content: "Как поместить элемент в стек?",
      options: [
        {
          id: 705,
          content: "Удаляется только нижний элемент",
          isRight: false,
        },
        { id: 706, content: "Верхний элемент удален .", isRight: true },
        { id: 707, content: "Рисуется случайный предмет", isRight: false },
        { id: 708, content: "Все предметы выдаются сразу", isRight: false },
      ],
    },
    {
      id: 178,
      content: "Каков приоритет добавления\r\nэлементов?",
      options: [
        {
          id: 709,
          content: "Приоритетность определяется на\r\n момент присоединения",
          isRight: true,
        },
        {
          id: 710,
          content: "Товар в порядке очереди выдается\r\n первым",
          isRight: false,
        },
        {
          id: 711,
          content: "Добавляются только элементы с\r\n высоким приоритетом .",
          isRight: false,
        },
        {
          id: 712,
          content: " Элементы автоматически\r\n сохраняются в приоритетном\r\n порядке .",
          isRight: false,
        },
      ],
    },
    {
      id: 179,
      content: "Какая операция удаляет следующий\r\nэлемент?",
      options: [
        { id: 713, content: "Толкать", isRight: false },
        { id: 714, content: "Поп", isRight: false },
        { id: 715, content: "очередь", isRight: false },
        { id: 716, content: "Удаление из очереди", isRight: true },
      ],
    },
    {
      id: 180,
      content: "В чем преимущество словаря?",
      options: [
        {
          id: 717,
          content: "Ключи обеспечивают быстрый\r\n доступ к информации .",
          isRight: true,
        },
        {
          id: 718,
          content: "Сохраняются только числовые\r\n значения",
          isRight: false,
        },
        { id: 719, content: "Ключи хранятся в сортировке", isRight: false },
        { id: 720, content: "Хранится только один элемент", isRight: false },
      ],
    },
    {
      id: 181,
      content: "Как пользоваться колодой?",
      options: [
        { id: 721, content: "Просто удалить элементы", isRight: false },
        {
          id: 722,
          content: "Добавление и удаление элементов\r\n с обеих сторон",
          isRight: true,
        },
        { id: 723, content: "Только как стек", isRight: false },
        { id: 724, content: "Только в очереди", isRight: false },
      ],
    },
    {
      id: 182,
      content: "Как проверить, существует ли ключ\r\nв словаре?",
      options: [
        { id: 725, content: "Не удалось проверить", isRight: false },
        { id: 726, content: "через оператор «in»", isRight: true },
        { id: 727, content: "Только через список", isRight: false },
        {
          id: 728,
          content: "Только через цифровые клавиши",
          isRight: false,
        },
      ],
    },
    {
      id: 183,
      content: "Как удалить элемент с наивысшим\r\nприоритетом из приоритетной\r\nочереди?",
      options: [
        { id: 729, content: "Через поп-операцию", isRight: false },
        {
          id: 730,
          content: "Через операцию удаления из\r\n очереди",
          isRight: false,
        },
        {
          id: 731,
          content: "Путем автоматического выбора\r\n элемента с наивысшим\r\n приоритетом",
          isRight: true,
        },
        {
          id: 732,
          content: "Выводится только последний\r\n элемент",
          isRight: false,
        },
      ],
    },
    {
      id: 184,
      content: "Как значения хранятся в словарях?",
      options: [
        { id: 733, content: "Только как строки", isRight: false },
        { id: 734, content: "В виде пары ключ-значение", isRight: true },
        {
          id: 735,
          content: "Только как числовые значения",
          isRight: false,
        },
        { id: 736, content: "Элементы индексируются", isRight: false },
      ],
    },
    {
      id: 185,
      content: "В чем разница между приоритетной\r\nочередью и обычной очередью?",
      options: [
        {
          id: 737,
          content: "Приоритет — это приоритет\r\n каждого элемента в очереди .",
          isRight: true,
        },
        {
          id: 738,
          content: "В обычной очереди элементы\r\n добавляются только с конца .",
          isRight: false,
        },
        {
          id: 739,
          content: "Очередь с приоритетами работает\r\n только как стек .",
          isRight: false,
        },
        {
          id: 740,
          content: "Приоритет выставляется в\r\n обычной очереди",
          isRight: false,
        },
      ],
    },
    {
      id: 186,
      content: "В каких ситуациях используется\r\nдекс?",
      options: [
        {
          id: 741,
          content: " Когда вам нужно добавить и\r\n удалить с обеих сторон\r\n одновременно",
          isRight: true,
        },
        {
          id: 742,
          content: "Только когда вам нужно его\r\n выключить",
          isRight: false,
        },
        {
          id: 743,
          content: "Только когда вам нужно изменить\r\n данные",
          isRight: false,
        },
        {
          id: 744,
          content: "Когда данные добавляются только\r\n с одной стороны",
          isRight: false,
        },
      ],
    },
    {
      id: 187,
      content: "Что такое древовидная структура\r\nданных?",
      options: [
        {
          id: 745,
          content: "Линейная структура, в которой\r\n все элементы связаны друг с\r\n другом .",
          isRight: false,
        },
        {
          id: 746,
          content: "Структура данных, состоящая из\r\n узлов и их взаимосвязей .",
          isRight: true,
        },
        {
          id: 747,
          content: "Структура, в которой элементы\r\nхранятся в случайном порядке .",
          isRight: false,
        },
        {
          id: 748,
          content: "Структура, содержащая всего два\r\n элемента",
          isRight: false,
        },
      ],
    },
    {
      id: 188,
      content: "Какое максимальное количество\r\nдочерних элементов может иметь\r\nкаждый узел в двоичном дереве?",
      options: [
        { id: 749, content: 1, isRight: false },
        { id: 750, content: 2, isRight: true },
        { id: 751, content: 3, isRight: false },
        { id: 752, content: "Безлимитный", isRight: false },
      ],
    },
    {
      id: 189,
      content: "Каково свойство двоичного дерева\r\nпоиска?",
      options: [
        {
          id: 753,
          content: "У каждого узла будет только один\r\n дочерний элемент",
          isRight: false,
        },
        {
          id: 754,
          content:
            "Левый дочерний элемент каждого\r\n узла будет иметь меньшее\r\n значение, а правый дочерний\r\n элемент будет иметь большее\r\n значение .",
          isRight: true,
        },
        {
          id: 755,
          content: "Значения узлов упорядочены\r\n случайным образом",
          isRight: false,
        },
        {
          id: 756,
          content: "Дерево состоит только из узлов\r\n одинакового значения .",
          isRight: false,
        },
      ],
    },
    {
      id: 190,
      content: "Какой тип древовидного\r\nпредставления использует порядок\r\n«слева, корень, справа»?",
      options: [
        { id: 757, content: "Предварительный заказ", isRight: false },
        { id: 758, content: "Постзаказ", isRight: false },
        { id: 759, content: "Чтобы", isRight: true },
        { id: 760, content: "Порядок уровней", isRight: false },
      ],
    },
    {
      id: 191,
      content: "Какие породы деревьев являются\r\nсбалансированными?",
      options: [
        { id: 761, content: "Бинарное дерево поиска", isRight: false },
        { id: 762, content: "АВЛ-дерево", isRight: true },
        { id: 763, content: "Кучи", isRight: false },
        { id: 764, content: "Все", isRight: false },
      ],
    },
    {
      id: 192,
      content: "Какова основная особенность дерева\r\nкучи?",
      options: [
        {
          id: 765,
          content: "Каждый узел должен иметь двух\r\n дочерних элементов",
          isRight: false,
        },
        {
          id: 766,
          content: "Каждый узел должен быть больше\r\n или меньше всех его дочерних\r\n элементов .",
          isRight: true,
        },
        { id: 767, content: "В дереве все элементы равны", isRight: false },
        {
          id: 768,
          content: "Каждый узел должен иметь\r\n только одного дочернего узла",
          isRight: false,
        },
      ],
    },
    {
      id: 193,
      content: "Что означает уровень узлов в\r\nдереве?",
      options: [
        { id: 769, content: "Высота дерева", isRight: false },
        { id: 770, content: "Расстояние узла от корня", isRight: true },
        {
          id: 771,
          content: "Общее количество элементов\r\n дерева",
          isRight: false,
        },
        { id: 772, content: "Стоимость каждого узла", isRight: false },
      ],
    },
    {
      id: 194,
      content: "Как определяется высота дерева?",
      options: [
        {
          id: 773,
          content: "По количеству всех узлов в дереве",
          isRight: false,
        },
        { id: 774, content: "С левой стороны дерева", isRight: false },
        {
          id: 775,
          content: "С длиной пути от корня дерева до\r\n самого дальнего узла",
          isRight: true,
        },
        {
          id: 776,
          content: "По количеству всех детей в дереве",
          isRight: false,
        },
      ],
    },
    {
      id: 195,
      content: "Какой принцип используется для\r\nдобавления нового элемента в\r\nбинарное дерево поиска?",
      options: [
        {
          id: 777,
          content: "Элементы всегда следует\r\n добавлять справа .",
          isRight: false,
        },
        {
          id: 778,
          content: "Новый элемент следует добавлять\r\n только слева",
          isRight: false,
        },
        {
          id: 779,
          content:
            " При вставке нового элемента\r\n элементы меньшего размера\r\nдобавляются слева, а элементы\r\n большего размера — справа .",
          isRight: true,
        },
        {
          id: 780,
          content: "Элементы следует добавлять\r\n только в корень",
          isRight: false,
        },
      ],
    },
    {
      id: 196,
      content: "Что такое лист на дереве?",
      options: [
        { id: 781, content: "Узел без дочерних элементов", isRight: true },
        { id: 782, content: "Узел после корня", isRight: false },
        { id: 783, content: "Узел наивысшего значения", isRight: false },
        {
          id: 784,
          content: "Узел только с одним дочерним\r\n элементом",
          isRight: false,
        },
      ],
    },
    {
      id: 197,
      content: "Почему дерево AVL считается\r\nсбалансированным?",
      options: [
        { id: 785, content: "В дереве все узлы равны", isRight: false },
        {
          id: 786,
          content: "Перепад высот левого и правого\r\n участков каждого узла не\r\n превышает 1.",
          isRight: true,
        },
        {
          id: 787,
          content: "Все элементы в дереве имеют\r\n одинаковую ценность",
          isRight: false,
        },
        {
          id: 788,
          content: "Все строки дерева будут\r\n одинаковыми",
          isRight: false,
        },
      ],
    },
    {
      id: 198,
      content: "Как порядок уровней работает в\r\nдревовидном представлении?",
      options: [
        {
          id: 789,
          content: "Просмотр дерева слой за слоем,\r\n начиная с корня .",
          isRight: true,
        },
        {
          id: 790,
          content: "Просмотр дерева слева направо",
          isRight: false,
        },
        {
          id: 791,
          content: "Просмотр каждого узла с его\r\n дочерними элементами",
          isRight: false,
        },
        {
          id: 792,
          content: "Видеть дерево только по листьям",
          isRight: false,
        },
      ],
    },
    {
      id: 199,
      content: "В каком дереве хранится разница\r\nмежду левым и правым разделами\r\nкаждого узла?",
      options: [
        { id: 793, content: "Бинарное дерево поиска", isRight: false },
        { id: 794, content: "АВЛ-дерево", isRight: true },
        { id: 795, content: "Кучное дерево", isRight: false },
        { id: 796, content: "Все", isRight: false },
      ],
    },
    {
      id: 200,
      content: "Что такое корень дерева?",
      options: [
        { id: 797, content: "Самый нижний узел дерева", isRight: false },
        { id: 798, content: "Самый верхний узел дерева", isRight: true },
        { id: 799, content: "Все узлы дерева", isRight: false },
        { id: 800, content: "Все листья дерева", isRight: false },
      ],
    },
  ],

  [
    {
      id: 201,
      content: "Как выполнить рекурсивный обход\r\nпо деревьям?",
      options: [
        { id: 801, content: "Только через root", isRight: false },
        {
          id: 802,
          content: "Просматривайте каждый узел\r\n рекурсивно",
          isRight: false,
        },
        {
          id: 803,
          content: "Рекурсивный обход дерева от\r\n корня вниз",
          isRight: true,
        },
        {
          id: 804,
          content: "Просмотрите дерево рекурсивно\r\n слева направо .",
          isRight: false,
        },
      ],
    },
    {
      id: 202,
      content: "Что такое двоичное дерево поиска?",
      options: [
        {
          id: 805,
          content:
            "Древовидная структура данных, в\r\n которой каждый узел имеет не\r\nболее двух дочерних элементов .",
          isRight: false,
        },
        {
          id: 806,
          content:
            "это дерево данных, в котором в\r\n каждом узле самый левый узел\r\n является второстепенным, а\r\nсамый правый узел — основным .",
          isRight: true,
        },
        { id: 807, content: "Нет связи", isRight: false },
        {
          id: 808,
          content: "Древовидная структура данных, в\r\n которой каждый узел имеет не\r\n более двух листьев .",
          isRight: false,
        },
      ],
    },
    {
      id: 203,
      content: "Что важно в процессе поиска\r\nэлемента в бинарном дереве поиска?",
      options: [
        {
          id: 809,
          content: "Зная, что значения узлов\r\nмаленькие слева и большие справа",
          isRight: true,
        },
        {
          id: 810,
          content: "У каждого узла есть два родителя",
          isRight: false,
        },
        {
          id: 811,
          content: "Каждый узел имеет только одного\r\n дочернего элемента",
          isRight: false,
        },
        {
          id: 812,
          content: "Значения узлов должны быть\r\n равны",
          isRight: false,
        },
      ],
    },
    {
      id: 204,
      content: "Как создать двоичное дерево\r\nпоиска?",
      options: [
        {
          id: 813,
          content: "Путем последовательного\r\n соединения узлов",
          isRight: false,
        },
        {
          id: 814,
          content: " Располагая слева направо,\r\nпомещая каждое новое значение\r\n на свое место .",
          isRight: true,
        },
        {
          id: 815,
          content: "Путем случайного размещения\r\n узлов",
          isRight: false,
        },
        { id: 816, content: "Списки по сортировке", isRight: false },
      ],
    },
    {
      id: 205,
      content: "Какое свойство двоичного дерева\r\nпоиска обеспечивает быстроту\r\nпоиска?",
      options: [
        {
          id: 817,
          content: "Узлы справа имеют небольшое\r\n значение, узлы слева имеют\r\n большое значение .",
          isRight: false,
        },
        {
          id: 818,
          content: "Все узлы имеют одинаковое\r\n значение",
          isRight: false,
        },
        {
          id: 819,
          content: "Количество узлов должно быть\r\n четным",
          isRight: false,
        },
        {
          id: 820,
          content: " Узлы слева имеют небольшое\r\n значение, узлы справа имеют\r\n большое значение .",
          isRight: true,
        },
      ],
    },
    {
      id: 206,
      content: "Каков порядок добавления нового\r\nузла в бинарное дерево поиска?",
      options: [
        {
          id: 821,
          content: "Он будет добавлен там, где он\r\n пуст .",
          isRight: false,
        },
        {
          id: 822,
          content:
            "Начиная с корня дерева,\r\nдобавляется, определяя, в каком\r\nнаправлении оно должно\r\nрасполагаться .",
          isRight: true,
        },
        {
          id: 823,
          content: "Узлы ранжируются по их\r\n среднему значению .",
          isRight: false,
        },
        {
          id: 824,
          content: "Добавляется стоимость всех\r\n листьев .",
          isRight: false,
        },
      ],
    },
    {
      id: 207,
      content: "Как найти минимальное значение в\r\nBST?",
      options: [
        {
          id: 825,
          content: " Начиная с корневого узла,\r\nдвижение влево — это последний\r\n узел .",
          isRight: true,
        },
        {
          id: 826,
          content: "Начиная с корневого узла,\r\nдвигаясь вправо, последний узел",
          isRight: false,
        },
        { id: 827, content: "В любом узле дерева", isRight: false },
        {
          id: 828,
          content: "Дерево находится в корневом узле",
          isRight: false,
        },
      ],
    },
    {
      id: 208,
      content: "Какова наихудшая сложность поиска\r\nв BST?",
      options: [
        { id: 829, content: "На)", isRight: true },
        { id: 830, content: "О (логарифм n)", isRight: false },
        { id: 831, content: "О(1)", isRight: false },
        { id: 832, content: "О(п2)", isRight: false },
      ],
    },
    {
      id: 209,
      content: "Зачем балансировать двоичное\r\nдерево поиска?",
      options: [
        { id: 833, content: "Для быстрого расчета", isRight: false },
        {
          id: 834,
          content: "Чтобы каждый узел оставался на\r\nместе",
          isRight: false,
        },
        {
          id: 835,
          content: "Чтобы уменьшить размер дерева",
          isRight: false,
        },
        { id: 836, content: "Чтобы сократить время поиска", isRight: true },
      ],
    },
    {
      id: 210,
      content: "Какой процесс используется в BST\r\nдля удаления неиспользуемых\r\nзначений?",
      options: [
        { id: 837, content: "Выключать", isRight: false },
        { id: 838, content: "Удалить и реорганизовать", isRight: true },
        { id: 839, content: "Искать еще раз", isRight: false },
        { id: 840, content: "Обновлять", isRight: false },
      ],
    },
    {
      id: 211,
      content: "Что такое корневой узел BST?",
      options: [
        { id: 841, content: "Начальная точка дерева", isRight: true },
        { id: 842, content: "Конечная точка дерева", isRight: false },
        { id: 843, content: "Сумма узлов", isRight: false },
        { id: 844, content: "К сумме листьев", isRight: false },
      ],
    },
    {
      id: 212,
      content: "Какой алгоритм используется для\r\nдобавления элементов в BST?",
      options: [
        {
          id: 845,
          content: "Соседние узлы добавляются к\r\n корневому узлу.",
          isRight: false,
        },
        {
          id: 846,
          content: "Каждый узел добавляется\r\nперестановкой",
          isRight: false,
        },
        {
          id: 847,
          content: "Он добавляется в нижний правый\r\n узел",
          isRight: false,
        },
        {
          id: 848,
          content: " Добавляемый элемент\r\nпомещается в соответствующую\r\n позицию, начиная с корня",
          isRight: true,
        },
      ],
    },
    {
      id: 213,
      content: "Как перейти к выходным значениям\r\nв BST в отсортированном порядке?",
      options: [
        { id: 849, content: "Предварительный заказ", isRight: false },
        { id: 850, content: "Чтобы", isRight: true },
        { id: 851, content: "Постзаказ", isRight: false },
        { id: 852, content: "Препостордер", isRight: false },
      ],
    },
    {
      id: 214,
      content: "Как определяется максимальная\r\nглубина двоичного дерева поиска?",
      options: [
        {
          id: 853,
          content: "По самому длинному пути дерева",
          isRight: true,
        },
        {
          id: 854,
          content: "В какую сторону смотреть от\r\nкорня дерева",
          isRight: false,
        },
        {
          id: 855,
          content: "По количеству всех узлов в дереве",
          isRight: false,
        },
        { id: 856, content: "По кратчайшему пути дерева", isRight: false },
      ],
    },
    {
      id: 215,
      content: "Какие типы БСТ существуют?",
      options: [
        { id: 857, content: "АВЛ, Красно-Чёрный, Сплей", isRight: true },
        { id: 858, content: "Сеть, Графика, Скамейка", isRight: false },
        {
          id: 859,
          content: "Линейный, двоичный, случайный",
          isRight: false,
        },
        {
          id: 860,
          content: "Сеть, Распространение,\r\n Случайный",
          isRight: false,
        },
      ],
    },
    {
      id: 216,
      content: "Как происходит расстановка\r\nзначений в BST?",
      options: [
        {
          id: 861,
          content: "Сортировка от корневого узла к\r\n конечному узлу",
          isRight: false,
        },
        {
          id: 862,
          content: "Каждое значение помещается в\r\nслучайные позиции",
          isRight: false,
        },
        {
          id: 863,
          content: "Сортировка слева направо, от\r\n меньшего к большему",
          isRight: true,
        },
        { id: 864, content: "Сортировка справа налево", isRight: false },
      ],
    },
    {
      id: 217,
      content: "Что такое кучное дерево?",
      options: [
        {
          id: 865,
          content: " Бинарное дерево, в котором\r\nкаждый родительский узел имеет\r\nприоритет над своими потомками .",
          isRight: true,
        },
        {
          id: 866,
          content: "Просто правильно связанное\r\nдерево",
          isRight: false,
        },
        {
          id: 867,
          content: "Только узлы, соединенные\r\n ребрами",
          isRight: false,
        },
        { id: 868, content: "Дерево без краев", isRight: false },
      ],
    },
    {
      id: 218,
      content: "Каково свойство дерева с\r\nмаксимальной кучей?",
      options: [
        {
          id: 869,
          content: "Каждый родительский узел\r\n больше своих потомков",
          isRight: true,
        },
        {
          id: 870,
          content: "Каждый узел-потомок больше\r\nродительского узла",
          isRight: false,
        },
        {
          id: 871,
          content: "Все узлы имеют одинаковое\r\n значение",
          isRight: false,
        },
        { id: 872, content: "Значения узлов случайны", isRight: false },
      ],
    },
    {
      id: 219,
      content: "Каким свойством обладает дерево с\r\nмини-кучей?",
      options: [
        {
          id: 873,
          content: "Каждый родительский узел\r\nменьше своих потомков .",
          isRight: true,
        },
        {
          id: 874,
          content: "Каждый узел-потомок меньше\r\nродительского узла .",
          isRight: false,
        },
        { id: 875, content: "Узлы имеют равную ценность", isRight: false },
        { id: 876, content: "В дереве есть циклы", isRight: false },
      ],
    },
    {
      id: 220,
      content: "Как добавить новый узел в дерево\r\nкучи?",
      options: [
        {
          id: 877,
          content: "До последнего пустого места в\r\n дереве",
          isRight: true,
        },
        { id: 878, content: "К корню дерева", isRight: false },
        { id: 879, content: "В любое место", isRight: false },
        {
          id: 880,
          content: "Только к узлам с минимальным\r\n значением",
          isRight: false,
        },
      ],
    },
    {
      id: 221,
      content: "Что означает Heapify?",
      options: [
        { id: 881, content: "Перестановка дерева", isRight: true },
        {
          id: 882,
          content: "Добавить новый узел в дерево",
          isRight: false,
        },
        { id: 883, content: "Удалить узел из дерева", isRight: false },
        { id: 884, content: "Развернуть дерево", isRight: false },
      ],
    },
    {
      id: 222,
      content: "В чем основная разница между Max-\r\nheap и Min-heap?",
      options: [
        {
          id: 885,
          content: "В Max-heap родительский узел\r\nбольше своих потомков, а в Min-\r\nheap меньше .",
          isRight: true,
        },
        {
          id: 886,
          content: "Максимальная куча имеет узлы\r\n только с левой стороны .",
          isRight: false,
        },
        { id: 887, content: "Мини-куча не имеет ребер", isRight: false },
        { id: 888, content: "Макс-куча имеет только циклы", isRight: false },
      ],
    },
    {
      id: 223,
      content: "Как получить наибольшее или\r\nнаименьшее значение в дереве кучи?",
      options: [
        {
          id: 889,
          content: "Удалите корневой узел и\r\nпоместите последний узел в\r\nкорень и создайте кучу",
          isRight: true,
        },
        { id: 890, content: "Удалением любого узла", isRight: false },
        {
          id: 891,
          content: "Только путем удаления листовых\r\nузлов",
          isRight: false,
        },
        { id: 892, content: "Удалив только левые узлы", isRight: false },
      ],
    },
    {
      id: 224,
      content: "Как работает алгоритм\r\nпирамидальной сортировки?",
      options: [
        {
          id: 893,
          content: "Путем объединения дерева в кучу\r\nи удаления самого большого или\r\nнаименьшего значения .",
          isRight: true,
        },
        {
          id: 894,
          content: "Располагая левую и правую части\r\n дерева",
          isRight: false,
        },
        {
          id: 895,
          content: "Приравнивая все значения в\r\nдереве",
          isRight: false,
        },
        {
          id: 896,
          content: "Переставляя каждый узел в\r\nобратном порядке",
          isRight: false,
        },
      ],
    },
    {
      id: 225,
      content: "Где находится наибольшее значение\r\nв дереве кучи?",
      options: [
        { id: 897, content: "В корневом узле", isRight: true },
        { id: 898, content: "С левой стороны", isRight: false },
        { id: 899, content: "На правой стороне", isRight: false },
        { id: 900, content: "В каждом пространстве", isRight: false },
      ],
    },
  ],
  [
    {
      id: 226,
      content: "Где находится наименьшее значение\r\nв дереве кучи (min-heap)?",
      options: [
        { id: 901, content: "В корневом узле", isRight: true },
        { id: 902, content: "В первом узле слева", isRight: false },
        { id: 903, content: "В самом последнем узле", isRight: false },
        { id: 904, content: "Только слева", isRight: false },
      ],
    },
    {
      id: 227,
      content: "В чем сложность добавления узлов в\r\nдереве кучи?",
      options: [
        { id: 905, content: "О (логарифм n)", isRight: true },
        { id: 906, content: "На)", isRight: false },
        { id: 907, content: "О(п^2)", isRight: false },
        { id: 908, content: "О(1)", isRight: false },
      ],
    },
    {
      id: 228,
      content: "Каков самый высокий уровень\r\nкучного дерева?",
      options: [
        { id: 909, content: "Корневой узел дерева", isRight: true },
        { id: 910, content: "Левая сторона дерева", isRight: false },
        { id: 911, content: "Правая сторона дерева", isRight: false },
        { id: 912, content: "Последний узел в дереве", isRight: false },
      ],
    },
    {
      id: 229,
      content: "Как расположены узлы самого\r\nнижнего уровня в дереве кучи?",
      options: [
        { id: 913, content: "На последнем этаже дерева", isRight: true },
        { id: 914, content: "У корня дерева", isRight: false },
        { id: 915, content: "С левой стороны", isRight: false },
        {
          id: 916,
          content: "Только узлы минимального\r\n значения",
          isRight: false,
        },
      ],
    },
    {
      id: 230,
      content: "В каком алгоритме эффективно\r\nиспользуется дерево кучи?",
      options: [
        { id: 917, content: "пирамидальная сортировка", isRight: true },
        { id: 918, content: "Пузырьковая сортировка", isRight: false },
        { id: 919, content: "Быстрая сортировка", isRight: false },
        { id: 920, content: "Линейный поиск", isRight: false },
      ],
    },
    {
      id: 231,
      content: "Каким процессом выполняется\r\nалгоритм пирамидальной\r\nсортировки?",
      options: [
        {
          id: 921,
          content: "Соберите узлы в кучу и удалите\r\nсамый большой или самый\r\nмаленький узел из корня .",
          isRight: true,
        },
        {
          id: 922,
          content: "Сдвигайте каждый узел влево и\r\n вправо",
          isRight: false,
        },
        { id: 923, content: "Полная реконструкция дерева", isRight: false },
        { id: 924, content: "Выровнять все узлы дерева", isRight: false },
      ],
    },
    {
      id: 232,
      content: "Что такое присоединенное\r\nматричное представление графа?",
      options: [
        {
          id: 925,
          content: "Квадратная матрица,\r\nпредставляющая связи между\r\nузлами",
          isRight: true,
        },
        {
          id: 926,
          content: "Матрица, представляющая узлы и\r\n ребра в виде списка .",
          isRight: false,
        },
        { id: 927, content: "Структура только по краям", isRight: false },
        {
          id: 928,
          content: "Изображение, показывающее\r\nтолько пути",
          isRight: false,
        },
      ],
    },
    {
      id: 233,
      content: "Как будет выглядеть совместная\r\nматрица?",
      options: [
        { id: 929, content: "Неправильная матрица", isRight: false },
        {
          id: 930,
          content: "Квадратная матрица, элементы\r\n которой равны 0 и 1.",
          isRight: true,
        },
        { id: 931, content: "Линейный список", isRight: false },
        {
          id: 932,
          content: "Матрица, показывающая\r\nрасстояния между узлами",
          isRight: false,
        },
      ],
    },
    {
      id: 234,
      content: "Как список смежности описывает\r\nграфы?",
      options: [
        {
          id: 933,
          content: "Показывает связи через матрицу",
          isRight: false,
        },
        {
          id: 934,
          content: "Список длин для каждого узла",
          isRight: false,
        },
        {
          id: 935,
          content: "Список зависимых узлов для\r\nкаждого узла",
          isRight: true,
        },
        {
          id: 936,
          content: "Расстояние между узлами и\r\nкраями",
          isRight: false,
        },
      ],
    },
    {
      id: 235,
      content: "В чем состоит главная особенность\r\nматрицы отношений?",
      options: [
        {
          id: 937,
          content: "Показывает только соседние узлы",
          isRight: false,
        },
        {
          id: 938,
          content: "Сохраняет только минимальные\r\n пути",
          isRight: false,
        },
        { id: 939, content: "Сохраняет все ребра в графе", isRight: false },
        {
          id: 940,
          content: "Представляет значение 0 или 1\r\nдля каждой ссылки .",
          isRight: true,
        },
      ],
    },
    {
      id: 236,
      content: "Что означают нули в сопряженной\r\nматрице?",
      options: [
        {
          id: 941,
          content: "Между узлами существует связь",
          isRight: false,
        },
        {
          id: 942,
          content: "Отсутствие связи между узлами",
          isRight: true,
        },
        {
          id: 943,
          content: "Между узлами есть расстояние",
          isRight: false,
        },
        { id: 944, content: "Путь между узлами", isRight: false },
      ],
    },
    {
      id: 237,
      content: "В чем преимущество списка\r\nсмежности?",
      options: [
        { id: 945, content: "Требует меньше места", isRight: true },
        { id: 946, content: "Требуется больше места", isRight: false },
        {
          id: 947,
          content: "Показывает расстояние между\r\nузлами",
          isRight: false,
        },
        {
          id: 948,
          content: "Сохраняет только минимальные\r\nкрая",
          isRight: false,
        },
      ],
    },
    {
      id: 238,
      content: "Какой метод быстрее обнаруживает\r\nналичие ссылки?",
      options: [
        { id: 949, content: "Список окрестностей", isRight: false },
        { id: 950, content: "Совместная матрица", isRight: true },
        { id: 951, content: "Список дуг", isRight: false },
        { id: 952, content: "Матрица отношений", isRight: true },
      ],
    },
    {
      id: 239,
      content: "Как эффективно работает\r\nсовместная матрица?",
      options: [
        { id: 953, content: "Когда количество ребер мало", isRight: false },
        { id: 954, content: "Когда количество узлов мало", isRight: false },
        {
          id: 955,
          content: "Когда количество ребер велико",
          isRight: true,
        },
        { id: 956, content: "Только когда есть циклы", isRight: false },
      ],
    },
    {
      id: 240,
      content: "Как списки дуг описывают графы?",
      options: [
        {
          id: 957,
          content: "Сохраняет узлы в виде линейного\r\n списка .",
          isRight: false,
        },
        {
          id: 958,
          content: "Показывает связи через матрицу",
          isRight: false,
        },
        {
          id: 959,
          content: "Показывает минимальные пути\r\n для каждого узла",
          isRight: false,
        },
        {
          id: 960,
          content: "Сохраняет ссылки для каждого\r\nребра в виде списка .",
          isRight: true,
        },
      ],
    },
    {
      id: 241,
      content: "В чем недостаток совместной\r\nматрицы?",
      options: [
        {
          id: 961,
          content: "Позволяет найти кратчайший путь",
          isRight: false,
        },
        { id: 962, content: "Требует много памяти", isRight: true },
        { id: 963, content: "Требует мало места", isRight: false },
        { id: 964, content: "Показывает только циклы", isRight: false },
      ],
    },
    {
      id: 242,
      content: "Что не так со списками районов?",
      options: [
        {
          id: 965,
          content: "Проверка связей между узлами\r\n занимает больше времени",
          isRight: true,
        },
        { id: 966, content: "Требует много памяти", isRight: false },
        {
          id: 967,
          content: "Пути между узлами не могут быть\r\n определены",
          isRight: false,
        },
        { id: 968, content: "Показывает только циклы", isRight: false },
      ],
    },
    {
      id: 243,
      content: "Какие отношения представляет\r\nсовместная матрица?",
      options: [
        {
          id: 969,
          content: "Только минимальные соединения",
          isRight: false,
        },
        { id: 970, content: "Только несвязанные узлы", isRight: false },
        {
          id: 971,
          content: "Связанные и несвязанные узлы",
          isRight: true,
        },
        {
          id: 972,
          content: "Только расстояние между узлами",
          isRight: false,
        },
      ],
    },
    {
      id: 244,
      content: "Какой метод построения графиков\r\nтребует меньше места?",
      options: [
        { id: 973, content: "Список окрестностей", isRight: true },
        { id: 974, content: "Совместная матрица", isRight: false },
        { id: 975, content: "Матрица отношений", isRight: false },
        { id: 976, content: "Список дуг", isRight: true },
      ],
    },
    {
      id: 245,
      content: "На каких типах графов список\r\nсмежности работает эффективно?",
      options: [
        { id: 977, content: "Плотные графики", isRight: false },
        { id: 978, content: "Разреженные графы", isRight: true },
        { id: 979, content: "Бесузловые графы", isRight: false },
        { id: 980, content: "Графики без циклов", isRight: false },
      ],
    },
    {
      id: 246,
      content: "В каком графе список дуг\r\nэффективен?",
      options: [
        { id: 981, content: "В разреженных графах", isRight: true },
        { id: 982, content: "В плотных графах", isRight: false },
        { id: 983, content: "В графах со многими узлами", isRight: false },
        { id: 984, content: "В ациклических графах", isRight: false },
      ],
    },
    {
      id: 247,
      content: "Какой алгоритм используется для\r\nвосприятия глубины (DFS)?",
      options: [
        { id: 985, content: "Хэшмап", isRight: false },
        { id: 986, content: "Стек (Стек)", isRight: true },
        { id: 987, content: "Очередь", isRight: false },
        { id: 988, content: "Дерево", isRight: false },
      ],
    },
    {
      id: 248,
      content: "Какой алгоритм используется для\r\nпросмотра широты (BFS)?",
      options: [
        { id: 989, content: "Очередь", isRight: true },
        { id: 990, content: "Стек (Стек)", isRight: false },
        { id: 991, content: "Хэшмап", isRight: false },
        { id: 992, content: "Дерево", isRight: false },
      ],
    },
    {
      id: 249,
      content: "Какую структуру данных использует\r\nалгоритм DFS?",
      options: [
        { id: 993, content: "Бинарное дерево", isRight: false },
        { id: 994, content: "Куча", isRight: true },
        { id: 995, content: "Очередь", isRight: false },
        { id: 996, content: "Словарь", isRight: false },
      ],
    },
    {
      id: 250,
      content: "Какую структуру данных использует\r\nалгоритм BFS?",
      options: [
        { id: 997, content: "Очередь", isRight: true },
        { id: 998, content: "Куча", isRight: false },
        { id: 999, content: "Бинарное дерево", isRight: false },
        { id: 1000, content: "Словарь", isRight: false },
      ],
    },
  ],
  [
    {
      id: 251,
      content: "Какой алгоритм визуализации\r\nиспользуется для обнаружения\r\nциклов на графиках?",
      options: [
        { id: 1001, content: "А*", isRight: false },
        { id: 1002, content: "БФС", isRight: false },
        { id: 1003, content: "ДФС", isRight: true },
        { id: 1004, content: "Прим", isRight: false },
      ],
    },
    {
      id: 252,
      content: "Какой алгоритм использует\r\nпредставление широты для поиска\r\nкратчайшего пути?",
      options: [
        { id: 1005, content: "Крускал", isRight: false },
        { id: 1006, content: "ДФС", isRight: false },
        { id: 1007, content: "Дейкстра", isRight: false },
        { id: 1008, content: "БФС", isRight: true },
      ],
    },
    {
      id: 253,
      content: "Какой алгоритм использует стек,\r\nчтобы избежать «исчезновения» на\r\nграфах?",
      options: [
        { id: 1009, content: "ДФС", isRight: true },
        { id: 1010, content: "БФС", isRight: false },
        { id: 1011, content: "Дейкстра", isRight: false },
        { id: 1012, content: "Флойд-Уоршалл", isRight: false },
      ],
    },
    {
      id: 254,
      content: "Какой элемент посещается первым в\r\nалгоритме поиска в ширину (BFS)?",
      options: [
        { id: 1013, content: "Нижний узел справа", isRight: false },
        { id: 1014, content: "Самый глубокий узел справа", isRight: false },
        { id: 1015, content: "Корневой узел", isRight: true },
        { id: 1016, content: "Нижний узел слева", isRight: false },
      ],
    },
    {
      id: 255,
      content: "В каком случае алгоритм DFS более\r\nэффективен?",
      options: [
        { id: 1017, content: "В составных графах", isRight: false },
        { id: 1018, content: "В плоских графиках", isRight: false },
        { id: 1019, content: "В глубоком графике", isRight: true },
        { id: 1020, content: "На тех же графиках", isRight: false },
      ],
    },
    {
      id: 256,
      content: "Какой алгоритм просмотра первым\r\nвидит все соседние узлы?",
      options: [
        { id: 1021, content: "БФС", isRight: true },
        { id: 1022, content: "ДФС", isRight: false },
        { id: 1023, content: "А*", isRight: false },
        { id: 1024, content: "Беллман-Форд", isRight: false },
      ],
    },
    {
      id: 257,
      content: "Какая структура данных\r\nиспользуется в графах с алгоритмом\r\nDFS?",
      options: [
        { id: 1025, content: "ArrayList", isRight: false },
        { id: 1026, content: "Очередь", isRight: false },
        { id: 1027, content: "Куча", isRight: true },
        { id: 1028, content: "Куча", isRight: true },
      ],
    },
    {
      id: 258,
      content: "На каких типах графиков алгоритм\r\nBFS эффективно работает?",
      options: [
        {
          id: 1029,
          content: "В плоских и широких графиках",
          isRight: true,
        },
        {
          id: 1030,
          content: "В глубоких и длинных графиках",
          isRight: false,
        },
        { id: 1031, content: "В циклических графах", isRight: false },
        { id: 1032, content: "В составных графах", isRight: false },
      ],
    },
    {
      id: 259,
      content: "Когда в алгоритме DFS используется\r\nрекурсия графа?",
      options: [
        { id: 1033, content: "Между узлами", isRight: false },
        {
          id: 1034,
          content: "При посещении каждого нового\r\nузла",
          isRight: true,
        },
        { id: 1035, content: "Только когда цикл найден", isRight: false },
        { id: 1036, content: "Только в конечных узлах", isRight: false },
      ],
    },
    {
      id: 260,
      content: "Как алгоритм BFS посещает узлы по\r\nпорядку?",
      options: [
        { id: 1037, content: "По ширине", isRight: true },
        { id: 1038, content: "По глубине", isRight: false },
        { id: 1039, content: "Вдали от соседних узлов", isRight: false },
        { id: 1040, content: "Первый из новых узлов", isRight: false },
      ],
    },
    {
      id: 261,
      content: "В каком графе все узлы посещаются\r\nалгоритмом DFS?",
      options: [
        { id: 1041, content: "Невесомый график", isRight: false },
        { id: 1042, content: "Плоский график", isRight: false },
        { id: 1043, content: "Граф без циклов", isRight: false },
        { id: 1044, content: "Совместный подсчет", isRight: true },
      ],
    },
    {
      id: 262,
      content: "Какой алгоритм используется для\r\nпоиска кратчайшего пути в графах?",
      options: [
        { id: 1045, content: "ДФС", isRight: false },
        { id: 1046, content: "Дейкстра", isRight: true },
        { id: 1047, content: "БФС", isRight: true },
        { id: 1048, content: "Крускал", isRight: false },
      ],
    },
    {
      id: 263,
      content: "В каких графах используется\r\nалгоритм Дейкстры для поиска\r\nкратчайшего пути?",
      options: [
        { id: 1049, content: "В циклических графах", isRight: false },
        {
          id: 1050,
          content: "На отрицательно взвешенных\r\nграфиках",
          isRight: false,
        },
        {
          id: 1051,
          content: "В положительно взвешенных\r\n графах",
          isRight: true,
        },
        { id: 1052, content: "На невзвешенных графиках", isRight: false },
      ],
    },
    {
      id: 264,
      content: "В каких ситуациях алгоритм\r\nБеллмана-Форда более эффективен,\r\nчем алгоритм Дейкстры?",
      options: [
        {
          id: 1053,
          content: "На графиках с отрицательными\r\n весами",
          isRight: true,
        },
        {
          id: 1054,
          content: "В положительно взвешенных\r\nграфах",
          isRight: false,
        },
        { id: 1055, content: "В ациклических графах", isRight: false },
        { id: 1056, content: "В составных графах", isRight: false },
      ],
    },
    {
      id: 265,
      content: "Для чего нужен алгоритм Флойда-\r\nУоршалла?",
      options: [
        { id: 1057, content: "Поиск по глубине", isRight: false },
        { id: 1058, content: "Обнаружение цикла", isRight: false },
        {
          id: 1059,
          content: " Поиск кратчайших путей от\r\nкаждого узла ко всем остальным\r\n узлам",
          isRight: true,
        },
        {
          id: 1060,
          content: "Построение минимального\r\n остовного дерева",
          isRight: false,
        },
      ],
    },
    {
      id: 266,
      content: "Какой алгоритм не работает на\r\nграфах с отрицательным весом,\r\nсодержащих циклы?",
      options: [
        { id: 1061, content: "Флойд-Уоршалл", isRight: false },
        { id: 1062, content: "Дейкстра", isRight: true },
        { id: 1063, content: "Беллман-Форд", isRight: false },
        { id: 1064, content: "БФС", isRight: false },
      ],
    },
    {
      id: 267,
      content: "Какова сложность алгоритма\r\nБеллмана-Форда?",
      options: [
        { id: 1065, content: "О(В^2)", isRight: false },
        { id: 1066, content: "О (В + Е)", isRight: false },
        { id: 1067, content: "О(В * Е)", isRight: true },
        { id: 1068, content: "О (логарифм В)", isRight: false },
      ],
    },
    {
      id: 268,
      content: "Какую структуру данных использует\r\nалгоритм Дейкстры?",
      options: [
        { id: 1069, content: "Приоритетная очередь", isRight: true },
        { id: 1070, content: "Стек (Стек)", isRight: false },
        { id: 1071, content: "Очередь", isRight: false },
        { id: 1072, content: "Множество", isRight: false },
      ],
    },
    {
      id: 269,
      content: "Какой алгоритм может\r\nобрабатывать отрицательные веса?",
      options: [
        { id: 1073, content: "Беллман-Форд", isRight: true },
        { id: 1074, content: "Прим", isRight: false },
        { id: 1075, content: "Дейкстра", isRight: false },
        { id: 1076, content: "БФС", isRight: false },
      ],
    },
    {
      id: 270,
      content: "В чем сложность алгоритма Флойда-\r\nУоршалла?",
      options: [
        { id: 1077, content: "О(В^2)", isRight: false },
        { id: 1078, content: "О(В^3)", isRight: true },
        { id: 1079, content: "О(В * Е)", isRight: false },
        { id: 1080, content: "О (В журнал В)", isRight: false },
      ],
    },
    {
      id: 271,
      content: "Какой алгоритм может работать с\r\nграфами любого веса?",
      options: [
        { id: 1081, content: "БФС", isRight: false },
        { id: 1082, content: "Дейкстра", isRight: false },
        { id: 1083, content: "Беллман-Форд", isRight: true },
        { id: 1084, content: "ДФС", isRight: false },
      ],
    },
    {
      id: 272,
      content: "Какой алгоритм обновляет\r\nинформацию о кратчайшем пути на\r\nкаждом этапе?",
      options: [
        { id: 1085, content: "Дейкстра", isRight: true },
        { id: 1086, content: "БФС", isRight: false },
        { id: 1087, content: "ДФС", isRight: false },
        { id: 1088, content: "Беллман-Форд", isRight: true },
      ],
    },
    {
      id: 273,
      content: "Как рассчитывается сложность\r\nалгоритма Дейкстры?",
      options: [
        { id: 1089, content: "О(В^2)", isRight: true },
        { id: 1090, content: "O(V log V + E log V)", isRight: true },
        { id: 1091, content: "О(В * Е)", isRight: false },
        { id: 1092, content: "О (В журнал В)", isRight: false },
      ],
    },
    {
      id: 274,
      content: "Какой из алгоритмов кратчайшего\r\nпути учитывает положительные и\r\nотрицательные веса?",
      options: [
        { id: 1093, content: "Прим", isRight: false },
        { id: 1094, content: "Дейкстра", isRight: false },
        { id: 1095, content: "Беллман-Форд", isRight: true },
        { id: 1096, content: "Крускал", isRight: false },
      ],
    },
    {
      id: 275,
      content: "В каком случае кратчайший путь не\r\nнайден в алгоритме Беллмана-\r\nФорда?",
      options: [
        {
          id: 1097,
          content: "Если в графе есть цикл с\r\nотрицательным весом",
          isRight: true,
        },
        { id: 1098, content: "Если граф невесомый", isRight: false },
        { id: 1099, content: "Если граф ациклический", isRight: false },
        {
          id: 1100,
          content: "Если граф имеет положительный\r\nвес",
          isRight: false,
        },
      ],
    },
  ],
  [
    {
      id: 276,
      content: "Граф, у которого количество\r\nребер близко к числу узлов,\r\nназывается - ?",
      options: [
        { id: 1101, content: "Редкий счет", isRight: true },
        { id: 1102, content: "Насыщенный счет", isRight: false },
        { id: 1103, content: "Полный график", isRight: false },
        { id: 1104, content: "Мультиграф", isRight: false },
      ],
    },
    {
      id: 277,
      content:
        "Если в графе есть ребро, которое\r\nначинается и заканчивается в\r\nодном и том же узле, какое оно\r\nназывается?",
      options: [
        { id: 1105, content: "петлевой край", isRight: true },
        { id: 1106, content: "край рядом с ним", isRight: false },
        { id: 1107, content: "боковой край", isRight: false },
        { id: 1108, content: "край головы", isRight: false },
      ],
    },
    {
      id: 278,
      content:
        "Если имеется ссылка на любой\r\nузел, отличный от произвольного\r\nузла, и ссылка двунаправленная,\r\nто такой граф называется ...",
      options: [
        { id: 1109, content: "ориентированный граф", isRight: false },
        { id: 1110, content: "неориентированный граф", isRight: true },
        { id: 1111, content: "Мультиграф", isRight: false },
        { id: 1112, content: "Редкий счет", isRight: false },
      ],
    },
    {
      id: 279,
      content: "Если граф имеет повторяющиеся\r\n(несколько) ребер, такой граф\r\nназывается ............",
      options: [
        { id: 1113, content: "неориентированный граф", isRight: false },
        { id: 1114, content: "ориентированные графы", isRight: false },
        { id: 1115, content: "Мультиграф", isRight: true },
        { id: 1116, content: "Насыщенный счет", isRight: false },
      ],
    },
    {
      id: 280,
      content: "Два ребра графа, идущие с\r\nодного конца, называются ...",
      options: [
        { id: 1117, content: "соседние концы", isRight: false },
        { id: 1118, content: "узел", isRight: false },
        { id: 1119, content: "соседние края", isRight: true },
        { id: 1120, content: "Список дуг", isRight: false },
      ],
    },
    {
      id: 281,
      content: "Классификация данных\r\nразделена на этапы",
      options: [
        {
          id: 1121,
          content: "Абстрактное, математическое,\r\nфизическое",
          isRight: false,
        },
        {
          id: 1122,
          content: "Математический, Логический,\r\nАбстрактный",
          isRight: false,
        },
        {
          id: 1123,
          content: "Абстрактное, Логическое,\r\nФизическое",
          isRight: true,
        },
        {
          id: 1124,
          content: "Физический, Математический,\r\nАбстрактный",
          isRight: false,
        },
      ],
    },
    {
      id: 282,
      content: "Какова основная цель\r\nоптимизации алгоритмов\r\nсортировки?",
      options: [
        {
          id: 1125,
          content: "Ускорьте процесс сортировки",
          isRight: true,
        },
        { id: 1126, content: "Только хранение данных", isRight: false },
        {
          id: 1127,
          content: "Просто систематизируйте данные",
          isRight: false,
        },
        { id: 1128, content: "Только поиск данных", isRight: false },
      ],
    },
    {
      id: 283,
      content: "Какие основные факторы влияют\r\nна алгоритмы сортировки?",
      options: [
        {
          id: 1129,
          content: "Эффективность времени и памяти",
          isRight: true,
        },
        { id: 1130, content: "Только экономия времени", isRight: false },
        {
          id: 1131,
          content: "Только эффективность памяти",
          isRight: false,
        },
        { id: 1132, content: "Только структура алгоритма", isRight: false },
      ],
    },
    {
      id: 284,
      content: "Каковы характеристики\r\nстатических массивов?",
      options: [
        {
          id: 1133,
          content: "Размер не меняется при\r\nпервоначальной настройке",
          isRight: true,
        },
        {
          id: 1134,
          content: "Хранит только элементы\r\nцелочисленного типа .",
          isRight: false,
        },
        {
          id: 1135,
          content: "Размер изменяется при\r\nинициализации",
          isRight: false,
        },
        {
          id: 1136,
          content: "Оптимизирует\r\nпроизводительность",
          isRight: false,
        },
      ],
    },
    {
      id: 285,
      content: "В чем главная особенность\r\nдинамических массивов?",
      options: [
        {
          id: 1137,
          content: "Размер может меняться со\r\nвременем",
          isRight: true,
        },
        {
          id: 1138,
          content: "Хранит только один тип данных",
          isRight: false,
        },
        {
          id: 1139,
          content: "Размер не меняется при\r\nпервоначальной настройке",
          isRight: false,
        },
        { id: 1140, content: "Хранит только данные", isRight: false },
      ],
    },
    {
      id: 286,
      content: "Что такое линейные контейнеры?",
      options: [
        {
          id: 1141,
          content: "Хранит данные только в\r\nотсортированном порядке",
          isRight: false,
        },
        {
          id: 1142,
          content: "Каждой части информации\r\nприсваивается отдельный тип",
          isRight: false,
        },
        {
          id: 1143,
          content: "Хранит данные в различных\r\nформах",
          isRight: false,
        },
        {
          id: 1144,
          content: "Хранит только один тип данных",
          isRight: true,
        },
      ],
    },
    {
      id: 287,
      content: "Что такое итераторы?",
      options: [
        {
          id: 1145,
          content: "Объекты, упрощающие работу с\r\nданными",
          isRight: true,
        },
        {
          id: 1146,
          content: "Используется только для хранения\r\nданных",
          isRight: false,
        },
        {
          id: 1147,
          content: "Хранит данные только по порядку",
          isRight: false,
        },
        {
          id: 1148,
          content: "Используется только для целей\r\nпоиска",
          isRight: false,
        },
      ],
    },
    {
      id: 288,
      content: "Каковы характеристики\r\nдинамических массивов?",
      options: [
        {
          id: 1149,
          content: "Размер изменяется при\r\nинициализации",
          isRight: true,
        },
        {
          id: 1150,
          content: "Оптимизирует\r\nпроизводительность",
          isRight: false,
        },
        {
          id: 1151,
          content: "Хранит только один тип данных",
          isRight: false,
        },
        {
          id: 1152,
          content: "Потребление памяти будет\r\nвысоким",
          isRight: false,
        },
      ],
    },
    {
      id: 289,
      content: "Перечислите основные операции\r\nсо стеком?",
      options: [
        { id: 1153, content: "Нажмите и поп", isRight: true },
        {
          id: 1154,
          content: "Постановка в очередь и удаление\r\nиз очереди",
          isRight: false,
        },
        {
          id: 1155,
          content: "Вставить, выбрать и удалить",
          isRight: false,
        },
        { id: 1156, content: "Добавить и удалить", isRight: false },
      ],
    },
    {
      id: 290,
      content: "Какова основная операция\r\nочереди?",
      options: [
        {
          id: 1157,
          content: "Постановка в очередь и удаление\r\nиз очереди",
          isRight: true,
        },
        { id: 1158, content: "Нажмите и поп", isRight: false },
        { id: 1159, content: "Вставить и удалить", isRight: false },
        { id: 1160, content: "Добавить и удалить", isRight: false },
      ],
    },
    {
      id: 291,
      content: "Как работает вставка стека\r\n(push)?",
      options: [
        {
          id: 1161,
          content: "Добавляет новый элемент в конец",
          isRight: true,
        },
        {
          id: 1162,
          content: "Добавляет новый элемент в\r\nначало",
          isRight: false,
        },
        {
          id: 1163,
          content: "Добавляет новый элемент в\r\nлюбом месте",
          isRight: false,
        },
        {
          id: 1164,
          content: "Добавляет новый предмет в\r\nслучайное место",
          isRight: false,
        },
      ],
    },
    {
      id: 292,
      content: "Как работает добавление (push) в\r\nколоде?",
      options: [
        {
          id: 1165,
          content: "Добавляет новый элемент в\r\nначало или конец",
          isRight: true,
        },
        {
          id: 1166,
          content: "Добавляет новый элемент в\r\nначало",
          isRight: false,
        },
        {
          id: 1167,
          content: "Добавляет новый элемент в конец",
          isRight: false,
        },
        {
          id: 1168,
          content: "Добавляет новый предмет в\r\nслучайное место",
          isRight: false,
        },
      ],
    },
    {
      id: 293,
      content: "Как работает стирание (удаление)\r\nстека?",
      options: [
        { id: 1169, content: "Удаляет последний элемент", isRight: true },
        { id: 1170, content: "Удаляет первый элемент", isRight: false },
        { id: 1171, content: "Случайно удаляет элемент", isRight: false },
        {
          id: 1172,
          content: "Удаление применяется только к\r\nпервому элементу",
          isRight: false,
        },
      ],
    },
    {
      id: 294,
      content: "Как работает удаление из\r\nочереди?",
      options: [
        { id: 1173, content: "Удаляет первый элемент", isRight: true },
        { id: 1174, content: "Удаляет последний элемент", isRight: false },
        { id: 1175, content: "Случайно удаляет элемент", isRight: false },
        {
          id: 1176,
          content: "Удаление применяется только к\r\nпоследнему элементу",
          isRight: false,
        },
      ],
    },
    {
      id: 295,
      content: "Как работает удаление\r\n(выталкивание) в колоде?",
      options: [
        {
          id: 1177,
          content: "Удаляет последний или первый\r\nэлемент",
          isRight: true,
        },
        { id: 1178, content: "Удаляет первый элемент", isRight: false },
        { id: 1179, content: "Удаляет последний элемент", isRight: false },
        { id: 1180, content: "Случайно удаляет элемент", isRight: false },
      ],
    },
    {
      id: 296,
      content: "Что такое древовидная\r\nструктура?",
      options: [
        { id: 1181, content: "Узлы и ребра", isRight: true },
        { id: 1182, content: "Элементы и индексы", isRight: false },
        { id: 1183, content: "Другие структуры данных", isRight: false },
        { id: 1184, content: "Массивы и векторы", isRight: false },
      ],
    },
    {
      id: 297,
      content: "Как выполнить поиск в бинарном\r\nдереве поиска?",
      options: [
        {
          id: 1185,
          content: "Поиск влево или вправо путем\r\nсравнения узла",
          isRight: true,
        },
        {
          id: 1186,
          content: "Проверьте данные на всех узлах",
          isRight: false,
        },
        { id: 1187, content: "Случайный выбор предметов", isRight: false },
        {
          id: 1188,
          content: "Искать данные только на\r\nпоследнем узле",
          isRight: false,
        },
      ],
    },
    {
      id: 298,
      content: "Что такое куча древовидной\r\nструктуры?",
      options: [
        {
          id: 1189,
          content: "В бинарном дереве каждый узел\r\nбольше или меньше, чем только\r\nего левый дочерний элемент .",
          isRight: true,
        },
        {
          id: 1190,
          content: "В дереве будут существовать\r\nтолько правильные дети",
          isRight: false,
        },
        {
          id: 1191,
          content: "Бинарное дерево будет иметь\r\nтолько одного дочернего\r\nэлемента .",
          isRight: false,
        },
        {
          id: 1192,
          content:
            "Каждый узел случайным образом\r\nупорядочивается между своими\r\nправыми и левыми дочерними\r\nэлементами .",
          isRight: false,
        },
      ],
    },
    {
      id: 299,
      content:
        "Какой метод представления при\r\nработе с графами помогает более\r\nнаглядно описать связи между\r\nтеми или иными узлами?",
      options: [
        { id: 1193, content: "Список окрестностей", isRight: true },
        { id: 1194, content: "Список дуг", isRight: false },
        { id: 1195, content: "Только матрицы", isRight: true },
        {
          id: 1196,
          content: "Только случайная иллюстрация",
          isRight: false,
        },
      ],
    },
    {
      id: 300,
      content: "Какая структура данных\r\nиспользуется в алгоритме BFS?",
      options: [
        { id: 1197, content: "Очередь", isRight: true },
        { id: 1198, content: "куча", isRight: false },
        { id: 1199, content: "Связанный список", isRight: false },
        { id: 1200, content: "Множество", isRight: false },
      ],
    },
  ],
  [
    {
      id: 301,
      content: "Какая структура данных\r\nиспользуется в алгоритме DFS?",
      options: [
        { id: 1201, content: "куча", isRight: true },
        { id: 1202, content: "Очередь", isRight: false },
        { id: 1203, content: "Связанный список", isRight: false },
        { id: 1204, content: "Множество", isRight: false },
      ],
    },
    {
      id: 302,
      content: "В каком случае алгоритм DFS\r\nможет иметь ограничения?",
      options: [
        {
          id: 1205,
          content: "Поиск может стать очень\r\nглубоким, т.е . бесконечным\r\nциклом .",
          isRight: true,
        },
        {
          id: 1206,
          content: "Поиск осуществляется только по\r\nвнешним соседним узлам",
          isRight: false,
        },
        {
          id: 1207,
          content: "Поиск прекращается только тогда,\r\nкогда он достигает последнего\r\nузла",
          isRight: false,
        },
        { id: 1208, content: "Узлы справа всегда ищутся", isRight: false },
      ],
    },
    {
      id: 303,
      content: "В каких случаях используется\r\nалгоритм BFS?",
      options: [
        {
          id: 1209,
          content: "Чтобы найти кратчайший путь в\r\nграфе",
          isRight: true,
        },
        {
          id: 1210,
          content: "Поиск осуществляется только с\r\nпоследнего узла",
          isRight: false,
        },
        {
          id: 1211,
          content: "Чтобы найти точную связь между\r\nузлами",
          isRight: false,
        },
        {
          id: 1212,
          content: "Используется в сильно несвязных\r\nграфах .",
          isRight: false,
        },
      ],
    },
    {
      id: 304,
      content: "Какую структуру данных\r\nиспользует алгоритм Форда-\r\nБеллмана?",
      options: [
        { id: 1213, content: "Список", isRight: true },
        { id: 1214, content: "куча", isRight: false },
        { id: 1215, content: "Очередь", isRight: false },
        { id: 1216, content: "Матрица", isRight: false },
      ],
    },
    {
      id: 305,
      content: "На каких графах работает\r\nалгоритм Дейкстры?",
      options: [
        {
          id: 1217,
          content: "Только в графах с положительным\r\nвесом",
          isRight: true,
        },
        {
          id: 1218,
          content: "Только в ориентированных\r\nграфах",
          isRight: false,
        },
        {
          id: 1219,
          content: "Не работает на графиках любого\r\nвеса",
          isRight: false,
        },
        { id: 1220, content: "В сильно несвязных графах", isRight: false },
      ],
    },
    {
      id: 306,
      content: "Перечислите основные функции\r\nстека?",
      options: [
        { id: 1221, content: "Нажмите и поп", isRight: true },
        {
          id: 1222,
          content: "Постановка в очередь и удаление\r\nиз очереди",
          isRight: false,
        },
        {
          id: 1223,
          content: "Вставить, выбрать и удалить",
          isRight: false,
        },
        { id: 1224, content: "Добавить и удалить", isRight: false },
      ],
    },
    {
      id: 307,
      content: "Какова основная функция\r\nочереди?",
      options: [
        {
          id: 1225,
          content: "Постановка в очередь и удаление\r\nиз очереди",
          isRight: true,
        },
        { id: 1226, content: "Нажмите и поп", isRight: false },
        { id: 1227, content: "Вставить и удалить", isRight: false },
        { id: 1228, content: "Добавить и удалить", isRight: false },
      ],
    },
    {
      id: 308,
      content: "Как данные добавляются в стек?",
      options: [
        { id: 1229, content: "ФИФО", isRight: false },
        { id: 1230, content: "LIFO", isRight: true },
        { id: 1231, content: "Случайный", isRight: false },
        { id: 1232, content: "Невозможно добавить", isRight: false },
      ],
    },
    {
      id: 309,
      content: "Как будет осуществляться доступ к\r\nданным в очереди?",
      options: [
        { id: 1233, content: "LIFO", isRight: false },
        { id: 1234, content: "ФИФО", isRight: true },
        {
          id: 1235,
          content: "Не подчиняется никаким\r\nправилам",
          isRight: false,
        },
        {
          id: 1236,
          content: "От самого маленького элемента к\r\nсамому большому",
          isRight: false,
        },
      ],
    },
    {
      id: 310,
      content: "Какова основная функция стека?",
      options: [
        { id: 1237, content: "Добавить, удалить", isRight: false },
        { id: 1238, content: "Толкай, Поп", isRight: true },
        {
          id: 1239,
          content: "Постановка в очередь, удаление\r\nиз очереди",
          isRight: false,
        },
        { id: 1240, content: "Вставить, Удалить", isRight: false },
      ],
    },
    {
      id: 311,
      content: "Функция добавления данных в\r\nочередь?",
      options: [
        { id: 1241, content: "Толкать", isRight: false },
        { id: 1242, content: "Поп", isRight: false },
        { id: 1243, content: "очередь", isRight: true },
        { id: 1244, content: "Удаление из очереди", isRight: false },
      ],
    },
    {
      id: 312,
      content: "Как называется получение\r\nинформации из конца очереди?",
      options: [
        { id: 1245, content: "Пик", isRight: true },
        { id: 1246, content: "очередь", isRight: false },
        { id: 1247, content: "Удаление из очереди", isRight: true },
        { id: 1248, content: "Прозрачный", isRight: false },
      ],
    },
    {
      id: 313,
      content: "Как получить начальный элемент\r\nочереди?",
      options: [
        { id: 1249, content: "С конца", isRight: false },
        { id: 1250, content: "С середины", isRight: false },
        { id: 1251, content: "С самого начала", isRight: true },
        {
          id: 1252,
          content: "Это никогда не будет принято",
          isRight: false,
        },
      ],
    },
    {
      id: 314,
      content: "В каком порядке элементы\r\nпоявляются в очереди?",
      options: [
        { id: 1253, content: "Противоположное", isRight: false },
        {
          id: 1254,
          content: "В указанной последовательности",
          isRight: true,
        },
        { id: 1255, content: "Случайный", isRight: false },
        { id: 1256, content: "Отсортировано", isRight: false },
      ],
    },
    {
      id: 315,
      content: "В каком программном обеспечении\r\nиспользуется стек?",
      options: [
        { id: 1257, content: "История браузера", isRight: true },
        { id: 1258, content: "Очереди принтеров", isRight: false },
        { id: 1259, content: "Графические алгоритмы", isRight: false },
        { id: 1260, content: "Анализ массива", isRight: false },
      ],
    },
    {
      id: 316,
      content: "Где очередь используется больше\r\nвсего?",
      options: [
        { id: 1261, content: "Рекурсия", isRight: false },
        { id: 1262, content: "Операционная система", isRight: true },
        { id: 1263, content: "История браузера", isRight: false },
        { id: 1264, content: "Очереди принтеров", isRight: true },
      ],
    },
    {
      id: 317,
      content: "На какой структуре данных\r\nоснованы рекурсивные алгоритмы?",
      options: [
        { id: 1265, content: "Очередь", isRight: false },
        { id: 1266, content: "Куча", isRight: true },
        { id: 1267, content: "Файловая система", isRight: false },
        { id: 1268, content: "Неправда", isRight: false },
      ],
    },
    {
      id: 318,
      content: "В чем разница между очередью и\r\nстеком?",
      options: [
        { id: 1269, content: "Правила памяти", isRight: false },
        { id: 1270, content: "Типы данных", isRight: false },
        { id: 1271, content: "Принципы работы", isRight: true },
        { id: 1272, content: "Количество элементов", isRight: false },
      ],
    },
    {
      id: 319,
      content: "Какой конец используется для\r\nдобавления данных в Dek?",
      options: [
        { id: 1273, content: "Только раньше", isRight: false },
        { id: 1274, content: "Только сзади", isRight: false },
        { id: 1275, content: "С обеих сторон", isRight: true },
        { id: 1276, content: "Ниоткуда", isRight: false },
      ],
    },
    {
      id: 320,
      content: "Как полное название колоды?",
      options: [
        { id: 1277, content: "Двусторонняя очередь", isRight: true },
        { id: 1278, content: "Динамическая очередь", isRight: false },
        { id: 1279, content: "Очередь обмена данными", isRight: false },
        { id: 1280, content: "Прямая очередь", isRight: false },
      ],
    },
    {
      id: 321,
      content: "Каковы функции для удаления\r\nэлементов в декабре?",
      options: [
        { id: 1281, content: "ПопФронт, ПопБэк", isRight: true },
        { id: 1282, content: "PushFront, PushBack", isRight: false },
        {
          id: 1283,
          content: "Удаление из очереди спереди,\r\nудаление из очереди назад",
          isRight: false,
        },
        { id: 1284, content: "Вставить, удалить", isRight: false },
      ],
    },
    {
      id: 322,
      content: "В каких программных приложениях\r\nобычно используется Dek?",
      options: [
        { id: 1285, content: "В анализе текста", isRight: true },
        {
          id: 1286,
          content: "Данные находятся в сжатом\r\nсостоянии",
          isRight: false,
        },
        { id: 1287, content: "В рекурсиях", isRight: false },
        { id: 1288, content: "Все правильно", isRight: true },
      ],
    },
    {
      id: 323,
      content: "Какая функция используется для\r\nвставки элементов в dec?",
      options: [
        { id: 1289, content: "PushFront, PushBack", isRight: true },
        { id: 1290, content: "EnqueueFront, EnqueueBack", isRight: false },
        { id: 1291, content: "Аддфронт, адбак", isRight: false },
        { id: 1292, content: "Вставкаслева, Вставкаправа", isRight: false },
      ],
    },
    {
      id: 324,
      content: "Чем колода отличается от обычной\r\nочереди?",
      options: [
        { id: 1293, content: "Работает только ФИФО", isRight: false },
        { id: 1294, content: "Один конец закрыт", isRight: false },
        { id: 1295, content: "Оба конца открыты", isRight: true },
        {
          id: 1296,
          content: "Каждая функция выполняется\r\nпараллельно",
          isRight: false,
        },
      ],
    },
    {
      id: 325,
      content: "Как ссылаться на элементы\r\nмассива?",
      options: [
        { id: 1297, content: "Через индекс", isRight: true },
        { id: 1298, content: "По имени элемента", isRight: false },
        { id: 1299, content: "По типу данных", isRight: false },
        { id: 1300, content: "Случайный", isRight: false },
      ],
    },
  ],
  [
    {
      id: 326,
      content: "Как обратиться к последнему\r\nэлементу массива?",
      options: [
        { id: 1301, content: "имя_массива[0]", isRight: false },
        { id: 1302, content: "имя_массива[n-1]", isRight: true },
        { id: 1303, content: "имя_массива[n]", isRight: false },
        { id: 1304, content: "имя_массива[-1]", isRight: false },
      ],
    },
    {
      id: 327,
      content: "Каков эффективный способ найти\r\nэлемент из массива?",
      options: [
        { id: 1305, content: "Линейный поиск", isRight: true },
        { id: 1306, content: "Бинарный поиск", isRight: true },
        { id: 1307, content: "Случайный поиск", isRight: false },
        { id: 1308, content: "Все", isRight: false },
      ],
    },
    {
      id: 328,
      content: "Какой синтаксис используется для\r\nобъявления массива в C++?",
      options: [
        { id: 1309, content: "интервал а[10];", isRight: true },
        { id: 1310, content: "интервал а;", isRight: false },
        { id: 1311, content: "массив<int> а;", isRight: false },
        { id: 1312, content: "новый массив();", isRight: false },
      ],
    },
    {
      id: 329,
      content: "В каком случае поиск элемента\r\nмассива занимает больше всего\r\nвремени?",
      options: [
        { id: 1313, content: "Элемент на первом месте", isRight: false },
        {
          id: 1314,
          content: "Элемент находится на последнем\r\nместе",
          isRight: true,
        },
        { id: 1315, content: "Если элемент не существует", isRight: true },
        {
          id: 1316,
          content: "Элемент находится посередине",
          isRight: false,
        },
      ],
    },
    {
      id: 330,
      content: "Какой тип массива является\r\nмассивом внутри массива?",
      options: [
        { id: 1317, content: "Динамический массив", isRight: false },
        { id: 1318, content: "Многомерный массив", isRight: true },
        { id: 1319, content: "Статический массив", isRight: false },
        { id: 1320, content: "Выделенный массив", isRight: false },
      ],
    },
    {
      id: 331,
      content: "Когда образуется ориентированный\r\nграф?",
      options: [
        { id: 1321, content: "Если узлы идентичны", isRight: false },
        {
          id: 1322,
          content: "Если есть направление в сетях",
          isRight: true,
        },
        { id: 1323, content: "Если сети идентичны", isRight: false },
        { id: 1324, content: "Если узлы непрерывны", isRight: false },
      ],
    },
    {
      id: 332,
      content: "Для чего используется алгоритм\r\nДейкстры?",
      options: [
        {
          id: 1325,
          content: "Находим минимальное\r\nрасстояние",
          isRight: true,
        },
        { id: 1326, content: "Определение глубины", isRight: false },
        { id: 1327, content: "Объединить узлы", isRight: false },
        { id: 1328, content: "Создание дерева", isRight: false },
      ],
    },
    {
      id: 333,
      content: "Что такое цикл в графе?",
      options: [
        { id: 1329, content: "Тупик", isRight: false },
        { id: 1330, content: "Дорога без сетей", isRight: false },
        {
          id: 1331,
          content: "Путь с одинаковым началом и\r\nконцом",
          isRight: true,
        },
        { id: 1332, content: "Всегда доступный способ", isRight: false },
      ],
    },
    {
      id: 334,
      content: "Какие задачи решаются с помощью\r\nграфиков?",
      options: [
        { id: 1333, content: "Сетевой анализ", isRight: true },
        { id: 1334, content: "Оптимизация пути", isRight: true },
        { id: 1335, content: "Управление ресурсами", isRight: true },
        { id: 1336, content: "Все правильно", isRight: true },
      ],
    },
    {
      id: 335,
      content: "В какой библиотеке находится\r\nвектор на C++?",
      options: [
        { id: 1337, content: "<iostream>", isRight: false },
        { id: 1338, content: "<строка>", isRight: false },
        { id: 1339, content: "<вектор>", isRight: true },
        { id: 1340, content: "<массив>", isRight: false },
      ],
    },
    {
      id: 336,
      content: "Какой метод используется для\r\nдобавления элемента в вектор?",
      options: [
        { id: 1341, content: "push_back()", isRight: true },
        { id: 1342, content: "add_element()", isRight: false },
        { id: 1343, content: "вставлять()", isRight: false },
        { id: 1344, content: "добавить()", isRight: false },
      ],
    },
    {
      id: 337,
      content: "Какой метод используется для\r\nопределения размера вектора?",
      options: [
        { id: 1345, content: "размер()", isRight: true },
        { id: 1346, content: "длина()", isRight: false },
        { id: 1347, content: "емкость()", isRight: false },
        { id: 1348, content: "изменить размер()", isRight: false },
      ],
    },
    {
      id: 338,
      content: "Какой метод используется для\r\nопределения максимального\r\nразмера памяти вектора?",
      options: [
        { id: 1349, content: "размер()", isRight: false },
        { id: 1350, content: "max_size()", isRight: true },
        { id: 1351, content: "емкость()", isRight: false },
        { id: 1352, content: "изменить размер()", isRight: false },
      ],
    },
    {
      id: 339,
      content: "Что используется для получения\r\nпоследнего элемента вектора?",
      options: [
        { id: 1353, content: "назад()", isRight: true },
        { id: 1354, content: "передний()", isRight: false },
        { id: 1355, content: "pop_back()", isRight: false },
        { id: 1356, content: "конец()", isRight: false },
      ],
    },
    {
      id: 340,
      content: "Какой метод используется для\r\nудаления последнего элемента\r\nвектора?",
      options: [
        { id: 1357, content: "стереть()", isRight: false },
        { id: 1358, content: "удалять()", isRight: false },
        { id: 1359, content: "pop_back()", isRight: true },
        { id: 1360, content: "прозрачный()", isRight: false },
      ],
    },
    {
      id: 341,
      content: "Как обратиться к элементу вектора\r\nпо индексу?",
      options: [
        { id: 1361, content: "в (индекс)", isRight: true },
        { id: 1362, content: "получить (индекс)", isRight: false },
        { id: 1363, content: "индекс()", isRight: false },
        { id: 1364, content: "найти (индекс)", isRight: false },
      ],
    },
    {
      id: 342,
      content: "Какой метод используется для\r\nизменения объема памяти\r\nвектора?",
      options: [
        { id: 1365, content: "изменить размер()", isRight: false },
        { id: 1366, content: "бронировать()", isRight: true },
        { id: 1367, content: "сжимать_to_fit()", isRight: false },
        { id: 1368, content: "прозрачный()", isRight: false },
      ],
    },
    {
      id: 343,
      content: "Какой метод используется для\r\nудаления всех элементов вектора?",
      options: [
        { id: 1369, content: "прозрачный()", isRight: true },
        { id: 1370, content: "стереть_все()", isRight: false },
        { id: 1371, content: "удалить_все()", isRight: false },
        { id: 1372, content: "перезагрузить()", isRight: false },
      ],
    },
    {
      id: 344,
      content: "Как использовать итераторы в\r\nвекторе?",
      options: [
        { id: 1373, content: "начало(), конец()", isRight: true },
        { id: 1374, content: "первый(), последний()", isRight: false },
        {
          id: 1375,
          content: "iterator_start(), iterator_end()",
          isRight: false,
        },
        { id: 1376, content: "начало(), завершение()", isRight: false },
      ],
    },
    {
      id: 345,
      content: "Какой метод используется для\r\nсоединения вектора с другим\r\nвектором?",
      options: [
        { id: 1377, content: "добавить()", isRight: false },
        { id: 1378, content: "вставлять()", isRight: true },
        { id: 1379, content: "назначать()", isRight: true },
        { id: 1380, content: "Ручным циклом", isRight: true },
      ],
    },
    {
      id: 346,
      content: "станд::вектор Что используется для\r\nпроверки того, пуст ли at?",
      options: [
        { id: 1381, content: "пустой()", isRight: true },
        { id: 1382, content: "is_empty()", isRight: false },
        { id: 1383, content: "прозрачный()", isRight: false },
        { id: 1384, content: "размер() == 0", isRight: true },
      ],
    },
    {
      id: 347,
      content: "Какая функция используется для\r\nсортировки вектора?",
      options: [
        { id: 1385, content: "сортировка()", isRight: false },
        {
          id: 1386,
          content: "сортировать (начало, конец)",
          isRight: true,
        },
        { id: 1387, content: "сортировать (начать)", isRight: false },
        { id: 1388, content: "сортировка_все()", isRight: false },
      ],
    },
    {
      id: 348,
      content: "Как инвертировать элементы\r\nвнутри вектора?",
      options: [
        { id: 1389, content: "обеспечить регресс()", isRight: true },
        { id: 1390, content: "rbegin(), ренд()", isRight: false },
        { id: 1391, content: "менять()", isRight: false },
        { id: 1392, content: "прозрачный()", isRight: false },
      ],
    },
  ],
];
