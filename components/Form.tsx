import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface FormInterface {
    addHandler: (text: string) => void
}


const Form = ({ addHandler }: FormInterface) => {
    const [text, setText] = useState('')

    const onChange = (inputText: string) => {
        setText(inputText)
    }

    const onPress = () => {
        addHandler(text)
        setText('')
    }

    return (
        <View style={styles.main}>
            <TextInput style={styles.input} onChangeText={onChange} value={text} placeholder='Enter a task' />
            <Button title='Add' onPress={onPress} />
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

export default Form
