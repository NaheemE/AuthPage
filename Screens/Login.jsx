import { StyleSheet, View, Image, StatusBar, Text, Pressable, Alert, ScrollView, Dimensions, Button } from 'react-native'
import React, { useState } from 'react'
import logo from '../Assets/images/pngwing.com.png';
import Input from '../Components/Input';
import Btn from '../Components/Btn';
import { loginAPI } from '../Services/allAPI';


const Login = ({ navigation }) => {

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    })

    const handleLogin = async () => {
        const { email, password } = loginDetails
        if (!email || !password) {
            Alert.alert('Please fill the form completely!')
        }
        else {
            const response = await loginAPI(loginDetails)
            // console.log(response.data);
            if (response.status === 200) {
                Alert.alert('LoggedIn successfully')
                navigation.navigate('Homescreen')
            } else {
                Alert.alert('Something went wrong!')
            }
        }
    }

    const windowHeight = Dimensions.get('window').height;


    return (
        <ScrollView contentContainerStyle={{ height: windowHeight }} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor='black' />
            <View style={styles.container}>
                {/* Section 1 */}
                <View style={styles.top}>
                    <Image source={logo} style={{ height: 100, width: 100 }} />
                </View>
                {/* Section 2 */}
                <View style={styles.bottom}>
                    <Text style={{ color: 'black', marginTop: 30, fontSize: 40, alignSelf: 'center' }}>Login</Text>
                    {/* form */}
                    <View style={styles.form}>
                        {/* TextInputs */}
                        <Input value={loginDetails.email} onChangeText={(value) => { setLoginDetails({ ...loginDetails, email: value }) }}>Email</Input>
                        <Input value={loginDetails.password} onChangeText={(value) => { setLoginDetails({ ...loginDetails, password: value }) }} secureTextEntry>Password</Input>
                        {/* Button */}
                        <Btn onPress={handleLogin}>Login</Btn>
                        {/* <Button title='products' onPress={() => navigation.navigate('Homescreen')} /> */}
                    </View>
                    <View style={styles.footer}>
                        <Pressable onPress={() => navigation.navigate("Register")}>
                            <Text style={{ color: 'black', fontSize: 15 }}>Don't have any account? Sign Up</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    top: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom: {
        flex: 7,
        backgroundColor: '#ececec',
        borderTopStartRadius: 100,

    },
    form: {
        display: 'flex',
        rowGap: 30,
        padding: 30,
        marginTop: 40
    },
    footer: {
        backgroundColor: '#ececec',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        paddingBottom: 30
    }

})