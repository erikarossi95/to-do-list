import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AddTaskInput from './components/AddTaskInput';
import TaskItem from './components/TaskItem';
import { useTasks } from './hooks/useTasks';
import { styles } from './App.styles';

export default function App() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>To-Do List</Text>
          <Text style={styles.subtitle}>
            {tasks.filter((t) => !t.done).length} da fare
          </Text>
        </View>

        <AddTaskInput onAdd={addTask} />

        <FlatList
          data={tasks}
          keyExtractor={(t) => t.id}
          renderItem={({ item }) => (
            <TaskItem task={item} onToggle={toggleTask} onRemove={removeTask} />
          )}
          ListEmptyComponent={
            <Text style={styles.empty}>Nessun task. Aggiungine uno!</Text>
          }
        />

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
