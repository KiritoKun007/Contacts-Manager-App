import React from 'react'
import { FlatList, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ContactItem from '../../components/contacts/ContactItem'
import SearchContactBar from '../../components/UI/SearchContactBar'

const FavContactListScreen = (props) => {
    const contacts = useSelector(state => state.contacts.favouriteContacts)
    let search = useSelector(state => state.contacts.searchText)
    const searchedContacts = useSelector(state => state.contacts.searchedContacts)

    const dispatch = useDispatch()

    let list = null

    if(contacts) {
        if(search.length) {
            list = (
                <FlatList 
                    data={searchedContacts}
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
            <SearchContactBar screen="favourite" />
            {list}
        </View>
    )
}

export default FavContactListScreen
