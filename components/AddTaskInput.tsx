import { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';
import { styles } from './AddTaskInput.styles';

type Props = {
  onAdd: (title: string) => void;
};

export default function AddTaskInput({ onAdd }: Props) {
  const [value, setValue] = useState('');

  function handleAdd() {
    if (!value.trim()) return;
    onAdd(value);
    setValue('');
  }

  return (
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
  );
}
