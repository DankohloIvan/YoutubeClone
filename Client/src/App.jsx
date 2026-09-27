import { useMemo, useState } from 'react'
import './App.css'

const videos = [
  {
    title: 'Тихое утро у моря — музыка для медленного дня',
    channel: 'Waves & Weather',
    views: '1,2 млн просмотров',
    age: '2 дня назад',
    duration: '14:28',
    category: 'Музыка',
    avatar: 'W',
    avatarColor: 'lavender',
    art: 'coast',
    coverTitle: 'SLOW\nMORNINGS',
    coverNote: 'музыка для себя',
  },
  {
    title: 'Как устроены современные электропоезда',
    channel: 'Простая инженерия',
    views: '340 тыс. просмотров',
    age: '1 неделю назад',
    duration: '18:06',
    category: 'Технологии',
    avatar: 'И',
    avatarColor: 'blue',
    art: 'train',
    coverTitle: 'ВНУТРИ\nПОЕЗДА',
    coverNote: 'простая инженерия',
  },
  {
    title: 'Маленькая квартира, большой ремонт: до и после',
    channel: 'Дом как есть',
    views: '860 тыс. просмотров',
    age: '5 дней назад',
    duration: '22:41',
    category: 'Дизайн',
    avatar: 'Д',
    avatarColor: 'peach',
    art: 'interior',
    coverTitle: 'ДО / ПОСЛЕ',
    coverNote: 'квартира 42 м²',
  },
  {
    title: 'Готовлю рамен дома: бульон за шесть часов',
    channel: 'Лена на кухне',
    views: '512 тыс. просмотров',
    age: '3 дня назад',
    duration: '26:12',
    category: 'Кулинария',
    avatar: 'Л',
    avatarColor: 'rose',
    art: 'ramen',
    coverTitle: 'РАМЕН\nДОМА',
    coverNote: 'уютный рецепт',
  },
  {
    title: 'Внутри северного леса. Камера без слов',
    channel: 'Wild Frame',
    views: '2,1 млн просмотров',
    age: '2 недели назад',
    duration: '31:04',
    category: 'Природа',
    avatar: 'W',
    avatarColor: 'mint',
    art: 'forest',
    coverTitle: 'ТИШИНА\nЛЕСА',
    coverNote: 'съёмка в 4K',
  },
  {
    title: 'Пишу музыку на одном синтезаторе',
    channel: 'tone lab',
    views: '190 тыс. просмотров',
    age: '1 день назад',
    duration: '12:55',
    category: 'Музыка',
    avatar: 't',
    avatarColor: 'violet',
    art: 'synth',
    coverTitle: 'ONE\nSYNTH',
    coverNote: 'маленькая студия',
  },
  {
    title: 'Пять идей для короткой поездки из города',
    channel: 'По пути',
    views: '245 тыс. просмотров',
    age: '6 дней назад',
    duration: '16:37',
    category: 'Путешествия',
    avatar: 'П',
    avatarColor: 'yellow',
    art: 'road',
    coverTitle: 'БЛИЖЕ, ЧЕМ\nКАЖЕТСЯ',
    coverNote: 'идеи на выходные',
  },
  {
    title: 'Почему старые камеры снимают так красиво',
    channel: 'Фокусное расстояние',
    views: '432 тыс. просмотров',
    age: '4 дня назад',
    duration: '20:18',
    category: 'Технологии',
    avatar: 'Ф',
    avatarColor: 'slate',
    art: 'camera',
    coverTitle: 'ПЛЁНКА\nИЛИ ЦИФРА?',
    coverNote: 'разбираемся вместе',
  },
  {
    title: 'Домашняя пекарня: хлеб на закваске',
    channel: 'Крошки',
    views: '308 тыс. просмотров',
    age: '1 неделю назад',
    duration: '19:43',
    category: 'Кулинария',
    avatar: 'К',
    avatarColor: 'orange',
    art: 'bread',
    coverTitle: 'ХЛЕБ\nИ ВРЕМЯ',
    coverNote: 'домашняя пекарня',
  },
  {
    title: 'Вечерний город с высоты: прогулка без маршрута',
    channel: 'Frame by Frame',
    views: '780 тыс. просмотров',
    age: '3 недели назад',
    duration: '11:09',
    category: 'Путешествия',
    avatar: 'F',
    avatarColor: 'blue',
    art: 'city',
    coverTitle: 'ГОРОД\nНЕ СПИТ',
    coverNote: 'ночная прогулка',
  },
  {
    title: 'Рабочее место, за которым хочется сидеть',
    channel: 'Desk Notes',
    views: '164 тыс. просмотров',
    age: '5 дней назад',
    duration: '15:32',
    category: 'Дизайн',
    avatar: 'D',
    avatarColor: 'mint',
    art: 'desk',
    coverTitle: 'МЕСТО\nДЛЯ ИДЕЙ',
    coverNote: 'небольшой сетап',
  },
  {
    title: 'Как ухаживать за комнатными растениями без суеты',
    channel: 'Зелёный лист',
    views: '96 тыс. просмотров',
    age: '2 дня назад',
    duration: '13:17',
    category: 'Природа',
    avatar: 'З',
    avatarColor: 'green',
    art: 'plants',
    coverTitle: 'БОЛЬШЕ\nЗЕЛЕНИ',
    coverNote: 'просто о растениях',
  },
]

