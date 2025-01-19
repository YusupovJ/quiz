import { IQuestion } from "@/types";

export const philosophy: Array<IQuestion[]> = [
  [
    {
      id: 1,
      content: "С греческого языка слово «философия» переводится как:",
      options: [
        { id: 1, content: "любовь к истине", isRight: false },
        { id: 2, content: "любовь к мудрости", isRight: true },
        { id: 3, content: "учение о мире", isRight: false },
        { id: 4, content: "божественная мудрость", isRight: false },
      ],
    },
    {
      id: 2,
      content: "Какова причинная связь между свободой и ответственностью?",
      options: [
        {
          id: 5,
          content: "свобода и ответственность-это два отдельных явления, вызванных одной и той же (общей) причиной",
          isRight: false,
        },
        {
          id: 6,
          content: "свобода и ответственность-это два отдельных явления, вызванных разными причинами",
          isRight: false,
        },
        { id: 7, content: "ответственность-это следствие человеческой свободы", isRight: true },
        { id: 8, content: "свобода-это следствие человеческой ответственности", isRight: false },
      ],
    },
    {
      id: 3,
      content: "Мировоззрение – это:",
      options: [
        { id: 9, content: "совокупность знаний, которыми обладает человек", isRight: false },
        {
          id: 10,
          content: "совокупность взглядов, оценок, эмоций, характеризующих отношение человека к миру и к самому себе",
          isRight: true,
        },
        {
          id: 11,
          content:
            "отражение человеческим сознанием тех общественных отношений, которые объективно существуют в обществе",
          isRight: false,
        },
        { id: 12, content: "система адекватных предпочтений зрелой личности", isRight: false },
      ],
    },
    {
      id: 4,
      content: "Аксиология – это:",
      options: [
        { id: 13, content: "учение о ценностях", isRight: true },
        { id: 14, content: "учение о развитии", isRight: false },
        { id: 15, content: "теория справедливости", isRight: false },
        { id: 16, content: "теория о превосходстве одних групп людей над другими", isRight: false },
      ],
    },
    {
      id: 5,
      content: "Агностицизм – это:",
      options: [
        {
          id: 17,
          content: "направление в теории познания, полагающее, что адекватное познание мира невозможно",
          isRight: true,
        },
        { id: 18, content: "недоверие чувственному опыту", isRight: false },
        {
          id: 19,
          content: "философская позиция, рассматривающая все явления мира в их взаимной связи и развитии",
          isRight: false,
        },
        { id: 20, content: "отрицание рациональных путей познания мира", isRight: false },
      ],
    },
    {
      id: 6,
      content: "Тезис, принадлежащий мыслителю Фалесу",
      options: [
        { id: 21, content: "«Все течет»", isRight: false },
        { id: 22, content: "«В одну реку нельзя войти дважды»", isRight: false },
        { id: 23, content: "«Первооснова мира – огонь»", isRight: false },
        { id: 24, content: "«Начало всех вещей -- вода»", isRight: true },
      ],
    },
    {
      id: 7,
      content: "Абсолютность, относительность, конкретность, объективность являются основными свойствами",
      options: [
        { id: 25, content: "Материи", isRight: false },
        { id: 26, content: "Пространства", isRight: false },
        { id: 27, content: "Истины", isRight: true },
        { id: 28, content: "Теории", isRight: false },
      ],
    },
    {
      id: 8,
      content: "Что является более определяющим для религиозного мировоззрения?",
      options: [
        { id: 29, content: "доброта", isRight: false },
        { id: 30, content: "знание", isRight: false },
        { id: 31, content: "милосердие", isRight: false },
        { id: 32, content: "вера", isRight: true },
      ],
    },
    {
      id: 9,
      content: "Каково соотношение между понятиями «движение» и «развитие»?",
      options: [
        { id: 33, content: "развитие является частью движения", isRight: true },
        { id: 34, content: "движение является частью развития", isRight: false },
        { id: 35, content: "движение и развитие частично входят друг в друга", isRight: false },
        { id: 36, content: "движение и развитие исключают друг друга", isRight: false },
      ],
    },
    {
      id: 10,
      content: "Законы диалектики впервые сформулировал",
      options: [
        { id: 37, content: "Аристотель", isRight: true },
        { id: 38, content: "Декарт", isRight: false },
        { id: 39, content: "Ж.-Ж. Руссо", isRight: false },
        { id: 40, content: "Гегель", isRight: false },
      ],
    },
    {
      id: 11,
      content: "Закон диалектики, вскрывающий наиболее общий механизм развития",
      options: [
        { id: 41, content: "Переход количественных изменений в качественные", isRight: false },
        { id: 42, content: "Единство и борьба противоположностей", isRight: true },
        { id: 43, content: "Отрицания отрицания", isRight: false },
        { id: 44, content: "Закон сохранения и превращения энергии", isRight: false },
      ],
    },
    {
      id: 12,
      content: "Что в наибольшей мере определяет общественный прогресс?",
      options: [
        { id: 45, content: "уровень свободы и демократии в обществе", isRight: false },
        { id: 46, content: "уровень жизненного благополучия в обществе", isRight: false },
        { id: 47, content: "уровень интеллектуального развития", isRight: true },
        { id: 48, content: "уровень развития производительных сил", isRight: false },
      ],
    },
    {
      id: 13,
      content: "Научное допущение, предположение, нуждающееся в дополнительном обосновании",
      options: [
        { id: 49, content: "Умозаключение", isRight: false },
        { id: 50, content: "Гипотеза", isRight: true },
        { id: 51, content: "Верификация", isRight: false },
        { id: 52, content: "Интерпретация", isRight: false },
      ],
    },
    {
      id: 14,
      content: "Логический вывод частных следствий из общего положения",
      options: [
        { id: 53, content: "Индукция", isRight: false },
        { id: 54, content: "Дедукция", isRight: true },
        { id: 55, content: "Формализация", isRight: false },
        { id: 56, content: "Анализ", isRight: false },
      ],
    },
    {
      id: 15,
      content: "Процедура мысленного расчленения целого на части",
      options: [
        { id: 57, content: "Дедукция", isRight: false },
        { id: 58, content: "Индукция", isRight: false },
        { id: 59, content: "Анализ", isRight: true },
        { id: 60, content: "Синтез", isRight: false },
      ],
    },
    {
      id: 16,
      content: "Совокупность неповторимых черт, отличающих данного индивида от всех других",
      options: [
        { id: 61, content: "Индивидуальность", isRight: true },
        { id: 62, content: "Персона", isRight: false },
        { id: 63, content: "Человек", isRight: false },
        { id: 64, content: "Личность", isRight: false },
      ],
    },
    {
      id: 17,
      content: "Приоритет интересов общества над интересами индивида характерен для",
      options: [
        { id: 65, content: "Коллективизма", isRight: true },
        { id: 66, content: "Анархизма", isRight: false },
        { id: 67, content: "Индивидуализма", isRight: false },
        { id: 68, content: "Либерализма", isRight: false },
      ],
    },
    {
      id: 18,
      content: "Не относится к основным типам общественного производства:",
      options: [
        { id: 69, content: "Производство материальных благ", isRight: false },
        { id: 70, content: "Производство социальных отношений", isRight: false },
        { id: 71, content: "Производство ресурсов", isRight: true },
        { id: 72, content: "Производство духовных ценностей ", isRight: false },
      ],
    },
    {
      id: 19,
      content: "Впервые употребил слово «философия» и назвал себя «философом»:",
      options: [
        { id: 73, content: "Сократ", isRight: false },
        { id: 74, content: "Аристотель", isRight: false },
        { id: 75, content: "Пифагор", isRight: true },
        { id: 76, content: "Цицерон", isRight: false },
      ],
    },
    {
      id: 20,
      content: "Выберите суждение, наиболее полно определяющее суть философии",
      options: [
        { id: 77, content: "философия – это разумное миропонимание", isRight: false },
        { id: 78, content: "философия – это особое мировоззрение", isRight: false },
        { id: 79, content: "философия – это истинное мироощущение", isRight: false },
        { id: 80, content: "философия – это любовь к мудрости", isRight: true },
      ],
    },
    {
      id: 21,
      content: "Мировоззренческая функция философии состоит в том, что:",
      options: [
        { id: 81, content: "философия осуществляет рефлексию современной ей культуры", isRight: false },
        {
          id: 82,
          content: "философия направляет деятельность людей на борьбу с недостатками существующего строя",
          isRight: false,
        },
        { id: 83, content: "философия способствует улучшению характеров людей", isRight: false },
        { id: 84, content: "философия помогает человеку понять самого себя, своё место в мире", isRight: true },
      ],
    },
    {
      id: 22,
      content: "Для дуализма характерен тезис:",
      options: [
        { id: 85, content: "первично сознание, материя независимо от сознания не существует", isRight: false },
        {
          id: 86,
          content: "материя и сознание – два первоначала, существующие независимо друг от друга",
          isRight: true,
        },
        { id: 87, content: "это строгая непротиворечивая система суждений о природе", isRight: false },
        { id: 88, content: "первично сознание, материя не существует", isRight: false },
      ],
    },
    {
      id: 23,
      content: "Имя основателя буддизма",
      options: [
        { id: 89, content: "Бадараяна", isRight: false },
        { id: 90, content: "Патанджали", isRight: false },
        { id: 91, content: "Махавира", isRight: false },
        { id: 92, content: "Сидхартха", isRight: true },
      ],
    },
    {
      id: 24,
      content: "Впервые понятие бытия в философии употребил",
      options: [
        { id: 93, content: "Боэций", isRight: false },
        { id: 94, content: "Плотин", isRight: false },
        { id: 95, content: "Парменид", isRight: true },
        { id: 96, content: "Г.В.Ф.Гегель", isRight: false },
      ],
    },
    {
      id: 25,
      content: "Совокупность религиозных доктрин и учений о сущности и действии Бога:",
      options: [
        { id: 97, content: "теология", isRight: true },
        { id: 98, content: "монадология", isRight: false },
        { id: 99, content: "антропоцентризм", isRight: false },
        { id: 100, content: "феноменология", isRight: false },
      ],
    },
    {
      id: 26,
      content: "В вопросе о субстанции Рене Декарт придерживался",
      options: [
        { id: 101, content: "Материалистического монизма", isRight: false },
        { id: 102, content: "Дуализма", isRight: true },
        { id: 103, content: "Плюрализма", isRight: false },
        { id: 104, content: "Агностицизма", isRight: false },
      ],
    },
    {
      id: 27,
      content:
        "Форма бытия материи, выражающая её протяженность, структурность, сосуществование и взаимодействие элементов во всех материальных системах",
      options: [
        { id: 105, content: "Движение", isRight: false },
        { id: 106, content: "Время", isRight: false },
        { id: 107, content: "Пространство", isRight: true },
        { id: 108, content: "Качество", isRight: false },
      ],
    },
    {
      id: 28,
      content: "Ощущения, восприятия, понятия, мышление входят в структуру:",
      options: [
        { id: 109, content: "мозга", isRight: false },
        { id: 110, content: "сознания", isRight: true },
        { id: 111, content: "бессознательного", isRight: false },
        { id: 112, content: "живого существа", isRight: false },
      ],
    },
    {
      id: 29,
      content: "Какой признак присущ истине?",
      options: [
        { id: 113, content: "конкретность", isRight: true },
        { id: 114, content: "абстрактность", isRight: false },
        { id: 115, content: "идеологичность", isRight: false },
        { id: 116, content: "последовательность", isRight: false },
      ],
    },
    {
      id: 30,
      content: "Произведение общего вывода на основе обобщения частных посылок",
      options: [
        { id: 117, content: "Индукция", isRight: true },
        { id: 118, content: "Синтез", isRight: false },
        { id: 119, content: "Абстрагирование", isRight: false },
        { id: 120, content: "Дедукция", isRight: false },
      ],
    },
  ],
  [
    {
      id: 31,
      content: "Общественное сознание – это",
      options: [
        { id: 121, content: "Сумма множества индивидуальных сознаний", isRight: false },
        { id: 122, content: "Отражение общественного бытия ", isRight: true },
        { id: 123, content: "Теория, выдвинутая идеологами для оправдания политики своего класса ", isRight: false },
        { id: 124, content: "Совокупность привычек, обычаев традиций ", isRight: false },
      ],
    },
    {
      id: 32,
      content: "Глобальные проблемы – это",
      options: [
        { id: 125, content: "Проблемы, решение которых еще не найдено наукой", isRight: false },
        { id: 126, content: "Проблемы, от решения которых зависит выживаемость всего человечества", isRight: true },
        { id: 127, content: "Присущие только развивающимся и бывшим социалистическим странам ", isRight: false },
        { id: 128, content: "Присущие только развивающимся и бывшим социалистическим странам ", isRight: false },
      ],
    },
    {
      id: 33,
      content: "Негативное отношение к земной жизни, рассмотрение её как сплошной череды страданий характерно для ...",
      options: [
        { id: 129, content: "Христианство", isRight: false },
        { id: 130, content: "Христианство", isRight: false },
        { id: 131, content: "Ислама", isRight: false },
        { id: 132, content: "Буддизма", isRight: true },
      ],
    },
    {
      id: 34,
      content: "Антропология – это:",
      options: [
        { id: 133, content: "учение о развитии и всеобщей взаимосвязи", isRight: false },
        { id: 134, content: "учение о человеке", isRight: true },
        { id: 135, content: "наука о поведении животных в естественных условиях", isRight: false },
        { id: 136, content: "философское учение об обществе", isRight: false },
      ],
    },
    {
      id: 35,
      content: "Для идеализма характерно утверждение:",
      options: [
        { id: 137, content: "первично сознание, материя независимо от сознания не существует", isRight: true },
        {
          id: 138,
          content: "материя и сознание – два первоначала, существующие независимо друг от друга",
          isRight: false,
        },
        { id: 139, content: "это строгая непротиворечивая система суждений о природе", isRight: false },
        { id: 140, content: "первично сознание, материя не существует", isRight: false },
      ],
    },
    {
      id: 36,
      content:
        "О каком историческом типе мировоззрения идет здесь речь: «Это -- целостное миропонимание, в котором различные представления увязаны в единую образную картину мира, сочетающую в себе реальность и фантазию, естественное и сверхъестественное, знание и веру, мысль и эмоции»?",
      options: [
        { id: 141, content: "Мифологии", isRight: true },
        { id: 142, content: "Религии", isRight: false },
        { id: 143, content: "Философии", isRight: false },
        { id: 144, content: "Науке", isRight: false },
      ],
    },
    {
      id: 37,
      content: "Основным принципом античной философии был:",
      options: [
        { id: 145, content: "космоцентризм", isRight: true },
        { id: 146, content: "теоцентризм", isRight: false },
        { id: 147, content: "антропоцентризм", isRight: false },
        { id: 148, content: "сциентизм", isRight: false },
      ],
    },
    {
      id: 38,
      content: "Кто из философов утверждал в качестве первоначала огонь?",
      options: [
        { id: 149, content: "Анаксимандр", isRight: false },
        { id: 150, content: "Анаксимен", isRight: false },
        { id: 151, content: "Протагор", isRight: false },
        { id: 152, content: "Гераклит", isRight: true },
      ],
    },
    {
      id: 39,
      content: "Анаксимен за первооснову всех вещей принимал",
      options: [
        { id: 153, content: "Воздух", isRight: true },
        { id: 154, content: "Огонь", isRight: false },
        { id: 155, content: "Число", isRight: false },
        { id: 156, content: "Воду", isRight: false },
      ],
    },
    {
      id: 40,
      content: "Основа бытия, существующая сама по себе независимо ни от чего другого,",
      options: [
        { id: 157, content: "Субстанция", isRight: true },
        { id: 158, content: "Сознание", isRight: false },
        { id: 159, content: "Интенция", isRight: false },
        { id: 160, content: "Атрибут", isRight: false },
      ],
    },
    {
      id: 41,
      content:
        "Философский принцип, утверждающий, что все явления связаны друг с другом причинными связями и обуславливают друг друга",
      options: [
        { id: 161, content: "Принцип развития", isRight: false },
        { id: 162, content: "Принцип детерминизма", isRight: true },
        { id: 163, content: "Принцип единства явления и сущности", isRight: false },
        { id: 164, content: "Принцип единства и борьбы противоположностей", isRight: false },
      ],
    },
    {
      id: 42,
      content: "Индивидуальное сознание – это",
      options: [
        { id: 165, content: "Выражение повседневных нужд и потребностей людей", isRight: false },
        { id: 166, content: "Отражение индивидуального бытия конкретной личности", isRight: true },
        { id: 167, content: "Система знания, присущая выдающейся личности", isRight: false },
        {
          id: 168,
          content: "Психологическое образование, представляющее собой систему социально значимых черт человека",
          isRight: false,
        },
      ],
    },
    {
      id: 43,
      content: "Антропосоциогенез – это",
      options: [
        { id: 169, content: "Процесс социализации человека, приобщения индивида к культуре", isRight: false },
        { id: 170, content: "Процесс становления общепланетарной цивилизации на началах разума", isRight: false },
        { id: 171, content: "Осуществляющаяся в наши дни коэволюция природы и общества", isRight: false },
        { id: 172, content: "Процесс становления человека и общества, их выделения из мира природы", isRight: true },
      ],
    },
    {
      id: 44,
      content: "Что производится в рамках духовной сферы общества? Дайте наиболее полный и точный ответ.",
      options: [
        { id: 173, content: "Эстетические и художественные ценности", isRight: false },
        { id: 174, content: "Информация и духовные значения", isRight: true },
        { id: 175, content: "Интеллектуальные услуги", isRight: false },
        { id: 176, content: "Научные и религиозные знания", isRight: false },
      ],
    },
    {
      id: 45,
      content: "Проблемы войны и мира, демографическая и экологическая в современном мире, носят название … проблем.",
      options: [
        { id: 177, content: "Локальных", isRight: false },
        { id: 178, content: "Национальных", isRight: false },
        { id: 179, content: "Глобальных", isRight: true },
        { id: 180, content: "Народных", isRight: false },
      ],
    },
    {
      id: 46,
      content:
        "Существует пять основных типов социальных общностей. Отметьте, какой из нижеперечисленных шести типов общностей, назван здесь неверно?",
      options: [
        { id: 181, content: "Этнические, демографические", isRight: false },
        { id: 182, content: "Территориальные, классовые", isRight: false },
        { id: 183, content: "Профессиональные", isRight: false },
        { id: 184, content: "Государственные", isRight: true },
      ],
    },
    {
      id: 47,
      content: "Приоритет отдельных личностей над общественным целым утверждает",
      options: [
        { id: 185, content: "Индивидуализм", isRight: true },
        { id: 186, content: "Коллективизм", isRight: false },
        { id: 187, content: "Субъективизм", isRight: false },
        { id: 188, content: "Агностицизм", isRight: false },
      ],
    },
    {
      id: 48,
      content: "Личность – это:",
      options: [
        { id: 189, content: "личностью не рождаются, личностью становятся", isRight: true },
        { id: 190, content: "личностью является не каждый человек, а только выдающийся", isRight: false },
        {
          id: 191,
          content:
            "поскольку понятие «личность» неотделимо от понятия «общество» - каждый человек потенциальная личность",
          isRight: false,
        },
        { id: 192, content: "личность есть стабильное, неизменное свойство каждого индивида", isRight: false },
      ],
    },
    {
      id: 49,
      content: "Закон диалектики, раскрывающий источник самодвижения и развития объективного мира и познания",
      options: [
        { id: 193, content: "Единство и борьба противоположностей", isRight: true },
        { id: 194, content: "Переход количественных изменений в качественные", isRight: false },
        { id: 195, content: "Отрицания отрицания", isRight: false },
        { id: 196, content: "Закон сохранения и превращения энергии", isRight: false },
      ],
    },
    {
      id: 50,
      content: "Выделите признак, необходимый для философского мировоззрения",
      options: [
        { id: 197, content: "наглядность", isRight: false },
        { id: 198, content: "абстрактность", isRight: false },
        { id: 199, content: "системность", isRight: true },
        { id: 200, content: "конкретность", isRight: false },
      ],
    },
    {
      id: 51,
      content: "Последовательность состояний отражает категория",
      options: [
        { id: 201, content: "Времени", isRight: true },
        { id: 202, content: "Пространства", isRight: false },
        { id: 203, content: "Материи", isRight: false },
        { id: 204, content: "Необходимости", isRight: false },
      ],
    },
    {
      id: 52,
      content: "Философское направление, признающее разум основой познания и поведения людей",
      options: [
        { id: 205, content: "Рационализм", isRight: true },
        { id: 206, content: "Сенсуализм", isRight: false },
        { id: 207, content: "Скептицизм", isRight: false },
        { id: 208, content: "Агностицизм", isRight: false },
      ],
    },
    {
      id: 53,
      content:
        "Кто из античных философов учил, что всё развивается, что первопричина мира и его первооснова – это огонь, что в одну и ту же реку нельзя войти дважды?",
      options: [
        { id: 209, content: "Фалес", isRight: false },
        { id: 210, content: "Гераклит", isRight: true },
        { id: 211, content: "Платон", isRight: false },
        { id: 212, content: "Демокрит", isRight: false },
      ],
    },
    {
      id: 54,
      content: "Хронологические рамки развития античной философии:",
      options: [
        { id: 213, content: "28 - 18 вв. до н.э.", isRight: false },
        { id: 214, content: "VI в. до н.э – VI в. н.э.", isRight: true },
        { id: 215, content: "VI в. - XVI в", isRight: false },
        { id: 216, content: "VI в. до н.э. – II в. до н.э", isRight: false },
      ],
    },
    {
      id: 55,
      content:
        "Некоторые христианские богословы утверждают, что весь мир. Вся Вселенная были созданы Богом за шесть дней, а сам Бог представляет собой бестелесный интеллект, всесовершеннейшую Личность. Какому философскому направлению соответствует такой взгляд на мир?",
      options: [
        { id: 217, content: "Пантеизму", isRight: false },
        { id: 218, content: "Субъективному идеализму", isRight: false },
        { id: 219, content: "Объективному идеализму", isRight: true },
        { id: 220, content: "Вульгарному материализму", isRight: false },
      ],
    },
    {
      id: 56,
      content: "Гносеология – это:",
      options: [
        { id: 221, content: "учение о развитии и функционировании науки", isRight: false },
        { id: 222, content: "учение о природе, сущности познания", isRight: true },
        { id: 223, content: "учение о логических формах и законах мышления", isRight: false },
        { id: 224, content: "учение о сущности мира, его устройстве", isRight: false },
      ],
    },
    {
      id: 57,
      content: "Что отражает в себе предмет философии?",
      options: [
        { id: 225, content: "уникальность мира", isRight: false },
        { id: 226, content: "всеобщность мира", isRight: true },
        { id: 227, content: "полезность мира", isRight: false },
        { id: 228, content: "упорядоченность мира", isRight: false },
      ],
    },
    {
      id: 58,
      content: "В чём состоит основной социальный смысл философии?",
      options: [
        { id: 229, content: "в том, чтобы правильно отражать жизнь общества", isRight: true },
        { id: 230, content: "в том, чтобы предсказывать будущее", isRight: false },
        { id: 231, content: "в том, чтобы добиваться изменений к лучшему", isRight: false },
        { id: 232, content: "в том, чтобы обеспечить высокую духовность", isRight: false },
      ],
    },
    {
      id: 59,
      content: "Знание, соответствующее реальности, адекватно отражающее действительность",
      options: [
        { id: 233, content: "Мультиплет", isRight: false },
        { id: 234, content: "Агрегор", isRight: false },
        { id: 235, content: "Гипотеза", isRight: false },
        { id: 236, content: "Истина", isRight: true },
      ],
    },
    {
      id: 60,
      content: "Что является объектом логики?",
      options: [
        { id: 237, content: "Мышление", isRight: true },
        { id: 238, content: "Познание", isRight: false },
        { id: 239, content: "Природа", isRight: false },
        { id: 240, content: "Знание", isRight: false },
      ],
    },
  ],
  [
    {
      id: 61,
      content: "Основные формы чувственного познание действительности?",
      options: [
        { id: 241, content: "Восприятие", isRight: false },
        { id: 242, content: "Представление", isRight: false },
        { id: 243, content: "Ощущение", isRight: false },
        { id: 244, content: "Все ответы правильно", isRight: true },
      ],
    },
    {
      id: 62,
      content: "Совокупность предметов, которая мыслится в понятии, называется …",
      options: [
        { id: 245, content: "Содержанием понятом", isRight: false },
        { id: 246, content: "Объемом понятия", isRight: true },
        { id: 247, content: "Смысл понятом", isRight: false },
        { id: 248, content: "единичности понятом", isRight: false },
      ],
    },
    {
      id: 63,
      content: "Понятие, котором мыслится свойства предмет самостоятельно существующее, называется…",
      options: [
        { id: 249, content: "Единичным", isRight: false },
        { id: 250, content: "Общим", isRight: false },
        { id: 251, content: "Конкретным", isRight: false },
        { id: 252, content: "Абстрактным", isRight: true },
      ],
    },
    {
      id: 64,
      content:
        "Форма мышления, в которой утверждается или отрицается связь между предметами его признакам или отношение между предметами и которая обладаем свойством выражать либо истину, либо ложь – это…",
      options: [
        { id: 253, content: "Суждение", isRight: true },
        { id: 254, content: "Понятие", isRight: false },
        { id: 255, content: "Умозаключение ", isRight: false },
        { id: 256, content: "Аргументация", isRight: false },
      ],
    },
    {
      id: 65,
      content: "Какое из приведенных суждений, на ваш взгляд, верно?",
      options: [
        { id: 257, content: "счастье зависит от материального обеспечение", isRight: false },
        { id: 258, content: "счастье зависит от внутреннего мира человека", isRight: true },
        { id: 259, content: "счастье зависит от объективных условий", isRight: false },
        { id: 260, content: "субъективное ощущение счастья должно быть объективно обусловлено", isRight: false },
      ],
    },
    {
      id: 66,
      content: "Исходная, простейшая форма чувственного познания?",
      options: [
        { id: 261, content: "Ощущение", isRight: true },
        { id: 262, content: "Представление", isRight: false },
        { id: 263, content: "Восприятие", isRight: false },
        { id: 264, content: "Измерение", isRight: false },
      ],
    },
    {
      id: 67,
      content: "Научное допущение, предположение, нуждающееся в дополнительном обосновании…",
      options: [
        { id: 265, content: "Понятие", isRight: false },
        { id: 266, content: "Доказательство", isRight: false },
        { id: 267, content: "Тезис", isRight: true },
        { id: 268, content: "Аргумент", isRight: false },
      ],
    },
    {
      id: 68,
      content:
        "Признаки, которые могут принадлежать, но могут и не принадлежать предмету и которые не выражают его сущность, называются…",
      options: [
        { id: 269, content: "Общими", isRight: false },
        { id: 270, content: "несущественными", isRight: true },
        { id: 271, content: "Абстрактными", isRight: false },
        { id: 272, content: "Сущносноть", isRight: false },
      ],
    },
    {
      id: 69,
      content: "Основные формы абстрактного мышления – это…",
      options: [
        { id: 273, content: "умозаключение", isRight: false },
        { id: 274, content: "Суждение", isRight: false },
        { id: 275, content: "понятие", isRight: false },
        { id: 276, content: "Все ответы правильно", isRight: true },
      ],
    },
    {
      id: 70,
      content: "Понятие, в котором мыслится свойство предмета или отношение между предметами, называется … ",
      options: [
        { id: 277, content: "Единичным", isRight: false },
        { id: 278, content: "Общим", isRight: false },
        { id: 279, content: "Конкретным", isRight: false },
        { id: 280, content: "Абстрактным", isRight: true },
      ],
    },
    {
      id: 71,
      content: "Нравственные принципы и их виды – это;",
      options: [
        { id: 281, content: "Гуманизм, свободолюбие", isRight: false },
        { id: 282, content: "Патриотизм, самоотверженность", isRight: false },
        { id: 283, content: "интеллигентность ", isRight: false },
        { id: 284, content: "Все ответы правильно", isRight: true },
      ],
    },
    {
      id: 72,
      content: "Этика учит оценивать всякую ситуацию, чтобы…",
      options: [
        { id: 285, content: "Правильно поступать", isRight: true },
        { id: 286, content: "Накапливает знании", isRight: false },
        { id: 287, content: "Жить богато", isRight: false },
        { id: 288, content: "Все ответы правильно ", isRight: false },
      ],
    },
    {
      id: 73,
      content: "Что изучает наука «этика»?",
      options: [
        { id: 289, content: "мораль, нравственность", isRight: true },
        { id: 290, content: "закономерности в природных явлениях", isRight: false },
        { id: 291, content: "закономерности в исторических событиях", isRight: false },
        { id: 292, content: "Культура", isRight: false },
      ],
    },
    {
      id: 74,
      content: "Выделите главную составляющую понятия «добро»:",
      options: [
        { id: 293, content: "полезное, ценное", isRight: false },
        { id: 294, content: "то, что способствует благополучию человека, общества, человечества", isRight: true },
        { id: 295, content: "хорошее, приятное", isRight: false },
        { id: 296, content: "Нет правильного ответа", isRight: false },
      ],
    },
    {
      id: 75,
      content:
        "Наука, имеющая опытно – описательный, философско – теоретический и критерийно – нормативный характер – это…",
      options: [
        { id: 297, content: "Этика", isRight: true },
        { id: 298, content: "Философия", isRight: false },
        { id: 299, content: "Экзистенциализм", isRight: false },
        { id: 300, content: "Эстетика", isRight: false },
      ],
    },
    {
      id: 76,
      content: "Широкомасштабные понятие этики – это…",
      options: [
        { id: 301, content: "Идеал", isRight: false },
        { id: 302, content: "Долг", isRight: false },
        { id: 303, content: "Любовь", isRight: false },
        { id: 304, content: "Справедливость", isRight: true },
      ],
    },
    {
      id: 77,
      content: "Этика (от. Греч. Языка ethika, от ethos) означает…",
      options: [
        { id: 305, content: "обычай, нравственный характер", isRight: true },
        { id: 306, content: "Управление", isRight: false },
        { id: 307, content: "Отношение", isRight: false },
        { id: 308, content: "Родина", isRight: false },
      ],
    },
    {
      id: 78,
      content: "Что является предпосылкой нравственных ценностей",
      options: [
        { id: 309, content: "Мораль", isRight: true },
        { id: 310, content: "Труд", isRight: false },
        { id: 311, content: "Идеал", isRight: false },
        { id: 312, content: "Благо", isRight: false },
      ],
    },
    {
      id: 79,
      content: "Движение по направлению от более совершенного к менее совершенному",
      options: [
        { id: 313, content: "Прогресс", isRight: false },
        { id: 314, content: "Регресс", isRight: true },
        { id: 315, content: "Революция", isRight: false },
        { id: 316, content: "Стагнация", isRight: false },
      ],
    },
    {
      id: 80,
      content: "Идеология -- это",
      options: [
        { id: 317, content: "Наука о наиболее общих законах развития природы и общества", isRight: false },
        { id: 318, content: "Система взглядов на мир в целом", isRight: false },
        { id: 319, content: "Теоретическое выражение интересов той или иной группы людей", isRight: true },
        { id: 320, content: "Совокупность индивидуальных сознаний", isRight: false },
      ],
    },
    {
      id: 81,
      content: "Растущая взаимозависимость различных регионов мира",
      options: [
        { id: 321, content: "Технологизация", isRight: false },
        { id: 322, content: "Глобализация", isRight: true },
        { id: 323, content: "Институциализация", isRight: false },
        { id: 324, content: "Дивергенция", isRight: false },
      ],
    },
    {
      id: 82,
      content: "Наука о человеческом мышлении – это…",
      options: [
        { id: 325, content: "Логика", isRight: true },
        { id: 326, content: "Семиотика", isRight: false },
        { id: 327, content: "Философия", isRight: false },
        { id: 328, content: "Лингвистика", isRight: false },
      ],
    },
    {
      id: 83,
      content: "Что является предметом логики?",
      options: [
        { id: 329, content: "Формы, законы и методы мышление", isRight: true },
        { id: 330, content: "Законы общества", isRight: false },
        { id: 331, content: "Объективные законы", isRight: false },
        { id: 332, content: "Законы природа", isRight: false },
      ],
    },
    {
      id: 84,
      content: "Одна из основных форм научного познания действительности – это..",
      options: [
        { id: 333, content: "Индукция", isRight: false },
        { id: 334, content: "Дедукция", isRight: false },
        { id: 335, content: "Понятие", isRight: false },
        { id: 336, content: "Суждение", isRight: true },
      ],
    },
    {
      id: 85,
      content:
        "Философская наука, изучающая происхождение, сущность, развитие морали и нравственные отношение человека в семы и в обществе – это…",
      options: [
        { id: 337, content: "Мораль", isRight: false },
        { id: 338, content: "Эстетика", isRight: false },
        { id: 339, content: "Методология", isRight: false },
        { id: 340, content: "Этика", isRight: true },
      ],
    },
    {
      id: 86,
      content: "Саморегуляция, самоконтроль, самоуправления, самовоспитание и самонаказание – это чувства",
      options: [
        { id: 341, content: "Совесть", isRight: true },
        { id: 342, content: "Долг", isRight: false },
        { id: 343, content: "Честь", isRight: false },
        { id: 344, content: "Счастье", isRight: false },
      ],
    },
    {
      id: 87,
      content:
        "Что является в эстетике фундаментальными понятиями, в которых получила отражение история освоения человечеством мира по законам красоты?",
      options: [
        { id: 345, content: "эстетические вкусы", isRight: false },
        { id: 346, content: "эстетические идеалы", isRight: false },
        { id: 347, content: "эстетические оценки", isRight: false },
        { id: 348, content: "эстетические категории", isRight: true },
      ],
    },
    {
      id: 88,
      content:
        "Как называется специфическое суждение о совершенстве явлений природы, общества, продуктов человеческого труда, произведений искусства?",
      options: [
        { id: 349, content: "эстетический взгляд", isRight: false },
        { id: 350, content: "эстетическое чувство", isRight: false },
        { id: 351, content: "эстетический вкус", isRight: false },
        { id: 352, content: "эстетическая оценка", isRight: true },
      ],
    },
    {
      id: 89,
      content: "Как называется совокупность идей, мнений, суждений об эстетическом в действительности и искусстве?",
      options: [
        { id: 353, content: "эстетические взгляды", isRight: true },
        { id: 354, content: "эстетические идеалы", isRight: false },
        { id: 355, content: "эстетические теории", isRight: false },
        { id: 356, content: "эстетические идеи", isRight: false },
      ],
    },
    {
      id: 90,
      content: "Эстетика – ",
      options: [
        {
          id: 357,
          content: "наука о прекрасном и закономерностях эстетического освоения действительности",
          isRight: false,
        },
        {
          id: 358,
          content:
            "наука о сущности эстетического в действительности, об общих законах эстетической деятельности и свойствах эстетического сознания",
          isRight: true,
        },
        { id: 359, content: "наука о творчестве по законам красоты и эстетическом сознании", isRight: false },
        { id: 360, content: "наука о сущности эстетической деятельности и эстетического воспитания", isRight: false },
      ],
    },
  ],
  [
    {
      id: 91,
      content: "Основной предмет изучения эстетики?",
      options: [
        { id: 361, content: "красота", isRight: false },
        { id: 362, content: "прекрасное", isRight: true },
        { id: 363, content: "обычаи", isRight: false },
        { id: 364, content: "мораль", isRight: false },
      ],
    },
    {
      id: 92,
      content: "Искусство это…",
      options: [
        { id: 365, content: "игра воображения автора", isRight: false },
        { id: 366, content: "ремесло", isRight: false },
        { id: 367, content: "удовлетворение потребностей", isRight: false },
        { id: 368, content: "образное воспроизведение действительности", isRight: true },
      ],
    },
    {
      id: 93,
      content: "Что такое эстетическое творчество?",
      options: [
        { id: 369, content: "отражение в сознании объективной реальности", isRight: false },
        { id: 370, content: "что-то данное от природы", isRight: false },
        { id: 371, content: "отражение в сознании объективной реальности", isRight: false },
        { id: 372, content: "Единство объективной субъективной формы", isRight: true },
      ],
    },
    {
      id: 94,
      content:
        "Какие категории являются эстетическим выражением различного типа жизненных противоречий и распространяют свое действие только на социальные явления?",
      options: [
        { id: 373, content: "героическое и возвышенное", isRight: false },
        { id: 374, content: "трагическое и возвышенное", isRight: false },
        { id: 375, content: "трагическое и прекрасное", isRight: false },
        { id: 376, content: "трагическое и комическое", isRight: true },
      ],
    },
    {
      id: 95,
      content: "Какие категории являются эстетическими?",
      options: [
        { id: 377, content: "красота, возвышенное, трагическое", isRight: true },
        { id: 378, content: "симпатия, симметрия, ассиметрия", isRight: false },
        { id: 379, content: "вкус, ощущение, восприятие", isRight: false },
        { id: 380, content: "мораль, героизм, патриотизм", isRight: false },
      ],
    },
    {
      id: 96,
      content: "Эстетика – это …",
      options: [
        {
          id: 381,
          content:
            "наука о сущности эстетического в действительности, об общих законах эстетической деятельности и свойствах эстетического",
          isRight: false,
        },
        {
          id: 382,
          content: "наука о прекрасном и закономерностях эстетического освоения действительности",
          isRight: true,
        },
        { id: 383, content: "наука о творчестве по законам красоты и эстетическом сознании", isRight: false },
        { id: 384, content: "наука сущности эстетической деятельности и эстетического воспитания", isRight: false },
      ],
    },
    {
      id: 97,
      content:
        "Как называется система понятий о сущности эстетического, основных принципов его познания в действительности и искусстве, о природе и существенной роли эстетической и художественной деятельности людей?",
      options: [
        { id: 385, content: "эстетические взгляды", isRight: false },
        { id: 386, content: "эстетическая теория", isRight: false },
        { id: 387, content: "эстетические идеалы", isRight: false },
        { id: 388, content: "эстетические теории", isRight: true },
      ],
    },
    {
      id: 98,
      content:
        "Какая из категорий эстетики отражает острейшие жизненные противоречия, сопровождающиеся человеческими страданиями, смертью и гибелью важных для жизни ценностей?",
      options: [
        { id: 389, content: "трагическое", isRight: true },
        { id: 390, content: "героическое", isRight: false },
        { id: 391, content: "безобразное", isRight: false },
        { id: 392, content: "возвышенное", isRight: false },
      ],
    },
    {
      id: 99,
      content: "Что такое искусство?",
      options: [
        { id: 393, content: "Фантастическое изображение природных явлений ", isRight: false },
        { id: 394, content: "Художественно-образное отражение действительности", isRight: true },
        { id: 395, content: "Теоретическое понимание мира ", isRight: false },
        { id: 396, content: "Психо-физиологическое отношение к реальности", isRight: false },
      ],
    },
    {
      id: 100,
      content: "Что лежит в основе прекрасного по Аристотелю?",
      options: [
        { id: 397, content: "Гармония и пропорциональность", isRight: true },
        { id: 398, content: "Пропорциональность", isRight: false },
        { id: 399, content: "Симметрия", isRight: false },
        { id: 400, content: "Целесообразность", isRight: false },
      ],
    },
    {
      id: 101,
      content: "Основной предмет изучения эстетики?",
      options: [
        { id: 401, content: "красота", isRight: false },
        { id: 402, content: "прекрасное", isRight: true },
        { id: 403, content: "обычаи", isRight: false },
        { id: 404, content: "мораль", isRight: false },
      ],
    },
    {
      id: 102,
      content: "Кто в истории эстетики ввел термин «эстетика»?",
      options: [
        { id: 405, content: "Баумгартен", isRight: true },
        { id: 406, content: "Буало", isRight: false },
        { id: 407, content: "Бергсон", isRight: false },
        { id: 408, content: "Берк", isRight: false },
      ],
    },
    {
      id: 103,
      content: "Что в эстетике определяется как крайние полюсы комического?",
      options: [
        { id: 409, content: "сатира и гротеск", isRight: false },
        { id: 410, content: "сатира и каламбур", isRight: false },
        { id: 411, content: "юмор и гротеск", isRight: true },
        { id: 412, content: "юмор и сатира", isRight: false },
      ],
    },
    {
      id: 104,
      content: "Выражения языка, обозначающие свойства отношения, называются…",
      options: [
        { id: 413, content: "Предикторами ", isRight: true },
        { id: 414, content: "концептом", isRight: false },
        { id: 415, content: "денотатом", isRight: false },
        { id: 416, content: "смыслом", isRight: false },
      ],
    },
    {
      id: 105,
      content:
        "Феномен, к которому относится данное определение: «Совокупность материальных и духовных ценностей, а также способов их созидания, трансляции от одного поколения к другому»",
      options: [
        { id: 417, content: "техника", isRight: false },
        { id: 418, content: "цивилизация", isRight: false },
        { id: 419, content: "практика", isRight: false },
        { id: 420, content: "культура", isRight: true },
      ],
    },
    {
      id: 106,
      content: "Фактор, который, согласно социал-дарвинизму, является основной движущей силой развития общества",
      options: [
        { id: 421, content: "Мировой дух", isRight: false },
        { id: 422, content: "Классовая борьба", isRight: false },
        { id: 423, content: "Воля выдающихся людей", isRight: false },
        { id: 424, content: "Борьба за существование", isRight: true },
      ],
    },
    {
      id: 107,
      content:
        "Познавательное отношение состоит из трех основных сторон (элементов). Укажите, какая среди указанных сторон здесь лишняя?",
      options: [
        { id: 425, content: "Субъект познания", isRight: false },
        { id: 426, content: "Средства познания", isRight: false },
        { id: 427, content: "Цель познания", isRight: true },
        { id: 428, content: "Объект познания", isRight: false },
      ],
    },
    {
      id: 108,
      content: "Рефлексия – это:",
      options: [
        { id: 429, content: "отражение предметов", isRight: false },
        { id: 430, content: "размышление личности о самой себе", isRight: true },
        { id: 431, content: "комплекс рефлекторных реакций", isRight: false },
        { id: 432, content: "медитативная практика", isRight: false },
      ],
    },
    {
      id: 109,
      content: "В вопросе о субстанции Рене Декарт придерживался",
      options: [
        { id: 433, content: "Материалистического монизма", isRight: false },
        { id: 434, content: "Дуализма", isRight: true },
        { id: 435, content: "Плюрализма", isRight: false },
        { id: 436, content: "Агностицизма", isRight: false },
      ],
    },
    {
      id: 110,
      content: "Согласно Авеста Вселенная состоит из:",
      options: [
        { id: 437, content: "воды, огня, воздуха, светоносной сферы", isRight: false },
        { id: 438, content: "огня, воздуха, земли", isRight: false },
        { id: 439, content: "земли, океана, неба, воздуха", isRight: false },
        { id: 440, content: "земли, воды, воздуха и огня", isRight: true },
      ],
    },
    {
      id: 111,
      content: "В чем состоит основной социальный смысл философии?",
      options: [
        { id: 441, content: "в том, чтобы правильно отражать жизнь общества", isRight: true },
        { id: 442, content: "в том, чтобы предсказывать будущее", isRight: false },
        { id: 443, content: "в том, чтобы добиваться изменений к лучшему", isRight: false },
        { id: 444, content: "в том, чтобы обеспечить высокую духовность", isRight: false },
      ],
    },
    {
      id: 112,
      content: "Что, согласно Пифагору, является первоначалом мира, всеобщей сущностью?",
      options: [
        { id: 445, content: "бесконечность", isRight: false },
        { id: 446, content: "ноль", isRight: false },
        { id: 447, content: "единица", isRight: true },
        { id: 448, content: "логос", isRight: false },
      ],
    },
    {
      id: 113,
      content: "Философия в Средние века занимала подчиненное положение по отношению к:",
      options: [
        { id: 449, content: "богословию", isRight: true },
        { id: 450, content: "науке", isRight: false },
        { id: 451, content: "психологии", isRight: false },
        { id: 452, content: "этике", isRight: false },
      ],
    },
    {
      id: 114,
      content: "Утверждение: «Я мыслю, следовательно, я существую» высказал",
      options: [
        { id: 453, content: "Р. Декарт", isRight: true },
        { id: 454, content: "Фома Аквинский", isRight: false },
        { id: 455, content: "Вольтер", isRight: false },
        { id: 456, content: "Ф. Бэкон", isRight: false },
      ],
    },
    {
      id: 115,
      content: "Сущность деизма состоит в",
      options: [
        { id: 457, content: "Сведении роли Бога к творению материи и первотолчку", isRight: true },
        { id: 458, content: "Растворению Бога в природе", isRight: false },
        {
          id: 459,
          content: "Признании постоянного вмешательства Бога в процессы, происходящие в человеческом обществе",
          isRight: false,
        },
        { id: 460, content: "Утверждении о наличии у Бога двух ипостасей", isRight: false },
      ],
    },
    {
      id: 116,
      content:
        "Преднамеренное, целенаправленное восприятие объекта, явления с целью изучения его свойств, особенностей протекания и поведения",
      options: [
        { id: 461, content: "Ощущение", isRight: false },
        { id: 462, content: "Моделирование", isRight: false },
        { id: 463, content: "Эксперимент", isRight: false },
        { id: 464, content: "Наблюдение", isRight: true },
      ],
    },
    {
      id: 117,
      content: "Определите время возникновения философии:",
      options: [
        { id: 465, content: "VII-VI в.в. до н.э.", isRight: true },
        { id: 466, content: "XVII-ХVIII в.в. ", isRight: false },
        { id: 467, content: "V-XV в.в.", isRight: false },
        { id: 468, content: "середина III тысячелетия до н.э.", isRight: false },
      ],
    },
    {
      id: 118,
      content:
        "С утверждением: «Мышление является таким же продуктом деятельности мозга, как желчь – продуктом деятельности печени» согласился бы представитель:",
      options: [
        { id: 469, content: "метафизического материализма", isRight: false },
        { id: 470, content: "диалектического материализма", isRight: false },
        { id: 471, content: "вульгарного материализма", isRight: true },
        { id: 472, content: "естественнонаучного материализма", isRight: false },
      ],
    },
    {
      id: 119,
      content: "Положение: «Число есть сущность и смысл всего, что есть в мире», принадлежит:",
      options: [
        { id: 473, content: "Пифагору", isRight: true },
        { id: 474, content: "Протагору", isRight: false },
        { id: 475, content: "Евклиду", isRight: false },
        { id: 476, content: "Парменид", isRight: false },
      ],
    },
    {
      id: 120,
      content:
        "Философское направление, утверждающее, что разум лишь плавает по поверхности вещей, тогда как сущность мира открывается нам посредством интуиции, переживания, понимания",
      options: [
        { id: 477, content: "Философия жизни", isRight: true },
        { id: 478, content: "Неорационализм", isRight: false },
        { id: 479, content: "Прагматизм", isRight: false },
        { id: 480, content: "Феноменология", isRight: false },
      ],
    },
  ],
  [
    {
      id: 121,
      content: "Что из перечисленного относится к форме чувственного познания?",
      options: [
        { id: 481, content: "убеждение", isRight: false },
        { id: 482, content: "толкование", isRight: false },
        { id: 483, content: "воображение", isRight: false },
        { id: 484, content: "представление", isRight: true },
      ],
    },
    {
      id: 122,
      content: "Совокупность существенных необходимых свойств вещи составляют её:",
      options: [
        { id: 485, content: "Количество", isRight: false },
        { id: 486, content: "Качество", isRight: true },
        { id: 487, content: "Объём", isRight: false },
        { id: 488, content: "Масштаб", isRight: false },
      ],
    },
    {
      id: 123,
      content:
        "Данное определение: «Исследование объекта в контролируемых или искусственно созданных условиях» относится к:",
      options: [
        { id: 489, content: "наблюдению", isRight: false },
        { id: 490, content: "измерению", isRight: false },
        { id: 491, content: "эксперименту", isRight: true },
        { id: 492, content: "идеализации", isRight: false },
      ],
    },
    {
      id: 124,
      content: "Формационный подход к проблеме исторического развития общества утверждает, что",
      options: [
        {
          id: 493,
          content: "Формирование истории происходит циклично, в ней есть свои взлеты и падения",
          isRight: false,
        },
        {
          id: 494,
          content: "Развитие разных цивилизаций настолько самобытно, что их нельзя даже сравнивать друг с другом",
          isRight: false,
        },
        {
          id: 495,
          content:
            "Мировая история едина, каждое общество последовательно проходит в своем развитии ряд стадий, одинаковых для всех обществ",
          isRight: true,
        },
        {
          id: 496,
          content:
            "История имеет общий смысл, суть которого заключается в тезисе: «Каждый народ, каждое государство само должно определять свою судьбу»",
          isRight: false,
        },
      ],
    },
    {
      id: 125,
      content: "Основной объект исследования, мера вещей и отношений в эпоху Возрождения?",
      options: [
        { id: 497, content: "Бог", isRight: false },
        { id: 498, content: "природа", isRight: false },
        { id: 499, content: "человек", isRight: true },
        { id: 500, content: "космос", isRight: false },
      ],
    },
    {
      id: 126,
      content: "От чего зависит степень свободы любого человеческого поступка?",
      options: [
        { id: 501, content: "от способности управлять внешними обстоятельствами", isRight: false },
        { id: 502, content: "от способности превращать моральные требования в личные убеждения", isRight: true },
        { id: 503, content: "от способности управлять другими людьми", isRight: false },
        { id: 504, content: "От любви", isRight: false },
      ],
    },
    {
      id: 127,
      content: "Как соотносятся между собой философия и наука?",
      options: [
        { id: 505, content: "философия является частью науки", isRight: false },
        { id: 506, content: "наука является частью философии", isRight: false },
        { id: 507, content: "философия и частично включаются друг в друга", isRight: true },
        { id: 508, content: "философия и наука исключают друг друга", isRight: false },
      ],
    },
    {
      id: 128,
      content:
        "Мировоззренческая форма общественного сознания, рационально обосновывающая предельные основания бытия, включая общество и право:",
      options: [
        { id: 509, content: "история", isRight: false },
        { id: 510, content: "философия", isRight: true },
        { id: 511, content: "социология", isRight: false },
        { id: 512, content: "культурология", isRight: false },
      ],
    },
    {
      id: 129,
      content: "Этика – это:",
      options: [
        { id: 513, content: "учение о развитии", isRight: false },
        { id: 514, content: "учение о бытии", isRight: false },
        { id: 515, content: "теория о нравственном превосходстве одних людей над другими", isRight: false },
        { id: 516, content: "учение о морали и нравственных ценностях", isRight: true },
      ],
    },
    {
      id: 130,
      content: "Что обозначают понятия Брахман в веданте и апейрон в философии Анаксимандра:",
      options: [
        { id: 517, content: "Закон, управляющий миром", isRight: false },
        { id: 518, content: "Высший Разум", isRight: false },
        { id: 519, content: "Субстанцию всех вещей", isRight: true },
        { id: 520, content: "Мировую гармонию", isRight: false },
      ],
    },
    {
      id: 131,
      content: "Китайский философ, основатель даосизма",
      options: [
        { id: 521, content: "Лао-цзы", isRight: true },
        { id: 522, content: "Конфуций", isRight: false },
        { id: 523, content: "Сюнь-цзы", isRight: false },
        { id: 524, content: "Мэн-цзы", isRight: false },
      ],
    },
    {
      id: 132,
      content: "Какой философ рассматривал быте как сочетание атомов и пустоты?",
      options: [
        { id: 525, content: "Декарт", isRight: false },
        { id: 526, content: "Демокрит", isRight: true },
        { id: 527, content: "Пифагор", isRight: false },
        { id: 528, content: "Протагор", isRight: false },
      ],
    },
    {
      id: 133,
      content: "Теоцентризм – мировоззренческая позиция, в основе которой лежит представление о главенстве:",
      options: [
        { id: 529, content: "Бога", isRight: true },
        { id: 530, content: "человека", isRight: false },
        { id: 531, content: "природы", isRight: false },
        { id: 532, content: "космоса", isRight: false },
      ],
    },
    {
      id: 134,
      content:
        "Светская мировоззренческая позиция эпохи Возрождения, противостоявшая схоластике и духовному господству церкви:",
      options: [
        { id: 533, content: "гуманизм", isRight: true },
        { id: 534, content: "природоцентризм", isRight: false },
        { id: 535, content: "теоцентризм", isRight: false },
        { id: 536, content: "идеализм", isRight: false },
      ],
    },
    {
      id: 135,
      content:
        "Философское направление, отрицающее или ограничивающее роль разума в познании, выдвигая на первый план волю, созерцание, чувство, интуицию",
      options: [
        { id: 537, content: "Иррационализм", isRight: true },
        { id: 538, content: "Рационализм", isRight: false },
        { id: 539, content: "Эмпиризм", isRight: false },
        { id: 540, content: "Скептицизм", isRight: false },
      ],
    },
    {
      id: 136,
      content: "В каком суждении дано более полное определение бытия?",
      options: [
        { id: 541, content: "бытие – это весь материальный мир", isRight: false },
        { id: 542, content: "бытие – это все бесконечная вселенная", isRight: false },
        { id: 543, content: "бытие – это все формы психической деятельности", isRight: false },
        { id: 544, content: "бытие – это все то, что существует", isRight: true },
      ],
    },
    {
      id: 137,
      content:
        "«Философская категория для обозначения объективной реальности, которая дана человеку в его ощущениях» есть",
      options: [
        { id: 545, content: "Материя", isRight: true },
        { id: 546, content: "Явление", isRight: false },
        { id: 547, content: "Мера", isRight: false },
        { id: 548, content: "Качество", isRight: false },
      ],
    },
    {
      id: 138,
      content: "Отражение – это (выберите наиболее полное и точное определение)",
      options: [
        { id: 549, content: "Свойство живых существ реагировать на жизненно важные стимулы среды", isRight: false },
        {
          id: 550,
          content: "Способность высокоорганизованных животных ориентироваться во внешнем мире",
          isRight: false,
        },
        {
          id: 551,
          content: "Свойство материи запечатлевать характеристики воздействующих на неё объектов",
          isRight: true,
        },
        { id: 552, content: "Способность материальных систем порождать собственные подобия", isRight: false },
      ],
    },
    {
      id: 139,
      content:
        "Способность постижения истины путём непосредственного её усмотрения без обращения к логическим аргументам",
      options: [
        { id: 553, content: "Интеллект", isRight: false },
        { id: 554, content: "Интуиция", isRight: true },
        { id: 555, content: "Созерцание", isRight: false },
        { id: 556, content: "Наблюдение", isRight: false },
      ],
    },
    {
      id: 140,
      content: "Не является законом диалектики",
      options: [
        { id: 557, content: "Закон отрицания отрицания", isRight: false },
        { id: 558, content: "Закон о взаимопереплетении причин и следствий", isRight: true },
        { id: 559, content: "Закон перехода количества в качество", isRight: false },
        { id: 560, content: "Закон единства и борьбы противоположностей", isRight: false },
      ],
    },
    {
      id: 141,
      content: "Внутреннее содержание предмета в единстве всех его свойств и отношений выражает категория",
      options: [
        { id: 561, content: "Сущности", isRight: true },
        { id: 562, content: "Существования", isRight: false },
        { id: 563, content: "Количества", isRight: false },
        { id: 564, content: "Бытия", isRight: false },
      ],
    },
    {
      id: 142,
      content: "Согласно данным современной науки Homo sapiens появился на земле",
      options: [
        { id: 565, content: "100-150 тысяч лет назад", isRight: true },
        { id: 566, content: "500-600 тысяч лет назад", isRight: false },
        { id: 567, content: "1-1,5 млн. лет назад", isRight: false },
        { id: 568, content: "5-6 млн. лет назад", isRight: false },
      ],
    },
    {
      id: 143,
      content: "Общественно-экономическая формация – это",
      options: [
        { id: 569, content: "Общество с присущей ему формой правления", isRight: false },
        {
          id: 570,
          content:
            "Общество с присущим ему экономическим базисом и возвышающейся над ним политико-юридической надстройкой",
          isRight: true,
        },
        { id: 571, content: "Локальная замкнутая цивилизация", isRight: false },
        { id: 572, content: "Совокупность взаимоотношений людей в конкретном пространстве", isRight: false },
      ],
    },
    {
      id: 144,
      content: "Общественный прогресс – это",
      options: [
        { id: 573, content: "Уровень развития общества", isRight: false },
        { id: 574, content: "Состояние общества в целом на определенном этапе развития", isRight: false },
        { id: 575, content: "Поступательное движение общества от простых форм к более сложным", isRight: true },
        { id: 576, content: "Производственное развитие", isRight: false },
      ],
    },
    {
      id: 145,
      content: "Совокупность общественных чувств, эмоций, настроений",
      options: [
        { id: 577, content: "Общественное сознание", isRight: false },
        { id: 578, content: "Общественное бытие", isRight: false },
        { id: 579, content: "Общественная психология", isRight: true },
        { id: 580, content: "Общественная идеология", isRight: false },
      ],
    },
    {
      id: 146,
      content: "Что отражается в объеме понятия?",
      options: [
        { id: 581, content: "место, занятое предметом", isRight: false },
        { id: 582, content: "строго определенное количество предметов", isRight: false },
        { id: 583, content: "совокупность предметов, которая мыслится в понятии", isRight: true },
        {
          id: 584,
          content: "совокупность существенного признаков предмета, которая мыслится в понятии",
          isRight: false,
        },
      ],
    },
    {
      id: 147,
      content: "Логическая правильность рассуждения характеризует…",
      options: [
        { id: 585, content: "становления мышления", isRight: false },
        { id: 586, content: "развитие мышления", isRight: false },
        { id: 587, content: "форму мышления", isRight: true },
        { id: 588, content: "содержание мышления", isRight: false },
      ],
    },
    {
      id: 148,
      content: "Совокупность правил поведения – это…",
      options: [
        { id: 589, content: "Этикет", isRight: true },
        { id: 590, content: "Мораль", isRight: false },
        { id: 591, content: "Ценности", isRight: false },
        { id: 592, content: "Сознание", isRight: false },
      ],
    },
    {
      id: 149,
      content: "Диалектика – это",
      options: [
        { id: 593, content: "Учение о развитии, основанное на выявлении и разрешении противоречий.", isRight: true },
        { id: 594, content: "Метод научного эксперимента и наблюдения.", isRight: false },
        { id: 595, content: "Концепция познания, утверждающая неизменность бытия.", isRight: false },
        { id: 596, content: "Техника медитации для достижения внутренней гармонии.", isRight: false },
      ],
    },
    {
      id: 150,
      content: "Форма мышления, отирающая предметы в их существенных признаках – это…",
      options: [
        { id: 597, content: "Абстракция", isRight: true },
        { id: 598, content: "Аналогия", isRight: false },
        { id: 599, content: "Интуиция", isRight: false },
        { id: 600, content: "Эмпиризм", isRight: false },
      ],
    },
  ],
  [
    {
      id: 151,
      content: "Процесс опосредствованного отражения действительности – это…",
      options: [
        { id: 601, content: "Чувственное восприятие.", isRight: false },
        { id: 602, content: "Воображение", isRight: false },
        { id: 603, content: "Мышление", isRight: true },
        { id: 604, content: "Интуиция", isRight: false },
      ],
    },
    {
      id: 152,
      content: "Мышление неразрывно свезено с …",
      options: [
        { id: 605, content: "Диалектикой", isRight: false },
        { id: 606, content: "Сознанием", isRight: true },
        { id: 607, content: "Познанием", isRight: false },
        { id: 608, content: "Бытие", isRight: false },
      ],
    },
    {
      id: 153,
      content: "Целостный образ предмета … это",
      options: [
        { id: 609, content: "Абстракция.", isRight: false },
        { id: 610, content: "Представление", isRight: true },
        { id: 611, content: "Понятие", isRight: false },
        { id: 612, content: "Интуиция", isRight: false },
      ],
    },
    {
      id: 154,
      content: "Признаки, которые выражают его сущность, называются… ",
      options: [
        { id: 613, content: "Свойствами", isRight: false },
        { id: 614, content: "Качества", isRight: false },
        { id: 615, content: "Признаками", isRight: false },
        { id: 616, content: "Существенными", isRight: true },
      ],
    },
    {
      id: 155,
      content: "Совокупность предметов, которая мыслится в понятии, называется …",
      options: [
        { id: 617, content: "Объемом понятия", isRight: true },
        { id: 618, content: "Категорией понятия", isRight: false },
        { id: 619, content: "Сущностью понятия", isRight: false },
        { id: 620, content: "Все ответы верны", isRight: false },
      ],
    },
    {
      id: 156,
      content: "Понятие, в котором мыслится один элемент, называется…",
      options: [
        { id: 621, content: "Общее понятие", isRight: false },
        { id: 622, content: "Единичное понятие", isRight: true },
        { id: 623, content: "Собирательное", isRight: false },
        { id: 624, content: "Эмпирическое понятие", isRight: false },
      ],
    },
    {
      id: 157,
      content: "Понятие, в котором мыслится множество элементов, называется…",
      options: [
        { id: 625, content: "Общее понятие", isRight: true },
        { id: 626, content: "Единичное понятие", isRight: false },
        { id: 627, content: "Конкретное понятие", isRight: false },
        { id: 628, content: "Эмпирическое понятие", isRight: false },
      ],
    },
    {
      id: 158,
      content: "Понятие, котором мыслится свойства предмет самостоятельно существующее, называется…",
      options: [
        { id: 629, content: "Собирательное понятие", isRight: false },
        { id: 630, content: "Единичное понятие", isRight: false },
        { id: 631, content: "Конкретное понятие", isRight: true },
        { id: 632, content: "Эмпирическое понятие", isRight: false },
      ],
    },
    {
      id: 159,
      content: "Понятия, содержание которых составляют свойства, присущие предмету, называются…",
      options: [
        { id: 633, content: "Положительные понятия", isRight: true },
        { id: 634, content: "Относительное понятие", isRight: false },
        { id: 635, content: "Единичное понятие", isRight: false },
        { id: 636, content: "Собирательное понятие", isRight: false },
      ],
    },
    {
      id: 160,
      content:
        "Понятия, в отрицательными которых указывается на отсутствие у предмета определенных свойств, называются… ",
      options: [
        { id: 637, content: "Отрицательными ", isRight: true },
        { id: 638, content: "Относительное понятие", isRight: false },
        { id: 639, content: "Эмпирическое понятие", isRight: false },
        { id: 640, content: "Собирательное понятие", isRight: false },
      ],
    },
    {
      id: 161,
      content: "Суждение, состоящее из нескольких простых суждений, называется…",
      options: [
        { id: 641, content: "Умозаключением", isRight: false },
        { id: 642, content: "Противоречием", isRight: false },
        { id: 643, content: "Аналогией", isRight: false },
        { id: 644, content: "Сложным суждением.", isRight: true },
      ],
    },
    {
      id: 162,
      content: "Форма мышления, посредством которой из одного или нескольких суждений выводится новое суждение это:",
      options: [
        { id: 645, content: "Понятие", isRight: false },
        { id: 646, content: "Умозаключение", isRight: true },
        { id: 647, content: "Дедукция", isRight: false },
        { id: 648, content: "Индукция", isRight: false },
      ],
    },
    {
      id: 163,
      content: "Умозаключение, в котором переход от общего знания к частному является логически необходимым – это;",
      options: [
        { id: 649, content: "Индукция", isRight: false },
        { id: 650, content: "Суждение", isRight: false },
        { id: 651, content: "Дедукция", isRight: true },
        { id: 652, content: "Аналогия", isRight: false },
      ],
    },
    {
      id: 164,
      content: "Гуманизм (от. Лат. Humanitas) на русском языке означает…",
      options: [
        { id: 653, content: "Человечность", isRight: true },
        { id: 654, content: "Человек в центре", isRight: false },
        { id: 655, content: "Бог", isRight: false },
        { id: 656, content: "Любовь", isRight: false },
      ],
    },
    {
      id: 165,
      content: "Этика учит оценивать всякую ситуацию, чтобы…",
      options: [
        { id: 657, content: "Сделать возможным этические правильные поступки", isRight: true },
        { id: 658, content: "Дети уважали старших", isRight: false },
        { id: 659, content: "Остановить проблемы глобализации", isRight: false },
        { id: 660, content: "Избежать социальных конфликтов.", isRight: false },
      ],
    },
    {
      id: 166,
      content: "Основоположник теории нравственности – это; ",
      options: [
        { id: 661, content: "Фридрих Ницше.", isRight: false },
        { id: 662, content: "Иммануил Кант.", isRight: false },
        { id: 663, content: "Аристотель", isRight: true },
        { id: 664, content: "Платон", isRight: false },
      ],
    },
    {
      id: 167,
      content: "Широкомасштабные понятие этики – это;",
      options: [
        { id: 665, content: "Нравственность", isRight: false },
        { id: 666, content: "Право", isRight: false },
        { id: 667, content: "Мораль", isRight: true },
        { id: 668, content: "Добродетель", isRight: false },
      ],
    },
    {
      id: 168,
      content:
        "Состояние полного, высшего удовлетворения, абсолютного отсутствия желаний, идеал, осуществить который стремятся путем разумного и совместного действия – это; ",
      options: [
        { id: 669, content: "Счастье", isRight: true },
        { id: 670, content: "Нирвана", isRight: false },
        { id: 671, content: "Веселье", isRight: false },
        { id: 672, content: "Спокойствие", isRight: false },
      ],
    },
    {
      id: 169,
      content: "Определите основные категории этики…",
      options: [
        { id: 673, content: "Приятие, уважение, согласие, честность.", isRight: false },
        { id: 674, content: "Экономика, культура, искусство, наука, политика.", isRight: false },
        { id: 675, content: "Интуиция, субъективность, прагматизм, эмоциональность.", isRight: false },
        {
          id: 676,
          content: "Добродетель, долг, справедливость, свобода, ответственность, моральный закон, счастье.",
          isRight: true,
        },
      ],
    },
    {
      id: 170,
      content: "Нравственные принципы и их виды – это;",
      options: [
        {
          id: 677,
          content:
            "это принципы, регулирующие общественные отношения, например, уважение к собственности и право на труд",
          isRight: false,
        },
        {
          id: 678,
          content:
            "это основные моральные нормы, определяющие поведение человека, такие как долг, справедливость, свобода и честность.",
          isRight: true,
        },
        { id: 679, content: "это законы, регулирующие поведение граждан в обществе.", isRight: false },
        { id: 680, content: "это набор религиозных предписаний, регулирующих действия верующих.", isRight: false },
      ],
    },
  ],
];
