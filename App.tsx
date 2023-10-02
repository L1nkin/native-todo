import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ListCell from './components/ListCell';
import Form from './components/Form';

interface ListObjectModel {
  text: string,
  index: number,
  date: number
}

export default function App() {
  const [listOfSections, setListOfSections] = useState(Array<ListObjectModel>)

  const addTask = (text: string) => {
    if (text.length != 0) {
      setListOfSections([...listOfSections, { index: listOfSections.length, text: text, date: Date.now() }])
    } else {
      console.error('Text can`t be a empty')
    }
  }

  const removeItem = (date: number) => {
    setListOfSections(listOfSections.filter((item) => { return item.date != date }))
  }

  return (
    <View style={styles.container}>
      <Header title='ToDo List' />
      <Form addHandler={addTask} />
      <View style={styles.container}>
        <FlatList style={styles.list} data={listOfSections} renderItem={(element) => (
          <ListCell index={element.item.index} text={element.item.text} date={element.item.date} removeItem={removeItem} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    bottom: 16
  }
});
