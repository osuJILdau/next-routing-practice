import Link from 'next/link';
import { courses } from '../data';

export default function CoursesPage() {
  return (
    <div>
      <div className="page-hero"><span className="eyebrow gray">РАЗДЕЛ /courses</span><h1>Наши курсы<span className="period">.</span></h1><p>Три коротких курса для начала изучения веб-разработки.</p></div>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <Link href={'/courses/' + course.id} key={course.id} className="course-card">
            <div className={'course-art art-' + index}><span>{index === 0 ? '〈/〉' : index === 1 ? '{ }' : 'N'}</span></div>
            <div className="course-content"><span className="course-meta">{course.level} · {course.lessons} уроков</span><h2>{course.title}</h2><p>{course.description}</p><span className="course-link">Подробнее →</span></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
