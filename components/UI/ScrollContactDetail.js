import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { ListItem } from 'react-native-elements'

const ScrollContactDetail = (props) => {
    return (
        <ScrollView style={{
                backgroundColor: 'white',
                padding: 20,
                position: 'relative',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                minHeight: 400,
                width: '100%'
            }} >
            {props.mobileNos.map((number) => (
                <ListItem 
                    key={number.id}
                    title={number.number}
                    subtitle={number.label} />
            ))}
            {props.emails.map((email) => (
                <ListItem 
                    key={email.id}
                    title={email.email}
                    subtitle={email.label} />
            ))}
            {props.addresses.map((address) => (
                <ListItem 
                    key={address.street}
                    title={address.formattedAddress}
                    subtitle={address.label} />
            ))}
            {
                props.birthday ? (
                    <View style={{
                        padding: 15,
                        marginBottom: 20
                    }}>
                        <Text>{props.birthday.day}/{props.birthday.month}/{props.birthday.year}</Text>
                        <Text style={{
                            fontSize: 13,
                            color: '#aaa'
                        }}>Birthday</Text>
                    </View>
                ) : (<View></View>)
            }
        </ScrollView>
    )
}

export default ScrollContactDetail
