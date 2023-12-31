import { useCallback, useMemo, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import ListCell from './components/ListCell';
import Form from './components/Form';
import SearchInput from './components/SearchInput';
import FlatListComponent from './components/FlatListComponent';

export type ListObjectModel = {
  text: string,
  index: number,
  date: number
}

export default function App() {
  const [listOfSections, setListOfSections] = useState<ListObjectModel[]>([])
  const [query, setQuery] = useState('')

  const searchedItems = useMemo(() => {
    if (!query) {
      return listOfSections
    }
    return listOfSections.filter((item) => { return item.text.includes(query) })
  }, [query, listOfSections])

  const addTask = useCallback((text: string) => {
    if (text.length != 0) {
      setListOfSections([...listOfSections, { index: listOfSections.length, text: text, date: Date.now() }])
    } else {
      console.error('Text can`t be a empty')
    }
  }, [listOfSections])

  const queryHandle = useCallback((query: string) => {
    setQuery(query)
  }, [])

  const removeItem = useCallback((date: number) => {
    console.log('aaaa')
    setListOfSections(prev => prev.filter((item) => { return item.date != date }))
  }, [listOfSections])

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container} >
        <Header title='ToDo List' />
        <Form addHandler={addTask} />
        <SearchInput addHandler={queryHandle} />
        <FlatListComponent items={searchedItems} removeItem={removeItem} />
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
