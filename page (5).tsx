import Link from 'next/link';
import { courses } from '../../data';

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = courses.find((item) => item.id === id);

  if (!course) {
    return <div className="article-panel"><h1>Курс не найден</h1><Link href="/courses" className="text-button">← Вернуться к курсам</Link></div>;
  }

  return (
    <article className="article-panel">
      <Link href="/courses" className="back-link">← Все курсы</Link>
      <span className="eyebrow gray">КУРС №{id}</span>
      <h1>{course.title}<span className="period">.</span></h1>
      <p className="article-lead">{course.description}</p>
      <div className="course-facts"><div><span>Сложность</span><strong>{course.level}</strong></div><div><span>Количество уроков</span><strong>{course.lessons}</strong></div><div><span>Формат</span><strong>Онлайн</strong></div></div>
      <h2>О курсе</h2><p>Это учебная динамическая страница. Её адрес зависит от идентификатора курса: <code>/courses/{id}</code>.</p>
    </article>
  );
}
