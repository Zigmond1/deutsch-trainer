// ============================================================
//  ДАНІ: СЛОВНИК + ГРАМАТИКА
// ============================================================
//  Як додати слово:
//  Скопіюй будь-який рядок нижче і зміни значення.
//  article: 'der' | 'die' | 'das' | null (для дієслів/прикметників)
//  level:   'A1' | 'A2' | 'B1' | 'B2'
// ============================================================

const WORDS_DATA = [
  // ─────────────── A1 (базові) ───────────────
  { de: 'Hallo',      ua: 'привіт',       article: null, level: 'A1' },
  { de: 'Tschüss',    ua: 'бувай',        article: null, level: 'A1' },
  { de: 'Danke',      ua: 'дякую',        article: null, level: 'A1' },
  { de: 'Bitte',      ua: 'будь ласка',   article: null, level: 'A1' },
  { de: 'Ja',         ua: 'так',          article: null, level: 'A1' },
  { de: 'Nein',       ua: 'ні',           article: null, level: 'A1' },
  { de: 'Vater',      ua: 'батько',       article: 'der', level: 'A1' },
  { de: 'Mutter',     ua: 'мати',         article: 'die', level: 'A1' },
  { de: 'Bruder',     ua: 'брат',         article: 'der', level: 'A1' },
  { de: 'Schwester',  ua: 'сестра',       article: 'die', level: 'A1' },
  { de: 'Kind',       ua: 'дитина',       article: 'das', level: 'A1' },
  { de: 'Mann',       ua: 'чоловік',      article: 'der', level: 'A1' },
  { de: 'Frau',       ua: 'жінка',        article: 'die', level: 'A1' },
  { de: 'Familie',    ua: 'сім\'я',       article: 'die', level: 'A1' },
  { de: 'Freund',     ua: 'друг',         article: 'der', level: 'A1' },
  { de: 'Apfel',      ua: 'яблуко',       article: 'der', level: 'A1' },
  { de: 'Brot',       ua: 'хліб',         article: 'das', level: 'A1' },
  { de: 'Wasser',     ua: 'вода',         article: 'das', level: 'A1' },
  { de: 'Milch',      ua: 'молоко',       article: 'die', level: 'A1' },
  { de: 'Kaffee',     ua: 'кава',         article: 'der', level: 'A1' },
  { de: 'Haus',       ua: 'будинок',      article: 'das', level: 'A1' },
  { de: 'Wohnung',    ua: 'квартира',     article: 'die', level: 'A1' },
  { de: 'Zimmer',     ua: 'кімната',      article: 'das', level: 'A1' },
  { de: 'Tisch',      ua: 'стіл',         article: 'der', level: 'A1' },
  { de: 'Stuhl',      ua: 'стілець',      article: 'der', level: 'A1' },
  { de: 'Tür',        ua: 'двері',        article: 'die', level: 'A1' },
  { de: 'Fenster',    ua: 'вікно',        article: 'das', level: 'A1' },
  { de: 'Kopf',       ua: 'голова',       article: 'der', level: 'A1' },
  { de: 'Hand',       ua: 'рука',         article: 'die', level: 'A1' },
  { de: 'Fuß',        ua: 'нога',         article: 'der', level: 'A1' },
  { de: 'Auge',       ua: 'око',          article: 'das', level: 'A1' },
  { de: 'sein',       ua: 'бути',         article: null, level: 'A1' },
  { de: 'haben',      ua: 'мати',         article: null, level: 'A1' },
  { de: 'gehen',      ua: 'йти',          article: null, level: 'A1' },
  { de: 'kommen',     ua: 'приходити',    article: null, level: 'A1' },
  { de: 'essen',      ua: 'їсти',         article: null, level: 'A1' },
  { de: 'trinken',    ua: 'пити',         article: null, level: 'A1' },
  { de: 'schlafen',   ua: 'спати',        article: null, level: 'A1' },
  { de: 'wohnen',     ua: 'мешкати',      article: null, level: 'A1' },
  { de: 'arbeiten',   ua: 'працювати',    article: null, level: 'A1' },
  { de: 'spielen',    ua: 'грати',        article: null, level: 'A1' },
  { de: 'lernen',     ua: 'вчити',        article: null, level: 'A1' },
  { de: 'lesen',      ua: 'читати',       article: null, level: 'A1' },
  { de: 'schreiben',  ua: 'писати',       article: null, level: 'A1' },
  { de: 'sprechen',   ua: 'говорити',     article: null, level: 'A1' },
  { de: 'machen',     ua: 'робити',       article: null, level: 'A1' },
  { de: 'kaufen',     ua: 'купувати',     article: null, level: 'A1' },
  { de: 'gut',        ua: 'добрий',       article: null, level: 'A1' },
  { de: 'schlecht',   ua: 'поганий',      article: null, level: 'A1' },
  { de: 'groß',       ua: 'великий',      article: null, level: 'A1' },
  { de: 'klein',      ua: 'маленький',    article: null, level: 'A1' },
  { de: 'alt',        ua: 'старий',       article: null, level: 'A1' },
  { de: 'jung',       ua: 'молодий',      article: null, level: 'A1' },
  { de: 'neu',        ua: 'новий',        article: null, level: 'A1' },
  { de: 'schön',      ua: 'гарний',       article: null, level: 'A1' },
  { de: 'Schule',     ua: 'школа',        article: 'die', level: 'A1' },
  { de: 'Stadt',      ua: 'місто',        article: 'die', level: 'A1' },
  { de: 'Land',       ua: 'країна',       article: 'das', level: 'A1' },

  // ─────────────── A2 (середній) ───────────────
  { de: 'Reise',      ua: 'подорож',      article: 'die', level: 'A2' },
  { de: 'Urlaub',     ua: 'відпустка',    article: 'der', level: 'A2' },
  { de: 'Hotel',      ua: 'готель',       article: 'das', level: 'A2' },
  { de: 'Koffer',     ua: 'валіза',       article: 'der', level: 'A2' },
  { de: 'Ticket',     ua: 'квиток',       article: 'das', level: 'A2' },
  { de: 'Pass',       ua: 'паспорт',      article: 'der', level: 'A2' },
  { de: 'Zug',        ua: 'поїзд',        article: 'der', level: 'A2' },
  { de: 'Bus',        ua: 'автобус',      article: 'der', level: 'A2' },
  { de: 'Auto',       ua: 'автомобіль',   article: 'das', level: 'A2' },
  { de: 'Fahrrad',    ua: 'велосипед',    article: 'das', level: 'A2' },
  { de: 'Flugzeug',   ua: 'літак',        article: 'das', level: 'A2' },
  { de: 'Arbeit',     ua: 'робота',       article: 'die', level: 'A2' },
  { de: 'Beruf',      ua: 'професія',     article: 'der', level: 'A2' },
  { de: 'Büro',       ua: 'офіс',         article: 'das', level: 'A2' },
  { de: 'Chef',       ua: 'керівник',     article: 'der', level: 'A2' },
  { de: 'Kollege',    ua: 'колега',       article: 'der', level: 'A2' },
  { de: 'Firma',      ua: 'фірма',        article: 'die', level: 'A2' },
  { de: 'Gehalt',     ua: 'зарплата',     article: 'das', level: 'A2' },
  { de: 'Termin',     ua: 'зустріч',      article: 'der', level: 'A2' },
  { de: 'Arzt',       ua: 'лікар',        article: 'der', level: 'A2' },
  { de: 'Krankheit',  ua: 'хвороба',      article: 'die', level: 'A2' },
  { de: 'Medikament', ua: 'ліки',         article: 'das', level: 'A2' },
  { de: 'gesund',     ua: 'здоровий',     article: null, level: 'A2' },
  { de: 'krank',      ua: 'хворий',       article: null, level: 'A2' },
  { de: 'Geschäft',   ua: 'магазин',      article: 'das', level: 'A2' },
  { de: 'Markt',      ua: 'ринок',        article: 'der', level: 'A2' },
  { de: 'Preis',      ua: 'ціна',         article: 'der', level: 'A2' },
  { de: 'Geld',       ua: 'гроші',        article: 'das', level: 'A2' },
  { de: 'Wetter',     ua: 'погода',       article: 'das', level: 'A2' },
  { de: 'Sonne',      ua: 'сонце',        article: 'die', level: 'A2' },
  { de: 'Regen',      ua: 'дощ',          article: 'der', level: 'A2' },
  { de: 'Schnee',     ua: 'сніг',         article: 'der', level: 'A2' },
  { de: 'beginnen',   ua: 'починати',     article: null, level: 'A2' },
  { de: 'bleiben',    ua: 'залишатися',   article: null, level: 'A2' },
  { de: 'brauchen',   ua: 'потребувати',  article: null, level: 'A2' },
  { de: 'denken',     ua: 'думати',       article: null, level: 'A2' },
  { de: 'helfen',     ua: 'допомагати',   article: null, level: 'A2' },
  { de: 'öffnen',     ua: 'відкривати',   article: null, level: 'A2' },
  { de: 'suchen',     ua: 'шукати',       article: null, level: 'A2' },
  { de: 'vergessen',  ua: 'забувати',     article: null, level: 'A2' },
  { de: 'verstehen',  ua: 'розуміти',     article: null, level: 'A2' },
  { de: 'warten',     ua: 'чекати',       article: null, level: 'A2' },
  { de: 'wichtig',    ua: 'важливий',     article: null, level: 'A2' },
  { de: 'einfach',    ua: 'простий',      article: null, level: 'A2' },
  { de: 'schwierig',  ua: 'складний',     article: null, level: 'A2' },
  { de: 'Handy',      ua: 'мобільний',    article: 'das', level: 'A2' },
  { de: 'Computer',   ua: 'комп\'ютер',   article: 'der', level: 'A2' },
  { de: 'Musik',      ua: 'музика',       article: 'die', level: 'A2' },
  { de: 'Buch',       ua: 'книга',        article: 'das', level: 'A2' },

  // ─────────────── B1 (вище середнього) ───────────────
  { de: 'Gefühl',         ua: 'почуття',       article: 'das', level: 'B1' },
  { de: 'Liebe',          ua: 'любов',         article: 'die', level: 'B1' },
  { de: 'Angst',          ua: 'страх',         article: 'die', level: 'B1' },
  { de: 'Freude',         ua: 'радість',       article: 'die', level: 'B1' },
  { de: 'Glück',          ua: 'щастя',         article: 'das', level: 'B1' },
  { de: 'Hoffnung',       ua: 'надія',         article: 'die', level: 'B1' },
  { de: 'Gesellschaft',   ua: 'суспільство',   article: 'die', level: 'B1' },
  { de: 'Politik',        ua: 'політика',      article: 'die', level: 'B1' },
  { de: 'Gesetz',         ua: 'закон',         article: 'das', level: 'B1' },
  { de: 'Freiheit',       ua: 'свобода',       article: 'die', level: 'B1' },
  { de: 'Frieden',        ua: 'мир',           article: 'der', level: 'B1' },
  { de: 'Krieg',          ua: 'війна',         article: 'der', level: 'B1' },
  { de: 'Umwelt',         ua: 'довкілля',      article: 'die', level: 'B1' },
  { de: 'Natur',          ua: 'природа',       article: 'die', level: 'B1' },
  { de: 'Karriere',       ua: 'кар\'єра',      article: 'die', level: 'B1' },
  { de: 'Erfahrung',      ua: 'досвід',        article: 'die', level: 'B1' },
  { de: 'Prüfung',        ua: 'іспит',         article: 'die', level: 'B1' },
  { de: 'Erfolg',         ua: 'успіх',         article: 'der', level: 'B1' },
  { de: 'Bildung',        ua: 'освіта',        article: 'die', level: 'B1' },
  { de: 'Lehrer',         ua: 'вчитель',       article: 'der', level: 'B1' },
  { de: 'Student',        ua: 'студент',       article: 'der', level: 'B1' },
  { de: 'Wissenschaft',   ua: 'наука',         article: 'die', level: 'B1' },
  { de: 'Meinung',        ua: 'думка',         article: 'die', level: 'B1' },
  { de: 'Idee',           ua: 'ідея',          article: 'die', level: 'B1' },
  { de: 'Entscheidung',   ua: 'рішення',       article: 'die', level: 'B1' },
  { de: 'Möglichkeit',    ua: 'можливість',    article: 'die', level: 'B1' },
  { de: 'Ziel',           ua: 'ціль',          article: 'das', level: 'B1' },
  { de: 'Problem',        ua: 'проблема',      article: 'das', level: 'B1' },
  { de: 'Lösung',         ua: 'рішення',       article: 'die', level: 'B1' },
  { de: 'Grund',          ua: 'причина',       article: 'der', level: 'B1' },
  { de: 'Ergebnis',       ua: 'результат',     article: 'das', level: 'B1' },
  { de: 'ändern',         ua: 'змінювати',     article: null, level: 'B1' },
  { de: 'entscheiden',    ua: 'вирішувати',    article: null, level: 'B1' },
  { de: 'erklären',       ua: 'пояснювати',    article: null, level: 'B1' },
  { de: 'glauben',        ua: 'вірити',        article: null, level: 'B1' },
  { de: 'versuchen',      ua: 'намагатися',    article: null, level: 'B1' },
  { de: 'bekannt',        ua: 'відомий',       article: null, level: 'B1' },
  { de: 'sozial',         ua: 'соціальний',    article: null, level: 'B1' },
  { de: 'zufrieden',      ua: 'задоволений',   article: null, level: 'B1' },
  { de: 'Gesundheit',     ua: 'здоров\'я',     article: 'die', level: 'B1' },
  { de: 'Stress',         ua: 'стрес',         article: 'der', level: 'B1' },
  { de: 'Sport',          ua: 'спорт',         article: 'der', level: 'B1' },
  { de: 'Team',           ua: 'команда',       article: 'das', level: 'B1' },
  { de: 'Kultur',         ua: 'культура',      article: 'die', level: 'B1' },
  { de: 'Museum',         ua: 'музей',         article: 'das', level: 'B1' },

  // ─────────────── B2 (просунутий) ───────────────
  { de: 'Voraussetzung',  ua: 'передумова',          article: 'die', level: 'B2' },
  { de: 'Zusammenhang',   ua: 'зв\'язок',            article: 'der', level: 'B2' },
  { de: 'Auswirkung',     ua: 'вплив',               article: 'die', level: 'B2' },
  { de: 'Herausforderung',ua: 'виклик',              article: 'die', level: 'B2' },
  { de: 'Bereitschaft',   ua: 'готовність',          article: 'die', level: 'B2' },
  { de: 'Kenntnis',       ua: 'знання',              article: 'die', level: 'B2' },
  { de: 'Erkenntnis',     ua: 'пізнання',            article: 'die', level: 'B2' },
  { de: 'Wahrnehmung',    ua: 'сприйняття',          article: 'die', level: 'B2' },
  { de: 'Einstellung',    ua: 'ставлення',           article: 'die', level: 'B2' },
  { de: 'Fähigkeit',      ua: 'здатність',           article: 'die', level: 'B2' },
  { de: 'Bedeutung',      ua: 'значення',            article: 'die', level: 'B2' },
  { de: 'Grundlage',      ua: 'основа',              article: 'die', level: 'B2' },
  { de: 'Verständnis',    ua: 'розуміння',           article: 'das', level: 'B2' },
  { de: 'Zustimmung',     ua: 'згода',               article: 'die', level: 'B2' },
  { de: 'Ablehnung',      ua: 'відмова',             article: 'die', level: 'B2' },
  { de: 'Umstand',        ua: 'обставина',           article: 'der', level: 'B2' },
  { de: 'Anspruch',       ua: 'вимога',              article: 'der', level: 'B2' },
  { de: 'Bereich',        ua: 'сфера',               article: 'der', level: 'B2' },
  { de: 'Beziehung',      ua: 'стосунки',            article: 'die', level: 'B2' },
  { de: 'Einfluss',       ua: 'вплив',               article: 'der', level: 'B2' },
  { de: 'Erwartung',      ua: 'очікування',          article: 'die', level: 'B2' },
  { de: 'Faktor',         ua: 'фактор',              article: 'der', level: 'B2' },
  { de: 'Folge',          ua: 'наслідок',            article: 'die', level: 'B2' },
  { de: 'Gelegenheit',    ua: 'нагода',              article: 'die', level: 'B2' },
  { de: 'Situation',      ua: 'ситуація',            article: 'die', level: 'B2' },
  { de: 'Tatsache',       ua: 'факт',                article: 'die', level: 'B2' },
  { de: 'Unterschied',    ua: 'різниця',             article: 'der', level: 'B2' },
  { de: 'Ursache',        ua: 'причина',             article: 'die', level: 'B2' },
  { de: 'Veränderung',    ua: 'зміна',               article: 'die', level: 'B2' },
  { de: 'Vorteil',        ua: 'перевага',            article: 'der', level: 'B2' },
  { de: 'Nachteil',       ua: 'недолік',             article: 'der', level: 'B2' },
  { de: 'Zweifel',        ua: 'сумнів',              article: 'der', level: 'B2' },
  { de: 'analysieren',    ua: 'аналізувати',         article: null, level: 'B2' },
  { de: 'diskutieren',    ua: 'обговорювати',        article: null, level: 'B2' },
  { de: 'entstehen',      ua: 'виникати',            article: null, level: 'B2' },
  { de: 'erfordern',      ua: 'вимагати',            article: null, level: 'B2' },
  { de: 'handeln',        ua: 'діяти',               article: null, level: 'B2' },
  { de: 'lösen',          ua: 'вирішувати',          article: null, level: 'B2' },
  { de: 'verbinden',      ua: 'з\'єднувати',         article: null, level: 'B2' },
  { de: 'vermeiden',      ua: 'уникати',             article: null, level: 'B2' },
  { de: 'bedeutend',      ua: 'значущий',            article: null, level: 'B2' },
  { de: 'deutlich',       ua: 'виразний',            article: null, level: 'B2' },
  { de: 'notwendig',      ua: 'необхідний',          article: null, level: 'B2' },
  { de: 'verantwortlich', ua: 'відповідальний',      article: null, level: 'B2' },
  { de: 'Absicht',        ua: 'намір',               article: 'die', level: 'B2' },
  { de: 'Aufgabe',        ua: 'завдання',            article: 'die', level: 'B2' },
  { de: 'Beitrag',        ua: 'внесок',              article: 'der', level: 'B2' },
  { de: 'Sicherheit',     ua: 'безпека',             article: 'die', level: 'B2' },
  { de: 'Struktur',       ua: 'структура',           article: 'die', level: 'B2' },
  { de: 'Theorie',        ua: 'теорія',              article: 'die', level: 'B2' }
];

