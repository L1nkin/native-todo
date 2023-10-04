import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ListObjectModel } from '../App';
import ListCell from './ListCell';
import React, { useCallback } from 'react';

interface Props {
    items: ListObjectModel[]

    removeItem: (date: number) => void
}

const FlatListComponent = ({ items, removeItem }: Props) => {
    const renderItem = useCallback((item: ListObjectModel) => {
        return (
            <ListCell
                index={item.index}
                text={item.text}
                date={item.date}
                removeItem={removeItem}
            />
        )
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={items}
                keyExtractor={item => item.date.toString()}
                renderItem={(element) => renderItem(element.item)}
            />
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
    },
    container: {
        flex: 1
    },
    list: {
        bottom: 16
    }
});

export default React.memo(FlatListComponent)
