import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ContactListScreen from './contacts/ContactListScreen'
import NavigationButton from '../components/UI/NavigationButton'
import FavContactListScreen from './contacts/FavContactListScreen'
import ContactDetailScreen from './contacts/ContactDetailScreen'
import BackButton from '../components/UI/BackButton'

const Stack = createStackNavigator()

const StackScreen = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Contacts" >
                <Stack.Screen 
                    name="Contacts"
                    component={ContactListScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <NavigationButton nav={navigation} /> 
                        )
                    })} />
                <Stack.Screen 
                    name="Favourite"
                    component={FavContactListScreen}
                    options={{
                        title: 'Favourite Contacts'
                    }} />
                <Stack.Screen 
                    name="Detail"
                    component={ContactDetailScreen}
                    options={({ navigation }) => ({ 
                        title: '',
                        headerLeft: () => (
                            <BackButton 
                                navigation={navigation} />
                        ) })} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackScreen
