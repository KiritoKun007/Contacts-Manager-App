import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getContactByIdDetail } from '../../store/actions/contact'
import ContactDetail from '../../components/contacts/ContactDetail'

const ContactDetailScreen = (props) => {

    const contact = useSelector(state => state.contacts.contact)

    const dispatch = useDispatch()

    useEffect(() => {
        let id = props.route.params.id
        let fav = props.route.params.fav
        dispatch(getContactByIdDetail(id, fav))
    }, [])

    let contactDetail = (
        <View 
            style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '100%' }} >
            <Text style={{
                fontSize: 20
            }} >We Couldn't find this Contact in Phone.</Text>
        </View>
    )

    if(Object.keys(contact).length > 1) {
        console.log(contact)
        contactDetail = <ContactDetail contact={contact} />
    }

    return (
        <View>
            {contactDetail}
        </View>
    )
}

export default ContactDetailScreen
