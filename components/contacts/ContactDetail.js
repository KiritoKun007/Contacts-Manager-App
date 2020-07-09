import React, { useState, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { Tile } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import ScrollContactDetail from '../UI/ScrollContactDetail'

const ContactDetail = ({ contact }) => {

    const [star, setstar] = useState(contact.favourite)

    const dispatch = useDispatch()

    useFocusEffect(
        useCallback(
            () => {
                setstar(contact.favourite)
            }, [])
    )

    let captionText = ''
    if(contact.company.length) {
        captionText = `${contact.company} (${contact.jobTitle})`
    }

    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <Tile 
                imageSrc={contact.hasThumbnail ? { uri: contact.thumbnailPath } : require("../../data/Assets/images/defaultContactBackground.jpg") }
                title={contact.displayName}
                featured
                caption={captionText}
                overlayContainerStyle={styles.imageStyle}
                imageContainerStyle={styles.imgConStyle}
                activeOpacity={0.8}
                icon={{
                    type: 'font-awesome-5', 
                    name: 'star', 
                    solid: star, 
                    onPress: () => {
                        setstar(prevStar => !prevStar)
                        dispatch({
                            type: 'FAVOURITE_STAR',
                            id: contact.recordID
                        })
                    },
                    iconStyle: { color: 'white' },
                    containerStyle: {   position: 'absolute',
                                        top: 10,
                                        left: 150 } }} />

            <ScrollContactDetail 
                mobileNos={contact.phoneNumbers}
                emails={contact.emailAddresses}
                addresses={contact.postalAddresses}
                birthday={contact.birthday} />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    imgConStyle: {
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.2)',
    },
    iconStyles: {
        position: 'absolute',
        top: 10,
        right: 10

    }
})

export default ContactDetail
