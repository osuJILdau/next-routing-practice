import Link from 'next/link';
import { posts } from '../../data';

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = posts.find((item) => item.id === id);

  return (
    <article className="article-panel">
      <Link href="/blog" className="back-link">← Все статьи</Link>
      <span className="eyebrow gray">ДИНАМИЧЕСКИЙ МАРШРУТ /blog/{id}</span>
      <h1>{post ? post.title : 'Пост №' + id}<span className="period">.</span></h1>
      <p className="article-lead">{post ? post.description : 'Это содержимое поста с идентификатором ' + id + '.'}</p>
      <div className="article-divider" />
      <p>В Next.js папка <code>[id]</code> позволяет создать одну страницу для разных адресов. Сейчас открыт пост с номером <strong>{id}</strong>.</p>
      <p>Попробуй перейти к другой статье. Так можно увидеть, как изменяется параметр URL и ведут себя layout и template.</p>
      <div className="article-actions">
        <Link href={'/blog/' + id + '/comments/5'} className="primary-button small-button">Открыть комментарий 5 ↗</Link>
        <Link href={'/blog/' + (id === '1' ? '2' : '1')} className="text-button">Другой пост →</Link>
      </div>
    </article>
  );
}
