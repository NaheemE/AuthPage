import { StyleSheet, Text, View, StatusBar, Pressable, Alert } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'
import React, { useState } from 'react'
import Input from '../Components/Input'
import Btn from '../Components/Btn'
import { registerAPI } from '../Services/allAPI'


export default Register = ({ navigation }) => {

    const [details, setDetails] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    })

    const handleInput = (key, value) => {
        setDetails({ ...details, [key]: value })
    }

    const handleRegister = async () => {
        const { name, email, phoneNumber, password, confirmPassword } = details
        if (!name || !email || !phoneNumber || !password || !confirmPassword) {
            Alert.alert('Please fill the form completely!')
        }
        else {
            const response = await registerAPI(details)
            // console.log(response.data);
            if (response.status === 200) {
                Alert.alert('Registered successfully')
                navigation.navigate('Login')
            } else {
                Alert.alert('Something went wrong!')
            }
        }

    }

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
                    <Input value={details.name} onChangeText={(value) => { handleInput('name', value) }}>Name</Input>
                    <Input value={details.email} onChangeText={(value) => { handleInput('email', value) }}>Email</Input>
                    <Input value={details.phoneNumber} onChangeText={(value) => { handleInput('phoneNumber', value) }}>Phone Number</Input>
                    <Input value={details.password} secureTextEntry onChangeText={(value) => { handleInput('password', value) }}>Password</Input>
                    <Input value={details.confirmPassword} secureTextEntry onChangeText={(value) => { handleInput('confirmPassword', value) }}>Confirm Password</Input>
                </View>
                {/* button */}
                <View style={styles.footer}>
                    <Btn onPress={handleRegister}>Sign Up</Btn>
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
        rowGap: 20
    },
    footer: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 30
    },
})