const categories = ['Все', 'Музыка', 'Технологии', 'Кулинария', 'Путешествия', 'Дизайн', 'Природа']

const navGroups = [
  [
    { icon: 'home', label: 'Главная', active: true },
    { icon: 'shorts', label: 'Shorts' },
    { icon: 'subscriptions', label: 'Подписки' },
  ],
  [
    { icon: 'history', label: 'История' },
    { icon: 'playlist', label: 'Плейлисты' },
    { icon: 'clock', label: 'Смотреть позже' },
    { icon: 'like', label: 'Понравившиеся' },
  ],
]

const iconPaths = {
  menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></>,
  mic: <><rect x="9" y="3" width="6" height="12" rx="3" /><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3m-4 0h8" /></>,
  create: <><path d="M12 5v14M5 12h14" /></>,
  bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
  home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" /></>,
  shorts: <><path d="m14.5 3.5 5 2.9a3 3 0 0 1 0 5.2l-9 5.2a3 3 0 0 1-3-5.2l2.1-1.2-3.1-1.8a3 3 0 0 1 0-5.2l4-2.3a3 3 0 0 1 4 1.1Z" /><path d="m9.5 20.5-5-2.9a3 3 0 0 1 0-5.2l9-5.2a3 3 0 0 1 3 5.2l-2.1 1.2 3.1 1.8a3 3 0 0 1 0 5.2l-4 2.3a3 3 0 0 1-4-1.1Z" /></>,
  subscriptions: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m10 9 5 3-5 3z" /></>,
  history: <><path d="M3 12a9 9 0 1 0 2.6-6.4L3 8" /><path d="M3 3v5h5m4-1v5l3 2" /></>,
  playlist: <><path d="M4 6h11M4 11h11M4 16h7M18 13v7l3-1.8" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  like: <><path d="M7 10v11H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zm0 0 5-8a3 3 0 0 1 2 3v3h5a2 2 0 0 1 2 2l-1 8a2 2 0 0 1-2 2H7" /></>,
  chevron: <><path d="m9 18 6-6-6-6" /></>,
  more: <><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></>,
  star: <><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.1.9-1.1 1.9-1.4-.5a8 8 0 0 1-1.5.9l-.3 1.5h-2.2l-.3-1.5a8 8 0 0 1-1.7-.7l-1.3.7-1.6-1.6.7-1.3a8 8 0 0 1-.7-1.7l-1.5-.3v-2.2l1.5-.3a8 8 0 0 1 .7-1.7l-.7-1.3 1.6-1.6 1.3.7a8 8 0 0 1 1.7-.7l.3-1.5h2.2l.3 1.5a8 8 0 0 1 1.7.7l1.3-.7 1.6 1.6-.7 1.3a8 8 0 0 1 .7 1.7l1.5.3v2.2l-1.5.3a8 8 0 0 1-.7 1.7Z" transform="translate(-1 -1)" /></>,
  report: <><path d="M5 3v18m0-17h13l-2.8 4L18 12H5" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.6 9a2.5 2.5 0 1 1 4.2 1.8c-1 .9-1.8 1.2-1.8 2.7m0 3h.01" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
}

function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  )
}

