import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  title: string
}

export default function Header(props: HeaderProps) {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'lightgray',
    paddingTop: 50,
    height: 100
  },
  text: {
    fontSize: 26,
    color: '#1976d2',
    textAlign: 'center'
  }
});