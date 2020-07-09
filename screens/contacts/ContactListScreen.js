import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ContactItem from '../../components/contacts/ContactItem'
import { getContacts } from '../../store/actions/contact'
import SearchContactBar from '../../components/UI/SearchContactBar'

const ContactListScreen = (props) => {
    const contacts = useSelector(state => state.contacts.contacts)
    let search = useSelector(state => state.contacts.searchText)
    const searchedContacts = useSelector(state => state.contacts.searchedContacts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContacts())                
    }, [])

    let list = null

    if(contacts) {
        if(search.length) {
            list = (
                <FlatList 
                    data={searchedContacts}
                    keyExtractor={item => item.recordID}
                    renderItem={({ item }) => (
                        <ContactItem 
                            name={item.displayName}
                            fav={item.favourite}
                            nav={props.navigation}
                            id={item.recordID}
                            changeFavourite={() => dispatch({
                                type: 'FAVOURITE_STAR',
                                id: item.recordID
                            })} />
                    )} />
            )
        } else {
            list = (
                <FlatList 
                    data={contacts}
                    keyExtractor={item => item.recordID}
                    renderItem={({ item }) => (
                        <ContactItem 
                            nav={props.navigation}
                            name={item.displayName}
                            fav={item.favourite}
                            id={item.recordID}
                            changeFavourite={() => dispatch({
                                type: 'FAVOURITE_STAR',
                                id: item.recordID
                            })} />
                    )} />
            )
        }
    }

    return (
        <View>
            <SearchContactBar screen="main" />
            {list}
        </View>
    )
}

export default ContactListScreen
