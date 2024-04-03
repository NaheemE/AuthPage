import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'

export default CategoryBtn = ({ children }) => {
    return (
        <View style={styles.button}>
            <Pressable style={{ paddingHorizontal: 15, }}>
                <Text style={{ fontFamily: "Sora-SemiBold", color: 'white' }}>{children}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#c58b4e',
        borderRadius: 15,
        height: 45,
        marginTop: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 10
    },
})