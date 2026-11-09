import Link from 'next/link';
import { posts } from '../data';

export default function BlogPage() {
  return (
    <div>
      <div className="page-hero blog-page-hero">
        <span className="eyebrow gray">РАЗДЕЛ /blog</span>
        <h1>Наш блог<span className="period">.</span></h1>
        <p>Небольшие статьи про Next.js, ссылки и устройство страниц.</p>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <Link href={'/blog/' + post.id} key={post.id} className="post-card">
            <div className="post-number">0{post.id}</div>
            <div className="post-text"><span className="post-category">{post.category} <span>• {post.time}</span></span><h2>{post.title}</h2><p>{post.description}</p></div>
            <span className="post-arrow">↗</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