function VideoCard({ video }) {
  return (
    <article className="video-card">
      <div className={`thumbnail art-${video.art}`} role="img" aria-label={`Демонстрационная обложка: ${video.title}`}>
        <span className="cover-kicker">{video.coverNote}</span>
        <span className="cover-title">{video.coverTitle.split('\n').map((line) => <span key={line}>{line}</span>)}</span>
        <span className="duration">{video.duration}</span>
      </div>
      <div className="video-info">
        <div className={`channel-avatar ${video.avatarColor}`}>{video.avatar}</div>
        <div className="video-copy">
          <h2 className="video-title">{video.title}</h2>
          <p className="channel-name">{video.channel}</p>
          <p className="video-meta">{video.views} · {video.age}</p>
        </div>
        <button className="more-button" type="button" aria-label="Другие действия"><Icon name="more" size={19} /></button>
      </div>
    </article>
  )
}

function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Все')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const filteredVideos = useMemo(() => {
    const query = search.trim().toLocaleLowerCase('ru')

    return videos.filter((video) => {
      const matchesCategory = category === 'Все' || video.category === category
      const matchesSearch = !query || `${video.title} ${video.channel} ${video.category}`.toLocaleLowerCase('ru').includes(query)
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-area">
          <button className="icon-button menu-button" type="button" aria-label="Свернуть меню" onClick={() => setSidebarOpen((open) => !open)}><Icon name="menu" /></button>
          <a className="brand" href="#home" aria-label="YouTube — главная">
            <span className="brand-mark"><span /></span>
            <span className="brand-name">YouTube</span><sup>RU</sup>
          </a>
        </div>
        <form className="search-area" onSubmit={(event) => event.preventDefault()} role="search">
          <div className="search-box">
            <input aria-label="Поиск видео" placeholder="Введите запрос" value={search} onChange={(event) => setSearch(event.target.value)} />
            {search && <button className="clear-search" type="button" aria-label="Очистить поиск" onClick={() => setSearch('')}>×</button>}
            <Icon name="search" size={19} />
          </div>
          <button className="icon-button voice-button" type="button" aria-label="Голосовой поиск"><Icon name="mic" size={19} /></button>
        </form>
        <div className="top-actions">
          <button className="create-button" type="button"><Icon name="create" size={19} /><span>Создать</span></button>
          <button className="icon-button notification-button" type="button" aria-label="Уведомления"><Icon name="bell" size={19} /></button>
          <button className="profile-button" type="button" aria-label="Профиль">М</button>
        </div>
      </header>

      <div className={`page-layout ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
        <aside className="sidebar" aria-label="Основная навигация">
          {navGroups.map((group, groupIndex) => (
            <nav className="nav-group" key={groupIndex}>
              {group.map((item) => (
                <a className={`nav-item ${item.active ? 'active' : ''}`} href={item.active ? '#home' : '#'} key={item.label} onClick={(event) => { if (!item.active) event.preventDefault() }}>
                  <Icon name={item.icon} size={21} /><span>{item.label}</span>
                </a>
              ))}
            </nav>
          ))}
          <section className="sidebar-note">
            <p>Войдите, чтобы сохранять видео и подписываться на каналы.</p>
            <button type="button" className="signin-button"><span>↪</span> Войти</button>
          </section>
          <p className="sidebar-footer">О проекте · Для авторов<br />Условия · Конфиденциальность</p>
        </aside>

        <main className="main-content" id="home">
          <div className="category-bar" aria-label="Категории видео">
            {categories.map((item) => (
              <button className={`category-chip ${category === item ? 'selected' : ''}`} type="button" key={item} onClick={() => setCategory(item)}>{item}</button>
            ))}
          </div>
          <section className="video-section" aria-label="Рекомендованные видео">
            <div className="section-heading">
              <div>
                <span className="section-eyebrow">Подборка дня</span>
                <h1>{search ? 'Результаты поиска' : category === 'Все' ? 'Видео для вас' : category}</h1>
              </div>
              <span className="demo-label">ПРОТОТИП</span>
            </div>
            {filteredVideos.length ? (
              <div className="video-grid">{filteredVideos.map((video) => <VideoCard video={video} key={video.title} />)}</div>
            ) : (
              <div className="empty-state">
                <span className="empty-icon"><Icon name="search" size={30} /></span>
                <h2>Ничего не найдено</h2>
                <p>Попробуйте изменить запрос или выбрать другую категорию.</p>
                <button type="button" onClick={() => { setSearch(''); setCategory('Все') }}>Сбросить фильтры</button>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
