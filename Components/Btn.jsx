import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

export default Btn = ({ children, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={{ color: 'white', fontSize: 25, }}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    backgroundColor: 'black',
    borderRadius: 10,
    borderTopEndRadius: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})