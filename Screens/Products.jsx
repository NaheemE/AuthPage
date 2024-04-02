import { ScrollView, StyleSheet, Text, View, Dimensions, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'react-native-linear-gradient';
import PromoBanner from '../Assets/images/banner.png'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'


// const height = Dimensions.get('window').height
const sheight = Dimensions.get('screen').height

export default Products = () => {

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
                            <Image src={'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} style={{ width: '15%', borderRadius: 20 }} />
                        </View>
                        <View style={styles.search}></View>
                    </View>
                </LinearGradient>
                {/* Bottom container */}
                <View style={styles.bottom}>
                    <Text style={{ fontSize: 30 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, cumque? Atque eos ab excepturi iste officiis voluptatum sapiente similique cumque totam nobis unde, ratione animi magni id corporis molestiae neque!
                        Eos iusto beatae possimus saepe amet perspiciatis suscipit, porro, ipsum rem sed tempore dolorem ea laborum totam vel quo culpa odit inventore autem qui dicta natus. Error iusto similique neque.
                        Iste, numquam voluptatum consequuntur illum ducimus perspiciatis illo mollitia facere inventore fugiat sed, et impedit dicta rerum nihil distinctio? Ab repellat impedit nulla vero tenetur rem adipisci ducimus accusantium. Nam?
                    </Text>
                </View>
                <Image source={PromoBanner} style={styles.banner} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: sheight,
    },
    top: {
        height: sheight * 0.35,
        // paddingTop: 50,
        display: 'flex',
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    bottom: {
        borderColor: 'blue',
        borderWidth: 2,
        minHeight: (sheight - (sheight * 0.3)),
        paddingTop: 90
    },
    banner: {
        position: 'absolute',
        alignSelf: 'center',
        top: '17%'
    },
    location: {
        height: 60,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    search: {
        height: 60,
        borderWidth: 2,
        borderColor: 'green',
        marginBottom: 0
    }

})