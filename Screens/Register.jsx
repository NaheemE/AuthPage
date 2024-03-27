import { StyleSheet, Text, View, StatusBar, Pressable, TextInput, Button } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'
import React from 'react'
import Input from '../Components/Input'
import Btn from '../Components/Btn'

export default Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='black' />
            {/* top */}
            <View style={styles.top}>
                <View style={{ flex: 1, paddingLeft: 20 }}>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Icons name='arrowleft' size={35} color="white" />
                    </Pressable>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={{ color: 'white', fontSize: 35 }}>Sign Up</Text>
                </View>
            </View>
            {/* bottom */}
            <View style={styles.bottom}>
                {/* form */}
                <View style={styles.form}>
                    {/* textInputs */}
                    <Input>Name</Input>
                    <Input>Email</Input>
                    <Input secureTextEntry>Password</Input>
                    <Input secureTextEntry>Confirm Password</Input>
                </View>
                {/* button */}
                <View style={styles.footer}>
                    <Btn>Sign Up</Btn>
                    <Pressable onPress={() => navigation.navigate("Login")}>
                        <Text style={{ color: 'black', fontSize: 15, textAlign: 'center', paddingTop: 20 }}>You have an account? Log In</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    top: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottom: {
        flex: 8.5,
        backgroundColor: '#ececec',
        borderTopStartRadius: 100,
    },
    form: {
        flex: 8,
        justifyContent: 'center',
        paddingHorizontal: 30,
        rowGap: 25
    },
    footer: {
        flex: 3,
        justifyContent: 'center',
        paddingHorizontal: 30
    },
})