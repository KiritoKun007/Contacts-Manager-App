import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NavigationButton = (props) => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.4} onPress={() => props.nav.navigate('Favourite')} >
                <Image source={require('../../data/Assets/images/star-icon-19137.png')} style={styles.image}  />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        height: 100,
        width: 30,
        marginRight: 10
    }
})

export default NavigationButton
