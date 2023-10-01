import { Button, StyleSheet, Text, View } from 'react-native';

interface ListCellProps {
    index: number,
    text: string,
    date: number

    removeItem: (date: number) => void
}

export default function ListCell(props: ListCellProps) {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>{props.index}. {props.text}</Text>
            <Button title={'Remove'} onPress={() => props.removeItem(props.date)} />
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
