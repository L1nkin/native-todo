import React, { useCallback } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Props {
    index: number,
    text: string,
    date: number

    removeItem: (date: number) => void
}

const ListCell = ({ index, text, date, removeItem }: Props) => {
    const remove = useCallback(() => {
        removeItem(date)
    }, [])

    return (
        <View style={styles.main}>
            <Text style={styles.text}>{index}. {text}</Text>
            <Button title={'Remove'} onPress={remove} />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 16,
        margin: 4,
        padding: 10

    },
    text: {
        paddingLeft: 12,
        fontSize: 18,
        color: 'red',
    },
    button: {
        borderRadius: 16,
        margin: 10,
        backgroundColor: 'white'
    }
});

export default React.memo(ListCell)
