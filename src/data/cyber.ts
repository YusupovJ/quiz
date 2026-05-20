import { IQuestion } from "@/types";

export const cyber: IQuestion[][] = [
  // === Билет 1 ===
  [
    {
      id: 1,
      content: "Кибербезопасность – это…",
      options: [
        {
          id: 1,
          content: "Реализация мер по защите систем, сетей и программных приложений от цифровых атак.",
          isRight: true,
        },
        {
          id: 2,
          content: "Защита сетей системы от вредоносных вирусов и файлов.",
          isRight: false,
        },
        {
          id: 3,
          content: "Защита локальных и глобальных системных сетей от вирусов и вредоносных файлов.",
          isRight: false,
        },
        {
          id: 4,
          content: "Защита и сохранение программных приложений.",
          isRight: false,
        },
      ],
    },
    {
      id: 2,
      content: "Виды угроз кибербезопасности – это…",
      options: [
        {
          id: 5,
          content: "Вредоносные программы, зловредные приложения.",
          isRight: true,
        },
        {
          id: 6,
          content: "Секретные программы, вредоносные программы.",
          isRight: false,
        },
        {
          id: 7,
          content: "Социальные программы, агрессивные программы.",
          isRight: false,
        },
        {
          id: 8,
          content: "Сетевые программы, конфиденциальные программы.",
          isRight: false,
        },
      ],
    },
    {
      id: 3,
      content: "Найдите программы, направленные на несанкционированный доступ к компьютерной системе и её взлом.",
      options: [
        {
          id: 9,
          content: "Вредоносные программы.",
          isRight: true,
        },
        {
          id: 10,
          content: "Агрессивные программы.",
          isRight: false,
        },
        {
          id: 11,
          content: "Социальные программы.",
          isRight: false,
        },
        {
          id: 12,
          content: "Конфиденциальные программы.",
          isRight: false,
        },
      ],
    },
    {
      id: 4,
      content: "… это рассылка поддельных электронных писем, которые выглядят как сообщения от надёжного источника.",
      options: [
        {
          id: 13,
          content: "Fishing",
          isRight: true,
        },
        {
          id: 14,
          content: "Control.",
          isRight: false,
        },
        {
          id: 15,
          content: "Defense.",
          isRight: false,
        },
        {
          id: 16,
          content: "Denial.",
          isRight: false,
        },
      ],
    },
    {
      id: 5,
      content: "Что такое DOS?",
      options: [
        {
          id: 17,
          content: "Прекращение обслуживания, то есть хакерская атака на вычислительную систему.",
          isRight: true,
        },
        {
          id: 18,
          content: "Запуск обслуживания, то есть включение вычислительной системы.",
          isRight: false,
        },
        {
          id: 19,
          content: "Повышение качества обслуживания, то есть предоставление услуг высокого качества.",
          isRight: false,
        },
        {
          id: 20,
          content: "Обеспечение безопасности обслуживания, то есть защита вычислительных систем от хакерских атак.",
          isRight: false,
        },
      ],
    },
    {
      id: 6,
      content: "Если атака осуществляется одновременно большим количеством компьютеров…",
      options: [
        {
          id: 21,
          content: "DDoS-атака.",
          isRight: true,
        },
        {
          id: 22,
          content: "Атака DOS.",
          isRight: false,
        },
        {
          id: 23,
          content: "Глобальная атака.",
          isRight: false,
        },
        {
          id: 24,
          content: "Локальная атака.",
          isRight: false,
        },
      ],
    },
    {
      id: 7,
      content: "Что такое DDOS?",
      options: [
        {
          id: 25,
          content: "Distributed Denial of Service (Распределённый отказ в обслуживании).",
          isRight: true,
        },
        {
          id: 26,
          content: "Denial of Service (отказ в обслуживании).",
          isRight: false,
        },
        {
          id: 27,
          content: "Distributed of Service (распределённый отказ в обслуживании).",
          isRight: false,
        },
        {
          id: 28,
          content: "Distributed Union of Service (распределённый союз обслуживания).",
          isRight: false,
        },
      ],
    },
    {
      id: 8,
      content: "Найдите полный и точный ответ на причины применения DDoS-атак.",
      options: [
        {
          id: 29,
          content: "Личная неприязнь, развлечение, недобросовестная конкуренция, шантаж.",
          isRight: true,
        },
        {
          id: 30,
          content: "Личная неприязнь, развлечение, заработок денег, демонстрация возможностей.",
          isRight: false,
        },
        {
          id: 31,
          content: "Развлечение, недобросовестная конкуренция, повреждение файлов, заработок денег.",
          isRight: false,
        },
        {
          id: 32,
          content: "Недобросовестная конкуренция, шантаж.",
          isRight: false,
        },
      ],
    },
    {
      id: 9,
      content: "Сколько правил существуют для защиты от кибератак?",
      options: [
        {
          id: 33,
          content: "10 пунктов.",
          isRight: true,
        },
        {
          id: 34,
          content: "12 пунктов.",
          isRight: false,
        },
        {
          id: 35,
          content: "15 пунктов.",
          isRight: false,
        },
        {
          id: 36,
          content: "8 пунктов.",
          isRight: false,
        },
      ],
    },
    {
      id: 10,
      content: "Совокупность взаимосвязей и устойчивых отношений элементов системы – это…",
      options: [
        {
          id: 37,
          content: "Структура.",
          isRight: true,
        },
        {
          id: 38,
          content: "Информация.",
          isRight: false,
        },
        {
          id: 39,
          content: "Пространство.",
          isRight: false,
        },
        {
          id: 40,
          content: "Информационное пространство.",
          isRight: false,
        },
      ],
    },
    {
      id: 11,
      content: "Набор информации, движущийся по каналам коммуникации в информационном мире, это…",
      options: [
        {
          id: 41,
          content: "Информационный поток.",
          isRight: true,
        },
        {
          id: 42,
          content: "Информационное пространство.",
          isRight: false,
        },
        {
          id: 43,
          content: "Структура.",
          isRight: false,
        },
        {
          id: 44,
          content: "Простая информация.",
          isRight: false,
        },
      ],
    },
    {
      id: 12,
      content: "Совокупность специалистов, информационных ресурсов, документов и технологий – это…",
      options: [
        {
          id: 45,
          content: "Информационная система.",
          isRight: true,
        },
        {
          id: 46,
          content: "Информационный поток.",
          isRight: false,
        },
        {
          id: 47,
          content: "Информационное пространство.",
          isRight: false,
        },
        {
          id: 48,
          content: "Структура.",
          isRight: false,
        },
      ],
    },
    {
      id: 13,
      content: "Система, основанная на элементах, не противоречащих друг другу, это…",
      options: [
        {
          id: 49,
          content: "Простая информационная система.",
          isRight: true,
        },
        {
          id: 50,
          content: "Сложная информационная система.",
          isRight: false,
        },
        {
          id: 51,
          content: "Структурированная информационная система.",
          isRight: false,
        },
        {
          id: 52,
          content: "Информационная система на основе пространства.",
          isRight: false,
        },
      ],
    },
    {
      id: 14,
      content:
        "Что такое среда, обеспечивающая сбор, передачу, хранение, автоматическую обработку и распространение информации в обществе?",
      options: [
        {
          id: 53,
          content: "Информационная инфраструктура.",
          isRight: true,
        },
        {
          id: 54,
          content: "Сложная информационная система.",
          isRight: false,
        },
        {
          id: 55,
          content: "Простая информационная система.",
          isRight: false,
        },
        {
          id: 56,
          content: "Структурированная информация.",
          isRight: false,
        },
      ],
    },
    {
      id: 15,
      content: "Что такое MAC-адрес?",
      options: [
        {
          id: 57,
          content: "Сетевой адрес компьютерного устройства.",
          isRight: true,
        },
        {
          id: 58,
          content: "Интернет-адрес компьютерного устройства.",
          isRight: false,
        },
        {
          id: 59,
          content: "Wi-Fi адрес компьютерного устройства.",
          isRight: false,
        },
        {
          id: 60,
          content: "Администраторский адрес компьютерного устройства.",
          isRight: false,
        },
      ],
    },
    {
      id: 16,
      content: "Найдите передачу MAC-адреса.",
      options: [
        {
          id: 61,
          content: "Media Access Control (Управление доступом к среде).",
          isRight: true,
        },
        {
          id: 62,
          content: "Media of Control.",
          isRight: false,
        },
        {
          id: 63,
          content: "Media of Access.",
          isRight: false,
        },
        {
          id: 64,
          content: "Media of Service.",
          isRight: false,
        },
      ],
    },
    {
      id: 17,
      content: "Что такое MAC-адрес?",
      options: [
        {
          id: 65,
          content: "Физический адрес.",
          isRight: true,
        },
        {
          id: 66,
          content: "Сетевой адрес.",
          isRight: false,
        },
        {
          id: 67,
          content: "Интернет-адрес.",
          isRight: false,
        },
        {
          id: 68,
          content: "Почтовый адрес.",
          isRight: false,
        },
      ],
    },
    {
      id: 18,
      content:
        "Уникальный идентификатор, присваиваемый активному устройству или его интерфейсу в компьютерной сети, это…",
      options: [
        {
          id: 69,
          content: "Ethernet.",
          isRight: true,
        },
        {
          id: 70,
          content: "Интернет.",
          isRight: false,
        },
        {
          id: 71,
          content: "TCP.",
          isRight: false,
        },
        {
          id: 72,
          content: "IP.",
          isRight: false,
        },
      ],
    },
    {
      id: 19,
      content: "В каком году был разработан TCP/IP?",
      options: [
        {
          id: 73,
          content: "1970 год.",
          isRight: true,
        },
        {
          id: 74,
          content: "1975 год.",
          isRight: false,
        },
        {
          id: 75,
          content: "1982 год.",
          isRight: false,
        },
        {
          id: 76,
          content: "1969 год.",
          isRight: false,
        },
      ],
    },
    {
      id: 20,
      content: "Какова цель разработки TCP/IP?",
      options: [
        {
          id: 77,
          content: "Обеспечение возможности обмена данными.",
          isRight: true,
        },
        {
          id: 78,
          content: "Расширение памяти компьютера.",
          isRight: false,
        },
        {
          id: 79,
          content: "Увеличение скорости интернета.",
          isRight: false,
        },
        {
          id: 80,
          content: "Увеличение возможностей обработки информации.",
          isRight: false,
        },
      ],
    },
    {
      id: 21,
      content: "Набор соглашений логического уровня, обеспечивающих обмен данными между различными приложениями, это…",
      options: [
        {
          id: 81,
          content: "Протокол передачи данных.",
          isRight: true,
        },
        {
          id: 82,
          content: "Протокол получения данных.",
          isRight: false,
        },
        {
          id: 83,
          content: "Протокол обработки данных.",
          isRight: false,
        },
        {
          id: 84,
          content: "Протокол удаления данных.",
          isRight: false,
        },
      ],
    },
    {
      id: 22,
      content: "Набор правил и действий, позволяющий установить связь между компьютерами, подключёнными к сети, это…",
      options: [
        {
          id: 85,
          content: "Сетевой протокол.",
          isRight: true,
        },
        {
          id: 86,
          content: "Протокол передачи.",
          isRight: false,
        },
        {
          id: 87,
          content: "Протокол приёма данных.",
          isRight: false,
        },
        {
          id: 88,
          content: "Протокол передачи.",
          isRight: false,
        },
      ],
    },
    {
      id: 23,
      content: "Сколько уровней включает в себя TCP/IP?",
      options: [
        {
          id: 89,
          content: "4 уровня.",
          isRight: true,
        },
        {
          id: 90,
          content: "2 уровня.",
          isRight: false,
        },
        {
          id: 91,
          content: "5 уровней.",
          isRight: false,
        },
        {
          id: 92,
          content: "3 уровня.",
          isRight: false,
        },
      ],
    },
    {
      id: 24,
      content: "Найдите строку с протоколом электронной почты.",
      options: [
        {
          id: 93,
          content: "A и B.",
          isRight: true,
        },
        {
          id: 94,
          content: "SMTP.",
          isRight: false,
        },
        {
          id: 95,
          content: "FTP.",
          isRight: false,
        },
        {
          id: 96,
          content: "POP3.",
          isRight: false,
        },
      ],
    },
    {
      id: 25,
      content: "Найдите строку с протоколом передачи электронных писем.",
      options: [
        {
          id: 97,
          content: "SMTP.",
          isRight: true,
        },
        {
          id: 98,
          content: "FTP.",
          isRight: false,
        },
        {
          id: 99,
          content: "OSI.",
          isRight: false,
        },
        {
          id: 100,
          content: "POP3.",
          isRight: false,
        },
      ],
    },
  ],
  // === Билет 2 ===
  [
    {
      id: 26,
      content: "Что такое протокол HTTP?",
      options: [
        {
          id: 101,
          content: "Обмен гипертекстовой информацией.",
          isRight: true,
        },
        {
          id: 102,
          content: "Передача сообщений электронной почты.",
          isRight: false,
        },
        {
          id: 103,
          content: "Передача файлов.",
          isRight: false,
        },
        {
          id: 104,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 27,
      content: "Укажите протокол передачи файлов.",
      options: [
        {
          id: 105,
          content: "FTP.",
          isRight: true,
        },
        {
          id: 106,
          content: "HTTP.",
          isRight: false,
        },
        {
          id: 107,
          content: "OSI.",
          isRight: false,
        },
        {
          id: 108,
          content: "SMTP.",
          isRight: false,
        },
      ],
    },
    {
      id: 28,
      content: "Какой протокол управляет передачей данных?",
      options: [
        {
          id: 109,
          content: "TCP.",
          isRight: true,
        },
        {
          id: 110,
          content: "HTTP.",
          isRight: false,
        },
        {
          id: 111,
          content: "IP.",
          isRight: false,
        },
        {
          id: 112,
          content: "DNS.",
          isRight: false,
        },
      ],
    },
    {
      id: 29,
      content: "Найдите расшифровку IP.",
      options: [
        {
          id: 113,
          content: "Интернет-протокол.",
          isRight: true,
        },
        {
          id: 114,
          content: "Интернет-система.",
          isRight: false,
        },
        {
          id: 115,
          content: "Протокол передачи данных.",
          isRight: false,
        },
        {
          id: 116,
          content: "Открытый интернет.",
          isRight: false,
        },
      ],
    },
    {
      id: 30,
      content: "Что такое DNS?",
      options: [
        {
          id: 117,
          content: "Система доменных имён.",
          isRight: true,
        },
        {
          id: 118,
          content: "Адресное именование.",
          isRight: false,
        },
        {
          id: 119,
          content: "Передача данных.",
          isRight: false,
        },
        {
          id: 120,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 31,
      content: "Определите протокол передачи информации о маршрутах.",
      options: [
        {
          id: 121,
          content: "RIP.",
          isRight: true,
        },
        {
          id: 122,
          content: "DNS.",
          isRight: false,
        },
        {
          id: 123,
          content: "IGP.",
          isRight: false,
        },
        {
          id: 124,
          content: "EGP.",
          isRight: false,
        },
      ],
    },
    {
      id: 32,
      content: "Что такое OSPF?",
      options: [
        {
          id: 125,
          content: "Сначала открыть самый короткий путь.",
          isRight: true,
        },
        {
          id: 126,
          content: "Наиболее оптимальный маршрут до адреса.",
          isRight: false,
        },
        {
          id: 127,
          content: "Передача данных.",
          isRight: false,
        },
        {
          id: 128,
          content: "Доменные имена.",
          isRight: false,
        },
      ],
    },
    {
      id: 33,
      content: "Что такое IGP?",
      options: [
        {
          id: 129,
          content: "Внутренний протокол маршрутизации.",
          isRight: true,
        },
        {
          id: 130,
          content: "Внешний протокол маршрутизации.",
          isRight: false,
        },
        {
          id: 131,
          content: "Короткий маршрут.",
          isRight: false,
        },
        {
          id: 132,
          content: "Информация о маршрутах.",
          isRight: false,
        },
      ],
    },
    {
      id: 34,
      content: "Укажите строку с внешним маршрутизирующим протоколом.",
      options: [
        {
          id: 133,
          content: "EGP.",
          isRight: true,
        },
        {
          id: 134,
          content: "IGP.",
          isRight: false,
        },
        {
          id: 135,
          content: "BGP.",
          isRight: false,
        },
        {
          id: 136,
          content: "RIP.",
          isRight: false,
        },
      ],
    },
    {
      id: 35,
      content: "Найдите протокол пограничных маршрутизаторов.",
      options: [
        {
          id: 137,
          content: "BGP.",
          isRight: true,
        },
        {
          id: 138,
          content: "IGP.",
          isRight: false,
        },
        {
          id: 139,
          content: "EGP.",
          isRight: false,
        },
        {
          id: 140,
          content: "RID.",
          isRight: false,
        },
      ],
    },
    {
      id: 36,
      content: 'Слово "криптология" взято из какого языка?',
      options: [
        {
          id: 141,
          content: "Латинский язык.",
          isRight: true,
        },
        {
          id: 142,
          content: "Греческий язык.",
          isRight: false,
        },
        {
          id: 143,
          content: "Персидский язык.",
          isRight: false,
        },
        {
          id: 144,
          content: "Арабский язык.",
          isRight: false,
        },
      ],
    },
    {
      id: 37,
      content: 'Какое значение имеет слово "криптология" в латыни?',
      options: [
        {
          id: 145,
          content: "Скрытое слово.",
          isRight: true,
        },
        {
          id: 146,
          content: "Ключевое слово.",
          isRight: false,
        },
        {
          id: 147,
          content: "Автономное слово.",
          isRight: false,
        },
        {
          id: 148,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 38,
      content: "Что называется процессом шифрования исходной информации с использованием кодов или шифров?",
      options: [
        {
          id: 149,
          content: "Криптография.",
          isRight: true,
        },
        {
          id: 150,
          content: "Криптоанализ.",
          isRight: false,
        },
        {
          id: 151,
          content: "Криптос.",
          isRight: false,
        },
        {
          id: 152,
          content: "Шифрование.",
          isRight: false,
        },
      ],
    },
    {
      id: 39,
      content: "Что такое криптоанализ?",
      options: [
        {
          id: 153,
          content: "Раскрытие кода или шифра.",
          isRight: true,
        },
        {
          id: 154,
          content: "Сокрытие кода или шифра.",
          isRight: false,
        },
        {
          id: 155,
          content: "Шифрование слов.",
          isRight: false,
        },
        {
          id: 156,
          content: "B и C.",
          isRight: false,
        },
      ],
    },
    {
      id: 40,
      content: "Что называется преобразованием открытого текста в криптограмму?",
      options: [
        {
          id: 157,
          content: "Шифр.",
          isRight: true,
        },
        {
          id: 158,
          content: "Маршрут.",
          isRight: false,
        },
        {
          id: 159,
          content: "Криптоанализ.",
          isRight: false,
        },
        {
          id: 160,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 41,
      content: "Что такое ключ?",
      options: [
        {
          id: 161,
          content: "Алгоритм преобразования исходного текста в зашифрованный вид.",
          isRight: true,
        },
        {
          id: 162,
          content: "Алгоритм преобразования зашифрованного текста в исходный.",
          isRight: false,
        },
        {
          id: 163,
          content: "Алгоритм повторной выдачи исходного текста.",
          isRight: false,
        },
        {
          id: 164,
          content: "Алгоритм удаления скрытого текста.",
          isRight: false,
        },
      ],
    },
    {
      id: 42,
      content: "Где впервые использовались шифры?",
      options: [
        {
          id: 165,
          content: "Все ответы верны.",
          isRight: true,
        },
        {
          id: 166,
          content: "Греция, Египет.",
          isRight: false,
        },
        {
          id: 167,
          content: "Греция, Китай.",
          isRight: false,
        },
        {
          id: 168,
          content: "Рим, Спарта.",
          isRight: false,
        },
      ],
    },
    {
      id: 43,
      content: "На сколько периодов разделяется развитие криптологии?",
      options: [
        {
          id: 169,
          content: "3 этапа.",
          isRight: true,
        },
        {
          id: 170,
          content: "2 этапа.",
          isRight: false,
        },
        {
          id: 171,
          content: "4 этапа.",
          isRight: false,
        },
        {
          id: 172,
          content: "5 этапов.",
          isRight: false,
        },
      ],
    },
    {
      id: 44,
      content: "Какому времени соответствует метод ручного шифрования писем?",
      options: [
        {
          id: 173,
          content: "До 1949 года.",
          isRight: true,
        },
        {
          id: 174,
          content: "До 1959 года.",
          isRight: false,
        },
        {
          id: 175,
          content: "До 1947 года.",
          isRight: false,
        },
        {
          id: 176,
          content: "До 1969 года.",
          isRight: false,
        },
      ],
    },
    {
      id: 45,
      content: "… это классический период криптологии.",
      options: [
        {
          id: 177,
          content: "1949-1976 годы.",
          isRight: true,
        },
        {
          id: 178,
          content: "1959-1976 годы.",
          isRight: false,
        },
        {
          id: 179,
          content: "1948-1975 годы.",
          isRight: false,
        },
        {
          id: 180,
          content: "1939–1966 годы.",
          isRight: false,
        },
      ],
    },
    {
      id: 46,
      content: "Какому периоду соответствует развитие криптологии с 1949 по 1976 годы?",
      options: [
        {
          id: 181,
          content: "2 этап.",
          isRight: true,
        },
        {
          id: 182,
          content: "1 этап.",
          isRight: false,
        },
        {
          id: 183,
          content: "3 этап.",
          isRight: false,
        },
        {
          id: 184,
          content: "4 этап.",
          isRight: false,
        },
      ],
    },
    {
      id: 47,
      content: "Что называется симметричным шифрованием?",
      options: [
        {
          id: 185,
          content: "Один ключ используется для шифрования и дешифрования.",
          isRight: true,
        },
        {
          id: 186,
          content: "Для шифрования и дешифрования используются два ключа.",
          isRight: false,
        },
        {
          id: 187,
          content: "Для шифрования и дешифрования используются три ключа.",
          isRight: false,
        },
        {
          id: 188,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 48,
      content:
        "Использование одного секретного ключа для шифрования и дешифрования информации в криптологии соответствует какому периоду?",
      options: [
        {
          id: 189,
          content: "2 этап.",
          isRight: true,
        },
        {
          id: 190,
          content: "1 этап.",
          isRight: false,
        },
        {
          id: 191,
          content: "4 этап.",
          isRight: false,
        },
        {
          id: 192,
          content: "A и B.",
          isRight: false,
        },
      ],
    },
    {
      id: 49,
      content: "Укажите строку, правильно описывающую асимметричное шифрование.",
      options: [
        {
          id: 193,
          content: "Правильного ответа нет.",
          isRight: true,
        },
        {
          id: 194,
          content: "k1=k2.",
          isRight: false,
        },
        {
          id: 195,
          content: "k1<k2.",
          isRight: false,
        },
        {
          id: 196,
          content: "k1 > k2.",
          isRight: false,
        },
      ],
    },
    {
      id: 50,
      content: "Периоды развития криптологии соответствуют каким годам?",
      options: [
        {
          id: 197,
          content: "С 1976 года до настоящего времени.",
          isRight: true,
        },
        {
          id: 198,
          content: "С 1977 года до настоящего времени.",
          isRight: false,
        },
        {
          id: 199,
          content: "1949-1976 годы.",
          isRight: false,
        },
        {
          id: 200,
          content: "1959–1976 годы.",
          isRight: false,
        },
      ],
    },
  ],
  // === Билет 3 ===
  [
    {
      id: 51,
      content:
        "Процесс, противоположный шифрованию, при котором зашифрованное сообщение восстанавливается в исходное состояние на основе определённых правил, называется…",
      options: [
        {
          id: 201,
          content: "Дешифрование.",
          isRight: true,
        },
        {
          id: 202,
          content: "Шифрование.",
          isRight: false,
        },
        {
          id: 203,
          content: "Копирование.",
          isRight: false,
        },
        {
          id: 204,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 52,
      content: "g(B)=A – это какая схема?",
      options: [
        {
          id: 205,
          content: "Дешифрование.",
          isRight: true,
        },
        {
          id: 206,
          content: "Шифрование.",
          isRight: false,
        },
        {
          id: 207,
          content: "Копирование.",
          isRight: false,
        },
        {
          id: 208,
          content: "Симметричное шифрование.",
          isRight: false,
        },
      ],
    },
    {
      id: 53,
      content: "Укажите схему шифрования.",
      options: [
        {
          id: 209,
          content: "f(A)=B.",
          isRight: true,
        },
        {
          id: 210,
          content: "g(B)=A.",
          isRight: false,
        },
        {
          id: 211,
          content: "f(A)=B/2.",
          isRight: false,
        },
        {
          id: 212,
          content: "Y = k(X).",
          isRight: false,
        },
      ],
    },
    {
      id: 54,
      content: "Что такое DES?",
      options: [
        {
          id: 213,
          content: "Алгоритм симметричного шифрования.",
          isRight: true,
        },
        {
          id: 214,
          content: "Алгоритм асимметричного шифрования.",
          isRight: false,
        },
        {
          id: 215,
          content: "Алгоритм шифрования.",
          isRight: false,
        },
        {
          id: 216,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 55,
      content: "Какой алгоритм является продолжением DES?",
      options: [
        {
          id: 217,
          content: "3DES.",
          isRight: true,
        },
        {
          id: 218,
          content: "AES.",
          isRight: false,
        },
        {
          id: 219,
          content: "RID.",
          isRight: false,
        },
        {
          id: 220,
          content: "2DES.",
          isRight: false,
        },
      ],
    },
    {
      id: 56,
      content: "Каков размер блока у DES?",
      options: [
        {
          id: 221,
          content: "64-бит.",
          isRight: true,
        },
        {
          id: 222,
          content: "128-бит.",
          isRight: false,
        },
        {
          id: 223,
          content: "32-бита.",
          isRight: false,
        },
        {
          id: 224,
          content: "16-бит.",
          isRight: false,
        },
      ],
    },
    {
      id: 57,
      content: "Каков размер блока у симметричных блочных алгоритмов шифрования?",
      options: [
        {
          id: 225,
          content: "128-192-256 бит.",
          isRight: true,
        },
        {
          id: 226,
          content: "64-128-256 бит.",
          isRight: false,
        },
        {
          id: 227,
          content: "32-64-128 бит.",
          isRight: false,
        },
        {
          id: 228,
          content: "128-196-256 бит.",
          isRight: false,
        },
      ],
    },
    {
      id: 58,
      content: "Что такое Blowfish?",
      options: [
        {
          id: 229,
          content: "Криптографический алгоритм.",
          isRight: true,
        },
        {
          id: 230,
          content: "Симметричное блочное шифрование.",
          isRight: false,
        },
        {
          id: 231,
          content: "Асимметричное шифрование.",
          isRight: false,
        },
        {
          id: 232,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 59,
      content: "В каком году был разработан Blowfish?",
      options: [
        {
          id: 233,
          content: "1993 год.",
          isRight: true,
        },
        {
          id: 234,
          content: "1992 год.",
          isRight: false,
        },
        {
          id: 235,
          content: "1994 год.",
          isRight: false,
        },
        {
          id: 236,
          content: "1991 год.",
          isRight: false,
        },
      ],
    },
    {
      id: 60,
      content: "Кем был разработан Blowfish?",
      options: [
        {
          id: 237,
          content: "Брюс Шнайер.",
          isRight: true,
        },
        {
          id: 238,
          content: "Майк Оливер.",
          isRight: false,
        },
        {
          id: 239,
          content: "Бренд Хард.",
          isRight: false,
        },
        {
          id: 240,
          content: "Майкл Шрегер.",
          isRight: false,
        },
      ],
    },
    {
      id: 61,
      content: "Каков размер блока у Blowfish?",
      options: [
        {
          id: 241,
          content: "64 бита.",
          isRight: true,
        },
        {
          id: 242,
          content: "16-бит.",
          isRight: false,
        },
        {
          id: 243,
          content: "60-бит.",
          isRight: false,
        },
        {
          id: 244,
          content: "8-бит.",
          isRight: false,
        },
      ],
    },
    {
      id: 62,
      content:
        'В 1975 году Джерри Залсе и Майкл Шредер в своей статье "Защита информации в компьютерных системах" предложили разделить нарушения безопасности на сколько категорий?',
      options: [
        {
          id: 245,
          content: "3 этапа.",
          isRight: true,
        },
        {
          id: 246,
          content: "2 этапа.",
          isRight: false,
        },
        {
          id: 247,
          content: "5 пунктов.",
          isRight: false,
        },
        {
          id: 248,
          content: "4 уровня.",
          isRight: false,
        },
      ],
    },
    {
      id: 63,
      content: "Конфиденциальность – это…",
      options: [
        {
          id: 249,
          content:
            "Зарегистрированный пользователь обращается только к необходимой информации в рамках своих должностных обязанностей.",
          isRight: true,
        },
        {
          id: 250,
          content: "Открытость для запросов зарегистрированных субъектов.",
          isRight: false,
        },
        {
          id: 251,
          content: "Закрытость данных для незарегистрированных и зарегистрированных лиц.",
          isRight: false,
        },
        {
          id: 252,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 64,
      content:
        "Принцип, согласно которому доступ к информации для незарегистрированных лиц разрешён только при необходимости, называется…",
      options: [
        {
          id: 253,
          content: "Доступность.",
          isRight: true,
        },
        {
          id: 254,
          content: "Целостность.",
          isRight: false,
        },
        {
          id: 255,
          content: "Конфиденциальность.",
          isRight: false,
        },
        {
          id: 256,
          content: "Все ответы верны.",
          isRight: false,
        },
      ],
    },
    {
      id: 65,
      content: "Что такое асимметричное шифрование?",
      options: [
        {
          id: 257,
          content: "Метод шифрования, при котором для шифрования и дешифрования используются разные ключи.",
          isRight: true,
        },
        {
          id: 258,
          content: "Метод шифрования, при котором для шифрования и дешифрования используется один ключ.",
          isRight: false,
        },
        {
          id: 259,
          content: "Метод шифрования, при котором шифрование осуществляется скрытно.",
          isRight: false,
        },
        {
          id: 260,
          content: "Метод шифрования, при котором дешифрование является открытым, а шифрование — конфиденциальным.",
          isRight: false,
        },
      ],
    },
    {
      id: 66,
      content: "Что такое открытый ключ?",
      options: [
        {
          id: 261,
          content: "Открытый ключ, который известен всем и не является секретной частью алгоритма шифрования.",
          isRight: true,
        },
        {
          id: 262,
          content: "Неизвестный всем ключ.",
          isRight: false,
        },
        {
          id: 263,
          content: "Открытый ключ, который является частью алгоритма шифрования и не является секретным.",
          isRight: false,
        },
        {
          id: 264,
          content: "Неизвестный ключ, являющийся частью секретного алгоритма шифрования.",
          isRight: false,
        },
      ],
    },
    {
      id: 67,
      content: "Что такое закрытый ключ?",
      options: [
        {
          id: 265,
          content: "Часть алгоритма, в которой хранятся секретные данные.",
          isRight: true,
        },
        {
          id: 266,
          content: "Открытый ключ, известный всем, не являющийся секретной частью алгоритма шифрования.",
          isRight: false,
        },
        {
          id: 267,
          content: "Неизвестный ключ, который не является частью секретного алгоритма шифрования.",
          isRight: false,
        },
        {
          id: 268,
          content: "Часть алгоритма, содержащая несекретные данные.",
          isRight: false,
        },
      ],
    },
    {
      id: 68,
      content: "Система RSA изначально использовалась для чего?",
      options: [
        {
          id: 269,
          content: "Шифрование и электронная подпись.",
          isRight: true,
        },
        {
          id: 270,
          content: "Шифрование.",
          isRight: false,
        },
        {
          id: 271,
          content: "Электронная подпись.",
          isRight: false,
        },
        {
          id: 272,
          content: "Закрытый ключ.",
          isRight: false,
        },
      ],
    },
    {
      id: 69,
      content: "На сколько типов делятся информационные системы?",
      options: [
        {
          id: 273,
          content: "2 элемента.",
          isRight: true,
        },
        {
          id: 274,
          content: "3 элемента.",
          isRight: false,
        },
        {
          id: 275,
          content: "5 пунктов.",
          isRight: false,
        },
        {
          id: 276,
          content: "4 уровня.",
          isRight: false,
        },
      ],
    },
    {
      id: 70,
      content: "Что такое сложная информационная система?",
      options: [
        {
          id: 277,
          content: "Система, состоящая из элементов, основанных на различных правилах.",
          isRight: true,
        },
        {
          id: 278,
          content: "Система, состоящая из элементов, основанных на одинаковых правилах.",
          isRight: false,
        },
        {
          id: 279,
          content: "Система, состоящая из секретных элементов, основанных на различных правилах.",
          isRight: false,
        },
        {
          id: 280,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 71,
      content: "Что такое идентификация?",
      options: [
        {
          id: 281,
          content: "Обращение к субъектам и объектам.",
          isRight: true,
        },
        {
          id: 282,
          content: "Физическая защита данных.",
          isRight: false,
        },
        {
          id: 283,
          content: "Передача данных в электронном виде.",
          isRight: false,
        },
        {
          id: 284,
          content: "Паролирование данных.",
          isRight: false,
        },
      ],
    },
    {
      id: 72,
      content: "Как называется предоставление признака субъекта или объекта при идентификации?",
      options: [
        {
          id: 285,
          content: "Идентификатор.",
          isRight: true,
        },
        {
          id: 286,
          content: "Blowfish.",
          isRight: false,
        },
        {
          id: 287,
          content: "Шифрование.",
          isRight: false,
        },
        {
          id: 288,
          content: "Авторизация.",
          isRight: false,
        },
      ],
    },
    {
      id: 73,
      content: "Как называется процесс подтверждения точности или подлинности данных, передаваемых в электронном виде?",
      options: [
        {
          id: 289,
          content: "Аутентификация.",
          isRight: true,
        },
        {
          id: 290,
          content: "Blowfish.",
          isRight: false,
        },
        {
          id: 291,
          content: "Шифрование.",
          isRight: false,
        },
        {
          id: 292,
          content: "Авторизация.",
          isRight: false,
        },
      ],
    },
    {
      id: 74,
      content: "Как называется предоставление уникального признака пользователя или процесса для аутентификации?",
      options: [
        {
          id: 293,
          content: "Аутентификатор.",
          isRight: true,
        },
        {
          id: 294,
          content: "Идентификатор.",
          isRight: false,
        },
        {
          id: 295,
          content: "Шифрование.",
          isRight: false,
        },
        {
          id: 296,
          content: "Авторизация.",
          isRight: false,
        },
      ],
    },
    {
      id: 75,
      content:
        "Как называется процедура предоставления субъекту определённых прав доступа к ресурсам системы после прохождения аутентификации?",
      options: [
        {
          id: 297,
          content: "Авторизация.",
          isRight: true,
        },
        {
          id: 298,
          content: "Идентификатор.",
          isRight: false,
        },
        {
          id: 299,
          content: "Аутентификатор.",
          isRight: false,
        },
        {
          id: 300,
          content: "Шифрование.",
          isRight: false,
        },
      ],
    },
  ],
  // === Билет 4 ===
  [
    {
      id: 76,
      content: "Сколько основных проблем возникает у IT-специалистов при работе с дисками?",
      options: [
        {
          id: 301,
          content: "2 элемента.",
          isRight: true,
        },
        {
          id: 302,
          content: "3 элемента.",
          isRight: false,
        },
        {
          id: 303,
          content: "4 уровня.",
          isRight: false,
        },
        {
          id: 304,
          content: "5 уровней.",
          isRight: false,
        },
      ],
    },
    {
      id: 77,
      content:
        "Что называется виртуальной технологией хранения данных, объединяющей несколько жёстких дисков в один логический элемент?",
      options: [
        {
          id: 305,
          content: "RAID.",
          isRight: true,
        },
        {
          id: 306,
          content: "IT.",
          isRight: false,
        },
        {
          id: 307,
          content: "SSD.",
          isRight: false,
        },
        {
          id: 308,
          content: "TCP.",
          isRight: false,
        },
      ],
    },
    {
      id: 78,
      content: "Сколько основных принципов лежит в основе технологии RAID?",
      options: [
        {
          id: 309,
          content: "5 элементов.",
          isRight: true,
        },
        {
          id: 310,
          content: "3 элемента.",
          isRight: false,
        },
        {
          id: 311,
          content: "4 уровня.",
          isRight: false,
        },
        {
          id: 312,
          content: "2 уровня.",
          isRight: false,
        },
      ],
    },
    {
      id: 79,
      content: "Найдите основные принципы технологии RAID.",
      options: [
        {
          id: 313,
          content: "Все ответы верны.",
          isRight: true,
        },
        {
          id: 314,
          content: "Чётность.",
          isRight: false,
        },
        {
          id: 315,
          content: "Дуплекс.",
          isRight: false,
        },
        {
          id: 316,
          content: "Striping.",
          isRight: false,
        },
      ],
    },
    {
      id: 80,
      content: "Какой стандарт используется в США для шифрования данных?",
      options: [
        {
          id: 317,
          content: "DES.",
          isRight: true,
        },
        {
          id: 318,
          content: "ASC.",
          isRight: false,
        },
        {
          id: 319,
          content: "HTTP.",
          isRight: false,
        },
        {
          id: 320,
          content: "IT.",
          isRight: false,
        },
      ],
    },
    {
      id: 81,
      content:
        "Как называется процесс получения открытого текста из зашифрованного текста без знания секретного ключа?",
      options: [
        {
          id: 321,
          content: "Криптоанализ.",
          isRight: true,
        },
        {
          id: 322,
          content: "Авторизация.",
          isRight: false,
        },
        {
          id: 323,
          content: "Чётность.",
          isRight: false,
        },
        {
          id: 324,
          content: "Идентификатор.",
          isRight: false,
        },
      ],
    },
    {
      id: 82,
      content: "Что означает отказ пользователя от использования ресурсов в сети?",
      options: [
        {
          id: 325,
          content: "Администрирование.",
          isRight: true,
        },
        {
          id: 326,
          content: "Криптоанализ.",
          isRight: false,
        },
        {
          id: 327,
          content: "Авторизация.",
          isRight: false,
        },
        {
          id: 328,
          content: "Чётность.",
          isRight: false,
        },
      ],
    },
    {
      id: 83,
      content: "Что такое пароль?",
      options: [
        {
          id: 329,
          content: "То, что известно пользователю и его партнёру по обмену информацией.",
          isRight: true,
        },
        {
          id: 330,
          content: "Набор открытых ключей.",
          isRight: false,
        },
        {
          id: 331,
          content: "Подтверждение подлинности субъекта.",
          isRight: false,
        },
        {
          id: 332,
          content: "Секретное слово.",
          isRight: false,
        },
      ],
    },
    {
      id: 84,
      content: "Что такое динамический пароль?",
      options: [
        {
          id: 333,
          content: "Одноразовый пароль, который больше никогда не используется.",
          isRight: true,
        },
        {
          id: 334,
          content: "Постоянно используемый открытый пароль.",
          isRight: false,
        },
        {
          id: 335,
          content: "Известный и постоянный пароль.",
          isRight: false,
        },
        {
          id: 336,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 85,
      content: "Что такое ISO?",
      options: [
        {
          id: 337,
          content: "Международная организация по стандартизации.",
          isRight: true,
        },
        {
          id: 338,
          content: "Организация, контролирующая хакеров.",
          isRight: false,
        },
        {
          id: 339,
          content: "Организация, обеспечивающая кибербезопасность.",
          isRight: false,
        },
        {
          id: 340,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 86,
      content: "Что такое ICMP?",
      options: [
        {
          id: 341,
          content: "Протокол передачи сообщений через Интернет.",
          isRight: true,
        },
        {
          id: 342,
          content: "Протокол обработки данных.",
          isRight: false,
        },
        {
          id: 343,
          content: "Протокол стандартизации.",
          isRight: false,
        },
        {
          id: 344,
          content: "Протокол ввода данных.",
          isRight: false,
        },
      ],
    },
    {
      id: 87,
      content: "Какой протокол используется для сбора информации о топологических изменениях в Интернете?",
      options: [
        {
          id: 345,
          content: "RIP.",
          isRight: true,
        },
        {
          id: 346,
          content: "DES.",
          isRight: false,
        },
        {
          id: 347,
          content: "ICMP.",
          isRight: false,
        },
        {
          id: 348,
          content: "HTTP.",
          isRight: false,
        },
      ],
    },
    {
      id: 88,
      content:
        "Как называются правила и технические процедуры, обеспечивающие подключение компьютеров к сети и обмен данными?",
      options: [
        {
          id: 349,
          content: "Сетевой протокол.",
          isRight: true,
        },
        {
          id: 350,
          content: "Базовый протокол.",
          isRight: false,
        },
        {
          id: 351,
          content: "Локальная сеть.",
          isRight: false,
        },
        {
          id: 352,
          content: "Интернет-сеть.",
          isRight: false,
        },
      ],
    },
    {
      id: 89,
      content: "Как называется набор правил и процедур, регулирующих выполнение некоторых соединений?",
      options: [
        {
          id: 353,
          content: "Протокол.",
          isRight: true,
        },
        {
          id: 354,
          content: "Пароль.",
          isRight: false,
        },
        {
          id: 355,
          content: "Процедура.",
          isRight: false,
        },
        {
          id: 356,
          content: "Администрирование.",
          isRight: false,
        },
      ],
    },
    {
      id: 90,
      content: "Что такое модель сети OSI?",
      options: [
        {
          id: 357,
          content: "Абстрактная модель для разработки сетевых соединений и сетевых протоколов.",
          isRight: true,
        },
        {
          id: 358,
          content: "Набор правил и процедур, регулирующих выполнение некоторых соединений.",
          isRight: false,
        },
        {
          id: 359,
          content: "Правила для подключения компьютеров к сети и обмена данными.",
          isRight: false,
        },
        {
          id: 360,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 91,
      content: "В каком году появилась глобальная сеть Интернет?",
      options: [
        {
          id: 361,
          content: "1992 год.",
          isRight: true,
        },
        {
          id: 362,
          content: "1991 год.",
          isRight: false,
        },
        {
          id: 363,
          content: "1994 год.",
          isRight: false,
        },
        {
          id: 364,
          content: "1993 год.",
          isRight: false,
        },
      ],
    },
    {
      id: 92,
      content: "Что означает WWW?",
      options: [
        {
          id: 365,
          content: "World Wide Web.",
          isRight: true,
        },
        {
          id: 366,
          content: "World Wide Web.",
          isRight: false,
        },
        {
          id: 367,
          content: "World Wide Web.",
          isRight: false,
        },
        {
          id: 368,
          content: "Правильного ответа нет.",
          isRight: false,
        },
      ],
    },
    {
      id: 93,
      content: "Кто создал WWW?",
      options: [
        {
          id: 369,
          content: "Тим Бернерс-Ли.",
          isRight: true,
        },
        {
          id: 370,
          content: "Майкл Оуэн.",
          isRight: false,
        },
        {
          id: 371,
          content: "Тим Беккер.",
          isRight: false,
        },
        {
          id: 372,
          content: "Стив Джобс.",
          isRight: false,
        },
      ],
    },
    {
      id: 94,
      content: "Укажите примеры веб-атак.",
      options: [
        {
          id: 373,
          content: "Все ответы верны.",
          isRight: true,
        },
        {
          id: 374,
          content: "DOS.",
          isRight: false,
        },
        {
          id: 375,
          content: "DDoS.",
          isRight: false,
        },
        {
          id: 376,
          content: "Фишинг.",
          isRight: false,
        },
      ],
    },
    {
      id: 95,
      content: "Что такое киберпреступление?",
      options: [
        {
          id: 377,
          content: "Технологическое преступление.",
          isRight: true,
        },
        {
          id: 378,
          content: "Физиологическое преступление.",
          isRight: false,
        },
        {
          id: 379,
          content: "Техническое преступление.",
          isRight: false,
        },
        {
          id: 380,
          content: "Личное преступление.",
          isRight: false,
        },
      ],
    },
    {
      id: 96,
      content: "Какие атаки относятся к сетевым угрозам?",
      options: [
        {
          id: 381,
          content: "все ответы верны",
          isRight: true,
        },
        {
          id: 382,
          content: "DOS.",
          isRight: false,
        },
        {
          id: 383,
          content: "DDoS.",
          isRight: false,
        },
        {
          id: 384,
          content: "Phishing.",
          isRight: false,
        },
      ],
    },
    {
      id: 97,
      content: "Определите доменное обозначение сети высших учебных заведений.",
      options: [
        {
          id: 385,
          content: "edu.",
          isRight: true,
        },
        {
          id: 386,
          content: "com.",
          isRight: false,
        },
        {
          id: 387,
          content: "gov.",
          isRight: false,
        },
        {
          id: 388,
          content: "net.",
          isRight: false,
        },
      ],
    },
    {
      id: 98,
      content: "Определите доменное обозначение коммерческих организаций.",
      options: [
        {
          id: 389,
          content: "com.",
          isRight: true,
        },
        {
          id: 390,
          content: "edu.",
          isRight: false,
        },
        {
          id: 391,
          content: "net.",
          isRight: false,
        },
        {
          id: 392,
          content: "gov.",
          isRight: false,
        },
      ],
    },
    {
      id: 99,
      content: "Определите доменное обозначение правительственных организаций.",
      options: [
        {
          id: 393,
          content: "gov.",
          isRight: true,
        },
        {
          id: 394,
          content: "net.",
          isRight: false,
        },
        {
          id: 395,
          content: "org.",
          isRight: false,
        },
        {
          id: 396,
          content: "int.",
          isRight: false,
        },
      ],
    },
    {
      id: 100,
      content: "Какие процессы необходимы для организации эффективной защиты от кибератак?",
      options: [
        {
          id: 397,
          content: "Сотрудники, рабочие процессы и технологии должны дополнять друг друга.",
          isRight: true,
        },
        {
          id: 398,
          content: "Рабочие процессы и технологии должны быть.",
          isRight: false,
        },
        {
          id: 399,
          content: "Необходимость наличия сотрудников и рабочих процессов.",
          isRight: false,
        },
        {
          id: 400,
          content: "Технологии должны быть совершенными.",
          isRight: false,
        },
      ],
    },
  ],
  // === Билет 5 ===
  [
    {
      id: 101,
      content: "Каким принципам информационной безопасности должны следовать пользователи?",
      options: [
        {
          id: 401,
          content:
            "Необходимо выбирать надёжные пароли, быть внимательнее к электронным письмам и выполнять резервное копирование данных.",
          isRight: true,
        },
        {
          id: 402,
          content: "При этом осуществляется только резервное копирование данных.",
          isRight: false,
        },
        {
          id: 403,
          content: "Важно выбирать надёжные пароли.",
          isRight: false,
        },
        {
          id: 404,
          content: "Важно быть внимательнее к электронным письмам.",
          isRight: false,
        },
      ],
    },
    {
      id: 102,
      content: "Какие компоненты необходимо защищать?",
      options: [
        {
          id: 405,
          content: "Компьютеры, интеллектуальные устройства, маршрутизаторы, сети и облачные среды.",
          isRight: true,
        },
        {
          id: 406,
          content: "Компьютеры, устройства, мобильная связь, антивирусы.",
          isRight: false,
        },
        {
          id: 407,
          content: "Компьютеры, антивирусы и облачные среды.",
          isRight: false,
        },
        {
          id: 408,
          content: "Интеллектуальные сети, мобильная связь, антивирусы.",
          isRight: false,
        },
      ],
    },
    {
      id: 103,
      content: "Какие виды угроз существуют в кибербезопасности?",
      options: [
        {
          id: 409,
          content: "Вредоносные программы, зловредные приложения, социальная инженерия, программы фишинга.",
          isRight: true,
        },
        {
          id: 410,
          content: "Интернет, программы фишинга, вредоносные программы.",
          isRight: false,
        },
        {
          id: 411,
          content: "Недобросовестные пользователи, социальная инженерия.",
          isRight: false,
        },
        {
          id: 412,
          content: "Входящие письма, программы, фишинг.",
          isRight: false,
        },
      ],
    },
    {
      id: 104,
      content: "Что такое социальная инженерия?",
      options: [
        {
          id: 413,
          content:
            "Тактика, направленная на раскрытие конфиденциальной информации пользователей недобросовестными лицами.",
          isRight: true,
        },
        {
          id: 414,
          content:
            "Тип вредоносного программного обеспечения, направленный на требование выкупа путём блокировки доступа к файлам на компьютере.",
          isRight: false,
        },
        {
          id: 415,
          content: "Направлено на несанкционированный доступ к компьютеру или повреждение его системы.",
          isRight: false,
        },
        {
          id: 416,
          content: "Рассылка поддельных электронных писем, выглядящих как сообщения от надёжного источника.",
          isRight: false,
        },
      ],
    },
    {
      id: 105,
      content: "Что такое фишинг?",
      options: [
        {
          id: 417,
          content: "Рассылка поддельных электронных писем, которые выглядят как сообщения от надёжного источника.",
          isRight: true,
        },
        {
          id: 418,
          content: "Направлено на несанкционированный доступ к компьютеру или нанесение ущерба его системе.",
          isRight: false,
        },
        {
          id: 419,
          content: "Тактика, направленная на раскрытие конфиденциальных данных пользователей.",
          isRight: false,
        },
        {
          id: 420,
          content:
            "Тип вредоносного программного обеспечения, блокирующий доступ к файлам на компьютере и требующий выкупа.",
          isRight: false,
        },
      ],
    },
    {
      id: 106,
      content: "Какой вид кибератак наиболее распространён?",
      options: [
        {
          id: 421,
          content: "Программа фишинга.",
          isRight: true,
        },
        {
          id: 422,
          content: "Агрессивные программы.",
          isRight: false,
        },
        {
          id: 423,
          content: "Вредоносные программы.",
          isRight: false,
        },
        {
          id: 424,
          content: "Социальная инженерия.",
          isRight: false,
        },
      ],
    },
    {
      id: 107,
      content: "Если атака осуществляется одновременно большим количеством компьютеров, как она называется?",
      options: [
        {
          id: 425,
          content: "DDoS.",
          isRight: true,
        },
        {
          id: 426,
          content: "DOS.",
          isRight: false,
        },
        {
          id: 427,
          content: "DDoS и DOS.",
          isRight: false,
        },
        {
          id: 428,
          content: "TCP.",
          isRight: false,
        },
      ],
    },
    {
      id: 108,
      content: "Какие программы устанавливаются после получения прав администратора на компьютеры, подвергшиеся атаке?",
      options: [
        {
          id: 429,
          content: "Троянские программы.",
          isRight: true,
        },
        {
          id: 430,
          content: "Агрессивные программы.",
          isRight: false,
        },
        {
          id: 431,
          content: "Вредоносные программы.",
          isRight: false,
        },
        {
          id: 432,
          content: "Программы фишинга.",
          isRight: false,
        },
      ],
    },
    {
      id: 109,
      content: "В каких режимах работают троянские программы?",
      options: [
        {
          id: 433,
          content: "Фоновый режим.",
          isRight: true,
        },
        {
          id: 434,
          content: "В обычном режиме.",
          isRight: false,
        },
        {
          id: 435,
          content: "Сложный режим.",
          isRight: false,
        },
        {
          id: 436,
          content: "Фоновый и обычный режимы.",
          isRight: false,
        },
      ],
    },
    {
      id: 110,
      content: "В каком порядке работают фильтры?",
      options: [
        {
          id: 437,
          content: "Последовательно анализирует проходящий трафик, выявляет нестандартные действия и ошибки в данных.",
          isRight: true,
        },
        {
          id: 438,
          content: "Обнаруживает ошибки.",
          isRight: false,
        },
        {
          id: 439,
          content: "Последовательно анализирует проходящий трафик.",
          isRight: false,
        },
        {
          id: 440,
          content: "Ответы A и B.",
          isRight: false,
        },
      ],
    },
    {
      id: 111,
      content: "С какой целью проводятся DDoS-атаки?",
      options: [
        {
          id: 441,
          content:
            "Личная неприязнь, тестирование, недобросовестная конкуренция, вымогательство денег или шантаж с использованием DDoS-атак.",
          isRight: true,
        },
        {
          id: 442,
          content: "Последовательно анализирует проходящий трафик, выявляет нестандартные действия и ошибки в данных.",
          isRight: false,
        },
        {
          id: 443,
          content: "По личной неприязни.",
          isRight: false,
        },
        {
          id: 444,
          content: "Ответы B и C.",
          isRight: false,
        },
      ],
    },
    {
      id: 112,
      content: "Когда была осуществлена первая кибератака?",
      options: [
        {
          id: 445,
          content: "1982 год.",
          isRight: true,
        },
        {
          id: 446,
          content: "1985 год.",
          isRight: false,
        },
        {
          id: 447,
          content: "1988 год.",
          isRight: false,
        },
        {
          id: 448,
          content: "1992 год.",
          isRight: false,
        },
      ],
    },
    {
      id: 113,
      content: "Когда и где два инженера дорожной службы атаковали городские светофоры?",
      options: [
        {
          id: 449,
          content: "2006 год, Лос-Анджелес.",
          isRight: true,
        },
        {
          id: 450,
          content: "2006 год, США.",
          isRight: false,
        },
        {
          id: 451,
          content: "2015 год, Лос-Анджелес.",
          isRight: false,
        },
        {
          id: 452,
          content: "2015 год, США.",
          isRight: false,
        },
      ],
    },
    {
      id: 114,
      content: "Когда в Украине была осуществлена кибератака на компьютеры национальной электрической сети?",
      options: [
        {
          id: 453,
          content: "2015 год.",
          isRight: true,
        },
        {
          id: 454,
          content: "2006 год.",
          isRight: false,
        },
        {
          id: 455,
          content: "2007 год.",
          isRight: false,
        },
        {
          id: 456,
          content: "2005 год.",
          isRight: false,
        },
      ],
    },
    {
      id: 115,
      content: "В каком году произошла первая атака на интернет-инфраструктуру?",
      options: [
        {
          id: 457,
          content: "27 апреля 2007 года.",
          isRight: true,
        },
        {
          id: 458,
          content: "18 марта 2007 года.",
          isRight: false,
        },
        {
          id: 459,
          content: "27 апреля 2006 года.",
          isRight: false,
        },
        {
          id: 460,
          content: "18 марта 2006 года.",
          isRight: false,
        },
      ],
    },
    {
      id: 116,
      content: 'Какова цель использования "белых" хакеров?',
      options: [
        {
          id: 461,
          content: "Определяет уровень безопасности и оценивает риски компании.",
          isRight: true,
        },
        {
          id: 462,
          content: "Обнаруживает ошибки в системе.",
          isRight: false,
        },
        {
          id: 463,
          content: "Обнаруживает внутренние и внешние коммуникации.",
          isRight: false,
        },
        {
          id: 464,
          content: "Ответы B и C.",
          isRight: false,
        },
      ],
    },
    {
      id: 117,
      content: "Что такое структура?",
      options: [
        {
          id: 465,
          content: "Совокупность связей и устойчивых отношений между элементами системы.",
          isRight: true,
        },
        {
          id: 466,
          content: "Определяет уровень безопасности и оценивает риски компании.",
          isRight: false,
        },
        {
          id: 467,
          content: "Совокупность данных, движущихся в информационной сфере на основе решений о коммуникации.",
          isRight: false,
        },
        {
          id: 468,
          content: "Совокупность, не зависящая от формы и состояния информации.",
          isRight: false,
        },
      ],
    },
    {
      id: 118,
      content: "На сколько типов условно делятся информационные системы?",
      options: [
        {
          id: 469,
          content: "2 типа: простая и сложная информационная система.",
          isRight: true,
        },
        {
          id: 470,
          content: "3 типа: поддельная, простая и сложная.",
          isRight: false,
        },
        {
          id: 471,
          content: "Простая.",
          isRight: false,
        },
        {
          id: 472,
          content: "Сложная.",
          isRight: false,
        },
      ],
    },
    {
      id: 119,
      content: "Что называется простой информационной системой?",
      options: [
        {
          id: 473,
          content: "Система, состоящая из элементов, основанных на одинаковых правилах.",
          isRight: true,
        },
        {
          id: 474,
          content: "Система, состоящая из элементов, подчиняющихся различным правилам.",
          isRight: false,
        },
        {
          id: 475,
          content: "Независимая от формы и состояния информации совокупность.",
          isRight: false,
        },
        {
          id: 476,
          content: "Связи и устойчивые отношения между элементами системы.",
          isRight: false,
        },
      ],
    },
    {
      id: 120,
      content: "Что называется сложной информационной системой?",
      options: [
        {
          id: 477,
          content: "Система, состоящая из элементов, подчиняющихся различным правилам.",
          isRight: true,
        },
        {
          id: 478,
          content: "Система, состоящая из элементов, основанных на одинаковых правилах.",
          isRight: false,
        },
        {
          id: 479,
          content: "Независимая от формы и состояния информации совокупность.",
          isRight: false,
        },
        {
          id: 480,
          content: "Связи и устойчивые отношения между элементами системы.",
          isRight: false,
        },
      ],
    },
    {
      id: 121,
      content: "Что такое информационно-телекоммуникационная инфраструктура?",
      options: [
        {
          id: 481,
          content:
            "Территориально распределённые компании, связанные друг с другом через средства связи и телекоммуникаций.",
          isRight: true,
        },
        {
          id: 482,
          content:
            "Среда, обеспечивающая сбор, передачу, хранение, автоматическую обработку и распространение информации в обществе.",
          isRight: false,
        },
        {
          id: 483,
          content: "Независимая от формы и состояния информации совокупность.",
          isRight: false,
        },
        {
          id: 484,
          content: "Связи и устойчивые отношения между элементами системы.",
          isRight: false,
        },
      ],
    },
    {
      id: 122,
      content: "Что такое информационная инфраструктура?",
      options: [
        {
          id: 485,
          content:
            "Среда, обеспечивающая сбор, передачу, хранение, автоматическую обработку и распространение информации в обществе.",
          isRight: true,
        },
        {
          id: 486,
          content: "Территориально распределённые компании, связанные между собой средствами связи и телекоммуникаций.",
          isRight: false,
        },
        {
          id: 487,
          content: "Независимая от формы и состояния информации совокупность.",
          isRight: false,
        },
        {
          id: 488,
          content: "Связи и устойчивые отношения между элементами системы.",
          isRight: false,
        },
      ],
    },
    {
      id: 123,
      content:
        "На сколько процентов в год увеличивается использование информационно-коммуникационных технологий в мире?",
      options: [
        {
          id: 489,
          content: "5%.",
          isRight: true,
        },
        {
          id: 490,
          content: "10%.",
          isRight: false,
        },
        {
          id: 491,
          content: "8%.",
          isRight: false,
        },
        {
          id: 492,
          content: "6%.",
          isRight: false,
        },
      ],
    },
    {
      id: 124,
      content: "Сколько показателей содержится в IT-инфраструктуре?",
      options: [
        {
          id: 493,
          content: "6 показателей.",
          isRight: true,
        },
        {
          id: 494,
          content: "5 показателей.",
          isRight: false,
        },
        {
          id: 495,
          content: "7 показателей.",
          isRight: false,
        },
        {
          id: 496,
          content: "10 пунктов.",
          isRight: false,
        },
      ],
    },
    {
      id: 125,
      content: "Как называется совокупность сетевых протоколов, используемых на различных уровнях Интернета?",
      options: [
        {
          id: 497,
          content: "Протокол TCP/IP.",
          isRight: true,
        },
        {
          id: 498,
          content: "Протокол передачи данных.",
          isRight: false,
        },
        {
          id: 499,
          content: "Межсетевой протокол.",
          isRight: false,
        },
        {
          id: 500,
          content: "Открытый протокол.",
          isRight: false,
        },
      ],
    },
  ],
  // === Билет 6 ===
  [
    {
      id: 126,
      content: "Какие характеристики TCP/IP указаны правильно?",
      options: [
        {
          id: 501,
          content: "Все ответы верны.",
          isRight: true,
        },
        {
          id: 502,
          content: "Не зависит от физической среды передачи данных.",
          isRight: false,
        },
        {
          id: 503,
          content: "Уникальная адресация, высокоуровневые стандартные протоколы.",
          isRight: false,
        },
        {
          id: 504,
          content: "Стандарты открытых протоколов, независимые от программного и аппаратного обеспечения.",
          isRight: false,
        },
      ],
    },
    {
      id: 127,
      content: "Какие типы данных относятся к транспортному уровню?",
      options: [
        {
          id: 505,
          content: "Сегменты, дейтаграммы.",
          isRight: true,
        },
        {
          id: 506,
          content: "Пакеты.",
          isRight: false,
        },
        {
          id: 507,
          content: "Биты.",
          isRight: false,
        },
        {
          id: 508,
          content: "Данные.",
          isRight: false,
        },
      ],
    },
    {
      id: 128,
      content: "Какие типы данных относятся к сетевому уровню?",
      options: [
        {
          id: 509,
          content: "Пакеты.",
          isRight: true,
        },
        {
          id: 510,
          content: "Биты.",
          isRight: false,
        },
        {
          id: 511,
          content: "Данные.",
          isRight: false,
        },
        {
          id: 512,
          content: "Сегменты.",
          isRight: false,
        },
      ],
    },
    {
      id: 129,
      content: "В чём состоит функция прикладного уровня?",
      options: [
        {
          id: 513,
          content: "Обращение к сетевым услугам.",
          isRight: true,
        },
        {
          id: 514,
          content: "Представление данных и их шифрование.",
          isRight: false,
        },
        {
          id: 515,
          content: "Управление сеансом связи.",
          isRight: false,
        },
        {
          id: 516,
          content: "Физическая адресация.",
          isRight: false,
        },
      ],
    },
    {
      id: 130,
      content: "Какие функции выполняет уровень представления?",
      options: [
        {
          id: 517,
          content: "Представление данных и их шифрование.",
          isRight: true,
        },
        {
          id: 518,
          content: "Обращение к сетевым услугам.",
          isRight: false,
        },
        {
          id: 519,
          content: "Управление сеансом связи.",
          isRight: false,
        },
        {
          id: 520,
          content: "Физическая адресация.",
          isRight: false,
        },
      ],
    },
    {
      id: 131,
      content: "Какие функции выполняет сеансовый уровень?",
      options: [
        {
          id: 521,
          content: "Управление сеансом связи.",
          isRight: true,
        },
        {
          id: 522,
          content: "Представление данных и их шифрование.",
          isRight: false,
        },
        {
          id: 523,
          content: "Обращение к сетевым услугам.",
          isRight: false,
        },
        {
          id: 524,
          content: "Физическая адресация.",
          isRight: false,
        },
      ],
    },
    {
      id: 132,
      content: "Какие функции выполняет сетевой уровень?",
      options: [
        {
          id: 525,
          content: "Физическая адресация.",
          isRight: true,
        },
        {
          id: 526,
          content: "Управление сеансом связи.",
          isRight: false,
        },
        {
          id: 527,
          content: "Представление данных и их шифрование.",
          isRight: false,
        },
        {
          id: 528,
          content: "Обращение к сетевым службам.",
          isRight: false,
        },
      ],
    },
    {
      id: 133,
      content: "Найдите строку с правильными примерами физического уровня.",
      options: [
        {
          id: 529,
          content: "USB, кабель, радиоканал.",
          isRight: true,
        },
        {
          id: 530,
          content: "PPP, Ethernet, PSL.",
          isRight: false,
        },
        {
          id: 531,
          content: "HTTP, FTP.",
          isRight: false,
        },
        {
          id: 532,
          content: "RPC, PAP.",
          isRight: false,
        },
      ],
    },
    {
      id: 134,
      content: "Найдите строку с правильными примерами канального уровня.",
      options: [
        {
          id: 533,
          content: "IPv6, IPv4.",
          isRight: true,
        },
        {
          id: 534,
          content: "PPP, Ethernet, PSL.",
          isRight: false,
        },
        {
          id: 535,
          content: "HTTP, FTP.",
          isRight: false,
        },
        {
          id: 536,
          content: "RPC, PAP.",
          isRight: false,
        },
      ],
    },
    {
      id: 135,
      content: "Найдите строку с правильными примерами транспортного уровня.",
      options: [
        {
          id: 537,
          content: "TCP, UDP.",
          isRight: true,
        },
        {
          id: 538,
          content: "PPP, Ethernet, PSL.",
          isRight: false,
        },
        {
          id: 539,
          content: "HTTP, FTP.",
          isRight: false,
        },
        {
          id: 540,
          content: "RPC, PAP.",
          isRight: false,
        },
      ],
    },
    {
      id: 136,
      content: "Укажите виды информации о маршрутах.",
      options: [
        {
          id: 541,
          content: "Статические, динамические.",
          isRight: true,
        },
        {
          id: 542,
          content: "Статический, физический.",
          isRight: false,
        },
        {
          id: 543,
          content: "Динамический, физический.",
          isRight: false,
        },
        {
          id: 544,
          content: "Физическая, логическая.",
          isRight: false,
        },
      ],
    },
    {
      id: 137,
      content: "Какая информация о маршрутах фиксируется заранее?",
      options: [
        {
          id: 545,
          content: "Статические.",
          isRight: true,
        },
        {
          id: 546,
          content: "Динамический.",
          isRight: false,
        },
        {
          id: 547,
          content: "Физический.",
          isRight: false,
        },
        {
          id: 548,
          content: "Логическая.",
          isRight: false,
        },
      ],
    },
    {
      id: 138,
      content: 'Каково значение слова "криптология"?',
      options: [
        {
          id: 549,
          content: "Секретное слово.",
          isRight: true,
        },
        {
          id: 550,
          content: "Ключевое слово.",
          isRight: false,
        },
        {
          id: 551,
          content: "Секретный язык.",
          isRight: false,
        },
        {
          id: 552,
          content: "Кодирование.",
          isRight: false,
        },
      ],
    },
    {
      id: 139,
      content: "Как называется метод скрытия исходных данных с помощью кодов или шифров?",
      options: [
        {
          id: 553,
          content: "Криптография.",
          isRight: true,
        },
        {
          id: 554,
          content: "Криптоанализ.",
          isRight: false,
        },
        {
          id: 555,
          content: "Криптология.",
          isRight: false,
        },
        {
          id: 556,
          content: "Все ответы верны.",
          isRight: false,
        },
      ],
    },
    {
      id: 140,
      content: "Как называется метод раскрытия кодов или шифров?",
      options: [
        {
          id: 557,
          content: "Криптоанализ.",
          isRight: true,
        },
        {
          id: 558,
          content: "Криптография.",
          isRight: false,
        },
        {
          id: 559,
          content: "Криптология.",
          isRight: false,
        },
        {
          id: 560,
          content: "Шифр.",
          isRight: false,
        },
      ],
    },
    {
      id: 141,
      content: "Как называется метод преобразования открытого текста в криптограмму?",
      options: [
        {
          id: 561,
          content: "Шифр.",
          isRight: true,
        },
        {
          id: 562,
          content: "Криптоанализ.",
          isRight: false,
        },
        {
          id: 563,
          content: "Криптография.",
          isRight: false,
        },
        {
          id: 564,
          content: "Шифрование.",
          isRight: false,
        },
      ],
    },
    {
      id: 142,
      content: "Как называется сообщение, которое необходимо привести в непонятный для посторонних вид?",
      options: [
        {
          id: 565,
          content: "Открытый текст.",
          isRight: true,
        },
        {
          id: 566,
          content: "Зашифрованное сообщение.",
          isRight: false,
        },
        {
          id: 567,
          content: "Шифрование.",
          isRight: false,
        },
        {
          id: 568,
          content: "Схема шифрования.",
          isRight: false,
        },
      ],
    },
    {
      id: 143,
      content: "… – это определённое состояние, используемое в методе шифрования.",
      options: [
        {
          id: 569,
          content: "Ключ.",
          isRight: true,
        },
        {
          id: 570,
          content: "Открытый текст.",
          isRight: false,
        },
        {
          id: 571,
          content: "Шифр.",
          isRight: false,
        },
        {
          id: 572,
          content: "Дешифрование.",
          isRight: false,
        },
      ],
    },
    {
      id: 144,
      content: "Какой алгоритм шифрования основан на использовании одного общего ключа для отправителя и получателя?",
      options: [
        {
          id: 573,
          content: "Симметричный.",
          isRight: true,
        },
        {
          id: 574,
          content: "Асимметричный.",
          isRight: false,
        },
        {
          id: 575,
          content: "Цезарь.",
          isRight: false,
        },
        {
          id: 576,
          content: "Магический квадрат.",
          isRight: false,
        },
      ],
    },
    {
      id: 145,
      content: "Как называется тип шифрования с размером блока b=64 бита и размером ключа k=56+8 бит?",
      options: [
        {
          id: 577,
          content: "DES.",
          isRight: true,
        },
        {
          id: 578,
          content: "AES.",
          isRight: false,
        },
        {
          id: 579,
          content: "Blowfish.",
          isRight: false,
        },
        {
          id: 580,
          content: "RCA.",
          isRight: false,
        },
      ],
    },
    {
      id: 146,
      content: "Как называется тип шифрования с размером блока b=128 бит и ключа k=128/192/256 бит?",
      options: [
        {
          id: 581,
          content: "AES.",
          isRight: true,
        },
        {
          id: 582,
          content: "DES.",
          isRight: false,
        },
        {
          id: 583,
          content: "Blowfish.",
          isRight: false,
        },
        {
          id: 584,
          content: "RCA.",
          isRight: false,
        },
      ],
    },
    {
      id: 147,
      content: "Как называется тип шифрования с размером блока b=64 бита и ключа k=32-448 бит?",
      options: [
        {
          id: 585,
          content: "Blowfish.",
          isRight: true,
        },
        {
          id: 586,
          content: "AES.",
          isRight: false,
        },
        {
          id: 587,
          content: "DES.",
          isRight: false,
        },
        {
          id: 588,
          content: "RCA.",
          isRight: false,
        },
      ],
    },
    {
      id: 148,
      content: "Как называется открытый ключ шифрования, известный всем?",
      options: [
        {
          id: 589,
          content: "Открытый ключ.",
          isRight: true,
        },
        {
          id: 590,
          content: "Закрытый ключ.",
          isRight: false,
        },
        {
          id: 591,
          content: "Шифр.",
          isRight: false,
        },
        {
          id: 592,
          content: "Открытый текст.",
          isRight: false,
        },
      ],
    },
    {
      id: 149,
      content:
        "Как называется ключ, используемый для расшифровки сообщения, полученного с использованием открытого ключа и криптографических преобразований?",
      options: [
        {
          id: 593,
          content: "Закрытый ключ.",
          isRight: true,
        },
        {
          id: 594,
          content: "Открытый ключ.",
          isRight: false,
        },
        {
          id: 595,
          content: "Шифр.",
          isRight: false,
        },
        {
          id: 596,
          content: "Открытый текст.",
          isRight: false,
        },
      ],
    },
    {
      id: 150,
      content: "Какой метод шифрования был создан Ривестом, Шамиром и Адлеманом?",
      options: [
        {
          id: 597,
          content: "RSA",
          isRight: true,
        },
        {
          id: 598,
          content: "DES",
          isRight: false,
        },
        {
          id: 599,
          content: "AES.",
          isRight: false,
        },
        {
          id: 600,
          content: "Blowfish.",
          isRight: false,
        },
      ],
    },
  ],
  // === Билет 7 ===
  [
    {
      id: 151,
      content: "Какой метод шифрования был предложен Тахером Эльгамалем в 1985 году?",
      options: [
        {
          id: 601,
          content: "Elgamal",
          isRight: true,
        },
        {
          id: 602,
          content: "DES",
          isRight: false,
        },
        {
          id: 603,
          content: "AES.",
          isRight: false,
        },
        {
          id: 604,
          content: "Blowfish.",
          isRight: false,
        },
      ],
    },
    {
      id: 152,
      content: "Как называется совокупность трёх принципов информационной безопасности?",
      options: [
        {
          id: 605,
          content: "CIA триада.",
          isRight: true,
        },
        {
          id: 606,
          content: "3DES",
          isRight: false,
        },
        {
          id: 607,
          content: "RC2.",
          isRight: false,
        },
        {
          id: 608,
          content: "DDES.",
          isRight: false,
        },
      ],
    },
    {
      id: 153,
      content:
        "Как называется процедура присвоения идентификаторов субъектам и объектам и их сопоставления с подтверждёнными идентификаторами?",
      options: [
        {
          id: 609,
          content: "Идентификация.",
          isRight: true,
        },
        {
          id: 610,
          content: "Аутентификация.",
          isRight: false,
        },
        {
          id: 611,
          content: "Авторизация.",
          isRight: false,
        },
        {
          id: 612,
          content: "Идентификатор.",
          isRight: false,
        },
      ],
    },
    {
      id: 154,
      content: "Что является уникальным признаком субъекта или объекта при идентификации?",
      options: [
        {
          id: 613,
          content: "Идентификатор.",
          isRight: true,
        },
        {
          id: 614,
          content: "Аутентификация.",
          isRight: false,
        },
        {
          id: 615,
          content: "Авторизация.",
          isRight: false,
        },
        {
          id: 616,
          content: "Идентификация.",
          isRight: false,
        },
      ],
    },
    {
      id: 155,
      content: "Как называется процесс подтверждения подлинности электронных данных?",
      options: [
        {
          id: 617,
          content: "Аутентификация.",
          isRight: true,
        },
        {
          id: 618,
          content: "Идентификация.",
          isRight: false,
        },
        {
          id: 619,
          content: "Авторизация.",
          isRight: false,
        },
        {
          id: 620,
          content: "Идентификатор.",
          isRight: false,
        },
      ],
    },
    {
      id: 156,
      content: "Укажите строку с примером идентификации.",
      options: [
        {
          id: 621,
          content: "RFID, штрих-коды, биометрия, карты с магнитной полосой.",
          isRight: true,
        },
        {
          id: 622,
          content: "Пароли, RFID, штрих-коды, смарт-карта + PIN.",
          isRight: false,
        },
        {
          id: 623,
          content: "Биометрия, RFID, eToken+PIN, штрих-коды.",
          isRight: false,
        },
        {
          id: 624,
          content: "Пароли, биометрия, eToken+PIN, смарт-карта + PIN.",
          isRight: false,
        },
      ],
    },
    {
      id: 157,
      content: "Укажите строку с примером аутентификации.",
      options: [
        {
          id: 625,
          content: "Пароли, смарт-карта + PIN, eToken + PIN.",
          isRight: true,
        },
        {
          id: 626,
          content: "Пароли, RFID, штрих-коды, смарт-карта + PIN.",
          isRight: false,
        },
        {
          id: 627,
          content: "Биометрия, RFID, eToken+PIN, штрих-коды.",
          isRight: false,
        },
        {
          id: 628,
          content: "Пароли, биометрия, eToken+PIN, смарт-карта + PIN.",
          isRight: false,
        },
      ],
    },
    {
      id: 158,
      content: "Укажите строку с примером усиленной аутентификации.",
      options: [
        {
          id: 629,
          content: "Многоразовые пароли, одноразовые пароли, OTP.",
          isRight: true,
        },
        {
          id: 630,
          content: "Многоразовые пароли, OTP, смарт-карта + PIN.",
          isRight: false,
        },
        {
          id: 631,
          content: "Многоразовые пароли, OTP, eToken+PIN.",
          isRight: false,
        },
        {
          id: 632,
          content: "Смарт-карта + PIN, eToken + PIN.",
          isRight: false,
        },
      ],
    },
    {
      id: 159,
      content: "Укажите строку с примером строгой аутентификации.",
      options: [
        {
          id: 633,
          content: "Смарт-карта + PIN, eToken + PIN.",
          isRight: true,
        },
        {
          id: 634,
          content: "Многоразовые пароли, одноразовые пароли, OTP.",
          isRight: false,
        },
        {
          id: 635,
          content: "Многоразовые пароли, OTP, смарт-карта + PIN.",
          isRight: false,
        },
        {
          id: 636,
          content: "Многоразовые пароли, OTP, eToken + PIN.",
          isRight: false,
        },
      ],
    },
    {
      id: 160,
      content: "Что называется массивами избыточных независимых дисков?",
      options: [
        {
          id: 637,
          content: "RAID.",
          isRight: true,
        },
        {
          id: 638,
          content: "RFID.",
          isRight: false,
        },
        {
          id: 639,
          content: "NTFS.",
          isRight: false,
        },
        {
          id: 640,
          content: "EFS.",
          isRight: false,
        },
      ],
    },
    {
      id: 161,
      content: "Какая технология записывает все данные на два жёстких диска в зеркальном виде?",
      options: [
        {
          id: 641,
          content: "Зеркалирование.",
          isRight: true,
        },
        {
          id: 642,
          content: "Дуплекс.",
          isRight: false,
        },
        {
          id: 643,
          content: "Последовательность.",
          isRight: false,
        },
        {
          id: 644,
          content: "Чётность.",
          isRight: false,
        },
      ],
    },
    {
      id: 162,
      content: "Какая технология использует два независимых RAID-контроллера?",
      options: [
        {
          id: 645,
          content: "Дуплекс.",
          isRight: true,
        },
        {
          id: 646,
          content: "Зеркалирование.",
          isRight: false,
        },
        {
          id: 647,
          content: "Последовательность.",
          isRight: false,
        },
        {
          id: 648,
          content: "Чётность.",
          isRight: false,
        },
      ],
    },
    {
      id: 163,
      content: "Какая технология разделяет файл на части и одновременно записывает их на все доступные диски?",
      options: [
        {
          id: 649,
          content: "Последовательность.",
          isRight: true,
        },
        {
          id: 650,
          content: "Дуплекс.",
          isRight: false,
        },
        {
          id: 651,
          content: "Зеркалирование.",
          isRight: false,
        },
        {
          id: 652,
          content: "Чётность.",
          isRight: false,
        },
      ],
    },
    {
      id: 164,
      content: "Какая технология объединяет зеркалирование и последовательность в RAID-массивах?",
      options: [
        {
          id: 653,
          content: "Чётность.",
          isRight: true,
        },
        {
          id: 654,
          content: "Дуплекс.",
          isRight: false,
        },
        {
          id: 655,
          content: "Последовательность.",
          isRight: false,
        },
        {
          id: 656,
          content: "Зеркалирование.",
          isRight: false,
        },
      ],
    },
    {
      id: 165,
      content: "Какие существуют методы RAID-массивов?",
      options: [
        {
          id: 657,
          content: "Аппаратные и программные.",
          isRight: true,
        },
        {
          id: 658,
          content: "Аппаратные и технические.",
          isRight: false,
        },
        {
          id: 659,
          content: "Программное и базовое.",
          isRight: false,
        },
        {
          id: 660,
          content: "Технические и базовые.",
          isRight: false,
        },
      ],
    },
    {
      id: 166,
      content: "В какой файловой системе можно задать права доступа пользователей к данным?",
      options: [
        {
          id: 661,
          content: "NTFS.",
          isRight: true,
        },
        {
          id: 662,
          content: "EFS.",
          isRight: false,
        },
        {
          id: 663,
          content: "RAID.",
          isRight: false,
        },
        {
          id: 664,
          content: "RFID.",
          isRight: false,
        },
      ],
    },
    {
      id: 167,
      content: "С помощью какого специального драйвера можно выполнить шифрование данных?",
      options: [
        {
          id: 665,
          content: "EFS.",
          isRight: true,
        },
        {
          id: 666,
          content: "NTFS.",
          isRight: false,
        },
        {
          id: 667,
          content: "RAID.",
          isRight: false,
        },
        {
          id: 668,
          content: "RFID.",
          isRight: false,
        },
      ],
    },
    {
      id: 168,
      content: "Сколько существует стандартных разрешений для файлов и папок?",
      options: [
        {
          id: 669,
          content: "5 прав.",
          isRight: true,
        },
        {
          id: 670,
          content: "4.",
          isRight: false,
        },
        {
          id: 671,
          content: "2 уровня.",
          isRight: false,
        },
        {
          id: 672,
          content: "6 уровней.",
          isRight: false,
        },
      ],
    },
    {
      id: 169,
      content: "Какие существуют стандартные разрешения для файлов и папок?",
      options: [
        {
          id: 673,
          content: "Полный доступ, изменение, выполнение, чтение, запись.",
          isRight: true,
        },
        {
          id: 674,
          content: "Полный доступ, чтение, запись.",
          isRight: false,
        },
        {
          id: 675,
          content: "Чтение, запись, выполнение.",
          isRight: false,
        },
        {
          id: 676,
          content: "Полный доступ, модификация.",
          isRight: false,
        },
      ],
    },
    {
      id: 170,
      content: "Какие инструменты используются для планового удаления файлов?",
      options: [
        {
          id: 677,
          content: "Программные средства.",
          isRight: true,
        },
        {
          id: 678,
          content: "Системы уничтожения информации.",
          isRight: false,
        },
        {
          id: 679,
          content: "Менеджеры паролей.",
          isRight: false,
        },
        {
          id: 680,
          content: "Shift+Delete.",
          isRight: false,
        },
      ],
    },
    {
      id: 171,
      content:
        "Что понимается под защищённостью информации и поддерживающей её инфраструктуры от случайных или преднамеренных воздействий естественного или искусственного характера?",
      options: [
        {
          id: 681,
          content: "Кибербезопасность.",
          isRight: true,
        },
        {
          id: 682,
          content: "Подход к информационной безопасности.",
          isRight: false,
        },
        {
          id: 683,
          content: "Целостность данных.",
          isRight: false,
        },
        {
          id: 684,
          content: "Конфиденциальность информации.",
          isRight: false,
        },
      ],
    },
    {
      id: 172,
      content: "Какие три основных принципа обеспечения информационной безопасности указаны правильно?",
      options: [
        {
          id: 685,
          content: "Целостность данных, конфиденциальность информации, доступность.",
          isRight: true,
        },
        {
          id: 686,
          content: "Кибербезопасность, конфиденциальность информации, целостность данных.",
          isRight: false,
        },
        {
          id: 687,
          content: "Конфиденциальность, целостность, общедоступность.",
          isRight: false,
        },
        {
          id: 688,
          content: "Доступность, точность, эффективность.",
          isRight: false,
        },
      ],
    },
    {
      id: 173,
      content: "… – это способность информации сохранять свою структуру и/или содержание при передаче и хранении.",
      options: [
        {
          id: 689,
          content: "Целостность данных.",
          isRight: true,
        },
        {
          id: 690,
          content: "Конфиденциальность информации.",
          isRight: false,
        },
        {
          id: 691,
          content: "Доступность.",
          isRight: false,
        },
        {
          id: 692,
          content: "Точность информации.",
          isRight: false,
        },
      ],
    },
    {
      id: 174,
      content: "… – это статус данных, определяющий необходимый уровень их защиты.",
      options: [
        {
          id: 693,
          content: "Конфиденциальность информации.",
          isRight: true,
        },
        {
          id: 694,
          content: "Целостность данных.",
          isRight: false,
        },
        {
          id: 695,
          content: "Доступность.",
          isRight: false,
        },
        {
          id: 696,
          content: "Точность информации.",
          isRight: false,
        },
      ],
    },
    {
      id: 175,
      content: "… – это возможность всех пользователей с правами доступа (авторскими) пользоваться информацией.",
      options: [
        {
          id: 697,
          content: "Доступность.",
          isRight: true,
        },
        {
          id: 698,
          content: "Конфиденциальность информации.",
          isRight: false,
        },
        {
          id: 699,
          content: "Целостность данных.",
          isRight: false,
        },
        {
          id: 700,
          content: "Точность информации.",
          isRight: false,
        },
      ],
    },
  ],
  // === Билет 8 ===
  [
    {
      id: 176,
      content: "Что такое защита информации?",
      options: [
        {
          id: 701,
          content: "Комплекс мероприятий, направленных на обеспечение ключевых аспектов информационной безопасности.",
          isRight: true,
        },
        {
          id: 702,
          content: "Возможность доступа к информации для всех пользователей с авторскими правами.",
          isRight: false,
        },
        {
          id: 703,
          content: "Присвоенный статус данных, определяющий необходимый уровень их защиты.",
          isRight: false,
        },
        {
          id: 704,
          content: "Сохранение структуры и/или содержания информации при её передаче и хранении.",
          isRight: false,
        },
      ],
    },
    {
      id: 177,
      content:
        "Как называется система официальных взглядов на проблему информационной безопасности и её решение с учётом современных тенденций?",
      options: [
        {
          id: 705,
          content: "Концепция.",
          isRight: true,
        },
        {
          id: 706,
          content: "Защита информации.",
          isRight: false,
        },
        {
          id: 707,
          content: "Эффективность.",
          isRight: false,
        },
        {
          id: 708,
          content: "Конфиденциальность информации.",
          isRight: false,
        },
      ],
    },
    {
      id: 178,
      content:
        "На каком этапе разработки концепции информационной безопасности определяется ценность защищаемого объекта?",
      options: [
        {
          id: 709,
          content: "1-й этап.",
          isRight: true,
        },
        {
          id: 710,
          content: "2-й этап.",
          isRight: false,
        },
        {
          id: 711,
          content: "3-й этап.",
          isRight: false,
        },
        {
          id: 712,
          content: "4-й этап.",
          isRight: false,
        },
      ],
    },
    {
      id: 179,
      content: "Что выполняется на втором этапе разработки концепции?",
      options: [
        {
          id: 713,
          content: "Анализ потенциальных действий злоумышленника.",
          isRight: true,
        },
        {
          id: 714,
          content: "Определение ценности защищаемого объекта.",
          isRight: false,
        },
        {
          id: 715,
          content: "Оценка надёжности средств защиты информации.",
          isRight: false,
        },
        {
          id: 716,
          content: "Доступность информации для пользователей, имеющих права доступа.",
          isRight: false,
        },
      ],
    },
    {
      id: 180,
      content: "Что выполняется на третьем этапе разработки концепции?",
      options: [
        {
          id: 717,
          content: "Оценка надёжности средств защиты информации.",
          isRight: true,
        },
        {
          id: 718,
          content: "Анализ возможных действий злоумышленника.",
          isRight: false,
        },
        {
          id: 719,
          content: "Определение ценности защищаемого объекта.",
          isRight: false,
        },
        {
          id: 720,
          content: "Доступность информации для пользователей, имеющих права доступа.",
          isRight: false,
        },
      ],
    },
    {
      id: 181,
      content: "Что выполняется на первом этапе разработки концепции?",
      options: [
        {
          id: 721,
          content: "Определение ценности защищаемого объекта.",
          isRight: true,
        },
        {
          id: 722,
          content: "Оценка надёжности средств защиты информации.",
          isRight: false,
        },
        {
          id: 723,
          content: "Анализ возможных действий злоумышленника.",
          isRight: false,
        },
        {
          id: 724,
          content: "Доступность информации для пользователей, имеющих права доступа.",
          isRight: false,
        },
      ],
    },
    {
      id: 182,
      content: "Что такое политика информационной безопасности?",
      options: [
        {
          id: 725,
          content: "Цели и задачи организации, план мероприятий по обеспечению безопасности.",
          isRight: true,
        },
        {
          id: 726,
          content: "Защита от случайных или преднамеренных воздействий естественного или искусственного характера.",
          isRight: false,
        },
        {
          id: 727,
          content: "Система официального подхода к проблеме информационной безопасности.",
          isRight: false,
        },
        {
          id: 728,
          content: "Доступность информации для пользователей, имеющих права доступа.",
          isRight: false,
        },
      ],
    },
    {
      id: 183,
      content: "Какие два вида угроз могут возникнуть в компьютерной среде организации?",
      options: [
        {
          id: 729,
          content: "Потеря или изменение данных, прекращение обслуживания.",
          isRight: true,
        },
        {
          id: 730,
          content: "Отказ оборудования или программного обеспечения, потеря данных.",
          isRight: false,
        },
        {
          id: 731,
          content: "Отказ сервиса, действия хакеров.",
          isRight: false,
        },
        {
          id: 732,
          content: "Потеря данных, их изменение.",
          isRight: false,
        },
      ],
    },
    {
      id: 184,
      content: "Какие основные типы удалённых атак на информацию в сети указаны правильно?",
      options: [
        {
          id: 733,
          content:
            "Анализ сетевого трафика, ввод ложного объекта в сеть, добавление ложного маршрута, атаки на отказ в обслуживании.",
          isRight: true,
        },
        {
          id: 734,
          content: "Потеря или изменение данных, прекращение обслуживания.",
          isRight: false,
        },
        {
          id: 735,
          content: "Анализ сетевого трафика, введение ложных объектов в сеть, потеря данных.",
          isRight: false,
        },
        {
          id: 736,
          content: "Введение ложного маршрута, атаки на отказ в обслуживании, изменение данных.",
          isRight: false,
        },
      ],
    },
    {
      id: 185,
      content: "Какие комбинации мер используются для обеспечения информационной безопасности?",
      options: [
        {
          id: 737,
          content: "Правовые, административно-организационные, программно-технические.",
          isRight: true,
        },
        {
          id: 738,
          content: "Локальная, глобальная, программная.",
          isRight: false,
        },
        {
          id: 739,
          content: "Административный, глобальный, региональный.",
          isRight: false,
        },
        {
          id: 740,
          content: "Нет правильного ответа",
          isRight: false,
        },
      ],
    },
    {
      id: 186,
      content: "Как переводится слово «Интернет» на узбекский язык?",
      options: [
        {
          id: 741,
          content: "Объединение сетей.",
          isRight: true,
        },
        {
          id: 742,
          content: "Обмен данными.",
          isRight: false,
        },
        {
          id: 743,
          content: "База данных.",
          isRight: false,
        },
        {
          id: 744,
          content: "Уникальность сетей.",
          isRight: false,
        },
      ],
    },
    {
      id: 187,
      content: "Какие правовые нормы безопасности указаны правильно?",
      options: [
        {
          id: 745,
          content: "Международные правовые нормы, национальные правовые нормы.",
          isRight: true,
        },
        {
          id: 746,
          content: "Международная, глобальная.",
          isRight: false,
        },
        {
          id: 747,
          content: "Авторские права, приказы.",
          isRight: false,
        },
        {
          id: 748,
          content: "Локальные, глобальные.",
          isRight: false,
        },
      ],
    },
    {
      id: 188,
      content: "Какие правовые нормы включают соглашения, контракты, лицензии, патенты, авторские права?",
      options: [
        {
          id: 749,
          content: "Международные правовые нормы.",
          isRight: true,
        },
        {
          id: 750,
          content: "Национальные правовые нормы.",
          isRight: false,
        },
        {
          id: 751,
          content: "Авторские права.",
          isRight: false,
        },
        {
          id: 752,
          content: "Приказы.",
          isRight: false,
        },
      ],
    },
    {
      id: 189,
      content: "На сколько типов делятся атаки в информационной безопасности?",
      options: [
        {
          id: 753,
          content: "4.",
          isRight: true,
        },
        {
          id: 754,
          content: "3.",
          isRight: false,
        },
        {
          id: 755,
          content: "5.",
          isRight: false,
        },
        {
          id: 756,
          content: "2.",
          isRight: false,
        },
      ],
    },
    {
      id: 190,
      content: "Какие сетевые атаки указаны правильно?",
      options: [
        {
          id: 757,
          content: "Атака IP Fragmentation, атака сниффер, IP-Spoofing.",
          isRight: true,
        },
        {
          id: 758,
          content: "Атаки с использованием определённого программного обеспечения.",
          isRight: false,
        },
        {
          id: 759,
          content: "Атака DOS, DDoS, фишинг, SQL Injection.",
          isRight: false,
        },
        {
          id: 760,
          content: "Появление и предотвращение бот-сетей.",
          isRight: false,
        },
      ],
    },
    {
      id: 191,
      content: "Какие программные (операционные) атаки указаны правильно?",
      options: [
        {
          id: 761,
          content: "Атаки, организованные с использованием специальных программных средств.",
          isRight: true,
        },
        {
          id: 762,
          content: "Атака IP Fragmentation, атака сниффера, IP-Spoofing.",
          isRight: false,
        },
        {
          id: 763,
          content: "Атака DOS, DDoS, фишинг, SQL Injection.",
          isRight: false,
        },
        {
          id: 764,
          content: "Появление и предотвращение бот-сетей.",
          isRight: false,
        },
      ],
    },
    {
      id: 192,
      content: "Какие атаки типа BOT-NETS указаны правильно?",
      options: [
        {
          id: 765,
          content: "Появление и предотвращение бот-сетей.",
          isRight: true,
        },
        {
          id: 766,
          content: "Атака DOS, DDoS, фишинг, SQL Injection.",
          isRight: false,
        },
        {
          id: 767,
          content: "Атаки с использованием специального программного обеспечения.",
          isRight: false,
        },
        {
          id: 768,
          content: "Атака IP Fragmentation, атака сниффера, IP-Spoofing.",
          isRight: false,
        },
      ],
    },
    {
      id: 193,
      content: "… – это преступление технологического типа. Чем этот вид преступления отличается от обычного?",
      options: [
        {
          id: 769,
          content: "Киберпреступность.",
          isRight: true,
        },
        {
          id: 770,
          content: "Кибератака.",
          isRight: false,
        },
        {
          id: 771,
          content: "Атака DOS.",
          isRight: false,
        },
        {
          id: 772,
          content: "BOT-NET.",
          isRight: false,
        },
      ],
    },
    {
      id: 194,
      content: "На сколько групп делятся сети в зависимости от их размера и цели?",
      options: [
        {
          id: 773,
          content: "2.",
          isRight: true,
        },
        {
          id: 774,
          content: "3.",
          isRight: false,
        },
        {
          id: 775,
          content: "4 уровня.",
          isRight: false,
        },
        {
          id: 776,
          content: "6 уровней.",
          isRight: false,
        },
      ],
    },
    {
      id: 195,
      content: "Как называется сеть, где все устройства расположены в пределах ограниченной области?",
      options: [
        {
          id: 777,
          content: "Локальная вычислительная сеть.",
          isRight: true,
        },
        {
          id: 778,
          content: "Глобальная вычислительная сеть.",
          isRight: false,
        },
        {
          id: 779,
          content: "Одноранговая сеть.",
          isRight: false,
        },
        {
          id: 780,
          content: "Сеть на основе сервера.",
          isRight: false,
        },
      ],
    },
    {
      id: 196,
      content: "Как называется сеть без территориальных ограничений?",
      options: [
        {
          id: 781,
          content: "Глобальная вычислительная сеть.",
          isRight: true,
        },
        {
          id: 782,
          content: "Локальная вычислительная сеть.",
          isRight: false,
        },
        {
          id: 783,
          content: "Одноранговая сеть.",
          isRight: false,
        },
        {
          id: 784,
          content: "Сеть на основе сервера.",
          isRight: false,
        },
      ],
    },
    {
      id: 197,
      content: "Сколько существует основных типов топологии сетей?",
      options: [
        {
          id: 785,
          content: "3.",
          isRight: true,
        },
        {
          id: 786,
          content: "2.",
          isRight: false,
        },
        {
          id: 787,
          content: "4 уровня.",
          isRight: false,
        },
        {
          id: 788,
          content: "5 уровней.",
          isRight: false,
        },
      ],
    },
    {
      id: 198,
      content: "Какие устройства относятся к носителям информации?",
      options: [
        {
          id: 789,
          content: "Дискета, компакт-диск, жёсткий диск, флешка.",
          isRight: true,
        },
        {
          id: 790,
          content: "Модем, компьютер, жёсткий диск.",
          isRight: false,
        },
        {
          id: 791,
          content: "Дискета, CD-ROM, процессор.",
          isRight: false,
        },
        {
          id: 792,
          content: "Компакт-диск, жёсткий диск, клавиатура.",
          isRight: false,
        },
      ],
    },
    {
      id: 199,
      content: "Опишите звёздную топологию подключения компьютеров к сети.",
      options: [
        {
          id: 793,
          content: "Имеет звёздообразную топологию.",
          isRight: true,
        },
        {
          id: 794,
          content: "Все компьютеры подключены к одной шине.",
          isRight: false,
        },
        {
          id: 795,
          content: "Компьютеры соединены с предыдущим и следующим устройством.",
          isRight: false,
        },
        {
          id: 796,
          content: "Компьютеры подключены к одному компьютеру.",
          isRight: false,
        },
      ],
    },
    {
      id: 200,
      content: "Как называется сеть, включающая одноранговые и серверные подключения?",
      options: [
        {
          id: 797,
          content: "Гибридная.",
          isRight: true,
        },
        {
          id: 798,
          content: "Смешанная.",
          isRight: false,
        },
        {
          id: 799,
          content: "Древовидная.",
          isRight: false,
        },
        {
          id: 800,
          content: "Mesh",
          isRight: false,
        },
      ],
    },
  ],
];
