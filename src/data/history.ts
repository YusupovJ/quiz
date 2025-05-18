import { IQuestion } from "@/types";

export const history: Array<IQuestion[]> = [
  [
    {
      id: 1,
      content: "Объединенная смысловой и грамматической связью последовательность речевых единиц- это:?",
      options: [
        { id: 1, content: "текст", isRight: true },
        { id: 2, content: "монолог", isRight: false },
        { id: 3, content: "абзац", isRight: false },
        { id: 4, content: "повествование", isRight: false },
        { id: 5, content: "диалог", isRight: false },
      ],
    },
    {
      id: 2,
      content:
        "Связь, при которой каждое последующее предложение в сложном синтаксическом целом соединено с предыдущим, называется:?",
      options: [
        { id: 6, content: "цепной", isRight: true },
        { id: 7, content: "параллельной", isRight: false },
        { id: 8, content: "грамматической", isRight: false },
        { id: 9, content: "интонационной", isRight: false },
        { id: 10, content: "фонетической", isRight: false },
      ],
    },
    {
      id: 3,
      content: "Сложное синтаксическое целое состоит из … .?",
      options: [
        { id: 11, content: "из двух и более предложений", isRight: true },
        { id: 12, content: "одного предложения", isRight: false },
        { id: 13, content: "только из двух предложений", isRight: false },
        { id: 14, content: "только из пяти предложений", isRight: false },
        { id: 15, content: "только из трех предложений", isRight: false },
      ],
    },
    {
      id: 4,
      content: "Абзац – это … .?",
      options: [
        { id: 16, content: "отступ в начале строки", isRight: true },
        { id: 17, content: "первое предложение текста", isRight: false },
        { id: 18, content: "прописная буква", isRight: false },
        { id: 19, content: "последнее предложение текста", isRight: false },
        { id: 20, content: "сложное синтаксическое целое", isRight: false },
      ],
    },
    {
      id: 5,
      content: "Укажите минимальную единицу текста:?",
      options: [
        { id: 21, content: "предложение", isRight: true },
        { id: 22, content: "абзац", isRight: false },
        { id: 23, content: "параграф", isRight: false },
        { id: 24, content: "глава", isRight: false },
        { id: 25, content: "словосочетание", isRight: false },
      ],
    },
    {
      id: 6,
      content: "Укажите виды связи предложений в тексте:?",
      options: [
        { id: 26, content: "цепная и параллельная", isRight: true },
        { id: 27, content: "согласование и управление", isRight: false },
        { id: 28, content: "согласование и примыкание", isRight: false },
        { id: 29, content: "одновременная и последовательная", isRight: false },
        { id: 30, content: "простая и сложная", isRight: false },
      ],
    },
    {
      id: 7,
      content: "Форма речи, которая характеризуется сменой высказываний двух лиц - это:?",
      options: [
        { id: 31, content: "диалог", isRight: true },
        { id: 32, content: "монолог", isRight: false },
        { id: 33, content: "абзац", isRight: false },
        { id: 34, content: "контекст", isRight: false },
        { id: 35, content: "полилог", isRight: false },
      ],
    },
    {
      id: 8,
      content: "Речь одного из участников диалога называется:?",
      options: [
        { id: 36, content: "репликой", isRight: true },
        { id: 37, content: "ситуацией", isRight: false },
        { id: 38, content: "заметкой", isRight: false },
        { id: 39, content: "ремаркой", isRight: false },
        { id: 40, content: "контекстом", isRight: false },
      ],
    },
    {
      id: 9,
      content: "К элементам библиографического описания НЕ относится:?",
      options: [
        { id: 41, content: "Содержание", isRight: true },
        { id: 42, content: "Заглавие – название произведения.", isRight: false },
        {
          id: 43,
          content: "Издание – сведения об отличиях данного произведения от других изданий того же произведения.",
          isRight: false,
        },
        {
          id: 44,
          content: "Выходные данные – место издания, наименование издательства и год издания.",
          isRight: false,
        },
        { id: 45, content: "Фактическое количество страниц.", isRight: false },
      ],
    },
    {
      id: 10,
      content: "Предложение «Где изобретены индийские цифры» относится … к плану.?",
      options: [
        { id: 46, content: "вопросному", isRight: true },
        { id: 47, content: "назывному", isRight: false },
        { id: 48, content: "вторичному", isRight: false },
        { id: 49, content: "тезисному", isRight: false },
        { id: 50, content: "плану-опорной схеме", isRight: false },
      ],
    },
    {
      id: 11,
      content: "Закончите фразу: Каждый текст имеет свою…?",
      options: [
        { id: 51, content: "тему", isRight: true },
        { id: 52, content: "гипотезу", isRight: false },
        { id: 53, content: "классификацию", isRight: false },
        { id: 54, content: "главу", isRight: false },
        { id: 55, content: "повторяемость", isRight: false },
      ],
    },
    {
      id: 12,
      content:
        "Укажите способ связи предложений в тексте:«В Аккре раньше всех просыпаются птицы. Они с особой радостью встречают еще нежаркое африканское солнце. Эти пернатые певцы с самого утра оглашают город дивными песнями».?",
      options: [
        { id: 56, content: "цепная связь", isRight: true },
        { id: 57, content: "параллельная связь", isRight: false },
        { id: 58, content: "смешанная связь", isRight: false },
        { id: 59, content: "линейная связь", isRight: false },
        { id: 60, content: "эти предложения не являются текстом", isRight: false },
      ],
    },
    {
      id: 13,
      content: "Речь, обращенная к самому себе или другим, - это:?",
      options: [
        { id: 61, content: "монолог", isRight: true },
        { id: 62, content: "диалог", isRight: false },
        { id: 63, content: "полилог", isRight: false },
        { id: 64, content: "контекст", isRight: false },
        { id: 65, content: "выступление", isRight: false },
      ],
    },
    {
      id: 14,
      content: "Какое из утверждений является неверным?",
      options: [
        { id: 66, content: "Микротема всегда соответствует абзацу.", isRight: true },
        { id: 67, content: "В микротемах с разных сторон раскрывается коммуникативная задача текста.", isRight: false },
        { id: 68, content: "В тексте могут быть две или более микротемы.", isRight: false },
        { id: 69, content: "Микротема раскрывает содержание одной из частей текста.", isRight: false },
        { id: 70, content: "Микротема может состоять из одного или более предложений.", isRight: false },
      ],
    },
    {
      id: 15,
      content: "В каких жанрах научного стиля дается оценка работы?",
      options: [
        { id: 71, content: "рецензия, отзыв", isRight: true },
        { id: 72, content: "диссертация, доклад", isRight: false },
        { id: 73, content: "тезисы, аннотация", isRight: false },
        { id: 74, content: "статья, резюме", isRight: false },
        { id: 75, content: "монография, конспект", isRight: false },
      ],
    },
    {
      id: 16,
      content: "Речь называется правильной, если…?",
      options: [
        { id: 76, content: "В ней соблюдены все нормы литературного языка", isRight: true },
        { id: 77, content: "В ней много заимствований, неологизмов", isRight: false },
        { id: 78, content: "В ней применены различные образные средства языка", isRight: false },
        { id: 79, content: "В ней использована аббревиатура", isRight: false },
        { id: 80, content: "В ней есть просторечная лексика", isRight: false },
      ],
    },
    {
      id: 17,
      content: "Определив в тексте микротемы, можно составить … ?",
      options: [
        { id: 81, content: "план", isRight: true },
        { id: 82, content: "аннотацию", isRight: false },
        { id: 83, content: "библиографию", isRight: false },
        { id: 84, content: "реферат", isRight: false },
        { id: 85, content: "рецензию", isRight: false },
      ],
    },
    {
      id: 18,
      content: "Как определить микротемы текста?",
      options: [
        { id: 86, content: "по ключевым словам и ключевым предложениям абзаца", isRight: true },
        { id: 87, content: "по теме текста", isRight: false },
        { id: 88, content: "по стилю текста", isRight: false },
        { id: 89, content: "по типу текста", isRight: false },
        { id: 90, content: "по главным членам предложения", isRight: false },
      ],
    },
    {
      id: 19,
      content: "К элементам развития мысли и связности речи относятся … .?",
      options: [
        { id: 91, content: "данная и новая информация текста", isRight: true },
        { id: 92, content: "новая и старая информация текста", isRight: false },
        { id: 93, content: "данная информация текста", isRight: false },
        { id: 94, content: "новая информация текста", isRight: false },
        { id: 95, content: "коммуникативная задача", isRight: false },
      ],
    },
    {
      id: 20,
      content: "Укажите специальные понятия научной сферы:?",
      options: [
        { id: 96, content: "термины", isRight: true },
        { id: 97, content: "обороты речи", isRight: false },
        { id: 98, content: "фразеологизмы", isRight: false },
        { id: 99, content: "эпитеты", isRight: false },
        { id: 100, content: "сравнения", isRight: false },
      ],
    },
    {
      id: 21,
      content:
        "Какие окончания имеют существительные профессор, доктор, директор в именительном падеже множественного числа?",
      options: [
        { id: 101, content: "-а", isRight: true },
        { id: 102, content: "-ы", isRight: false },
        { id: 103, content: "-и", isRight: false },
        { id: 104, content: "-ов", isRight: false },
        { id: 105, content: "–у", isRight: false },
      ],
    },
    {
      id: 22,
      content: "Указать ряд существительных, с которыми сочетается числительное обе?",
      options: [
        { id: 106, content: "Книга, тетрадь", isRight: true },
        { id: 107, content: "Документ, карточка", isRight: false },
        { id: 108, content: "Договор, контракт", isRight: false },
        { id: 109, content: "Пособие, учебник", isRight: false },
        { id: 110, content: "Вариант, экзамен", isRight: false },
      ],
    },
    {
      id: 23,
      content: "Указать ряд существительных, с которыми сочетается числительное оба?",
      options: [
        { id: 111, content: "Объект, реферат", isRight: true },
        { id: 112, content: "Словарь, анкета", isRight: false },
        { id: 113, content: "Цитата, аннотация", isRight: false },
        { id: 114, content: "Резюме, сфера", isRight: false },
        { id: 115, content: "Ошибка, предложение", isRight: false },
      ],
    },
    {
      id: 24,
      content: "Укажите неправильную форму употребления глагола «победить».?",
      options: [
        { id: 116, content: "Я победю", isRight: true },
        { id: 117, content: "Он победит", isRight: false },
        { id: 118, content: "Ты победишь", isRight: false },
        { id: 119, content: "Мы победим", isRight: false },
        { id: 120, content: "Они победят", isRight: false },
      ],
    },
    {
      id: 25,
      content: "Дипломная работа состоит из следующих смысловых частей:?",
      options: [
        { id: 121, content: "вводная часть, основная часть, заключение", isRight: true },
        { id: 122, content: "введение, размышление, содержание, выводы", isRight: false },
        { id: 123, content: "планирование, рассуждение, заключение", isRight: false },
        { id: 124, content: "вводная часть, обсуждение, заключение", isRight: false },
        { id: 125, content: "повествование, рассуждение, заключение", isRight: false },
      ],
    },
  ],
  [
    {
      id: 26,
      content: "Микротема – это …. .?",
      options: [
        { id: 126, content: "часть общей темы", isRight: true },
        { id: 127, content: "часть текста", isRight: false },
        { id: 128, content: "часть предложения", isRight: false },
        { id: 129, content: "часть мысли", isRight: false },
        { id: 130, content: "часть абзаца", isRight: false },
      ],
    },
    {
      id: 27,
      content: "Укажите синоним к словосочетанию «средства массовой информации»:?",
      options: [
        { id: 131, content: "пресса", isRight: true },
        { id: 132, content: "книга", isRight: false },
        { id: 133, content: "документация", isRight: false },
        { id: 134, content: "учебник", isRight: false },
        { id: 135, content: "роман", isRight: false },
      ],
    },
    {
      id: 28,
      content: "Данная информация текста – это:?",
      options: [
        { id: 136, content: "исходная информация", isRight: true },
        { id: 137, content: "новая информация", isRight: false },
        { id: 138, content: "основная информация", isRight: false },
        { id: 139, content: "неизвестная информация", isRight: false },
        { id: 140, content: "устаревшая информация", isRight: false },
      ],
    },
    {
      id: 29,
      content: "Новой информацией текста называется:?",
      options: [
        { id: 141, content: "неизвестная информация", isRight: true },
        { id: 142, content: "исходная информация", isRight: false },
        { id: 143, content: "известная информация", isRight: false },
        { id: 144, content: "устаревшая информация", isRight: false },
        { id: 145, content: "развитие информации", isRight: false },
      ],
    },
    {
      id: 30,
      content: "Сколько микротем в тексте из шести абзацев?",
      options: [
        { id: 146, content: "6", isRight: true },
        { id: 147, content: "5", isRight: false },
        { id: 148, content: "3", isRight: false },
        { id: 149, content: "1", isRight: false },
        { id: 150, content: "4", isRight: false },
      ],
    },
    {
      id: 31,
      content:
        "Укажите средство связи между предложениями: Слово может ранить больнее, чем острый нож, отравить смертельнее, чем самый сильный яд. Оно может потрясти массы людей, побудить к действию целые народы?",
      options: [
        { id: 151, content: "местоимение", isRight: true },
        { id: 152, content: "вводное слово", isRight: false },
        { id: 153, content: "синоним", isRight: false },
        { id: 154, content: "лексический повтор", isRight: false },
        { id: 155, content: "союз", isRight: false },
      ],
    },
    {
      id: 32,
      content:
        "Укажите средство связи между предложениями: Необходимо иметь ясное представление о различном предназначении языковых элементов. Например, в бытовой речи неуместно слово идентичный вместо одинаковый.?",
      options: [
        { id: 156, content: "вводное слово", isRight: true },
        { id: 157, content: "синоним", isRight: false },
        { id: 158, content: "союз", isRight: false },
        { id: 159, content: "буквальный повтор", isRight: false },
        { id: 160, content: "местоимение", isRight: false },
      ],
    },
    {
      id: 33,
      content: "Определите вид текстовой связи: Дорога шла по крутому берегу Лены. Река еще не замерзла.?",
      options: [
        { id: 161, content: "цепная", isRight: true },
        { id: 162, content: "параллельная", isRight: false },
        { id: 163, content: "подчинительная", isRight: false },
        { id: 164, content: "сочинительная", isRight: false },
        { id: 165, content: "бессоюзная", isRight: false },
      ],
    },
    {
      id: 34,
      content:
        "Определите вид текстовой связи: Октябрь был на редкость холодным, ненастным. Желтые крыши сильно почернели.?",
      options: [
        { id: 166, content: "параллельная", isRight: true },
        { id: 167, content: "цепная", isRight: false },
        { id: 168, content: "подчинительная", isRight: false },
        { id: 169, content: "сочинительная", isRight: false },
        { id: 170, content: "бессоюзная", isRight: false },
      ],
    },
    {
      id: 35,
      content:
        "Какой вид связи использован в следующем примере: Маленькие ветки пригнуло к земле. Желтые листья унесло в сторону.?",
      options: [
        { id: 171, content: "параллельная", isRight: true },
        { id: 172, content: "цепная", isRight: false },
        { id: 173, content: "подчинительная", isRight: false },
        { id: 174, content: "сочинительная", isRight: false },
        { id: 175, content: "бессоюзная", isRight: false },
      ],
    },
    {
      id: 36,
      content:
        "Какое средство связи предложении используется в тексте: Тазы – казахская борзая. Тазы содержали в юрте.?",
      options: [
        { id: 176, content: "лексический повтор", isRight: true },
        { id: 177, content: "местоименная замена", isRight: false },
        { id: 178, content: "синонимическая замена", isRight: false },
        { id: 179, content: "местоимение синоним", isRight: false },
        { id: 180, content: "местоимение", isRight: false },
      ],
    },
    {
      id: 37,
      content: "Кого считают основоположником русского языка?",
      options: [
        { id: 181, content: "А.С. Пушкина", isRight: true },
        { id: 182, content: "М.В.Ломоносова", isRight: false },
        { id: 183, content: "М.Ю.Лермонтова", isRight: false },
        { id: 184, content: "Д.И.Карамзина", isRight: false },
        { id: 185, content: "Русский народ", isRight: false },
      ],
    },
    {
      id: 38,
      content: "Укажите тип связи: …Еще одна ночь протекла……Еще один день наступил…(Ч.Айтматов).?",
      options: [
        { id: 186, content: "параллельная связь", isRight: true },
        { id: 187, content: "цепная связь", isRight: false },
        { id: 188, content: "присоединение", isRight: false },
        { id: 189, content: "дополнение", isRight: false },
        { id: 190, content: "определение", isRight: false },
      ],
    },
    {
      id: 39,
      content: "Лексические повторы, местоименная замена, синонимическая связь - основные средства выражения …",
      options: [
        { id: 191, content: "цепной связи", isRight: true },
        { id: 192, content: "подчинительной связи", isRight: false },
        { id: 193, content: "параллельной связи", isRight: false },
        { id: 194, content: "предикативной связи", isRight: false },
        { id: 195, content: "сочинительной связи", isRight: false },
      ],
    },
    {
      id: 40,
      content: "Как называется сжатая, краткая характеристика книги (статьи или сборника), ее содержания и назначения?",
      options: [
        { id: 196, content: "аннотация", isRight: true },
        { id: 197, content: "рецензия", isRight: false },
        { id: 198, content: "реферат", isRight: false },
        { id: 199, content: "доклад", isRight: false },
        { id: 200, content: "диссертация", isRight: false },
      ],
    },
    {
      id: 41,
      content: "Качество речи, характеризующееся отсутствием лишних слов, слов-паразитов?",
      options: [
        { id: 201, content: "Чистота речи", isRight: true },
        { id: 202, content: "Логичность речи", isRight: false },
        { id: 203, content: "Выразительность речи", isRight: false },
        { id: 204, content: "Богатство речи", isRight: false },
        { id: 205, content: "Уместность речи", isRight: false },
      ],
    },
    {
      id: 42,
      content: "Что называется темой текста?",
      options: [
        { id: 206, content: "смысловая основа текста", isRight: true },
        { id: 207, content: "неизвестная информация, которую предстоит узнать", isRight: false },
        {
          id: 208,
          content: "содержание нескольких самостоятельных предложений текста, связанных одной мыслью",
          isRight: false,
        },
        { id: 209, content: "модель текстов, представляющих реальные ситуации общения", isRight: false },
        { id: 210, content: "исходная информация в тексте, от которой начинается развитие мысли", isRight: false },
      ],
    },
    {
      id: 43,
      content: "К какому стилю речи относятся данные жанры: аннотация, рецензия, реферат?",
      options: [
        { id: 211, content: "научному", isRight: true },
        { id: 212, content: "публицистическому", isRight: false },
        { id: 213, content: "художественному", isRight: false },
        { id: 214, content: "официально-деловому", isRight: false },
        { id: 215, content: "разговорному", isRight: false },
      ],
    },
    {
      id: 44,
      content: "Какая лексика употребляется в научном тексте?",
      options: [
        { id: 216, content: "терминологическая", isRight: true },
        { id: 217, content: "жаргонная", isRight: false },
        { id: 218, content: "просторечная", isRight: false },
        { id: 219, content: "разговорная", isRight: false },
        { id: 220, content: "диалектная", isRight: false },
      ],
    },
    {
      id: 45,
      content: "Продолжите фразу: Рецензия- это…?",
      options: [
        { id: 221, content: "критическое описание какой-нибудь научной работы", isRight: true },
        { id: 222, content: "сжатая характеристика книги, статьи", isRight: false },
        { id: 223, content: "научный труд, посвященный изучению темы", isRight: false },
        { id: 224, content: "краткое изложение сути написанного, прочитанного", isRight: false },
        { id: 225, content: "обзор нескольких первичных текстов", isRight: false },
      ],
    },
    {
      id: 46,
      content: "План – это…?",
      options: [
        { id: 226, content: "определенная последовательность, краткая программа изложения чего-либо", isRight: true },
        { id: 227, content: "краткий ответ, возражение", isRight: false },
        {
          id: 228,
          content: "сочинение, изложение, смысловой конспект, в котором описывается что-либо",
          isRight: false,
        },
        { id: 229, content: "единица сообщения", isRight: false },
        { id: 230, content: "выдержка из текста, цитaта", isRight: false },
      ],
    },
    {
      id: 47,
      content: "Группа предложений, объединённых в целое темой и основной мыслью, – это…?",
      options: [
        { id: 231, content: "текст", isRight: true },
        { id: 232, content: "тема", isRight: false },
        { id: 233, content: "идея", isRight: false },
        { id: 234, content: "заголовок", isRight: false },
        { id: 235, content: "название", isRight: false },
      ],
    },
    {
      id: 48,
      content:
        "Название какого-либо произведения (литературного, научного, музыкального и т.п.) или отдельных его частей – это…?",
      options: [
        { id: 236, content: "заголовок", isRight: true },
        { id: 237, content: "текст", isRight: false },
        { id: 238, content: "тема", isRight: false },
        { id: 239, content: "идея", isRight: false },
        { id: 240, content: "термин", isRight: false },
      ],
    },
    {
      id: 49,
      content:
        "Укажите средство связи предложений в данном отрывке. На улице нас кольцом окружили собаки. Они виляли хвостами и, по-видимому, ни малейшего желания не имели признавать в нас чужих.?",
      options: [
        { id: 241, content: "местоименная замена", isRight: true },
        { id: 242, content: "лексический повтор", isRight: false },
        { id: 243, content: "синонимическая замена", isRight: false },
        { id: 244, content: "замена слова образным выражением", isRight: false },
        { id: 245, content: "союз", isRight: false },
      ],
    },
    {
      id: 50,
      content: "Предмет речи (то, о чём говорится в тексте) – это…?",
      options: [
        { id: 246, content: "тема", isRight: true },
        { id: 247, content: "текст", isRight: false },
        { id: 248, content: "термин", isRight: false },
        { id: 249, content: "заголовок", isRight: false },
        { id: 250, content: "идея", isRight: false },
      ],
    },
  ],
  [
    {
      id: 51,
      content: "Устная речь может быть?",
      options: [
        { id: 251, content: "монологической и диалогической", isRight: true },
        { id: 252, content: "монологической", isRight: false },
        { id: 253, content: "диалогической", isRight: false },
        { id: 254, content: "письменной", isRight: false },
        { id: 255, content: "письменной и монологической", isRight: false },
      ],
    },
    {
      id: 52,
      content:
        "Жанр научного стиля данного текста: Статья посвящена развитию навыков чтения. В ней доказывается важность совершенствования навыков чтения, рассматриваются виды чтения в зависимости от цели и установки на степень понимания, а также приводятся задания, развивающие навыки чтения. Статья предназначена для студентов, изучающих русский язык как неродной, и представляет интерес для широкого круга читателей.?",
      options: [
        { id: 256, content: "аннотация", isRight: true },
        { id: 257, content: "доклад", isRight: false },
        { id: 258, content: "реферат", isRight: false },
        { id: 259, content: "диссертация", isRight: false },
        { id: 260, content: "рецензия", isRight: false },
      ],
    },
    {
      id: 53,
      content: "Ключевые слова - это…?",
      options: [
        { id: 261, content: "слова, содержащие основной смысл высказывания", isRight: true },
        { id: 262, content: "порядок изложения содержания книги", isRight: false },
        { id: 263, content: "извлечение основной информации текста", isRight: false },
        { id: 264, content: "краткий научный текст", isRight: false },
        { id: 265, content: "краткая запись содержания книги", isRight: false },
      ],
    },
    {
      id: 54,
      content: "Порядок изложения содержания книги- это..?",
      options: [
        { id: 266, content: "план", isRight: true },
        { id: 267, content: "аннотация", isRight: false },
        { id: 268, content: "тезирование", isRight: false },
        { id: 269, content: "реферирование", isRight: false },
        { id: 270, content: "конспектирование", isRight: false },
      ],
    },
    {
      id: 55,
      content: "Виды плана: ..?",
      options: [
        { id: 271, content: "все ответы правильны", isRight: true },
        { id: 272, content: "назывной", isRight: false },
        { id: 273, content: "тезисный", isRight: false },
        { id: 274, content: "план-опорная схема", isRight: false },
        { id: 275, content: "вопросный", isRight: false },
      ],
    },
    {
      id: 56,
      content: "При составлении вопросного плана желательно использовать ...?",
      options: [
        { id: 276, content: "вопросительные слова", isRight: true },
        { id: 277, content: "словосочетание с частицей ли", isRight: false },
        { id: 278, content: "ключевые слова", isRight: false },
        { id: 279, content: "назывные предложения", isRight: false },
        { id: 280, content: "отглагольные существительные", isRight: false },
      ],
    },
    {
      id: 57,
      content: "Тезированием является …?",
      options: [
        { id: 281, content: "извлечение основной информации текста-источника", isRight: true },
        { id: 282, content: "обработка материала без существенных потерь", isRight: false },
        { id: 283, content: "один из самых сложных видов научного общения", isRight: false },
        { id: 284, content: "творческий процесс осмысления текста", isRight: false },
        { id: 285, content: "письменный анализ научного текста", isRight: false },
      ],
    },
    {
      id: 58,
      content: "Дословная выдержка из какого-либо текста – это ...?",
      options: [
        { id: 286, content: "цитирование", isRight: true },
        { id: 287, content: "сжатие", isRight: false },
        { id: 288, content: "тезис", isRight: false },
        { id: 289, content: "аннотация", isRight: false },
        { id: 290, content: "реферирование", isRight: false },
      ],
    },
    {
      id: 59,
      content: "Слово «цитата» в переводе означает ...?",
      options: [
        { id: 291, content: "приводить, провозглашать", isRight: true },
        { id: 292, content: "сжатие", isRight: false },
        { id: 293, content: "хранилище", isRight: false },
        { id: 294, content: "сокращение", isRight: false },
        { id: 295, content: "краткий вывод", isRight: false },
      ],
    },
    {
      id: 60,
      content: "Как выделяется цитата?",
      options: [
        { id: 296, content: "кавычками", isRight: true },
        { id: 297, content: "скобками", isRight: false },
        { id: 298, content: "тире", isRight: false },
        { id: 299, content: "дефисом", isRight: false },
        { id: 300, content: "запятыми", isRight: false },
      ],
    },
    {
      id: 61,
      content: "Рецензия - это ...?",
      options: [
        { id: 301, content: "письменный анализ научного произведения", isRight: true },
        { id: 302, content: "ключевые слова", isRight: false },
        { id: 303, content: "краткое обобщенное описание текста", isRight: false },
        { id: 304, content: "дословная выдержка какого-либо текста", isRight: false },
        { id: 305, content: "краткая запись содержание статьи", isRight: false },
      ],
    },
    {
      id: 62,
      content: "Как называется обобщенное описание книги, статьи?",
      options: [
        { id: 306, content: "аннотация", isRight: true },
        { id: 307, content: "конспектирование", isRight: false },
        { id: 308, content: "цитирование", isRight: false },
        { id: 309, content: "компрессия", isRight: false },
        { id: 310, content: "цитата", isRight: false },
      ],
    },
    {
      id: 63,
      content: "Где помещается аннотация?",
      options: [
        { id: 311, content: "на оборотной стороне титульного листа", isRight: true },
        { id: 312, content: "после предисловия", isRight: false },
        { id: 313, content: "в конце книги", isRight: false },
        { id: 314, content: "на обложке", isRight: false },
        { id: 315, content: "в разделе", isRight: false },
      ],
    },
    {
      id: 64,
      content: "По строению планы делятся на …?",
      options: [
        { id: 316, content: "простые и сложные", isRight: true },
        { id: 317, content: "точные и косвенные", isRight: false },
        { id: 318, content: "простые и осложненные", isRight: false },
        { id: 319, content: "вопросные и сложные", isRight: false },
        { id: 320, content: "назывные и простые", isRight: false },
      ],
    },
    {
      id: 65,
      content: "Что является целью деловой беседы?",
      options: [
        { id: 321, content: "обмен информацией", isRight: true },
        { id: 322, content: "обмен чувствами", isRight: false },
        { id: 323, content: "обмен приветствиями", isRight: false },
        { id: 324, content: "обмен продукцией", isRight: false },
        { id: 325, content: "обмен сотрудниками", isRight: false },
      ],
    },
    {
      id: 66,
      content: "Вид деловой бумаги, в которой кратко излагаются необходимые для нанимателя сведения?",
      options: [
        { id: 326, content: "резюме", isRight: true },
        { id: 327, content: "протокол", isRight: false },
        { id: 328, content: "заявление", isRight: false },
        { id: 329, content: "договор", isRight: false },
        { id: 330, content: "доверенность", isRight: false },
      ],
    },
    {
      id: 67,
      content: "Что такое дикция?",
      options: [
        { id: 331, content: "отчетливость произнесения звуков речи и их сочетаний", isRight: true },
        { id: 332, content: "мимика", isRight: false },
        { id: 333, content: "жесты", isRight: false },
        { id: 334, content: "взгляд", isRight: false },
        { id: 335, content: "интонация", isRight: false },
      ],
    },
    {
      id: 68,
      content: "Что такое жестикуляция?",
      options: [
        { id: 336, content: "значимые телодвижения, главным образом, движения головы или рук", isRight: true },
        { id: 337, content: "вербальные средства", isRight: false },
        { id: 338, content: "тактильные ощущения", isRight: false },
        { id: 339, content: "визуальные представления", isRight: false },
        { id: 340, content: "слуховые представления", isRight: false },
      ],
    },
    {
      id: 69,
      content:
        "Стиль следующего текста: Господа! Во время моего пребывания в Вашей стране я имел удовольствие посетить Вашу фирму. Благодарю за теплый прием, оказанный мне.?",
      options: [
        { id: 341, content: "официально-деловой", isRight: true },
        { id: 342, content: "научный", isRight: false },
        { id: 343, content: "публицистичекий", isRight: false },
        { id: 344, content: "разговорный", isRight: false },
        { id: 345, content: "художественный", isRight: false },
      ],
    },
    {
      id: 70,
      content: "Какое из названных слов является термином?",
      options: [
        { id: 346, content: "дефиниция", isRight: true },
        { id: 347, content: "деревня", isRight: false },
        { id: 348, content: "доставка", isRight: false },
        { id: 349, content: "домашний", isRight: false },
        { id: 350, content: "доступный", isRight: false },
      ],
    },
    {
      id: 71,
      content: "Укажите лишнее слово …?",
      options: [
        { id: 351, content: "авторитет", isRight: true },
        { id: 352, content: "автор", isRight: false },
        { id: 353, content: "авторский", isRight: false },
        { id: 354, content: "авторство", isRight: false },
        { id: 355, content: "соавтор", isRight: false },
      ],
    },
    {
      id: 72,
      content: "Отметить пример сомнения и неопределенности в речевом этикете?",
      options: [
        { id: 356, content: "У меня пока не сложилось окончательное мнение по этому поводу", isRight: true },
        { id: 357, content: "Этот пункт не вызывает возражений", isRight: false },
        { id: 358, content: "Примите мои пожелания успехов", isRight: false },
        { id: 359, content: "Позвольте выразить вам мою благодарность", isRight: false },
        { id: 360, content: "Мы ничего не имеем против", isRight: false },
      ],
    },
    {
      id: 73,
      content: "В каком из названных случаев уместна только книжная речь?",
      options: [
        { id: 361, content: "лекция в университете", isRight: true },
        { id: 362, content: "разговор пассажиров в автобусе", isRight: false },
        { id: 363, content: "беседа между друзьями", isRight: false },
        { id: 364, content: "разговор с соседями-разговор за обеденным столом", isRight: false },
      ],
    },
    {
      id: 74,
      content: "Для чего в научном тексте используются вводные слова во-первых, во-вторых, наконец?",
      options: [
        { id: 365, content: "для последовательности изложения", isRight: true },
        { id: 366, content: "для сохранения однозначности слов", isRight: false },
        { id: 367, content: "для придания речи эмоциональности", isRight: false },
        { id: 368, content: "для нарушения последовательности", isRight: false },
        { id: 369, content: "для привлечения внимания", isRight: false },
      ],
    },
    {
      id: 75,
      content: "На что указывают вводные слова видимо, вероятно?",
      options: [
        { id: 370, content: "выражают неуверенность", isRight: true },
        { id: 371, content: "выражают чувства, отношение к предмету речи", isRight: false },
        { id: 372, content: "оценивают достоверность / недостоверность высказывания", isRight: false },
        { id: 373, content: "выражают отношения перечисления", isRight: false },
        { id: 374, content: "указывают на источник сообщения", isRight: false },
      ],
    },
  ],
  [
    {
      id: 76,
      content: "На что указывают вводные слова итак, вообще, таким образом?",
      options: [
        { id: 375, content: "указывают на вывод, обобщение", isRight: true },
        { id: 376, content: "выражают чувства, отношение к предмету речи", isRight: false },
        { id: 377, content: "оценивают достоверность / недостоверность высказывания", isRight: false },
        { id: 378, content: "указывают на источник сообщения", isRight: false },
        { id: 379, content: "выражают уверенность / неуверенность", isRight: false },
      ],
    },
    {
      id: 77,
      content:
        "Согласуйте подлежащее со сказуемым в следующем предложении: «Письмо (помогать) людям общаться друг с другом».?",
      options: [
        { id: 380, content: "помогало", isRight: true },
        { id: 381, content: "помогал", isRight: false },
        { id: 382, content: "помогала", isRight: false },
        { id: 383, content: "помогали", isRight: false },
        { id: 384, content: "помоги", isRight: false },
      ],
    },
    {
      id: 78,
      content: "Главное условие культуры речи?",
      options: [
        { id: 385, content: "Соблюдение норм литературного языка", isRight: true },
        { id: 386, content: "Употребление антонимов", isRight: false },
        { id: 387, content: "Употребление фразеологизмов", isRight: false },
        { id: 388, content: "Эмоциональность речи", isRight: false },
        { id: 389, content: "Употребление синонимов", isRight: false },
      ],
    },
    {
      id: 79,
      content:
        "Вставьте в следующее предложение вместо многоточия подходящее по смыслу подлежащее: «… написан в 1200 году до нашей эры».?",
      options: [
        { id: 390, content: "текст", isRight: true },
        { id: 391, content: "книга", isRight: false },
        { id: 392, content: "надпись", isRight: false },
        { id: 393, content: "летопись", isRight: false },
        { id: 394, content: "страница", isRight: false },
      ],
    },
    {
      id: 80,
      content: "Аббревиатура – это слово, … .?",
      options: [
        { id: 395, content: "образованное из названий начальных букв или звуков", isRight: true },
        { id: 396, content: "обозначающее виды речевой деятельности", isRight: false },
        { id: 397, content: "из воровского жаргона", isRight: false },
        { id: 398, content: "иностранного происхождения", isRight: false },
        { id: 399, content: "из профессионального жаргона", isRight: false },
      ],
    },
    {
      id: 81,
      content: "Параллелизм – это …?",
      options: [
        { id: 400, content: "одинаковое построение соседних предложений", isRight: true },
        { id: 401, content: "сознательная незавершенность предложения", isRight: false },
        { id: 402, content: "единоначатие предложений", isRight: false },
        { id: 403, content: "повторение последних слов предложения", isRight: false },
        { id: 404, content: "пропуск в предложении слова, которое подразумевается из контекста", isRight: false },
      ],
    },
    {
      id: 82,
      content: "Ключевые слова - это …?",
      options: [
        { id: 405, content: "слова, содержащие основной смысл высказывания", isRight: true },
        { id: 406, content: "слова, противоположные по значению", isRight: false },
        { id: 407, content: "слова с одинаковым значением", isRight: false },
        { id: 408, content: "слова, близкие по значению", isRight: false },
        { id: 409, content: "многозначные слова", isRight: false },
      ],
    },
    {
      id: 83,
      content:
        "Определите тему текста: Синие королевские тянь-шаньские ели - естественное художественное оформление горных хребтов Заилийского Алатау. Тянь-шаньские ели поднимаются вверх, достигая высоты 40-50 метров. Охваченные туманом, эти гиганты возвышаются над глубокими пропастями гор.?",
      options: [
        { id: 410, content: "Тянь-шаньские ели", isRight: true },
        { id: 411, content: "Заилийский Алатау", isRight: false },
        { id: 412, content: "высота елей", isRight: false },
        { id: 413, content: "любовь к Родине", isRight: false },
        { id: 414, content: "оформление горных хребтов", isRight: false },
      ],
    },
    {
      id: 84,
      content:
        "Укажите способ развития информации в тексте: Этот крик и вереницы… Эти стаи, эти птицы…Эта дробь и эти трели…Это всё – весна?",
      options: [
        { id: 415, content: "параллельная", isRight: true },
        { id: 416, content: "цепная", isRight: false },
        { id: 417, content: "смешанная", isRight: false },
        { id: 418, content: "сложная", isRight: false },
        { id: 419, content: "подчинительная", isRight: false },
      ],
    },
    {
      id: 85,
      content: "Аннотация – это …?",
      options: [
        { id: 420, content: "краткое, обобщенное описание текста, книги, статьи", isRight: true },
        { id: 421, content: "порядок, в котором изложено содержание книги", isRight: false },
        { id: 422, content: "кратко сформулированные основные положения доклада, научной статьи", isRight: false },
        { id: 423, content: "один из видов извлечения основной информации текста-источника", isRight: false },
        { id: 424, content: "краткая письменная запись содержания статьи, книги, лекции", isRight: false },
      ],
    },
    {
      id: 86,
      content: "Рецензия –это...?",
      options: [
        { id: 425, content: "письменный анализ научного произведения", isRight: true },
        { id: 426, content: "краткая письменная запись содержания статьи, книги, лекции", isRight: false },
        {
          id: 427,
          content:
            "один из видов извлечения основной информации текста-источника с ее последующим переводом в определенную языковую форму",
          isRight: false,
        },
        { id: 428, content: "кратко сформулированные основные положения доклада, научной статьи", isRight: false },
        {
          id: 429,
          content:
            "порядок, в котором изложено содержание книги, последовательность, в котором раскрываются отдельные вопросы",
          isRight: false,
        },
      ],
    },
    {
      id: 87,
      content: "Письменный анализ научного произведения – это …?",
      options: [
        { id: 430, content: "рецензия", isRight: true },
        { id: 431, content: "доклад", isRight: false },
        { id: 432, content: "тезисы", isRight: false },
        { id: 433, content: "аннотация", isRight: false },
        { id: 434, content: "резюме", isRight: false },
      ],
    },
    {
      id: 88,
      content: "Задача рецензента –...?",
      options: [
        { id: 435, content: "оценить произведение, его достоинства и недостатки", isRight: true },
        { id: 436, content: "написать статью", isRight: false },
        { id: 437, content: "написать доклад", isRight: false },
        { id: 438, content: "сделать выводы по произведению", isRight: false },
        { id: 439, content: "сократить статью-оригинал", isRight: false },
      ],
    },
    {
      id: 89,
      content: "Заменить русским вариантом иноязычное слово глоссарий?",
      options: [
        { id: 440, content: "Словарь", isRight: true },
        { id: 441, content: "Словосочетание", isRight: false },
        { id: 442, content: "Связь", isRight: false },
        { id: 443, content: "Отрывок", isRight: false },
        { id: 444, content: "Книга", isRight: false },
      ],
    },
    {
      id: 90,
      content: "Укажите слова, которые употребляются в роли слов-паразитов ?",
      options: [
        { id: 445, content: "типа, короче, в общем, ну", isRight: true },
        { id: 446, content: "хлеб, дом, память", isRight: false },
        { id: 447, content: "снег, погода, дым", isRight: false },
        { id: 448, content: "ручка, книга, голос", isRight: false },
        { id: 449, content: "в, около, и", isRight: false },
      ],
    },
    {
      id: 91,
      content:
        "Краткая информация о себе как специалисте, с указанием образования, специальности (квалификации), профессиональных достоинств, трудовой биографии, своих целей в поиске работы – это..?",
      options: [
        { id: 450, content: "резюме", isRight: true },
        { id: 451, content: "отзыв", isRight: false },
        { id: 452, content: "доклад", isRight: false },
        { id: 453, content: "тезисы", isRight: false },
        { id: 454, content: "аннотация", isRight: false },
      ],
    },
    {
      id: 92,
      content: "Что помогает речи быть чистой?",
      options: [
        { id: 455, content: "соблюдение орфоэпических норм", isRight: true },
        { id: 456, content: "употребление жаргонизмов", isRight: false },
        { id: 457, content: "диалектизмов", isRight: false },
        { id: 458, content: "бранных слов", isRight: false },
        { id: 459, content: "канцеляризмов", isRight: false },
      ],
    },
    {
      id: 93,
      content: "Укажите языковые элементы, чуждые литературному языку?",
      options: [
        { id: 460, content: "употребление штампов", isRight: true },
        { id: 461, content: "строгое соблюдение орфоэпических норм", isRight: false },
        { id: 462, content: "строгое соблюдение стилистических норм", isRight: false },
        { id: 463, content: "строгое соблюдение этических норм", isRight: false },
        { id: 464, content: "правильное словоупотребление", isRight: false },
      ],
    },
    {
      id: 94,
      content: "Укажите языковые элементы, чуждые литературному языку?",
      options: [
        { id: 465, content: "употребление жаргонизмов", isRight: true },
        { id: 466, content: "строгое соблюдение орфоэпических норм", isRight: false },
        { id: 467, content: "строгое соблюдение стилистических норм", isRight: false },
        { id: 468, content: "строгое соблюдение этических норм", isRight: false },
        { id: 469, content: "правильное словоупотребление", isRight: false },
      ],
    },
    {
      id: 95,
      content: "Рубрикация –..?",
      options: [
        { id: 470, content: "деление текста на части, графическое отделение этих частей друг от друга", isRight: true },
        {
          id: 471,
          content: "совокупность библиографических сведений о документе, необходимых для его идентификации и поиска",
          isRight: false,
        },
        { id: 472, content: "комплект шрифтов одного рисунка, но разных размеров и начертаний", isRight: false },
        { id: 473, content: "междустрочный пробел, расстояние между наборными строками", isRight: false },
        { id: 474, content: "знаки препинания", isRight: false },
      ],
    },
    {
      id: 96,
      content:
        "Деление текста на части, графическое отделение их друг от друга, использование заголовков и нумераций – это … .?",
      options: [
        { id: 475, content: "рубрикация", isRight: true },
        { id: 476, content: "библиографические ссылки", isRight: false },
        { id: 477, content: "кавычки", isRight: false },
        { id: 478, content: "скобки", isRight: false },
        { id: 479, content: "схемы", isRight: false },
      ],
    },
    {
      id: 97,
      content: "Подлинный экземпляр документа?",
      options: [
        { id: 480, content: "оригинал", isRight: true },
        { id: 481, content: "дубликат", isRight: false },
        { id: 482, content: "копия", isRight: false },
        { id: 483, content: "письмо", isRight: false },
        { id: 484, content: "акт", isRight: false },
      ],
    },
    {
      id: 98,
      content:
        "Определите вид связи предложений в тексте: Статуи воинов, найденные на северо-западе полуострова Мангышлак, стали одной из самых громких сенсаций XX века. Размерами эти изваяния напоминают знаменитых идолов с острова Пасхи.?",
      options: [
        { id: 485, content: "синонимическая замена", isRight: true },
        { id: 486, content: "местоименная замена", isRight: false },
        { id: 487, content: "родовидовые слова", isRight: false },
        { id: 488, content: "антонимы", isRight: false },
        { id: 489, content: "синонимы", isRight: false },
      ],
    },
    {
      id: 99,
      content: "Буква «А» пишется в слове…?",
      options: [
        { id: 490, content: "Отр…сль", isRight: true },
        { id: 491, content: "Грам…та", isRight: false },
        { id: 492, content: "Рек..мендация", isRight: false },
        { id: 493, content: "Пр…фессионал", isRight: false },
        { id: 494, content: "Пр…грамма", isRight: false },
      ],
    },
    {
      id: 100,
      content: "Вербальное общение – это общение с помощью?",
      options: [
        { id: 495, content: "слов", isRight: true },
        { id: 496, content: "мимики", isRight: false },
        { id: 497, content: "взглядов", isRight: false },
        { id: 498, content: "жестов", isRight: false },
        { id: 499, content: "поз", isRight: false },
      ],
    },
  ],
];
