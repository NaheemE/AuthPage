import { ScrollView, StyleSheet, Text, View, Dimensions, StatusBar, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'react-native-linear-gradient';
import PromoBanner from '../Assets/images/banner.png'
import FeatherIcons from 'react-native-vector-icons/Feather'
import FAIcons from 'react-native-vector-icons/FontAwesome6'
import CategoryBtn from '../Components/CategoryBtn';
import Card from '../Components/Card';


// const height = Dimensions.get('window').height
const sheight = Dimensions.get('screen').height

export default Products = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://api.sampleapis.com/coffee/hot')
            const data = await response.json()
            // console.log(data);
            setProducts(data)
            // console.log(typeof(products));
            // console.log(products);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <StatusBar translucent backgroundColor='transparent' />
            <ScrollView contentContainerStyle={styles.container}>
                {/* Top container */}
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#333333', '#222222', '#111111']}>
                    <View style={styles.top}>
                        <View style={styles.location}>
                            <View style={{ width: '80%', paddingTop: 5 }} >
                                <Text style={{ color: 'grey' }} >Location</Text>
                                <Text style={{ fontFamily: 'Sora-Medium', color: 'lightgrey' }}>Bilzen, Tanjungbalai</Text>
                            </View>
                            <Image src={'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} style={{ width: '15%', borderRadius: 15 }} />
                        </View>
                        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#555555', '#444444', '#444444']} style={{ borderRadius: 15 }}>
                            <View style={styles.search}>
                                <FeatherIcons name='search' color='lightgrey' size={30} />
                                <TextInput placeholderTextColor='grey' placeholder='Search coffee' style={{ flex: 1, marginHorizontal: 10 }} />
                                <FAIcons name='sliders' size={30} style={{ backgroundColor: '#c58b4e', color: 'white', padding: 10, borderRadius: 10 }} />
                            </View>
                        </LinearGradient>
                    </View>
                </LinearGradient>
                {/* Bottom container */}
                <View style={styles.bottom}>
                    {/* Categories */}
                    <View>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginLeft: 20 }}>
                            <CategoryBtn>Cappuccino</CategoryBtn>
                            <CategoryBtn>Machiato</CategoryBtn>
                            <CategoryBtn>Latte</CategoryBtn>
                            <CategoryBtn>Americano</CategoryBtn>
                        </ScrollView>
                    </View>
                    {/* Products */}
                    <View style={styles.cardContainer}>
                        {
                            products.map((item, index) => (
                                <Card details={item} key={index} />
                            ))
                        }

                    </View>
                </View>
                <Image source={PromoBanner} style={styles.banner} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: sheight,
        backgroundColor: '#fafafa'
    },
    top: {
        height: sheight * 0.35,
        paddingBottom: 50,
        display: 'flex',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    bottom: {
        minHeight: (sheight - (sheight * 0.3)),
        paddingTop: 60,
        paddingBottom: 30
    },
    banner: {
        position: 'absolute',
        alignSelf: 'center',
        top: 250,
        width: '90%',
        borderRadius: 10
    },
    location: {
        height: 60,
        marginBottom: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    search: {
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 5
    },
    cardContainer: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 20,
        flexWrap: 'wrap',
        rowGap: 20
    }
})