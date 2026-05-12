import { Text, TouchableOpacity, View } from 'react-native';
import { Category, Task } from '../types';
import { styles } from './TaskItem.styles';

type Props = {
  task: Task;
  category: Category | undefined;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function TaskItem({ task, category, onToggle, onRemove }: Props) {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[styles.checkbox, task.done && styles.checkboxDone]}
        onPress={() => onToggle(task.id)}
      >
        {task.done && <Text style={styles.check}>✓</Text>}
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={[styles.title, task.done && styles.titleDone]} numberOfLines={2}>
          {task.title}
        </Text>
        {category && (
          <View style={styles.categoryRow}>
            <View style={[styles.categoryDot, { backgroundColor: category.color }]} />
            <Text style={styles.categoryName}>{category.name}</Text>
          </View>
        )}
      </View>

      <TouchableOpacity onPress={() => onRemove(task.id)} style={styles.delete}>
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}
