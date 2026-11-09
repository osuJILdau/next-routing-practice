import Link from 'next/link';

const sections = [
  { number: '01', title: 'О нас', description: 'Знакомство с проектом и обычной статической страницей.', href: '/about', color: 'blue-card', icon: '✳' },
  { number: '02', title: 'Блог', description: 'Посты, динамические ссылки и пример вложенного маршрута.', href: '/blog', color: 'violet-card', icon: '▤' },
  { number: '03', title: 'Курсы', description: 'Отдельный layout и страницы, которые открываются по id.', href: '/courses', color: 'green-card', icon: '◇' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> Практическая работа • Next.js</span>
          <h1>Один проект.<br /><span className="accent-text">Много страниц.</span></h1>
          <p className="hero-description">Изучаем маршрутизацию Next.js: создаём страницы, переходим между ними и работаем с Layout и Template.</p>
          <div className="hero-actions">
            <Link href="/blog" className="primary-button">Открыть блог <span>↗</span></Link>
            <Link href="/courses" className="text-button">Посмотреть курсы <span>→</span></Link>
          </div>
          <div className="hero-footnote"><span className="dot" /> App Router <span className="sep">·</span> TypeScript <span className="sep">·</span> Next.js 15</div>
        </div>
        <div className="hero-demo" aria-label="Схема страниц проекта">
          <div className="window-head"><div className="window-dots"><i/><i/><i/></div><span>localhost:3000</span><span className="window-menu">•••</span></div>
          <div className="route-list">
            <div className="route-topline"><span>app /</span><span className="route-status">● online</span></div>
            <div className="route active-route"><span className="route-icon">⌂</span><span>/</span><em>Главная</em></div>
            <div className="route"><span className="route-icon">↳</span><span>/about</span><em>Страница</em></div>
            <div className="route"><span className="route-icon">↳</span><span>/blog</span><em>Список</em></div>
            <div className="route nested"><span className="route-icon">↳</span><span>/blog/[id]</span><em>Динамика</em></div>
            <div className="route"><span className="route-icon">↳</span><span>/courses</span><em>Курсы</em></div>
          </div>
          <div className="window-bottom"><span>5 маршрутов</span><span>Готово к изучению <b>✓</b></span></div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading"><div><span className="eyebrow gray">НАВИГАЦИЯ</span><h2>Куда отправимся?</h2></div><p>Выбери любой раздел и посмотри, как работает маршрутизация.</p></div>
        <div className="section-grid">
          {sections.map((section) => (
            <Link className={'section-card ' + section.color} href={section.href} key={section.href}>
              <div className="card-top"><span>{section.number} / РАЗДЕЛ</span><span className="card-arrow">↗</span></div>
              <div className="card-icon">{section.icon}</div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <span className="card-link">Перейти <span>→</span></span>
            </Link>
          ))}
        </div>
      </section>
      <div className="bottom-strip container"><span>↗</span><span>Практика помогает разобраться с Next.js на реальных примерах.</span><Link href="/blog">Начать с блога →</Link></div>
    </>
  );
}
