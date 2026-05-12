import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AddTaskInput from './components/AddTaskInput';
import CategoryFilterBar from './components/CategoryFilterBar';
import TaskItem from './components/TaskItem';
import { useTasks } from './hooks/useTasks';
import { CATEGORIES } from './types';
import { styles } from './App.styles';

export default function App() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();
  const [filterId, setFilterId] = useState<string | null>(null);

  const visibleTasks =
    filterId === null ? tasks : tasks.filter((t) => t.categoryId === filterId);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>To-Do List</Text>
          <Text style={styles.subtitle}>
            {visibleTasks.filter((t) => !t.done).length} da fare
          </Text>
        </View>

        <AddTaskInput onAdd={addTask} />

        <CategoryFilterBar
          categories={CATEGORIES}
          selectedId={filterId}
          onSelect={setFilterId}
        />

        <FlatList
          data={visibleTasks}
          keyExtractor={(t) => t.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              category={CATEGORIES.find((c) => c.id === item.categoryId)}
              onToggle={toggleTask}
              onRemove={removeTask}
            />
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
