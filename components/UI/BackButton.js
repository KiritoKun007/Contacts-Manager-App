import React from 'react'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'

const BackButton = ({ navigation }) => {

    const dispatch = useDispatch()

    return (
        <Icon
            type="font-awesome-5" 
            name="arrow-left"
            onPress={() => {
                dispatch({type: 'CLEAR_CONTACT'})
                navigation.goBack()
            }}
            containerStyle={{
                marginLeft: 10,
                padding: 20,
                borderRadius: 50
            }}
            underlayColor="#eee" />
    )
}

export default BackButton
