import { useRef, useState } from 'react';
import { Button, GestureResponderEvent, StyleSheet, Text, TextInput, View } from 'react-native';

interface FormInterface {
    addHandler: (text: string) => void
}


export default function Form({ addHandler }: FormInterface) {
    const [text, setText] = useState('')

    const onChange = (inputText: string) => {
        setText(inputText)
    }

    const buttonTapped = () => {
        addHandler(text)
        setText('')
    }

    return (
        <View style={styles.main}>
            <TextInput style={styles.input} onChangeText={onChange} value={text} placeholder='enter task' />
            <Button title='add' onPress={() => buttonTapped()} />
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
