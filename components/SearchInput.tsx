import { StyleSheet, TextInput, View } from 'react-native';
import React, { useCallback } from 'react';

interface SearchInputInterface {
    addHandler: (text: string) => void
}

const SearchInput = ({ addHandler }: SearchInputInterface) => {

    const onChange = useCallback((inputText: string) => {
        addHandler(inputText)
    }, [])

    return (
        <View style={styles.main}>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Search a task' />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        margin: 10
    },
    input: {
        height: 50,
        borderWidth: 2,
        marginBottom: 10,
        padding: 5,
        fontSize: 20,
        borderRadius: 16
    }
});

export default React.memo(SearchInput)
