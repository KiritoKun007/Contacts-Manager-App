import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DoubleTap from '../UI/DoubleTap';
import FontAwesomeIcon from '../UI/FontAwesomeIcon';

const ContactItem = (props) => {

    const navigateToDetail = () => {
        props.nav.navigate('Detail', { id: props.id, fav: props.fav })
    }

    return (
        <DoubleTap onDoubleTap={navigateToDetail}>
            <View style={styles.contactContainer} >
                <Text style={styles.name}>{props.name}</Text>
                {props.fav ? 
                    <FontAwesomeIcon type='solid' iconStyle={styles.icon} changeFavourite={props.changeFavourite} /> : 
                    <FontAwesomeIcon type='light' iconStyle={styles.icon} changeFavourite={props.changeFavourite} /> }
            </View>
        </DoubleTap>
    )
}

const styles = StyleSheet.create({
    contactContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderColor: 'red',
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 5        
    },
    name: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 13
    },
    icon: {
        fontSize: 18
    }
})

export default ContactItem
