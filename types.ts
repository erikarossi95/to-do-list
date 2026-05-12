export type Category = {
  id: string;
  name: string;
  color: string;
};

export type Task = {
  id: string;
  title: string;
  done: boolean;
  categoryId: string;
  createdAt: number;
};

export const CATEGORIES: Category[] = [
  { id: 'work', name: 'Lavoro', color: '#3b82f6' },
  { id: 'home', name: 'Casa', color: '#10b981' },
  { id: 'personal', name: 'Personale', color: '#ec4899' },
  { id: 'study', name: 'Studio', color: '#f59e0b' },
];
