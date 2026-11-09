import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container page-container">
      <div className="page-hero">
        <span className="eyebrow gray">СТАТИЧЕСКИЙ МАРШРУТ /about</span>
        <h1>О нашем проекте<span className="period">.</span></h1>
        <p>Это учебный сайт, на котором можно увидеть основные возможности маршрутизации в Next.js.</p>
      </div>
      <div className="about-grid">
        <div className="white-panel">
          <span className="panel-label">ЧТО МЫ ИЗУЧАЕМ</span>
          <h2>От простой страницы до динамического маршрута</h2>
          <p>Страницы находятся в папке <code>app</code>. Чтобы создать новый адрес сайта, достаточно добавить папку с файлом <code>page.tsx</code>.</p>
          <p>Для переходов используется компонент <code>Link</code>. Он позволяет переключаться между страницами без полной перезагрузки.</p>
          <Link href="/blog" className="primary-button small-button">Перейти к блогу ↗</Link>
        </div>
        <div className="aside-panel"><span className="aside-icon">✦</span><h3>Всё на практике</h3><p>В проекте есть обычные страницы, динамические адреса, общие макеты и шаблоны.</p><div className="aside-stat"><strong>Next.js</strong><span>App Router</span></div></div>
      </div>
    </div>
  );
}
