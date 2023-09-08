import { SpeakersTab } from '../../components/SpeakersTab/SpeakersTab';
import Avatar from './../../images/avatar.jpeg';
import Avatar2 from './../../images/avatar-2.jpg';
import Avatar3 from './../../images/avatar-3.jpg';

export const tabs = [
  {
    title: 'О мероприятии',
    content: (
      <p>
        25 мая в Петербурге и онлайне пройдет митап для разработчиков любого
        уровня, тимлидов и целых команд, которые задумываются или уже начали
        применять Go в коммерческой разработке. Поговорим, как писать
        производительный и легко сопровождаемый код без «побочных эффектов»
      </p>
    ),
  },
  {
    title: 'Программа и спикеры',
    content: <SpeakersTab />,
  },
  {
    title: 'Организаторы',
    content: <p>Организаторы. Тут пока пусто.</p>,
  },
  {
    title: 'Партнеры',
    content: <p>Партнеры. Тут пока пусто.</p>,
  },
];

export const speakersData = [
  {
    avatar: Avatar,
    topic: 'To Go or not to Go',
    speakerName: 'Евгений Соколов, тимлид команды разработки, YADRO',
    speakerSkills:
      '10 лет в IT. Успел пройти путь от С++ до Golang, зацепив по пути DevOps и разработку на Python',
    quote:
      'Мы рассмотрим ключевые парадигмы программирования на Go, узнаем, как работают горутины, планировщик, каналы и модули. А также обсудим, почему Go очень простой, и как за три дня до собеседования выучить его основы до уровня «вы приняты» (если вы уже имеете опыт коммерческой разработки).',
  },
  {
    avatar: Avatar2,
    topic: 'Функции, методы и интерфейсы в Go: особенности и идиомы',
    speakerName: 'Котов Кот, тимлид команды разработки, YADRO',
    speakerSkills: 'Люблю сметанку',
    quote:
      'Эти конструкции часто вызывают вопросы у новичков и споры среди бывалых разработчиков. Давайте посмотрим, как ими пользоваться, чтобы было и красиво, и правильно. Вы узнаете, как идиоматично писать функции без побочных эффектов, когда это не работает, и что лучше - параметры и приемники значения или указатели на них. Мы также заглянем под капот интерфейсов и устроим небольшие соревнования.',
  },
  {
    avatar: Avatar3,
    topic: 'Эффективно используем Go в команде',
    speakerName: 'Геннадий Ковалев, тимлид команды разработки, YADRO',
    speakerSkills:
      'В IT более 30 лет. Знаю про самоорганизацию, процессы и как не мешать инженерам работать.',
    quote:
      'Когда разработчик пишет на Go, язык дает ему огромное пространство для творчества. Но большинство из нас работает не в одиночку. Поговорим, что такое хороший код на Go с точки зрения командной разработки, и как средства языка помогут убрать лишние споры, сэкономить дорогое время и бесценные нервы. Вы узнаете, как сделать продукт сопровождаемым и тестируемым, процесс ревью — плодотворным, а будущий рефакторинг — спокойным.',
  },
];