import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default Input = ({ children, secureTextEntry, value, onChangeText }) => {
    return (
        <View style={styles.input}>
            <Text style={{ color: 'black', fontSize: 20 }}>{children}</Text>
            <TextInput value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} style={{ backgroundColor: 'white', fontSize: 15, height: 40 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 75,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
    },
})