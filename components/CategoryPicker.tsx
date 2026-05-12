import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Category } from '../types';
import { styles } from './CategoryPicker.styles';

type Props = {
  categories: Category[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function CategoryPicker({ categories, selectedId, onSelect }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Categoria</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          {categories.map((cat) => {
            const selected = cat.id === selectedId;
            return (
              <TouchableOpacity
                key={cat.id}
                style={[styles.chip, selected && styles.chipSelected]}
                onPress={() => onSelect(cat.id)}
              >
                <View style={[styles.dot, { backgroundColor: cat.color }]} />
                <Text style={styles.chipText}>{cat.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
