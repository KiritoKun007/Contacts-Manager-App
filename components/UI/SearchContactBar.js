import React, { useState, useRef, useCallback } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

const SearchContactBar = ({ screen }) =>{

    const [searchText, setsearchText] = useState('')

    const searchInputBox = useRef(null)

    const dispatch = useDispatch()

    useFocusEffect(
        useCallback(() => {
            searchInputBox.current.clear()

            return () => {
                searchInputBox.current.clear()
            }
        }, [])
    )

    const clearSearchBar = () => {
        searchInputBox.current.clear()
        dispatch({
            type: 'SEARCH_CONTACT',
            payload: {
                screen: screen,
                text: ''
            }
        })
    }

    const filterFunc = (text) => {
        if(text === '')(
            searchInputBox.current.blur()
        )
        setsearchText(text)
        dispatch({
            type: 'SEARCH_CONTACT',
            payload: {
                screen: screen,
                text: searchText
            }
        })
    }

    return (
        <View style={styles.searchBarContainer}>
            <Icon 
                type="font-awesome-5"
                name="search"
                solid
                size={14} />
            <TextInput 
                ref={searchInputBox}
                onChangeText={text => filterFunc(text)}
                placeholder="Search Contacts..."
                style={styles.input}
                value={searchText} />
            <Icon 
                type="font-awesome-5"
                name="times"
                solid
                size={14}
                onPress={clearSearchBar} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 10,   
        paddingHorizontal: 20,
        backgroundColor: '#ddd',
        borderRadius: 50
    },
    input: {
        width: '85%'
    }
})

export default SearchContactBar
