import { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import { CATEGORIES } from '../types';
import CategoryPicker from './CategoryPicker';
import { styles } from './AddTaskInput.styles';

type Props = {
  onAdd: (title: string, categoryId: string) => void;
};

export default function AddTaskInput({ onAdd }: Props) {
  const [value, setValue] = useState('');
  const [categoryId, setCategoryId] = useState(CATEGORIES[0].id);

  function handleAdd() {
    if (!value.trim()) return;
    onAdd(value, categoryId);
    setValue('');
  }

  return (
    <View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Nuovo task..."
          value={value}
          onChangeText={setValue}
          onSubmitEditing={handleAdd}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <CategoryPicker
        categories={CATEGORIES}
        selectedId={categoryId}
        onSelect={setCategoryId}
      />
    </View>
  );
}
