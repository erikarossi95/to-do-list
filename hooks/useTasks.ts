import { useEffect, useState } from 'react';
import { Task } from '../types';
import { loadTasks, saveTasks } from '../storage';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadTasks().then((t) => {
      setTasks(t);
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (loaded) saveTasks(tasks);
  }, [tasks, loaded]);

  function addTask(title: string, categoryId: string) {
    const trimmed = title.trim();
    if (!trimmed) return;
    const newTask: Task = {
      id: Date.now().toString() + Math.random().toString(36).slice(2, 7),
      title: trimmed,
      done: false,
      categoryId,
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
  }

  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function removeTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return { tasks, addTask, toggleTask, removeTask, loaded };
}
