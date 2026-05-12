import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Category } from '../types';
import { styles } from './CategoryFilterBar.styles';

type Props = {
  categories: Category[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
};

export default function CategoryFilterBar({
  categories,
  selectedId,
  onSelect,
}: Props) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.chip, selectedId === null && styles.chipSelected]}
            onPress={() => onSelect(null)}
          >
            <Text
              style={[
                styles.chipText,
                selectedId === null && styles.chipTextSelected,
              ]}
            >
              Tutte
            </Text>
          </TouchableOpacity>

          {categories.map((cat) => {
            const selected = cat.id === selectedId;
            return (
              <TouchableOpacity
                key={cat.id}
                style={[styles.chip, selected && styles.chipSelected]}
                onPress={() => onSelect(cat.id)}
              >
                <View style={[styles.dot, { backgroundColor: cat.color }]} />
                <Text
                  style={[styles.chipText, selected && styles.chipTextSelected]}
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
