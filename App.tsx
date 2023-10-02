import { useMemo, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import ListCell from './components/ListCell';
import Form from './components/Form';
import SearchInput from './components/SearchInput';

interface ListObjectModel {
  text: string,
  index: number,
  date: number
}

export default function App() {
  const [listOfSections, setListOfSections] = useState(Array<ListObjectModel>)
  const [query, setQuery] = useState('')

  const searchedItems = useMemo(() => {
    return listOfSections.filter((item) => { return item.text.includes(query) })
  }, [listOfSections, query])

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

  const searchItem = (query: string) => {
    setQuery(query)
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container} >
        <Header title='ToDo List' />
        <Form addHandler={addTask} />
        <SearchInput addHandler={searchItem} />
        <View style={styles.container}>
          <FlatList style={styles.list} data={searchedItems} renderItem={(element) => (
            <ListCell index={element.item.index} text={element.item.text} date={element.item.date} removeItem={removeItem} />
          )} />
        </View>
      </KeyboardAvoidingView>
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
