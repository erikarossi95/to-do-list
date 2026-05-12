import { Text, TouchableOpacity, View } from 'react-native';
import { Task } from '../types';
import { styles } from './TaskItem.styles';

type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function TaskItem({ task, onToggle, onRemove }: Props) {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[styles.checkbox, task.done && styles.checkboxDone]}
        onPress={() => onToggle(task.id)}
      >
        {task.done && <Text style={styles.check}>✓</Text>}
      </TouchableOpacity>
      <Text style={[styles.title, task.done && styles.titleDone]} numberOfLines={2}>
        {task.title}
      </Text>
      <TouchableOpacity onPress={() => onRemove(task.id)} style={styles.delete}>
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}
