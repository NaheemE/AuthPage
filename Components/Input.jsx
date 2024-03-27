import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

export default Input = ({ children, secureTextEntry }) => {
    return (
        <View style={styles.input}>
            <Text style={{ color: 'black', fontSize: 20 }}>{children}</Text>
            <TextInput secureTextEntry={secureTextEntry} style={{ backgroundColor: 'white', fontSize: 15 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
    },
})