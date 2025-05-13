import foto from '../images/foto.jpg';
import basketball from '../images/ball.jpg';
import bike from '../images/bike.jpg';
import windCover from '../images/wind-in-the-head2.avif';
import noMoney from '../images/nomoney.png';
import autograph from '../images/aurograph.png';

import {
  GmailIcon,
  FacebookIcon,
  TelegramIcon,
  // WhatsappIcon,
  InstagramIcon,
  XIcon,
} from '../components/Contacts/Contacts.styled';

export const data = {
  foto,
  basketball,
  bike,
  windCover,
  noMoney,
  autograph,
  text1: `Олег Краюхін — сучасний український письменник, відомий своїм дебютним романом «Вітер у голові», який вийшов у 2025 році. Ця книга поєднує елементи пригодницького фентезі та сатиричної прози, розповідаючи історію львівського велокур’єра Максима, який після участі в експерименті з вакциною потрапляє у вир неймовірних подій протягом одного тижня. Книжковий інтернет-магазин Наш Формат Роман отримав позитивні відгуки за дотепний стиль, гумор та живі діалоги. (Книга доступна в українських книжкових онлайн-магазинах, зокрема в «Наш Формат» та «Bizlit». )`,
  text2: `Олег Краюхін активно взаємодіє зі своєю аудиторією, особисто даруючи книги з автографами, що свідчить про його відкритість та бажання підтримувати зв'язок із читачами. Instagram Хоча детальна біографічна інформація про автора наразі обмежена, його творчість вже привернула увагу літературної спільноти та читачів.`,
  text3: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab omnis possimus quidem laborum minus sed culpa veniam autem, natus quaerat voluptatem voluptatibus eveniet illum voluptates provident iure magnam distinctio.`,
};

export const myBooks = [
  {
    id: 1,
    name: 'Вітер у голові',
    type: 'роман',
    cover: windCover,
    published: 'Київ, "ТЕМПОРА", 2025р',
    genre: 'пригоди/фентезі/сатира',
    pages: 312,
    text: 'Щоб трохи підзаробити, львівський велокур’єр Максим бере участь у дослідженні експериментальної вакцини. Під час процедури стається помилка, яка викликає низку наступних шалених подій: впродовж одного насиченого тижня на Максима звалюється величезна купа труднощів та пригод: погоні на велосипедах, бійки, молодіжні субкультури, дівчата, проблеми з грошима, наркотиками, криміналітетом та поліцією, та ще й раптові головні болі й дивні запаморочення. Події розгортаються дедалі карколомніше, і хлопець намагається розплутати цей дивний клубок подій. Чи вдасться йому це?',
  },
  // {
  //   id: 2,
  //   name: 'Вітер у кишенях',
  //   type: 'буденність',
  //   cover: noMoney,
  //   published: 'Самодрук',
  //   genre: 'життє',
  //   pages: 666,
  //   text: 'Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей Немає грошей ',
  // },
];

export const contacts = [
  {
    id: 1,
    name: 'Gmail',
    href: 'gansyk2@gmail.com',
    Component: GmailIcon,
    color: '#e62e2e',
  },
  {
    id: 2,
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100063026647521',
    Component: FacebookIcon,
    color: '#6824e6',
  },
  {
    id: 3,
    name: 'Instagram',
    href: 'https://www.instagram.com/gans.gans7',
    Component: InstagramIcon,
    color: '#ff5495',
  },
  {
    id: 4,
    name: 'Telegram',
    href: 'https://t.me/gans1313',
    Component: TelegramIcon,
    color: '#2c86ec',
  },
  // {
  //   id: 5,
  //   name: 'WhatsApp',
  //   href: 'https://x.com/notifications',
  //   Component: WhatsappIcon,
  //   color: '#05a30d',
  // },
  {
    id: 6,
    name: 'X (Twitter)',
    href: 'https://x.com/@gans_gansyk',
    Component: XIcon,
    color: '#000000',
  },
];