// ============================================================
//  ГРАМАТИКА
// ============================================================
//  Кожен урок: { id, title, level, theory (HTML), tasks: [{prompt, answer, options, explain}] }
// ============================================================

const GRAMMAR_LESSONS = [
  {
    id: 'pronouns', title: 'Займенники', level: 'A0',
    theory: '<p><b>ich</b> я · <b>du</b> ти · <b>er</b> він · <b>sie</b> вона · <b>es</b> воно · <b>wir</b> ми · <b>ihr</b> ви · <b>sie</b> вони</p>',
    tasks: [
      { prompt: '___ bin Student.',  answer: 'ich', options: ['ich','du','er'],  explain: '1 ос. одн. = ich.' },
      { prompt: '___ bist müde.',    answer: 'du',  options: ['ich','du','wir'], explain: '2 ос. одн. = du.' },
      { prompt: '___ ist Lehrer.',   answer: 'er',  options: ['ich','er','ihr'], explain: '3 ос. чол. = er.' },
      { prompt: '___ sind Freunde.', answer: 'wir', options: ['wir','ihr','sie'],explain: '1 ос. мн. = wir.' },
      { prompt: '___ seid Schüler.', answer: 'ihr', options: ['wir','ihr','sie'],explain: '2 ос. мн. = ihr.' }
    ]
  },
  {
    id: 'sein', title: 'sein (бути)', level: 'A0',
    theory: '<p>ich <b>bin</b> · du <b>bist</b> · er <b>ist</b> · wir <b>sind</b> · ihr <b>seid</b> · sie <b>sind</b></p>',
    tasks: [
      { prompt: 'Ich ___ müde.',     answer: 'bin',  options: ['bin','bist','ist'],  explain: 'ich → bin.' },
      { prompt: 'Du ___ Student.',   answer: 'bist', options: ['bin','bist','ist'],  explain: 'du → bist.' },
      { prompt: 'Er ___ Lehrer.',    answer: 'ist',  options: ['bin','bist','ist'],  explain: 'er → ist.' },
      { prompt: 'Wir ___ Freunde.',  answer: 'sind', options: ['sind','seid','ist'], explain: 'wir → sind.' }
    ]
  },
  {
    id: 'haben', title: 'haben (мати)', level: 'A1',
    theory: '<p>ich <b>habe</b> · du <b>hast</b> · er <b>hat</b> · wir <b>haben</b> · ihr <b>habt</b></p>',
    tasks: [
      { prompt: 'Ich ___ Hunger.',    answer: 'habe',  options: ['habe','hast','hat'],  explain: 'ich → habe.' },
      { prompt: 'Du ___ Zeit.',       answer: 'hast',  options: ['habe','hast','hat'],  explain: 'du → hast.' },
      { prompt: 'Er ___ ein Auto.',   answer: 'hat',   options: ['habe','hast','hat'],  explain: 'er → hat.' },
      { prompt: 'Wir ___ ein Haus.',  answer: 'haben', options: ['haben','habt','hat'], explain: 'wir → haben.' }
    ]
  },
  {
    id: 'articles', title: 'Артиклі (der/die/das)', level: 'A1',
    theory: '<p><b>der</b> — чоловічий · <b>die</b> — жіночий · <b>das</b> — середній</p><p>Підказки: -ung/-heit/-keit/-schaft → die; -chen/-lein → das.</p>',
    tasks: [
      { prompt: '___ Mann kommt.',   answer: 'der', options: ['der','die','das'], explain: 'der Mann.' },
      { prompt: '___ Frau arbeitet.',answer: 'die', options: ['der','die','das'], explain: 'die Frau.' },
      { prompt: '___ Kind spielt.',  answer: 'das', options: ['der','die','das'], explain: 'das Kind.' },
      { prompt: '___ Buch ist neu.', answer: 'das', options: ['der','die','das'], explain: 'das Buch.' },
      { prompt: '___ Tisch ist groß.',answer:'der', options: ['der','die','das'], explain: 'der Tisch.' },
      { prompt: '___ Stadt ist schön.',answer:'die',options: ['der','die','das'], explain: 'die Stadt.' }
    ]
  },
  {
    id: 'regverbs', title: 'Правильні дієслова', level: 'A1',
    theory: '<p>ich mach<b>e</b> · du mach<b>st</b> · er mach<b>t</b> · wir mach<b>en</b></p>',
    tasks: [
      { prompt: 'Ich ___ Musik.',      answer: 'mache',  options: ['mache','machst','macht'], explain: 'mache.' },
      { prompt: 'Du ___ in Berlin.',   answer: 'wohnst', options: ['wohne','wohnst','wohnt'], explain: 'wohnst.' },
      { prompt: 'Er ___ Deutsch.',     answer: 'lernt',  options: ['lerne','lernst','lernt'], explain: 'lernt.' },
      { prompt: 'Wir ___ Fußball.',    answer: 'spielen',options: ['spielt','spielen','spielst'], explain: 'spielen.' }
    ]
  },
  {
    id: 'wq', title: 'Питальні слова', level: 'A1',
    theory: '<p><b>Wer</b> хто · <b>Was</b> що · <b>Wo</b> де · <b>Wann</b> коли · <b>Wie</b> як · <b>Woher</b> звідки</p>',
    tasks: [
      { prompt: '___ kommst du?', answer: 'Woher', options: ['Wo','Woher','Wohin'], explain: 'Woher = звідки.' },
      { prompt: '___ wohnst du?', answer: 'Wo',    options: ['Wo','Wann','Wie'],    explain: 'Wo = де.' },
      { prompt: '___ heißt du?',  answer: 'Wie',   options: ['Was','Wer','Wie'],    explain: 'Wie = як.' },
      { prompt: '___ ist das?',   answer: 'Was',   options: ['Wer','Was','Wo'],     explain: 'Was = що.' }
    ]
  },
  {
    id: 'negation', title: 'Заперечення', level: 'A1',
    theory: '<p><b>nicht</b> — дієслова/прикметники. <b>kein/keine</b> — іменники.</p>',
    tasks: [
      { prompt: 'Ich habe ___ Zeit.', answer: 'keine', options: ['nicht','keine','kein'], explain: 'Zeit — жін. → keine.' },
      { prompt: 'Das ist ___ gut.',   answer: 'nicht', options: ['nicht','kein','keine'], explain: 'Прикметник → nicht.' },
      { prompt: 'Er hat ___ Auto.',   answer: 'kein',  options: ['nicht','kein','keine'], explain: 'Auto — сер. → kein.' }
    ]
  },
  {
    id: 'plural', title: 'Множина', level: 'A2',
    theory: '<p>-e (Tisch→Tische) · -er (Kind→Kinder) · -en (Frau→Frauen) · -s (Auto→Autos) · умлаут (Apfel→Äpfel)</p>',
    tasks: [
      { prompt: 'das Kind → ___', answer: 'die Kinder', options: ['die Kinder','die Kinds','die Kinde'], explain: '-er.' },
      { prompt: 'die Frau → ___', answer: 'die Frauen', options: ['die Fraus','die Frauen','die Fraue'], explain: '-en.' },
      { prompt: 'das Auto → ___', answer: 'die Autos',  options: ['die Autos','die Autoe','die Auten'],  explain: '-s.' },
      { prompt: 'der Apfel → ___',answer: 'die Äpfel',  options: ['die Apfels','die Apfele','die Äpfel'],explain: 'умлаут.' }
    ]
  },
  {
    id: 'modals', title: 'Модальні дієслова', level: 'A2',
    theory: '<p>ich <b>kann</b> · du <b>kannst</b> · er <b>kann</b> · ich <b>muss</b> · ich <b>will</b></p><p>1 і 3 ос. одн. — без закінчення.</p>',
    tasks: [
      { prompt: 'Ich ___ schwimmen.', answer: 'kann',  options: ['kann','kannst','könnt'], explain: 'kann.' },
      { prompt: 'Du ___ lernen.',     answer: 'musst', options: ['muss','musst','müsst'], explain: 'musst.' },
      { prompt: 'Er ___ gehen.',      answer: 'will',  options: ['will','willst','wollt'],explain: 'will.' }
    ]
  },
  {
    id: 'perfekt', title: 'Perfekt (минулий)', level: 'B1',
    theory: '<p>haben/sein + Partizip II</p><p>gemacht · gegangen · gegessen · getrunken</p><p>sein — з рухом (gehen, fahren, kommen)</p>',
    tasks: [
      { prompt: 'Ich habe Musik ___.', answer: 'gemacht',   options: ['gemacht','gemachen','macht'], explain: 'gemacht.' },
      { prompt: 'Er ist ___ ___.',     answer: 'nach Hause gegangen', options: ['nach Hause gegangen','nach Hause gegeht','nach Hause geht'], explain: 'gegangen.' },
      { prompt: 'Wir haben Brot ___.', answer: 'gegessen',  options: ['geesst','gegessen','esst'],   explain: 'gegessen.' }
    ]
  },
  {
    id: 'praet', title: 'Präteritum', level: 'B1',
    theory: '<p>sein: war, warst, war, waren, wart<br>haben: hatte, hattest, hatte, hatten, hattet</p>',
    tasks: [
      { prompt: 'Ich ___ 10 Jahre alt.', answer: 'war',     options: ['war','warst','waren'], explain: 'war.' },
      { prompt: 'Du ___ Recht.',         answer: 'hattest', options: ['hatte','hattest','hattet'], explain: 'hattest.' },
      { prompt: 'Er ___ in Berlin.',     answer: 'wohnte',  options: ['wohnt','wohnte','wohnten'], explain: 'wohnte.' }
    ]
  },
  {
    id: 'komp', title: 'Ступені порівняння', level: 'B1',
    theory: '<p>schnell → schneller → am schnellsten<br>gut → besser → am besten<br>viel → mehr → am meisten</p>',
    tasks: [
      { prompt: 'Anna ist ___ als Tom.', answer: 'größer', options: ['größer','größte','groß'], explain: 'Komparativ.' },
      { prompt: 'Das ist das ___ Buch.', answer: 'beste',  options: ['besser','beste','gut'],   explain: 'Superlativ.' },
      { prompt: 'Er hat ___ Zeit.',      answer: 'mehr',   options: ['mehr','meiste','viel'],   explain: 'viel → mehr.' }
    ]
  },
  {
    id: 'nebensatz', title: 'Підрядні речення', level: 'B1',
    theory: '<p>У підрядному дієслово в кінці:<br>Ich bleibe, <b>weil</b> ich krank <b>bin</b>.</p><p>Сполучники: weil, dass, wenn, ob, obwohl</p>',
    tasks: [
      { prompt: 'Ich bleibe, weil ich krank ___.', answer: 'bin',    options: ['bin','ist','bist'],        explain: 'bin.' },
      { prompt: 'Ich hoffe, dass du ___.',         answer: 'kommst',options: ['kommst','kommt','kommen'], explain: 'kommst.' },
      { prompt: 'Wenn es ___, bleibe ich da.',     answer: 'regnet',options: ['regnet','regnen','regne'], explain: 'regnet.' }
    ]
  },
  {
    id: 'dativ', title: 'Dativ (прийменники)', level: 'B1',
    theory: '<p>der→dem · die→der · das→dem · мн.→den</p><p><b>mit, nach, aus, bei, seit, von, zu</b> — завжди Dativ.</p>',
    tasks: [
      { prompt: 'Ich fahre mit ___ Bus.',      answer: 'dem', options: ['den','dem','der'],  explain: 'mit + Dativ.' },
      { prompt: 'Ich komme aus ___ Türkei.',   answer: 'der', options: ['die','der','dem'],  explain: 'aus + Dativ.' },
      { prompt: 'Er wohnt bei ___ Eltern.',    answer: 'den', options: ['der','den','dem'],  explain: 'bei + Dativ, мн. → den.' }
    ]
  },
  {
    id: 'wechsel', title: 'Wechselpräpositionen', level: 'B1',
    theory: '<p>Wohin? → Akkusativ (рух)<br>Wo? → Dativ (місце)</p><p>in, an, auf, über, unter, vor, hinter, neben, zwischen</p>',
    tasks: [
      { prompt: 'Ich gehe in ___ Schule. (рух)',   answer: 'die', options: ['die','der','dem'], explain: 'Wohin → Akk.' },
      { prompt: 'Ich bin in ___ Schule. (місце)',  answer: 'der', options: ['die','der','das'], explain: 'Wo → Dativ.' },
      { prompt: 'Er legt Buch auf ___ Tisch.',     answer: 'den', options: ['den','dem','der'], explain: 'Wohin → Akk.' }
    ]
  }
];