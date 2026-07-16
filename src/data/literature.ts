import { IQuestion } from "@/types";

export const literatureTitles = [
  "Ф.М. Достоевский «Братья Карамазовы»",
  "Н.В. Гоголь «Мёртвые души»",
  "И.С. Тургенев «Ася»",
  "И.А. Гончаров «Обыкновенная история»",
  "В.Г. Короленко «Парадокс»",
  "Л.Н. Толстой «Анна Каренина»",
  "Ф.М. Достоевский «Преступление и наказание»",
  "М. Сервантес «Дон Кихот»",
  "М.А. Булгаков «Мастер и Маргарита»",
  "В.Г. Распутин «Прощание с Матёрой»",
  "А.П. Чехов «Палата №6»",
  "М.Ю. Лермонтов «Герой нашего времени»",
  "М.А. Шолохов «Тихий Дон»",
];

export const literature: IQuestion[][] = [
  // === Ф.М. Достоевский «Братья Карамазовы» ===
  [
    {
      id: 1,
      content: "Кто является автором романа «Братья Карамазовы»?",
      options: [
        { id: 1, content: "Лев Николаевич Толстой", isRight: false },
        { id: 2, content: "Фёдор Михайлович Достоевский", isRight: true },
        { id: 3, content: "Иван Сергеевич Тургенев", isRight: false },
        { id: 4, content: "Николай Васильевич Гоголь", isRight: false },
      ],
    },
    {
      id: 2,
      content: "К какому жанру относится «Братья Карамазовы»?",
      options: [
        { id: 5, content: "Роман", isRight: true },
        { id: 6, content: "Поэма", isRight: false },
        { id: 7, content: "Комедия", isRight: false },
        { id: 8, content: "Сборник рассказов", isRight: false },
      ],
    },
    {
      id: 3,
      content: "Как звали трёх законных братьев Карамазовых?",
      options: [
        { id: 9, content: "Дмитрий, Иван и Алексей", isRight: true },
        { id: 10, content: "Пётр, Павел и Николай", isRight: false },
        { id: 11, content: "Родион, Аркадий и Лев", isRight: false },
        { id: 12, content: "Степан, Андрей и Михаил", isRight: false },
      ],
    },
    {
      id: 4,
      content: "Кто на самом деле убил Фёдора Павловича Карамазова?",
      options: [
        { id: 13, content: "Дмитрий Карамазов", isRight: false },
        { id: 14, content: "Иван Карамазов", isRight: false },
        { id: 15, content: "Лакей Смердяков", isRight: true },
        { id: 16, content: "Григорий, старый слуга", isRight: false },
      ],
    },
    {
      id: 5,
      content: "Кем приходился Смердяков Фёдору Павловичу Карамазову?",
      options: [
        { id: 17, content: "Внебрачным сыном", isRight: true },
        { id: 18, content: "Родным племянником", isRight: false },
        { id: 19, content: "Двоюродным братом", isRight: false },
        { id: 20, content: "Приёмным сыном из приюта", isRight: false },
      ],
    },
    {
      id: 6,
      content: "Как называется знаменитая поэма, которую Иван Карамазов рассказывает брату Алёше?",
      options: [
        { id: 21, content: "«Легенда о Великом инквизиторе»", isRight: true },
        { id: 22, content: "«Сон смешного человека»", isRight: false },
        { id: 23, content: "«Легенда о Мадонне»", isRight: false },
        { id: 24, content: "«Исповедь грешника»", isRight: false },
      ],
    },
    {
      id: 7,
      content: "Кто из братьев Карамазовых становится послушником в монастыре и учеником старца Зосимы?",
      options: [
        { id: 25, content: "Дмитрий", isRight: false },
        { id: 26, content: "Иван", isRight: false },
        { id: 27, content: "Алексей (Алёша)", isRight: true },
        { id: 28, content: "Смердяков", isRight: false },
      ],
    },
    {
      id: 8,
      content: "Кто такой старец Зосима в романе?",
      options: [
        { id: 29, content: "Прокурор на суде над Дмитрием", isRight: false },
        { id: 30, content: "Духовный наставник, монах-старец", isRight: true },
        { id: 31, content: "Уездный врач", isRight: false },
        { id: 32, content: "Помещик, сосед Карамазовых", isRight: false },
      ],
    },
    {
      id: 9,
      content: "Из-за какой женщины возникает острое соперничество между Дмитрием и его отцом Фёдором Павловичем?",
      options: [
        { id: 33, content: "Катерина Ивановна", isRight: false },
        { id: 34, content: "Грушенька (Аграфена Александровна)", isRight: true },
        { id: 35, content: "Лиза Хохлакова", isRight: false },
        { id: 36, content: "Софья Ивановна", isRight: false },
      ],
    },
    {
      id: 10,
      content: "В каком преступлении несправедливо обвиняют и осуждают Дмитрия Карамазова?",
      options: [
        { id: 37, content: "В убийстве отца", isRight: true },
        { id: 38, content: "В поджоге монастыря", isRight: false },
        { id: 39, content: "В ограблении купца", isRight: false },
        { id: 40, content: "В убийстве брата Ивана", isRight: false },
      ],
    },
    {
      id: 11,
      content: "Что происходит с Иваном Карамазовым под тяжестью вины и потрясения ближе к финалу романа?",
      options: [
        { id: 41, content: "Он уходит в монастырь", isRight: false },
        { id: 42, content: "Он заболевает горячкой, у него начинаются галлюцинации (ему является чёрт)", isRight: true },
        { id: 43, content: "Он женится на Грушеньке", isRight: false },
        { id: 44, content: "Он уезжает за границу и исчезает", isRight: false },
      ],
    },
    {
      id: 12,
      content: "Кому принадлежит знаменитый вопрос-сомнение романа: «Если Бога нет, то всё позволено»?",
      options: [
        { id: 45, content: "Ход мыслей связан с Иваном Карамазовым", isRight: true },
        { id: 46, content: "Это проповедь старца Зосимы", isRight: false },
        { id: 47, content: "Это слова Алёши на суде", isRight: false },
        { id: 48, content: "Это признание Григория, слуги", isRight: false },
      ],
    },
  ],
  // === Н.В. Гоголь «Мёртвые души» ===
  [
    {
      id: 13,
      content: "К какому жанру сам Н.В. Гоголь отнёс «Мёртвые души»?",
      options: [
        { id: 49, content: "Роман", isRight: false },
        { id: 50, content: "Поэма", isRight: true },
        { id: 51, content: "Повесть", isRight: false },
        { id: 52, content: "Комедия", isRight: false },
      ],
    },
    {
      id: 14,
      content: "В чём заключается основная афера главного героя произведения?",
      options: [
        { id: 53, content: "Он подделывает документы на владение землёй", isRight: false },
        { id: 54, content: "Он скупает у помещиков умерших крестьян, ещё числящихся живыми по ревизии", isRight: true },
        { id: 55, content: "Он продаёт помещикам несуществующие имения", isRight: false },
        { id: 56, content: "Он выдаёт себя за ревизора, приехавшего с проверкой", isRight: false },
      ],
    },
    {
      id: 15,
      content: "Как зовут главного героя «Мёртвых душ»?",
      options: [
        { id: 57, content: "Павел Иванович Чичиков", isRight: true },
        { id: 58, content: "Иван Александрович Хлестаков", isRight: false },
        { id: 59, content: "Акакий Акакиевич Башмачкин", isRight: false },
        { id: 60, content: "Максим Максимыч", isRight: false },
      ],
    },
    {
      id: 16,
      content: "Какого помещика Чичиков посещает первым в своём путешествии?",
      options: [
        { id: 61, content: "Собакевича", isRight: false },
        { id: 62, content: "Манилова", isRight: true },
        { id: 63, content: "Плюшкина", isRight: false },
        { id: 64, content: "Ноздрёва", isRight: false },
      ],
    },
    {
      id: 17,
      content: "Какая черта характера отличает помещика Манилова?",
      options: [
        { id: 65, content: "Приторная мечтательность и пустая, бездеятельная любезность", isRight: true },
        { id: 66, content: "Скупость, доходящая до крайности", isRight: false },
        { id: 67, content: "Буйство, лихость и страсть к скандалам", isRight: false },
        { id: 68, content: "Мелочная подозрительность и суеверие", isRight: false },
      ],
    },
    {
      id: 18,
      content: "Кто из помещиков боится продешевить и опасается, что мёртвые души могут «как-нибудь в хозяйстве понадобиться»?",
      options: [
        { id: 69, content: "Ноздрёв", isRight: false },
        { id: 70, content: "Коробочка", isRight: true },
        { id: 71, content: "Манилов", isRight: false },
        { id: 72, content: "Собакевич", isRight: false },
      ],
    },
    {
      id: 19,
      content: "Какой помещик изображён как буян, лжец и азартный игрок, чуть не поколотивший Чичикова?",
      options: [
        { id: 73, content: "Плюшкин", isRight: false },
        { id: 74, content: "Собакевич", isRight: false },
        { id: 75, content: "Ноздрёв", isRight: true },
        { id: 76, content: "Манилов", isRight: false },
      ],
    },
    {
      id: 20,
      content: "С кем из русских писателей Гоголь связывал замысел «Мёртвых душ», получив от него подсказку сюжета?",
      options: [
        { id: 77, content: "С А.С. Пушкиным", isRight: true },
        { id: 78, content: "С В.Г. Белинским", isRight: false },
        { id: 79, content: "С И.С. Тургеневым", isRight: false },
        { id: 80, content: "С В.А. Жуковским", isRight: false },
      ],
    },
    {
      id: 21,
      content: "Какому помещику принадлежат слова, приведённые в поэме: «У меня не так... у меня когда свинина — всю свинью давай на стол, баранина — всего барана тащи»?",
      options: [
        { id: 81, content: "Собакевичу", isRight: true },
        { id: 82, content: "Ноздрёву", isRight: false },
        { id: 83, content: "Плюшкину", isRight: false },
        { id: 84, content: "Манилову", isRight: false },
      ],
    },
    {
      id: 22,
      content: "Кого из помещиков Чичиков посещает последним, и кто доведён до крайней степени скупости и запустения?",
      options: [
        { id: 85, content: "Коробочку", isRight: false },
        { id: 86, content: "Собакевича", isRight: false },
        { id: 87, content: "Плюшкина", isRight: true },
        { id: 88, content: "Ноздрёва", isRight: false },
      ],
    },
    {
      id: 23,
      content: "Каким знаменитым лирическим образом завершается первый том «Мёртвых душ»?",
      options: [
        { id: 89, content: "Образом птицы-тройки, несущейся неизвестно куда", isRight: true },
        { id: 90, content: "Описанием бала у губернатора", isRight: false },
        { id: 91, content: "Сценой бегства Чичикова из города", isRight: false },
        { id: 92, content: "Рассказом о капитане Копейкине", isRight: false },
      ],
    },
    {
      id: 24,
      content: "Что произошло со вторым томом «Мёртвых душ»?",
      options: [
        { id: 93, content: "Он был утерян при переезде", isRight: false },
        { id: 94, content: "Гоголь сжёг рукопись второго тома", isRight: true },
        { id: 95, content: "Его запретила цензура и уничтожила", isRight: false },
        { id: 96, content: "Он был издан полностью после смерти автора", isRight: false },
      ],
    },
    {
      id: 25,
      content: "Какой смысл вкладывается в само название «Мёртвые души»?",
      options: [
        { id: 97, content: "Только прямой: умершие крестьяне, числящиеся по ревизии живыми", isRight: false },
        { id: 98, content: "И прямой смысл — умершие крестьяне, и переносный — духовное омертвение помещиков и чиновников", isRight: true },
        { id: 99, content: "Указание на призраков, являющихся Чичикову", isRight: false },
        { id: 100, content: "Намёк на солдат, погибших на войне", isRight: false },
      ],
    },
  ],
  // === И.С. Тургенев «Ася» ===
  [
    {
      id: 26,
      content: "К какому жанру относится произведение И.С. Тургенева «Ася»?",
      options: [
        { id: 101, content: "Роман", isRight: false },
        { id: 102, content: "Повесть", isRight: true },
        { id: 103, content: "Поэма", isRight: false },
        { id: 104, content: "Рассказ", isRight: false },
      ],
    },
    {
      id: 27,
      content: "От чьего лица ведётся повествование в «Асе»?",
      options: [
        { id: 105, content: "От лица господина Н.Н.", isRight: true },
        { id: 106, content: "От лица самой Аси", isRight: false },
        { id: 107, content: "От лица Гагина", isRight: false },
        { id: 108, content: "От лица всеведущего автора", isRight: false },
      ],
    },
    {
      id: 28,
      content: "Кем приходится Ася Гагину?",
      options: [
        { id: 109, content: "Женой", isRight: false },
        { id: 110, content: "Двоюродной сестрой", isRight: false },
        { id: 111, content: "Сводной сестрой", isRight: true },
        { id: 112, content: "Невестой", isRight: false },
      ],
    },
    {
      id: 29,
      content: "Каково происхождение Аси?",
      options: [
        { id: 113, content: "Она законная дочь богатых родителей", isRight: false },
        { id: 114, content: "Она внебрачная дочь", isRight: true },
        { id: 115, content: "Она сирота без родных", isRight: false },
        { id: 116, content: "Она приёмная дочь Гагина", isRight: false },
      ],
    },
    {
      id: 30,
      content: "Где происходит основное действие повести?",
      options: [
        { id: 117, content: "В Париже", isRight: false },
        { id: 118, content: "В небольшом немецком городке на Рейне", isRight: true },
        { id: 119, content: "В Петербурге", isRight: false },
        { id: 120, content: "В швейцарской деревне в Альпах", isRight: false },
      ],
    },
    {
      id: 31,
      content: "Как настоящее полное имя героини, которую называют Асей?",
      options: [
        { id: 121, content: "Анна", isRight: true },
        { id: 122, content: "Александра", isRight: false },
        { id: 123, content: "Анастасия", isRight: false },
        { id: 124, content: "Антонина", isRight: false },
      ],
    },
    {
      id: 32,
      content: "Кем была мать Аси?",
      options: [
        { id: 125, content: "Знатной дворянкой", isRight: false },
        { id: 126, content: "Иностранной гувернанткой", isRight: false },
        { id: 127, content: "Горничной в доме отца", isRight: true },
        { id: 128, content: "Актрисой", isRight: false },
      ],
    },
    {
      id: 33,
      content: "Как ведёт себя господин Н.Н. в решающий момент, когда Ася признаётся ему в чувствах на свидании?",
      options: [
        { id: 129, content: "Сразу же делает ей предложение", isRight: false },
        { id: 130, content: "Проявляет нерешительность и упрекает её, не решаясь сказать о любви", isRight: true },
        { id: 131, content: "Спокойно объясняет, что уже помолвлен с другой", isRight: false },
        { id: 132, content: "Просит её руки у Гагина", isRight: false },
      ],
    },
    {
      id: 34,
      content: "Чем заканчивается история отношений господина Н.Н. и Аси?",
      options: [
        { id: 133, content: "Они венчаются и живут вместе", isRight: false },
        { id: 134, content: "Ася и Гагин внезапно уезжают, и герой навсегда теряет её", isRight: true },
        { id: 135, content: "Ася выходит замуж за Гагина", isRight: false },
        { id: 136, content: "Герой увозит Асю в Россию", isRight: false },
      ],
    },
    {
      id: 35,
      content: "Какая тема является центральной в повести «Ася»?",
      options: [
        { id: 137, content: "Тема упущенного счастья и нерешительности героя", isRight: true },
        { id: 138, content: "Тема крепостного права и крестьянского быта", isRight: false },
        { id: 139, content: "Тема войны и воинского долга", isRight: false },
        { id: 140, content: "Тема научного прогресса", isRight: false },
      ],
    },
    {
      id: 36,
      content: "Какие слова героя из финала повести передают горечь утраты?",
      options: [
        { id: 141, content: "«Отцы и дети — вечный спор поколений»", isRight: false },
        { id: 142, content: "«У счастья нет завтрашнего дня... у него есть настоящее — и то не день, а мгновение»", isRight: true },
        { id: 143, content: "«Умом Россию не понять»", isRight: false },
        { id: 144, content: "«Свобода лучше, чем несвобода»", isRight: false },
      ],
    },
  ],
  // === И.А. Гончаров «Обыкновенная история» ===
  [
    {
      id: 37,
      content: "В каком году был впервые напечатан роман И.А. Гончарова «Обыкновенная история»?",
      options: [
        { id: 145, content: "В 1837 году", isRight: false },
        { id: 146, content: "В 1847 году", isRight: true },
        { id: 147, content: "В 1859 году", isRight: false },
        { id: 148, content: "В 1869 году", isRight: false },
      ],
    },
    {
      id: 38,
      content: "К какому жанру относится «Обыкновенная история»?",
      options: [
        { id: 149, content: "Роман", isRight: true },
        { id: 150, content: "Поэма", isRight: false },
        { id: 151, content: "Комедия в стихах", isRight: false },
        { id: 152, content: "Сборник рассказов", isRight: false },
      ],
    },
    {
      id: 39,
      content: "Как зовут дядю главного героя, воплощающего в романе трезвый практицизм?",
      options: [
        { id: 153, content: "Илья Ильич Адуев", isRight: false },
        { id: 154, content: "Андрей Иванович Адуев", isRight: false },
        { id: 155, content: "Пётр Иванович Адуев", isRight: true },
        { id: 156, content: "Александр Фёдорович Адуев", isRight: false },
      ],
    },
    {
      id: 40,
      content: "Откуда приезжает в Петербург молодой Александр Адуев в начале романа?",
      options: [
        { id: 157, content: "Из Москвы", isRight: false },
        { id: 158, content: "Из-за границы, после учёбы", isRight: false },
        { id: 159, content: "Из уездного города", isRight: false },
        { id: 160, content: "Из родовой деревни Грачи", isRight: true },
      ],
    },
    {
      id: 41,
      content: "Как зовут мать Александра Адуева, которая с любовью и тревогой провожает сына в столицу?",
      options: [
        { id: 161, content: "Лизавета Александровна", isRight: false },
        { id: 162, content: "Анна Павловна", isRight: true },
        { id: 163, content: "Наденька Любецкая", isRight: false },
        { id: 164, content: "Юлия Тафаева", isRight: false },
      ],
    },
    {
      id: 42,
      content: "Ироническое выражение «вещественные знаки невещественных отношений» в романе относится к чему?",
      options: [
        { id: 165, content: "К хранимым Александром памяткам о любви — локону волос и колечку", isRight: true },
        { id: 166, content: "К деловым бумагам и договорам дяди", isRight: false },
        { id: 167, content: "К письмам матери из деревни", isRight: false },
        { id: 168, content: "К гонорарам за литературные труды героя", isRight: false },
      ],
    },
    {
      id: 43,
      content: "Чем занимается в Петербурге Пётр Иванович Адуев?",
      options: [
        { id: 169, content: "Служит армейским офицером", isRight: false },
        { id: 170, content: "Живёт исключительно литературным трудом", isRight: false },
        { id: 171, content: "Служит чиновником и является совладельцем завода", isRight: true },
        { id: 172, content: "Управляет театром", isRight: false },
      ],
    },
    {
      id: 44,
      content: "В чём состоит основной идейный конфликт романа «Обыкновенная история»?",
      options: [
        { id: 173, content: "В борьбе героя с крепостным гнётом", isRight: false },
        { id: 174, content: "В противостоянии двух поколений одной крестьянской семьи", isRight: false },
        { id: 175, content: "В соперничестве героев за наследство", isRight: false },
        { id: 176, content: "В столкновении восторженного романтизма Александра и трезвого практицизма его дяди", isRight: true },
      ],
    },
    {
      id: 45,
      content: "Как меняется Александр Адуев к финалу романа?",
      options: [
        { id: 177, content: "Становится знаменитым поэтом и остаётся верен романтическим идеалам", isRight: false },
        { id: 178, content: "Превращается в расчётливого практика и карьериста, во многом похожего на дядю", isRight: true },
        { id: 179, content: "Навсегда уезжает жить в деревню к матери", isRight: false },
        { id: 180, content: "Разоряется и остаётся ни с чем", isRight: false },
      ],
    },
    {
      id: 46,
      content: "Как зовут девушку, в которую Александр страстно влюбляется в Петербурге и которая затем отдаёт предпочтение другому?",
      options: [
        { id: 181, content: "Наденька Любецкая", isRight: true },
        { id: 182, content: "Ольга Ильинская", isRight: false },
        { id: 183, content: "Вера", isRight: false },
        { id: 184, content: "Софья", isRight: false },
      ],
    },
    {
      id: 47,
      content: "Кто из критиков высоко оценил антиромантическую направленность «Обыкновенной истории» и её жизненную правду?",
      options: [
        { id: 185, content: "Д.И. Писарев", isRight: false },
        { id: 186, content: "Н.А. Добролюбов", isRight: false },
        { id: 187, content: "В.Г. Белинский", isRight: true },
        { id: 188, content: "А.А. Григорьев", isRight: false },
      ],
    },
  ],
  // === В.Г. Короленко «Парадокс» ===
  [
    {
      id: 48,
      content: "Как сам В.Г. Короленко определил жанр «Парадокса»?",
      options: [
        { id: 189, content: "Роман", isRight: false },
        { id: 190, content: "Очерк", isRight: true },
        { id: 191, content: "Поэма", isRight: false },
        { id: 192, content: "Комедия", isRight: false },
      ],
    },
    {
      id: 49,
      content: "Какова главная физическая особенность центрального персонажа — «феномена»?",
      options: [
        { id: 193, content: "Он слеп от рождения", isRight: false },
        { id: 194, content: "Он лишён обеих рук", isRight: true },
        { id: 195, content: "Он глух и нем", isRight: false },
        { id: 196, content: "Он не может ходить из-за больных ног", isRight: false },
      ],
    },
    {
      id: 50,
      content: "Каким образом безрукий «феномен» пишет и выполняет разные действия?",
      options: [
        { id: 197, content: "Держа перо зубами", isRight: false },
        { id: 198, content: "С помощью ног", isRight: true },
        { id: 199, content: "Локтями", isRight: false },
        { id: 200, content: "Ему помогает во всём слуга", isRight: false },
      ],
    },
    {
      id: 51,
      content: "Какой знаменитый афоризм произносит и записывает на бумаге безрукий «феномен»?",
      options: [
        { id: 201, content: "«Человек создан для счастья, как птица для полёта»", isRight: true },
        { id: 202, content: "«Человек — это звучит гордо»", isRight: false },
        { id: 203, content: "«Красота спасёт мир»", isRight: false },
        { id: 204, content: "«В человеке всё должно быть прекрасно»", isRight: false },
      ],
    },
    {
      id: 52,
      content: "Из какого произведения происходит фраза «Человек создан для счастья, как птица для полёта», которую нередко ошибочно приписывают другим авторам?",
      options: [
        { id: 205, content: "Из пьесы М. Горького «На дне»", isRight: false },
        { id: 206, content: "Из рассказа А.П. Чехова", isRight: false },
        { id: 207, content: "Из очерка В.Г. Короленко «Парадокс»", isRight: true },
        { id: 208, content: "Из романа Л.Н. Толстого", isRight: false },
      ],
    },
    {
      id: 53,
      content: "Как зовут «феномена», который называет себя шляхтичем?",
      options: [
        { id: 209, content: "Ян Залуский", isRight: true },
        { id: 210, content: "Пан Тыбурций", isRight: false },
        { id: 211, content: "Януш Радзивилл", isRight: false },
        { id: 212, content: "Юзеф Скавронский", isRight: false },
      ],
    },
    {
      id: 54,
      content: "В чём состоит сам «парадокс», который добавляет «феномен» к своему изречению о счастье?",
      options: [
        { id: 213, content: "Что счастье приходит только к богатым", isRight: false },
        { id: 214, content: "Что счастье не всегда создано для человека", isRight: true },
        { id: 215, content: "Что счастья вообще не существует", isRight: false },
        { id: 216, content: "Что счастье можно купить за деньги", isRight: false },
      ],
    },
    {
      id: 55,
      content: "От чьего лица ведётся повествование в «Парадоксе»?",
      options: [
        { id: 217, content: "От лица самого безрукого «феномена»", isRight: false },
        { id: 218, content: "От лица стороннего всезнающего рассказчика", isRight: false },
        { id: 219, content: "От лица взрослого, вспоминающего эпизод своего детства", isRight: true },
        { id: 220, content: "От лица матери мальчиков", isRight: false },
      ],
    },
    {
      id: 56,
      content: "Чем заняты братья-мальчики в начале рассказа, до появления «феномена»?",
      options: [
        { id: 221, content: "Читают книгу в саду", isRight: false },
        { id: 222, content: "Удят рыбу во дворе", isRight: false },
        { id: 223, content: "Играют, устроив во дворе «рыбную ловлю»", isRight: true },
        { id: 224, content: "Помогают отцу в поле", isRight: false },
      ],
    },
    {
      id: 57,
      content: "Какая мысль является главной в очерке «Парадокс»?",
      options: [
        { id: 225, content: "Осуждение богатства и роскоши", isRight: false },
        { id: 226, content: "Размышление о счастье и назначении человека", isRight: true },
        { id: 227, content: "Прославление воинской доблести", isRight: false },
        { id: 228, content: "Описание красоты родной природы", isRight: false },
      ],
    },
  ],
  // === Л.Н. Толстой «Анна Каренина» ===
  [
    {
      id: 58,
      content: "К какому жанру относится произведение Л.Н. Толстого «Анна Каренина»?",
      options: [
        { id: 229, content: "Роман", isRight: true },
        { id: 230, content: "Поэма", isRight: false },
        { id: 231, content: "Рассказ", isRight: false },
        { id: 232, content: "Драма в стихах", isRight: false },
      ],
    },
    {
      id: 59,
      content: "Какой эпиграф предпослан роману «Анна Каренина»?",
      options: [
        { id: 233, content: "«В человеке всё должно быть прекрасно»", isRight: false },
        { id: 234, content: "«Мне отмщение, и Аз воздам»", isRight: true },
        { id: 235, content: "«Береги честь смолоду»", isRight: false },
        { id: 236, content: "«Что день грядущий мне готовит»", isRight: false },
      ],
    },
    {
      id: 60,
      content: "Как звучит знаменитая первая фраза романа?",
      options: [
        { id: 237, content: "«Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему»", isRight: true },
        { id: 238, content: "«В начале жизни школу помню я»", isRight: false },
        { id: 239, content: "«Свежо предание, а верится с трудом»", isRight: false },
        { id: 240, content: "«Мы все учились понемногу»", isRight: false },
      ],
    },
    {
      id: 61,
      content: "Кто является законным мужем Анны Карениной?",
      options: [
        { id: 241, content: "Константин Левин", isRight: false },
        { id: 242, content: "Алексей Александрович Каренин", isRight: true },
        { id: 243, content: "Степан Облонский", isRight: false },
        { id: 244, content: "Николай Ростов", isRight: false },
      ],
    },
    {
      id: 62,
      content: "Кто становится возлюбленным Анны, ради которого она оставляет мужа?",
      options: [
        { id: 245, content: "Граф Алексей Кириллович Вронский", isRight: true },
        { id: 246, content: "Князь Андрей Болконский", isRight: false },
        { id: 247, content: "Евгений Онегин", isRight: false },
        { id: 248, content: "Родион Раскольников", isRight: false },
      ],
    },
    {
      id: 63,
      content: "Какая пара составляет параллельную сюжетную линию рядом с историей Анны и Вронского?",
      options: [
        { id: 249, content: "Пьер Безухов и Наташа Ростова", isRight: false },
        { id: 250, content: "Константин Левин и Кити Щербацкая", isRight: true },
        { id: 251, content: "Обломов и Ольга Ильинская", isRight: false },
        { id: 252, content: "Чичиков и Коробочка", isRight: false },
      ],
    },
    {
      id: 64,
      content: "Кем Кити Щербацкая первоначально была увлечена, прежде чем принять любовь Левина?",
      options: [
        { id: 253, content: "Стивой Облонским", isRight: false },
        { id: 254, content: "Алексеем Карениным", isRight: false },
        { id: 255, content: "Вронским", isRight: true },
        { id: 256, content: "Сергеем Кознышевым", isRight: false },
      ],
    },
    {
      id: 65,
      content: "Как погибает Анна Каренина в финале романа?",
      options: [
        { id: 257, content: "Умирает от болезни", isRight: false },
        { id: 258, content: "Бросается под поезд", isRight: true },
        { id: 259, content: "Принимает яд", isRight: false },
        { id: 260, content: "Тонет в реке", isRight: false },
      ],
    },
    {
      id: 66,
      content: "Кем приходятся друг другу Анна Каренина и Степан («Стива») Облонский?",
      options: [
        { id: 261, content: "Мужем и женой", isRight: false },
        { id: 262, content: "Братом и сестрой", isRight: true },
        { id: 263, content: "Отцом и дочерью", isRight: false },
        { id: 264, content: "Кузеном и кузиной по мужу", isRight: false },
      ],
    },
    {
      id: 67,
      content: "Как зовут сына Анны Карениной, к которому она глубоко привязана?",
      options: [
        { id: 265, content: "Митя", isRight: false },
        { id: 266, content: "Серёжа (Сергей)", isRight: true },
        { id: 267, content: "Николенька", isRight: false },
        { id: 268, content: "Гриша", isRight: false },
      ],
    },
    {
      id: 68,
      content: "Какой герой романа во многом воплощает духовные искания и взгляды самого Толстого, размышляя о смысле жизни и труде на земле?",
      options: [
        { id: 269, content: "Вронский", isRight: false },
        { id: 270, content: "Каренин", isRight: false },
        { id: 271, content: "Константин Левин", isRight: true },
        { id: 272, content: "Облонский", isRight: false },
      ],
    },
    {
      id: 69,
      content: "Где происходит роковая первая встреча Анны и Вронского, предвещающая трагический финал?",
      options: [
        { id: 273, content: "На балу в Москве", isRight: false },
        { id: 274, content: "На железнодорожном вокзале в Москве", isRight: true },
        { id: 275, content: "В имении Левина", isRight: false },
        { id: 276, content: "В театре в Петербурге", isRight: false },
      ],
    },
    {
      id: 70,
      content: "Какая нравственная тема, связанная с эпиграфом, является одной из центральных в романе?",
      options: [
        { id: 277, content: "Тема возмездия и Божьего суда над человеком, а не людского осуждения", isRight: true },
        { id: 278, content: "Прославление светского общества и его нравов", isRight: false },
        { id: 279, content: "Восхваление супружеской измены как пути к свободе", isRight: false },
        { id: 280, content: "Отрицание значения семьи в жизни человека", isRight: false },
      ],
    },
  ],
  // === Ф.М. Достоевский «Преступление и наказание» ===
  [
    {
      id: 71,
      content: "К какому жанру относится произведение Ф.М. Достоевского «Преступление и наказание»?",
      options: [
        { id: 281, content: "Социально-психологический роман", isRight: true },
        { id: 282, content: "Историческая поэма", isRight: false },
        { id: 283, content: "Авантюрная повесть", isRight: false },
        { id: 284, content: "Сатирическая комедия", isRight: false },
      ],
    },
    {
      id: 72,
      content: "Как звали главного героя романа, бывшего студента, задумавшего убийство?",
      options: [
        { id: 285, content: "Дмитрий Разумихин", isRight: false },
        { id: 286, content: "Родион Раскольников", isRight: true },
        { id: 287, content: "Аркадий Свидригайлов", isRight: false },
        { id: 288, content: "Семён Мармеладов", isRight: false },
      ],
    },
    {
      id: 73,
      content: "На какие два разряда, согласно теории Раскольникова, делятся все люди?",
      options: [
        { id: 289, content: "На бедных и богатых", isRight: false },
        { id: 290, content: "На верующих и неверующих", isRight: false },
        { id: 291, content: "На «тварей дрожащих» и «право имеющих»", isRight: true },
        { id: 292, content: "На честных и преступных", isRight: false },
      ],
    },
    {
      id: 74,
      content: "Кем по роду занятий была Алёна Ивановна, которую убил Раскольников?",
      options: [
        { id: 293, content: "Старуха-процентщица", isRight: true },
        { id: 294, content: "Прачка", isRight: false },
        { id: 295, content: "Содержательница трактира", isRight: false },
        { id: 296, content: "Швея", isRight: false },
      ],
    },
    {
      id: 75,
      content: "Кто стал второй, случайной жертвой Раскольникова, вернувшись в квартиру во время убийства?",
      options: [
        { id: 297, content: "Настасья, служанка", isRight: false },
        { id: 298, content: "Лизавета, сестра старухи-процентщицы", isRight: true },
        { id: 299, content: "Пульхерия Александровна, мать героя", isRight: false },
        { id: 300, content: "Катерина Ивановна Мармеладова", isRight: false },
      ],
    },
    {
      id: 76,
      content: "Кому принадлежит и о чём эти слова: «Тварь ли я дрожащая или право имею»?",
      options: [
        { id: 301, content: "Это размышление Раскольникова о своей теории и своём месте среди людей", isRight: true },
        { id: 302, content: "Это упрёк Порфирия Петровича на допросе", isRight: false },
        { id: 303, content: "Это слова Сони Мармеладовой о своей судьбе", isRight: false },
        { id: 304, content: "Это фраза Свидригайлова перед самоубийством", isRight: false },
      ],
    },
    {
      id: 77,
      content: "Чем зарабатывала на жизнь Соня Мармеладова, помогая своей семье?",
      options: [
        { id: 305, content: "Работала гувернанткой", isRight: false },
        { id: 306, content: "Вынуждена была заниматься проституцией («жёлтый билет»)", isRight: true },
        { id: 307, content: "Давала уроки музыки", isRight: false },
        { id: 308, content: "Служила прачкой", isRight: false },
      ],
    },
    {
      id: 78,
      content: "Какой библейский эпизод Соня читает Раскольникову вслух?",
      options: [
        { id: 309, content: "О воскрешении Лазаря", isRight: true },
        { id: 310, content: "О блудном сыне", isRight: false },
        { id: 311, content: "О Каине и Авеле", isRight: false },
        { id: 312, content: "О Ноевом ковчеге", isRight: false },
      ],
    },
    {
      id: 79,
      content: "Кто из героев ведёт следствие по делу об убийстве и психологически «изматывает» Раскольникова беседами?",
      options: [
        { id: 313, content: "Пётр Петрович Лужин", isRight: false },
        { id: 314, content: "Следователь Порфирий Петрович", isRight: true },
        { id: 315, content: "Дмитрий Разумихин", isRight: false },
        { id: 316, content: "Аркадий Свидригайлов", isRight: false },
      ],
    },
    {
      id: 80,
      content: "Что советует Порфирий Петрович сделать Раскольникову в их последнем разговоре?",
      options: [
        { id: 317, content: "Немедленно бежать за границу", isRight: false },
        { id: 318, content: "Явиться с повинной и принять страдание", isRight: true },
        { id: 319, content: "Молчать и всё отрицать", isRight: false },
        { id: 320, content: "Свалить вину на Николая-маляра", isRight: false },
      ],
    },
    {
      id: 81,
      content: "Какой мучительный сон видит Раскольников ещё до убийства, вспоминая детство?",
      options: [
        { id: 321, content: "Сон о засухе и пожаре в родном городе", isRight: false },
        { id: 322, content: "Сон о том, как пьяные мужики забивают насмерть старую лошадь", isRight: true },
        { id: 323, content: "Сон о собственных похоронах", isRight: false },
        { id: 324, content: "Сон о встрече с покойным отцом в поле", isRight: false },
      ],
    },
    {
      id: 82,
      content: "Где оказывается Раскольников в эпилоге романа и кто следует за ним?",
      options: [
        { id: 325, content: "В Москве, куда за ним едет мать", isRight: false },
        { id: 326, content: "На каторге в Сибири, куда за ним приезжает Соня", isRight: true },
        { id: 327, content: "За границей вместе с сестрой Дуней", isRight: false },
        { id: 328, content: "В петербургской больнице под надзором Разумихина", isRight: false },
      ],
    },
    {
      id: 83,
      content: "Какая идея заложена Достоевским в финал романа, в историю пребывания Раскольникова на каторге?",
      options: [
        { id: 329, content: "Торжество наказания и окончательное отчаяние героя", isRight: false },
        { id: 330, content: "Начало духовного возрождения героя через любовь и веру", isRight: true },
        { id: 331, content: "Подтверждение правоты его теории о «право имеющих»", isRight: false },
        { id: 332, content: "Признание бессмысленности всякого раскаяния", isRight: false },
      ],
    },
  ],
  // === М. Сервантес «Дон Кихот» ===
  [
    {
      id: 84,
      content: "К какому литературному жанру относится роман Сервантеса «Дон Кихот», высмеивающий увлечение книгами о странствующих рыцарях?",
      options: [
        { id: 333, content: "Пародия на рыцарские романы", isRight: true },
        { id: 334, content: "Античная трагедия", isRight: false },
        { id: 335, content: "Плутовская автобиография", isRight: false },
        { id: 336, content: "Пасторальная поэма", isRight: false },
      ],
    },
    {
      id: 85,
      content: "В какой стране происходит действие романа «Дон Кихот»?",
      options: [
        { id: 337, content: "Италия", isRight: false },
        { id: 338, content: "Франция", isRight: false },
        { id: 339, content: "Испания", isRight: true },
        { id: 340, content: "Португалия", isRight: false },
      ],
    },
    {
      id: 86,
      content: "Как зовут коня Дон Кихота?",
      options: [
        { id: 341, content: "Буцефал", isRight: false },
        { id: 342, content: "Росинант", isRight: true },
        { id: 343, content: "Инцитат", isRight: false },
        { id: 344, content: "Баярд", isRight: false },
      ],
    },
    {
      id: 87,
      content: "Кого Дон Кихот избрал дамой своего сердца и провозгласил прекраснейшей на свете?",
      options: [
        { id: 345, content: "Дульсинею Тобосскую", isRight: true },
        { id: 346, content: "Марселу", isRight: false },
        { id: 347, content: "Доротею", isRight: false },
        { id: 348, content: "Альтисидору", isRight: false },
      ],
    },
    {
      id: 88,
      content: "Как зовут оруженосца Дон Кихота, сопровождающего его в странствиях?",
      options: [
        { id: 349, content: "Самсон Карраско", isRight: false },
        { id: 350, content: "Санчо Панса", isRight: true },
        { id: 351, content: "Джиневра", isRight: false },
        { id: 352, content: "Пьетро", isRight: false },
      ],
    },
    {
      id: 89,
      content: "За кого принял Дон Кихот ветряные мельницы, на которые бросился в атаку?",
      options: [
        { id: 353, content: "За разбойников", isRight: false },
        { id: 354, content: "За великанов", isRight: true },
        { id: 355, content: "За волшебников", isRight: false },
        { id: 356, content: "За вражеское войско", isRight: false },
      ],
    },
    {
      id: 90,
      content: "Что послужило причиной помешательства Дон Кихота, заставившего его отправиться в рыцарские странствия?",
      options: [
        { id: 357, content: "Чрезмерное чтение рыцарских романов", isRight: true },
        { id: 358, content: "Тяжёлая болезнь после ранения", isRight: false },
        { id: 359, content: "Потеря состояния и разорение", isRight: false },
        { id: 360, content: "Смерть возлюбленной", isRight: false },
      ],
    },
    {
      id: 91,
      content: "Какую награду Дон Кихот обещал Санчо Пансе за верную службу?",
      options: [
        { id: 361, content: "Королевскую корону", isRight: false },
        { id: 362, content: "Управление островом (губернаторство)", isRight: true },
        { id: 363, content: "Половину своих земель в Ламанче", isRight: false },
        { id: 364, content: "Руку своей племянницы", isRight: false },
      ],
    },
    {
      id: 92,
      content: "На каком животном путешествует оруженосец Санчо Панса?",
      options: [
        { id: 365, content: "На муле", isRight: false },
        { id: 366, content: "На осле", isRight: true },
        { id: 367, content: "На боевом коне", isRight: false },
        { id: 368, content: "На верблюде", isRight: false },
      ],
    },
    {
      id: 93,
      content: "Из какой области Испании происходит герой, давший название роману «Хитроумный идальго Дон Кихот Ламанчский»?",
      options: [
        { id: 369, content: "Из Ламанчи", isRight: true },
        { id: 370, content: "Из Андалусии", isRight: false },
        { id: 371, content: "Из Каталонии", isRight: false },
        { id: 372, content: "Из Кастилии-и-Леона", isRight: false },
      ],
    },
    {
      id: 94,
      content: "Кому в реальности принадлежит образ Дульсинеи Тобосской, идеализированный Дон Кихотом в облике знатной дамы?",
      options: [
        { id: 373, content: "Знатной герцогине из соседнего замка", isRight: false },
        { id: 374, content: "Простой крестьянке из деревни близ Тобосо", isRight: true },
        { id: 375, content: "Дочери трактирщика, приютившего рыцаря", isRight: false },
        { id: 376, content: "Пастушке, в которую он был влюблён в юности", isRight: false },
      ],
    },
    {
      id: 95,
      content: "Какая мысль наиболее точно отражает смысл образа Дон Кихота, ставшего нарицательным?",
      options: [
        { id: 377, content: "Хитрый обманщик, наживающийся на чужой доверчивости", isRight: false },
        { id: 378, content: "Благородный мечтатель, сражающийся с воображаемым злом ради высоких идеалов", isRight: true },
        { id: 379, content: "Жестокий тиран, стремящийся к власти любой ценой", isRight: false },
        { id: 380, content: "Расчётливый делец, ищущий во всём выгоду", isRight: false },
      ],
    },
  ],
  // === М.А. Булгаков «Мастер и Маргарита» ===
  [
    {
      id: 96,
      content: "К какому жанру принято относить роман «Мастер и Маргарита», сочетающий сатиру, философию, фантастику и любовную линию?",
      options: [
        { id: 381, content: "Историческая хроника", isRight: false },
        { id: 382, content: "Роман (мистико-философский, многоплановый)", isRight: true },
        { id: 383, content: "Поэма в прозе", isRight: false },
        { id: 384, content: "Производственный очерк", isRight: false },
      ],
    },
    {
      id: 97,
      content: "Сколько лет Булгаков работал над романом, так и не завершив его окончательную правку до своей смерти в 1940 году?",
      options: [
        { id: 385, content: "Около трёх лет", isRight: false },
        { id: 386, content: "Более десяти лет (примерно с 1928 года)", isRight: true },
        { id: 387, content: "Ровно один год", isRight: false },
        { id: 388, content: "Около двадцати пяти лет", isRight: false },
      ],
    },
    {
      id: 98,
      content: "На каком композиционном приёме построен роман, где повествование о Москве переплетается с главами о древнем Ершалаиме?",
      options: [
        { id: 389, content: "«Роман в романе»", isRight: true },
        { id: 390, content: "Дневниковая исповедь", isRight: false },
        { id: 391, content: "Кольцевое обрамление сказки", isRight: false },
        { id: 392, content: "Эпистолярная переписка", isRight: false },
      ],
    },
    {
      id: 99,
      content: "Кто из героев ершалаимских глав ведёт допрос бродячего философа Иешуа Га-Ноцри и утверждает приговор?",
      options: [
        { id: 393, content: "Кентурион Марк Крысобой", isRight: false },
        { id: 394, content: "Первосвященник Каифа", isRight: false },
        { id: 395, content: "Прокуратор Иудеи Понтий Пилат", isRight: true },
        { id: 396, content: "Ученик Левий Матвей", isRight: false },
      ],
    },
    {
      id: 100,
      content: "Кому и в какой сцене Воланд произносит знаменитую фразу «Рукописи не горят»?",
      options: [
        { id: 397, content: "Берлиозу на Патриарших прудах", isRight: false },
        { id: 398, content: "Мастеру, когда Бегемот возвращает сожжённую рукопись романа", isRight: true },
        { id: 399, content: "Понтию Пилату во сне", isRight: false },
        { id: 400, content: "Ивану Бездомному в клинике", isRight: false },
      ],
    },
    {
      id: 101,
      content: "Как зовут кота из свиты Воланда — огромного, ходящего на задних лапах и говорящего?",
      options: [
        { id: 401, content: "Азазелло", isRight: false },
        { id: 402, content: "Бегемот", isRight: true },
        { id: 403, content: "Фагот", isRight: false },
        { id: 404, content: "Абадонна", isRight: false },
      ],
    },
    {
      id: 102,
      content: "Кто из свиты Воланда носит прозвище Фагот и предстаёт в клетчатом костюме с треснувшим пенсне?",
      options: [
        { id: 405, content: "Коровьев", isRight: true },
        { id: 406, content: "Азазелло", isRight: false },
        { id: 407, content: "Гелла", isRight: false },
        { id: 408, content: "Бегемот", isRight: false },
      ],
    },
    {
      id: 103,
      content: "Кто из свиты Воланда — единственная женщина, рыжеволосая ведьма-служанка со шрамом на шее?",
      options: [
        { id: 409, content: "Наташа", isRight: false },
        { id: 410, content: "Маргарита", isRight: false },
        { id: 411, content: "Гелла", isRight: true },
        { id: 412, content: "Фрида", isRight: false },
      ],
    },
    {
      id: 104,
      content: "Где именно происходит сеанс чёрной магии со свитой Воланда, обернувшийся разоблачением и денежным дождём?",
      options: [
        { id: 413, content: "В ресторане Дома Грибоедова", isRight: false },
        { id: 414, content: "В театре Варьете", isRight: true },
        { id: 415, content: "В квартире №50 на Садовой", isRight: false },
        { id: 416, content: "В клинике профессора Стравинского", isRight: false },
      ],
    },
    {
      id: 105,
      content: "Из-за чего Берлиоз гибнет под колёсами трамвая на Патриарших прудах, как и предсказал Воланд?",
      options: [
        { id: 417, content: "Он поскользнулся на разлитом Аннушкой подсолнечном масле", isRight: true },
        { id: 418, content: "Его толкнул в толпе Коровьев", isRight: false },
        { id: 419, content: "Он был ослеплён вспышкой грозы", isRight: false },
        { id: 420, content: "Его сбил автомобиль, а не трамвай", isRight: false },
      ],
    },
    {
      id: 106,
      content: "Кому принадлежат слова: «Никогда и ничего не просите! Никогда и ничего, и в особенности у тех, кто сильнее вас»?",
      options: [
        { id: 421, content: "Мастеру", isRight: false },
        { id: 422, content: "Понтию Пилату", isRight: false },
        { id: 423, content: "Воланду", isRight: true },
        { id: 424, content: "Иешуа Га-Ноцри", isRight: false },
      ],
    },
    {
      id: 107,
      content: "Какая участь ожидает Мастера и Маргариту в финале романа по решению высших сил?",
      options: [
        { id: 425, content: "Они возвращаются к прежней жизни в Москве", isRight: false },
        { id: 426, content: "Они обретают вечный покой", isRight: true },
        { id: 427, content: "Они остаются служить в свите Воланда", isRight: false },
        { id: 428, content: "Они получают свет наравне с Иешуа", isRight: false },
      ],
    },
  ],
  // === В.Г. Распутин «Прощание с Матёрой» ===
  [
    {
      id: 108,
      content: "К какому жанру относится произведение В.Г. Распутина «Прощание с Матёрой»?",
      options: [
        { id: 429, content: "Роман", isRight: false },
        { id: 430, content: "Повесть", isRight: true },
        { id: 431, content: "Поэма", isRight: false },
        { id: 432, content: "Рассказ", isRight: false },
      ],
    },
    {
      id: 109,
      content: "Что представляет собой Матёра, с которой прощаются герои?",
      options: [
        { id: 433, content: "Остров и деревня на реке Ангаре", isRight: true },
        { id: 434, content: "Небольшой город в степи", isRight: false },
        { id: 435, content: "Горное село на Кавказе", isRight: false },
        { id: 436, content: "Рыбацкий посёлок на берегу моря", isRight: false },
      ],
    },
    {
      id: 110,
      content: "По какой причине Матёра должна быть затоплена?",
      options: [
        { id: 437, content: "Из-за весеннего разлива и наводнения", isRight: false },
        { id: 438, content: "Из-за строительства ГЭС на Ангаре", isRight: true },
        { id: 439, content: "Из-за прокладки железной дороги", isRight: false },
        { id: 440, content: "Из-за истощения земель и переезда жителей", isRight: false },
      ],
    },
    {
      id: 111,
      content: "Кто является главной героиней повести?",
      options: [
        { id: 441, content: "Старуха Дарья Пинигина", isRight: true },
        { id: 442, content: "Молодая учительница Настасья", isRight: false },
        { id: 443, content: "Соседка Клавдия", isRight: false },
        { id: 444, content: "Городская гостья Мария", isRight: false },
      ],
    },
    {
      id: 112,
      content: "Кто такой «Хозяин» острова в повести?",
      options: [
        { id: 445, content: "Старый рыбак, живущий на отшибе", isRight: false },
        { id: 446, content: "Председатель сельсовета", isRight: false },
        { id: 447, content: "Маленький таинственный зверёк — дух-хранитель Матёры", isRight: true },
        { id: 448, content: "Приезжий начальник из города", isRight: false },
      ],
    },
    {
      id: 113,
      content: "Что такое «царский листвень» в повести?",
      options: [
        { id: 449, content: "Старинная церковь в центре деревни", isRight: false },
        { id: 450, content: "Огромная древняя лиственница, которую не смогли уничтожить", isRight: true },
        { id: 451, content: "Резной сундук Дарьи с семейными реликвиями", isRight: false },
        { id: 452, content: "Название парохода, увозившего людей", isRight: false },
      ],
    },
    {
      id: 114,
      content: "Как зовут сына Дарьи Пинигиной?",
      options: [
        { id: 453, content: "Егор", isRight: false },
        { id: 454, content: "Богодул", isRight: false },
        { id: 455, content: "Андрей", isRight: false },
        { id: 456, content: "Павел", isRight: true },
      ],
    },
    {
      id: 115,
      content: "Против чего отчаянно протестуют Дарья и другие старухи?",
      options: [
        { id: 457, content: "Против разорения деревенского кладбища и уничтожения крестов", isRight: true },
        { id: 458, content: "Против закрытия сельской школы", isRight: false },
        { id: 459, content: "Против отмены парома на Ангаре", isRight: false },
        { id: 460, content: "Против запрета ловить рыбу", isRight: false },
      ],
    },
    {
      id: 116,
      content: "Куда должны переселиться жители Матёры?",
      options: [
        { id: 461, content: "В новый посёлок на другом берегу", isRight: true },
        { id: 462, content: "В далёкий южный город", isRight: false },
        { id: 463, content: "В соседнюю такую же деревню на острове", isRight: false },
        { id: 464, content: "На заброшенный хутор в тайге", isRight: false },
      ],
    },
    {
      id: 117,
      content: "Какая мысль наиболее полно выражает смысл повести?",
      options: [
        { id: 465, content: "Технический прогресс всегда приносит людям счастье", isRight: false },
        { id: 466, content: "Утрата родной земли — это разрыв связи человека с памятью, корнями и предками", isRight: true },
        { id: 467, content: "Городская жизнь во всём лучше деревенской", isRight: false },
        { id: 468, content: "Молодое поколение обязано во всём слушаться стариков", isRight: false },
      ],
    },
    {
      id: 118,
      content: "Чьи размышления передают слова: «Правда в памяти. У кого нет памяти, нет жизни»?",
      options: [
        { id: 469, content: "Внука Андрея", isRight: false },
        { id: 470, content: "Сына Павла", isRight: false },
        { id: 471, content: "Старухи Дарьи", isRight: true },
        { id: 472, content: "Старика Богодула", isRight: false },
      ],
    },
  ],
  // === А.П. Чехов «Палата №6» ===
  [
    {
      id: 119,
      content: "К какому жанру относится произведение А.П. Чехова «Палата №6»?",
      options: [
        { id: 473, content: "Роман", isRight: false },
        { id: 474, content: "Повесть", isRight: true },
        { id: 475, content: "Поэма", isRight: false },
        { id: 476, content: "Комедия", isRight: false },
      ],
    },
    {
      id: 120,
      content: "Как зовут доктора, заведующего больницей, который является главным героем произведения?",
      options: [
        { id: 477, content: "Андрей Ефимыч Рагин", isRight: true },
        { id: 478, content: "Дмитрий Ионыч Старцев", isRight: false },
        { id: 479, content: "Осип Степаныч Дымов", isRight: false },
        { id: 480, content: "Евгений Васильевич Базаров", isRight: false },
      ],
    },
    {
      id: 121,
      content: "Как зовут пациента палаты №6, страдающего манией преследования, с которым доктор ведёт долгие философские беседы?",
      options: [
        { id: 481, content: "Семён Лазаревич Мойсейка", isRight: false },
        { id: 482, content: "Иван Дмитрич Громов", isRight: true },
        { id: 483, content: "Михаил Аверьяныч", isRight: false },
        { id: 484, content: "Сергей Сергеич", isRight: false },
      ],
    },
    {
      id: 122,
      content: "Как зовут сторожа при палате №6, который бьёт больных и держит их в повиновении?",
      options: [
        { id: 485, content: "Никита", isRight: true },
        { id: 486, content: "Ермолай", isRight: false },
        { id: 487, content: "Захар", isRight: false },
        { id: 488, content: "Прохор", isRight: false },
      ],
    },
    {
      id: 123,
      content: "Чем душевным расстройством страдает Иван Дмитрич Громов?",
      options: [
        { id: 489, content: "Раздвоением личности", isRight: false },
        { id: 490, content: "Манией преследования", isRight: true },
        { id: 491, content: "Потерей памяти", isRight: false },
        { id: 492, content: "Меланхолией от несчастной любви", isRight: false },
      ],
    },
    {
      id: 124,
      content: "Чем изначально привлекает доктора Рагина общение с Громовым?",
      options: [
        { id: 493, content: "Возможностью испытать новое лекарство", isRight: false },
        { id: 494, content: "Умом и интересной беседой на философские темы", isRight: true },
        { id: 495, content: "Родственными связями с губернатором", isRight: false },
        { id: 496, content: "Обещанием крупного наследства", isRight: false },
      ],
    },
    {
      id: 125,
      content: "Как складывается судьба самого доктора Рагина в финале произведения?",
      options: [
        { id: 497, content: "Он уезжает лечиться за границу и выздоравливает", isRight: false },
        { id: 498, content: "Его самого объявляют больным и запирают в палате №6", isRight: true },
        { id: 499, content: "Он получает повышение и становится главным врачом губернии", isRight: false },
        { id: 500, content: "Он открывает частную практику в столице", isRight: false },
      ],
    },
    {
      id: 126,
      content: "Что происходит с Рагиным после того, как он оказывается заперт в палате №6 как пациент?",
      options: [
        { id: 501, content: "Он бежит из больницы и скрывается", isRight: false },
        { id: 502, content: "Он умирает от апоплексического удара", isRight: true },
        { id: 503, content: "Его выпускают, признав здоровым", isRight: false },
        { id: 504, content: "Он полностью теряет рассудок и остаётся там навсегда", isRight: false },
      ],
    },
    {
      id: 127,
      content: "Что испытывает Рагин, когда впервые сам оказывается за решёткой палаты и его избивает сторож Никита?",
      options: [
        { id: 505, content: "Облегчение и умиротворение", isRight: false },
        { id: 506, content: "Ужас, боль и отчаяние от насилия и несправедливости", isRight: true },
        { id: 507, content: "Полное равнодушие", isRight: false },
        { id: 508, content: "Радость от встречи со старыми знакомыми", isRight: false },
      ],
    },
    {
      id: 128,
      content: "Какая философская позиция характерна для доктора Рагина на протяжении большей части повести?",
      options: [
        { id: 509, content: "Активная борьба за права больных", isRight: false },
        { id: 510, content: "Пассивное примирение с действительностью и вера в то, что страдание неважно", isRight: true },
        { id: 511, content: "Стремление к богатству любой ценой", isRight: false },
        { id: 512, content: "Революционный призыв к переустройству общества", isRight: false },
      ],
    },
    {
      id: 129,
      content: "Какая из тем является одной из центральных в повести «Палата №6»?",
      options: [
        { id: 513, content: "Равнодушие, насилие и бездействие перед лицом страдания", isRight: true },
        { id: 514, content: "Радость крестьянского труда на земле", isRight: false },
        { id: 515, content: "Приключения на морском путешествии", isRight: false },
        { id: 516, content: "Торжество научного прогресса", isRight: false },
      ],
    },
  ],
  // === М.Ю. Лермонтов «Герой нашего времени» ===
  [
    {
      id: 130,
      content: "Каким по счёту в истории русской литературы принято считать роман «Герой нашего времени»?",
      options: [
        { id: 517, content: "Первым историческим романом", isRight: false },
        { id: 518, content: "Первым социально-психологическим романом", isRight: true },
        { id: 519, content: "Первым романом в стихах", isRight: false },
        { id: 520, content: "Первым сатирическим романом", isRight: false },
      ],
    },
    {
      id: 131,
      content: "К какому литературному типу традиционно относят главного героя Григория Печорина?",
      options: [
        { id: 521, content: "Тип «лишнего человека»", isRight: true },
        { id: 522, content: "Тип «маленького человека»", isRight: false },
        { id: 523, content: "Тип «нового человека»", isRight: false },
        { id: 524, content: "Тип «народного заступника»", isRight: false },
      ],
    },
    {
      id: 132,
      content: "Какова фамилия главного героя романа?",
      options: [
        { id: 525, content: "Онегин", isRight: false },
        { id: 526, content: "Печорин", isRight: true },
        { id: 527, content: "Грушницкий", isRight: false },
        { id: 528, content: "Вернер", isRight: false },
      ],
    },
    {
      id: 133,
      content: "Как зовут пожилого штабс-капитана, который рассказывает историю о Бэле?",
      options: [
        { id: 529, content: "Максим Максимыч", isRight: true },
        { id: 530, content: "Доктор Вернер", isRight: false },
        { id: 531, content: "Азамат", isRight: false },
        { id: 532, content: "Казбич", isRight: false },
      ],
    },
    {
      id: 134,
      content: "Кем приходится Бэла в повести, названной её именем?",
      options: [
        { id: 533, content: "Дочерью коменданта крепости", isRight: false },
        { id: 534, content: "Молодой черкешенкой, похищенной для Печорина", isRight: true },
        { id: 535, content: "Женой Максима Максимыча", isRight: false },
        { id: 536, content: "Сестрой доктора Вернера", isRight: false },
      ],
    },
    {
      id: 135,
      content: "С кем Печорин стреляется на дуэли в повести «Княжна Мери»?",
      options: [
        { id: 537, content: "С доктором Вернером", isRight: false },
        { id: 538, content: "С Грушницким", isRight: true },
        { id: 539, content: "С Максимом Максимычем", isRight: false },
        { id: 540, content: "С драгунским капитаном", isRight: false },
      ],
    },
    {
      id: 136,
      content: "Какая женщина в романе была единственной, кого Печорин по-настоящему любил, и появляется в «Княжне Мери» замужней дамой?",
      options: [
        { id: 541, content: "Вера", isRight: true },
        { id: 542, content: "Бэла", isRight: false },
        { id: 543, content: "Княжна Мери", isRight: false },
        { id: 544, content: "«ундина» из Тамани", isRight: false },
      ],
    },
    {
      id: 137,
      content: "Что характерно для расположения частей романа по отношению к хронологии описываемых событий?",
      options: [
        { id: 545, content: "Части идут строго по хронологии событий", isRight: false },
        { id: 546, content: "Порядок частей в книге не совпадает с хронологией событий", isRight: true },
        { id: 547, content: "Все события происходят в один день", isRight: false },
        { id: 548, content: "События изложены в обратном хронологическом порядке от конца к началу", isRight: false },
      ],
    },
    {
      id: 138,
      content: "Какая из перечисленных частей завершает роман «Герой нашего времени»?",
      options: [
        { id: 549, content: "«Бэла»", isRight: false },
        { id: 550, content: "«Тамань»", isRight: false },
        { id: 551, content: "«Фаталист»", isRight: true },
        { id: 552, content: "«Максим Максимыч»", isRight: false },
      ],
    },
    {
      id: 139,
      content: "В какой повести Печорин сталкивается с контрабандистами и слепым мальчиком в приморском городке?",
      options: [
        { id: 553, content: "«Тамань»", isRight: true },
        { id: 554, content: "«Бэла»", isRight: false },
        { id: 555, content: "«Фаталист»", isRight: false },
        { id: 556, content: "«Княжна Мери»", isRight: false },
      ],
    },
    {
      id: 140,
      content: "Кому принадлежат слова из предисловия: «Герой Нашего Времени... точно, портрет, но не одного человека: это портрет, составленный из пороков всего нашего поколения»?",
      options: [
        { id: 557, content: "Максиму Максимычу", isRight: false },
        { id: 558, content: "Автору (в предисловии к роману)", isRight: true },
        { id: 559, content: "Доктору Вернеру", isRight: false },
        { id: 560, content: "Грушницкому", isRight: false },
      ],
    },
    {
      id: 141,
      content: "Какая философская проблема поставлена в центре повести «Фаталист»?",
      options: [
        { id: 561, content: "Проблема крепостного права", isRight: false },
        { id: 562, content: "Проблема предопределения и судьбы", isRight: true },
        { id: 563, content: "Проблема отцов и детей", isRight: false },
        { id: 564, content: "Проблема сохранения народных традиций", isRight: false },
      ],
    },
    {
      id: 142,
      content: "Что во многом объединяет судьбы Бэлы, Веры и княжны Мери в романе?",
      options: [
        { id: 565, content: "Все они становятся жёнами Печорина", isRight: false },
        { id: 566, content: "Все они несчастливы из-за связи с Печориным", isRight: true },
        { id: 567, content: "Все они мстят Печорину на дуэли", isRight: false },
        { id: 568, content: "Все они уезжают вместе с Печориным в Персию", isRight: false },
      ],
    },
  ],
  // === М.А. Шолохов «Тихий Дон» ===
  [
    {
      id: 143,
      content: "К какому жанру относится «Тихий Дон» Михаила Шолохова?",
      options: [
        { id: 569, content: "Роман-эпопея", isRight: true },
        { id: 570, content: "Историческая повесть", isRight: false },
        { id: 571, content: "Поэма в прозе", isRight: false },
        { id: 572, content: "Сборник рассказов", isRight: false },
      ],
    },
    {
      id: 144,
      content: "Какой престижной международной награды был удостоен Михаил Шолохов в 1965 году?",
      options: [
        { id: 573, content: "Пулитцеровская премия", isRight: false },
        { id: 574, content: "Нобелевская премия по литературе", isRight: true },
        { id: 575, content: "Гонкуровская премия", isRight: false },
        { id: 576, content: "Букеровская премия", isRight: false },
      ],
    },
    {
      id: 145,
      content: "Кто является главным героем романа «Тихий Дон»?",
      options: [
        { id: 577, content: "Григорий Мелехов", isRight: true },
        { id: 578, content: "Пантелей Прокофьевич", isRight: false },
        { id: 579, content: "Михаил Кошевой", isRight: false },
        { id: 580, content: "Степан Астахов", isRight: false },
      ],
    },
    {
      id: 146,
      content: "Между какими двумя женщинами разворачивается любовный конфликт в жизни Григория Мелехова?",
      options: [
        { id: 581, content: "Дарья и Дуняшка", isRight: false },
        { id: 582, content: "Ильинична и Лукинична", isRight: false },
        { id: 583, content: "Аксинья и Наталья", isRight: true },
        { id: 584, content: "Анна и Елизавета", isRight: false },
      ],
    },
    {
      id: 147,
      content: "Как называется хутор, в котором живут Мелеховы и разворачивается основное действие романа?",
      options: [
        { id: 585, content: "Вёшенский", isRight: false },
        { id: 586, content: "Каргинский", isRight: false },
        { id: 587, content: "Татарский", isRight: true },
        { id: 588, content: "Еланский", isRight: false },
      ],
    },
    {
      id: 148,
      content: "Представители какого сословия являются центральными персонажами романа «Тихий Дон»?",
      options: [
        { id: 589, content: "Донское казачество", isRight: true },
        { id: 590, content: "Уральские рабочие", isRight: false },
        { id: 591, content: "Сибирские крестьяне", isRight: false },
        { id: 592, content: "Столичное дворянство", isRight: false },
      ],
    },
    {
      id: 149,
      content: "На берегах какой реки происходят события романа?",
      options: [
        { id: 593, content: "Волга", isRight: false },
        { id: 594, content: "Дон", isRight: true },
        { id: 595, content: "Кубань", isRight: false },
        { id: 596, content: "Днепр", isRight: false },
      ],
    },
    {
      id: 150,
      content: "Какие исторические события составляют основу сюжета «Тихого Дона»?",
      options: [
        { id: 597, content: "Отечественная война 1812 года", isRight: false },
        { id: 598, content: "Первая мировая и Гражданская война", isRight: true },
        { id: 599, content: "Русско-японская война", isRight: false },
        { id: 600, content: "Великая Отечественная война", isRight: false },
      ],
    },
    {
      id: 151,
      content: "Как зовут отца Григория Мелехова?",
      options: [
        { id: 601, content: "Пантелей Прокофьевич", isRight: true },
        { id: 602, content: "Прокофий Пантелеевич", isRight: false },
        { id: 603, content: "Мирон Григорьевич", isRight: false },
        { id: 604, content: "Иван Алексеевич", isRight: false },
      ],
    },
    {
      id: 152,
      content: "Как звали мужа Аксиньи, соседа Мелеховых по хутору?",
      options: [
        { id: 605, content: "Митька Коршунов", isRight: false },
        { id: 606, content: "Степан Астахов", isRight: true },
        { id: 607, content: "Христоня", isRight: false },
        { id: 608, content: "Прохор Зыков", isRight: false },
      ],
    },
    {
      id: 153,
      content: "Какая тема является одной из центральных в «Тихом Доне»?",
      options: [
        { id: 609, content: "Освоение космоса", isRight: false },
        { id: 610, content: "Судьба человека и народа в эпоху войн и революции", isRight: true },
        { id: 611, content: "Жизнь петербургской богемы", isRight: false },
        { id: 612, content: "Морские путешествия и открытия", isRight: false },
      ],
    },
    {
      id: 154,
      content: "Как называется старший брат Григория Мелехова?",
      options: [
        { id: 613, content: "Пётр", isRight: true },
        { id: 614, content: "Андрей", isRight: false },
        { id: 615, content: "Николай", isRight: false },
        { id: 616, content: "Фёдор", isRight: false },
      ],
    },
  ],
];
