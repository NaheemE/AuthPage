import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Register from './Screens/Register';
import StartScreen from './Screens/StartScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader';


const Stack = createNativeStackNavigator();

export default function App() {

  const [isFirst, setIsFirst] = useState(null)

  const getData = async () => {
    const data = await AsyncStorage.getItem('isPressed')
    // console.log(typeof (data) + ' ' + data);
    setIsFirst(Boolean(data))
  }

  useEffect(() => {
    getData()
  }, [])

  if (isFirst === null) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          isFirst ? (<>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          </>) : (
            <>
              <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            </>
          )
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}
