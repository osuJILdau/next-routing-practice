import Link from 'next/link';

interface CommentPageProps {
  params: Promise<{ id: string; commentId: string }>;
}

export default async function CommentPage({ params }: CommentPageProps) {
  const { id, commentId } = await params;
  return (
    <div className="article-panel">
      <Link href={'/blog/' + id} className="back-link">← Назад к посту</Link>
      <span className="eyebrow gray">ВЛОЖЕННЫЙ МАРШРУТ</span>
      <h1>Комментарий {commentId}<span className="period">.</span></h1>
      <p className="article-lead">К посту №{id}</p>
      <div className="comment-box"><div className="avatar">C</div><div><strong>Пример комментария</strong><p>Так работает вложенный маршрут: /blog/{id}/comments/{commentId}.</p></div></div>
    </div>
  );
}
