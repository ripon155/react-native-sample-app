import { View, Text, StyleSheet } from 'react-native';
function List({ data }) {
  return data.map((step, index) => (
    <View key={index} style={styles.listItem}>
      <Text style={styles.itemText}>{step}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#e2b497'
  },
  itemText: {
    color: '#351401',
    textAlign: 'center'
  }
});
