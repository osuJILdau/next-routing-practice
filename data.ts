export interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  time: string;
}

export const posts: Post[] = [
  { id: '1', title: 'Как устроен App Router', description: 'Разбираемся, как папки превращаются в страницы.', category: 'NEXT.JS', time: '5 мин' },
  { id: '2', title: 'Зачем нужен компонент Link', description: 'Переходим между страницами без полной перезагрузки.', category: 'НАВИГАЦИЯ', time: '4 мин' },
  { id: '3', title: 'Layout и Template — в чём разница', description: 'Проверяем сохранение и сброс состояния на примере.', category: 'КОМПОНЕНТЫ', time: '6 мин' },
];

export interface Course {
  id: string;
  title: string;
  description: string;
  lessons: number;
  level: string;
}

export const courses: Course[] = [
  { id: '1', title: 'Основы HTML и CSS', description: 'Научимся делать простые страницы и стилизовать их.', lessons: 8, level: 'Начальный' },
  { id: '2', title: 'JavaScript с нуля', description: 'Переменные, функции и первые интерактивные элементы.', lessons: 12, level: 'Начальный' },
  { id: '3', title: 'Первые шаги в Next.js', description: 'Страницы, ссылки, компоненты и динамические маршруты.', lessons: 7, level: 'Базовый' },
];
